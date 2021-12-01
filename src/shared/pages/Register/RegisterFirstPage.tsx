import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormHelperText,
    Link,
    TextField,
    Typography,
    Grid,
    Snackbar,
    Divider,
    Alert
} from '@material-ui/core';
import GoogleIcon from '../../icons/Google';
import { useAuth } from '../../contexts/AuthContext';
import useMounted from '../hooks/useMounted';
import { useDispatch } from 'react-redux';
import {saveUserName} from '../../store/constants/action-types';

const RegisterFirstPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [alert, setAlert] = useState(false);
    const [error, setError] = useState('');
    
    const {register, signinWithGoogle} = useAuth();
    const mounted = useMounted();

    const handleSubmit = (email, firstName, lastName) => {
        dispatch({type:saveUserName, firstName, lastName, email});
        history.push('/register2', { replace: true });
    }

    const handleSubmitWithGoogle = (email, firstName, lastName) => {
        dispatch({type:saveUserName, firstName, lastName, email});
        history.push('/register2', { replace: true });
    }


    return (
        <>
            <Helmet>
                <title>WeCare - Register</title>
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
            
                <Container maxWidth="sm" style={{ marginTop: '50px' }}>
                    <div style={{marginTop:"20px", marginBottom:"50px"}}>
                        {alert ?  
                            <Alert severity="error">{error}</Alert>
                        : <></> }
                    </div>
                    <Formik
                        initialValues={{
                            email: '',
                            firstName: '',
                            lastName: '',
                            password: '',
                            isSubmitting: false
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string()
                                .email('Must be a valid email')
                                .max(255)
                                .required('Email is required'),
                            firstName: Yup.string().max(255).required('First name is required'),
                            lastName: Yup.string().max(255).required('Last name is required'),
                            password: Yup.string().max(255).required('password is required'),
                        })}
                        onSubmit={(values) => {
                            console.log(values);
                            values.isSubmitting = true;
                            register(values.email, values.password)
                                .then((response) => {
                                    console.log(response);
                                    handleSubmit(values.email, values.firstName, values.lastName);
                                })
                                .catch((error) => {
                                    //console.log(error.message);
                                    setAlert(true);
                                    setError(error.message);
                                   
                                })
                                .finally(() => {
                                    mounted.current && (values.isSubmitting = false);
                                })
                            //history.push('/register2', { replace: true });
                        }}
                    >
                        {({
                            errors,
                            handleBlur,
                            handleChange,
                            handleSubmit,
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
                                        Create new account
                                    </Typography>
                                    <Typography color="textSecondary" gutterBottom variant="body2">
                                        Use your email to create new account
                                    </Typography>
                                </Box>
                                <TextField
                                    error={Boolean(touched.firstName && errors.firstName)}
                                    fullWidth
                                    helperText={touched.firstName && errors.firstName}
                                    label="First name"
                                    margin="normal"
                                    name="firstName"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.firstName}
                                    variant="outlined"
                                />
                                <TextField
                                    error={Boolean(touched.lastName && errors.lastName)}
                                    fullWidth
                                    helperText={touched.lastName && errors.lastName}
                                    label="Last name"
                                    margin="normal"
                                    name="lastName"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.lastName}
                                    variant="outlined"
                                />
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
                                <Box
                                    sx={{
                                        alignItems: 'center',
                                        display: 'flex',
                                        ml: -1,
                                    }}
                                >
                                    {/* <Checkbox
                                        checked={values.policy}
                                        name="policy"
                                        onChange={handleChange}
                                    />
                                    <Typography color="textSecondary" variant="body1">
                                        I have read the{' '}
                                        <Link
                                            color="primary"
                                            component={RouterLink}
                                            to="#"
                                            underline="always"
                                            variant="h6"
                                        >
                                            Terms and Conditions
                                        </Link>
                                    </Typography> */}
                                </Box>
                                {/* {Boolean(touched.policy && errors.policy) && (
                                    <FormHelperText error>{errors.policy}</FormHelperText>
                                )} */}
                                <Box sx={{ py: 2 }}>
                                    <Button
                                        color="primary"
                                        disabled={values.isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                    >
                                        Next
                                    </Button>
                                </Box>
                                <Typography color="textSecondary" variant="body1">
                                    Have an account?{' '}
                                    <Link
                                        component={RouterLink}
                                        to="/login"
                                        variant="h6"
                                        underline="hover"
                                    >
                                        Sign in
                                    </Link>
                                </Typography>
                                <Divider>
                                              <Typography
                                        align="center"
                                        color="textSecondary"
                                        variant="body1"
                                    >
                                        or signup with social platform
                                    </Typography>
                                </Divider>
                                {/* <Box
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
                                        or signup with social platform
                                    </Typography>
                                </Box> */}
                                {/* <Grid
                                    container
                                    spacing={3}
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Grid item xs={12} md={6}> */}
                                    <Box
                                    sx={{
                                        pb: 1,
                                        pt: 3,
                                    }}
                                    >
                                        <Button
                                            fullWidth
                                            startIcon={<GoogleIcon />}
                                            onClick={() => 
                                                signinWithGoogle()
                                                .then((user:any) => {
                                                    // console.log(user._tokenResponse.lastName);
                                                    handleSubmitWithGoogle(user.user.email, user._tokenResponse.firstName, user._tokenResponse.lastName);
                                                    // history.push('/register2');
                                                })
                                                .catch(error =>  {console.log(error)})
                                                }
                                            size="large"
                                            variant="contained"
                                        >
                                            Login with Google
                                        </Button>
                                    </Box>
                                    {/* </Grid>
                                </Grid> */}
                            </form>
                        )}
                    </Formik>
                </Container>
            </Box>
        </>
    );
};

export default RegisterFirstPage;
