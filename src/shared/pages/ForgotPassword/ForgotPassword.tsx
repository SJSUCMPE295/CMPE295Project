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
    Divider,
} from '@material-ui/core';
import GoogleIcon from '../../icons/Google';
import { useAuth } from 'contexts/AuthContext';
import useMounted from '../hooks/useMounted';

const ForgotPassword = () => {
    const history = useHistory();
    const location = useLocation();
    const [errorAlert, setErrorAlert] = useState(false);
    const [successAlert, setSuccessAlert] = useState(false);
    const [message, setMessage] = useState('');
    const { forgotPassword } = useAuth();
    const mounted = useMounted();

    return (
        <>
            <Helmet>
                <title>WeCare - ForgotPassword</title>
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
                    {errorAlert ? (
                        <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                            <Alert severity="error">{message}</Alert>
                        </div>
                    ) : (
                        <></>
                    )}
                    {successAlert ? (
                        <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                            <Alert severity="success">{message}</Alert>
                        </div>
                    ) : (
                        <></>
                    )}
                    <Formik
                        initialValues={{
                            email: '',
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string()
                                .email('Must be a valid email')
                                .max(255)
                                .required('Email is required'),
                        })}
                        onSubmit={(values) => {
                            forgotPassword(values.email)
                                .then((response) => {
                                    console.log(response);
                                    setSuccessAlert(true);
                                    setErrorAlert(false);
                                    setMessage('Email has been sent to reset the password');
                                })
                                .catch((error) => {
                                    console.log(error);
                                    setErrorAlert(true);
                                    setSuccessAlert(false);
                                    setMessage(error.message);
                                });
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
                                        Forgot Password
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
                                <Box sx={{ py: 2 }}>
                                    <Button
                                        color="primary"
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                    >
                                        Submit
                                    </Button>
                                </Box>
                                <Divider>
                                    <Typography
                                        align="center"
                                        color="textSecondary"
                                        variant="body2"
                                    >
                                        OR
                                    </Typography>
                                </Divider>
                                <div style={{ marginLeft: '260px', marginTop: '10px' }}>
                                    <Typography
                                        color="textSecondary"
                                        variant="body1"
                                        alignItems="center"
                                    >
                                        <Link
                                            component={RouterLink}
                                            to="/login"
                                            variant="h5"
                                            underline="hover"
                                        >
                                            Login
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

export default ForgotPassword;
