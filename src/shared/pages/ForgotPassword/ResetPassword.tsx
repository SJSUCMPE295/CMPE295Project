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

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const ResetPassword = () => {
    const history = useHistory();
    const [errorAlert, setErrorAlert] = useState(false);
    const [successAlert, setSuccessAlert] = useState(false);
    const [message, setMessage] = useState('');
    const { resetPassword } = useAuth();
    const mounted = useMounted();
    const query = useQuery();
    return (
        <>
            <Helmet>
                <title>WeCare - ResetPassword</title>
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
                            password: '',
                        }}
                        validationSchema={Yup.object().shape({
                            password: Yup.string().max(255).required('Password is required'),
                        })}
                        onSubmit={(values) => {
                            resetPassword(query.get('oobCode'), values.password)
                                .then((response) => {
                                    console.log(response);
                                    setSuccessAlert(true);
                                    setErrorAlert(false);
                                    setMessage('Password Changed Sucessfully');
                                    history.push('/login', { replace: true });
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
                                        Reset Password
                                    </Typography>
                                </Box>
                                <TextField
                                    error={Boolean(touched.password && errors.password)}
                                    fullWidth
                                    helperText={touched.password && errors.password}
                                    label="New Password"
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
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                    >
                                        Reset Password
                                    </Button>
                                </Box>
                            </form>
                        )}
                    </Formik>
                </Container>
            </Box>
        </>
    );
};

export default ResetPassword;
