import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Link as RouterLink, useHistory, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
    Box,
    Button,
    Container,
    Grid,
    Link,
    TextField,
    Typography,
    Alert,
} from '@material-ui/core';
import GoogleIcon from '../../icons/Google';
import { useAuth } from 'contexts/AuthContext';
import useMounted from '../hooks/useMounted';
import { useDispatch } from 'react-redux';
import {loginAction, createUserProfile, saveUserName} from '../../store/constants/action-types';
import axios from 'axios';
import serverUrl from '../../utils/config';

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const [alert, setAlert] = useState(false);
    const [error, setError] = useState('');
    const { login, signinWithGoogle } = useAuth();
    const mounted = useMounted();
    const handleSubmit = (email, token) => {
        dispatch({type:loginAction, email});
        apiCall(email, token);
    }

    const handleSubmitWithGoogle = (email, token) => {
        dispatch({type:loginAction, email});
        apiCall(email, token);
    }

    const apiCall = (email, token) => {
        const payload = {
            userName: email,
            token: token
        };
        axios.defaults.withCredentials = true;
          // make a post request with the user data
          axios.post(serverUrl + 'login', payload).then(
            (response) => {
                console.log("axios call", response);
                if(response.data.status === 401) {
                    //redirect to register page
                    history.push('/login2register', { replace: true });
                  }
              if (response.status === 200) {
                  console.log("login successful", response.data.user);
                dispatch({
                    type: saveUserName,
                    firstName: response.data.user.firstName,
                    lastName: response.data.user.lastName,
                    email: response.data.user.userName,
                });
                dispatch({
                    type: createUserProfile,
                    userMetaData: response.data.user.userMetaData,
                      profile: response.data.user.profile,
                      address: response.data.user.address,
                });
                  history.push('app/dashboard', { replace: true });
              }
            },
            (error) => {
                console.log("login error", error);
                
            }
          );
    }
    return (
        <>
            <Helmet>
                <title>WeCare - Login</title>
            </Helmet>

            <Box
                sx={{
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'center',
                }}
            >
                <Container maxWidth="sm" style={{ marginTop: '70px' }}>
                    {/* <Paper elevation={0}>
                    <img src={image} height="100" style={{marginLeft:"400"}}/>
                </Paper> */}
                    <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                        {alert ? <Alert severity="error">{error}</Alert> : <></>}
                    </div>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                            isSubmitting: false,
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string()
                                .email('Must be a valid email')
                                .max(255)
                                .required('Email is required'),
                            password: Yup.string().max(255).required('Password is required'),
                        })}
                        onSubmit={(values) => {
                            console.log(values);
                            values.isSubmitting = true;
                            setAlert(false);
                            login(values.email, values.password)
                                .then((response:any) => {
                                    console.log(response.user);
                                    handleSubmit(values.email, response.user.accessToken);
                                })
                                .catch((error) => {
                                    //console.log(error.message);
                                    setAlert(true);
                                    values.isSubmitting = false;
                                    switch (error.code) {
                                        case "auth/wrong-password" : {
                                            setError("Invalid password");
                                            break;
                                        }
                                        case "auth/user-not-found" : {
                                            setError("Username does not exists");
                                            break;
                                        }
                                    }
                                    // setError(error.message);
                                   
                                })
                                .finally(() => {
                                    mounted.current && (values.isSubmitting = false);
                                });
                            // history.push('/app/dashboard', { replace: true });
                        }}
                    >
                        {({
                            errors,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            isSubmitting,
                            touched,
                            values,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <Box
                                    sx={{ mb: 3 }}
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    justifyContent="center"
                                >   
                                    <Typography color="textPrimary" variant="h2">
                                        Sign in
                                    </Typography>
                                    <Typography
                                        color="textSecondary"
                                        gutterBottom
                                        variant="body2"
                                        style={{ marginTop: '5px' }}
                                    >
                                        Sign in on the WeCare platform using Social
                                    </Typography>
                                </Box>
                                {/* <Grid
                                    container
                                    spacing={3}
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    justifyContent="center"
                                > */}
                                {/* <Grid item xs={12} md={6}> */}
                                <Box>
                                    <Button
                                        fullWidth
                                        startIcon={<GoogleIcon />}
                                        onClick={() =>
                                            signinWithGoogle()
                                                .then((user: any) => {
                                                    console.log(user);
                                                    handleSubmitWithGoogle(user.user.email, user._tokenResponse.idtoken);
                                                    // history.push(location.state?.from ?? '/app/dashboard', { replace: true });
                                                })
                                                .catch((error) => {
                                                    console.log(error);
                                                })
                                        }
                                        size="large"
                                        variant="contained"
                                    >
                                        Login with Google
                                    </Button>
                                </Box>
                                {/* </Grid>
                                </Grid> */}
                                <Box
                                    sx={{
                                        pb: 1,
                                        pt: 3,
                                    }}
                                >
                                    <Typography
                                        align="center"
                                        color="textSecondary"
                                        variant="body1"
                                    >
                                        or login with email address
                                    </Typography>
                                </Box>
                                <TextField
                                    error={Boolean(touched.email && errors.email)}
                                    fullWidth
                                    helperText={touched.email && errors.email}
                                    label="Email Address"
                                    margin="normal"
                                    name="email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="email"
                                    value={values.email}
                                    variant="outlined"
                                />
                                <TextField
                                    error={Boolean(touched.password && errors.password)}
                                    fullWidth
                                    helperText={touched.password && errors.password}
                                    label="Password"
                                    margin="normal"
                                    name="password"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="password"
                                    value={values.password}
                                    variant="outlined"
                                />
                                <Box sx={{ py: 2 }}>
                                    <Button
                                        color="primary"
                                        disabled={values.isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                    >
                                        Sign in now
                                    </Button>
                                </Box>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography color="textSecondary" variant="body1">
                                        <Link
                                            component={RouterLink}
                                            to="/forgot-password"
                                            variant="h6"
                                            underline="hover"
                                        >
                                            Forgot Password?
                                        </Link>
                                    </Typography>
                                    <Typography color="textSecondary" variant="body1">
                                        Don&apos;t have an account?{' '}
                                        <Link
                                            component={RouterLink}
                                            to="/register1"
                                            variant="h6"
                                            underline="hover"
                                        >
                                            Sign up
                                        </Link>
                                    </Typography>
                                </div>
                            </form>
                        )}
                    </Formik>
                </Container>
            </Box>
        </>
    );
};

export default Login;
