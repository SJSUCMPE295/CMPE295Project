import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';
import serverUrl from '../../utils/config';
import countries from 'i18n-iso-countries';
import { connect } from 'react-redux';
// import './Register.css';
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
    FormControlLabel,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { createUserProfile, saveUserName } from '../../store/constants/action-types';
// import {storage} from '../../utils/firebase';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
// import RootState from '../../store/rootReducer';

const RegisterThruLogin = ({userProfileReducer}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
    const countryObj = countries.getNames('en', { select: 'official' });
    const countryArray = Object.entries(countryObj).map(([key, value]) => {
        return {
            label: key,
            value: value,
        };
    });
    const [user, setUser] = React.useState(userProfileReducer.email);
    const genderOptions = [
        {
            key: 1,
            value: 'Female',
        },
        {
            key: 2,
            value: 'Male',
        },
        {
            key: 3,
            value: 'Do not want to specify',
        },
    ];
    var [checked, setChecked] = React.useState(false);
    const handleSubmit = (values) => {
        console.log('inside submit');
        console.log('first page data', user);
        const isDoctor = checked;
        const payload = {
            userName: user,
            firstName: values.firstName,
            lastName: values.lastName,
            userMetaData: {
                isDoctor: checked,
                gender: values.gender,
                appNotifications: true,
                emailNotifications: true,
                phoneCalls: true,
            },
            profile: {
                phoneNumber: values.phonenumber,
                profileActive: true,
                profilePic: '',
            },
            address: {
                location: values.address1,
                city: values.city,
                state: values.state,
                country: values.country,
                zipCode: values.zipcode,
            },
        };
        console.log("payload", payload);
        const token = localStorage.getItem('token');
        // set the with credentials to true
          axios.defaults.withCredentials = true;
          // make a post request with the user data
          axios.post(serverUrl + 'signup/user', payload, {
            headers : {
                authtoken: token
            }
        }).then(
            (response) => {
                console.log('axios call', response);
                if (response.status === 200) {
                    console.log('updated successfully');
                    dispatch({
                        type: saveUserName,
                        firstName: response.data.data.firstName,
                        lastName: response.data.data.lastName,
                        userName: response.data.data.userName,
                    });
                    dispatch({
                        type: createUserProfile,
                        id: response.data.data._id,
                        userMetaData: response.data.data.userMetaData,
                        profile: response.data.data.profile,
                        address: response.data.data.address,
                    });
                    history.push('app/dashboard', { replace: true });
                }
            },
            (error) => {
                console.log('register error');
                //   this.setState({
                //     errorMessage: error.response.data,
                //     signupFailed: true,
                //   });
            }
        );
    };

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
                <Container maxWidth="sm" style={{ marginTop: '100px' }}>
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            address1: '',
                            city: '',
                            state: '',
                            zipcode: '',
                            phonenumber: '',
                            gender: '',
                            country: '',
                            isSubmitting: false,
                        }}
                        validationSchema={Yup.object().shape({
                            firstName: Yup.string().max(255).required('First Name is required'),
                            lastName: Yup.string().max(255).required('Last Name is required'),
                            address1: Yup.string().max(255).required('Address is required'),
                            city: Yup.string().max(255).required('City is required'),
                            country: Yup.string().max(255).required('Country is required'),
                            state: Yup.string().max(255).required('State is required'),
                            zipcode: Yup.string().required('ZipCode is required')
                                .matches(/^[0-9]+$/, "Must be a number")
                                .min(5, "Must be exactly 5 digits")
                                .max(5, "Must be exactly 5 digits"),
                            gender: Yup.string().max(255),
                            phonenumber: Yup.string().required('Phone Number is required')
                                .matches(/^[0-9]+$/, "Must be a number")
                                .min(10, "Must be exactly 10 digits")
                                .max(10, "Must be exactly 10 digits")
                        })}
                        onSubmit={(values) => {
                            console.log('insde submit', values);
                            values.isSubmitting = true;
                            handleSubmit(values);
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
                                        New User! Complete the Registration
                                    </Typography>
                                </Box>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <TextField
                                        error={Boolean(touched.firstName && errors.firstName)}
                                        helperText={touched.firstName && errors.firstName}
                                        label="First Name"
                                        margin="normal"
                                        name="firstName"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.firstName}
                                        variant="outlined"
                                        style={{
                                            width: '250px',
                                        }}
                                    />
                                    <TextField
                                        error={Boolean(touched.lastName && errors.lastName)}
                                        helperText={touched.lastName && errors.lastName}
                                        label="Last Name"
                                        margin="normal"
                                        name="lastName"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.lastName}
                                        variant="outlined"
                                        style={{
                                            width: '250px',
                                        }}
                                    />
                                </div>
                                <div>
                                    <FormControlLabel
                                        label="I am a Doctor"
                                        control={
                                            <Checkbox
                                                checked={checked}
                                                onChange={() => {
                                                    setChecked(!checked);
                                                }}
                                            />
                                        }
                                    />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <div
                                        style={{
                                            width: '250px',
                                        }}
                                    >
                                        <TextField
                                            error={Boolean(touched.gender && errors.gender)}
                                            helperText={touched.gender && errors.gender}
                                            label="Gender"
                                            select
                                            margin="normal"
                                            name="gender"
                                            onBlur={handleBlur}
                                            onChange={handleChange('gender')}
                                            value={values.gender}
                                            variant="outlined"
                                            fullWidth
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {genderOptions.map((state) => (
                                                <MenuItem key={state.key} value={state.value}>
                                                    {state.value}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <TextField
                                        error={Boolean(touched.phonenumber && errors.phonenumber)}
                                        helperText={touched.phonenumber && errors.phonenumber}
                                        label="Phone Number"
                                        margin="normal"
                                        name="phonenumber"
                                        style={{
                                            width: '250px',
                                            height: '60px',
                                        }}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.phonenumber}
                                        variant="outlined"
                                    />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <TextField
                                        error={Boolean(touched.address1 && errors.address1)}
                                        helperText={touched.address1 && errors.address1}
                                        label="Address"
                                        margin="normal"
                                        name="address1"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.address1}
                                        variant="outlined"
                                        fullWidth
                                    />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <TextField
                                        error={Boolean(touched.city && errors.city)}
                                        helperText={touched.city && errors.city}
                                        label="City"
                                        margin="normal"
                                        name="city"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.city}
                                        variant="outlined"
                                        style={{
                                            width: '250px',
                                        }}
                                    />
                                    <div style={{ width: '250px' }}>
                                        <TextField
                                            error={Boolean(touched.country && errors.country)}
                                            helperText={touched.country && errors.country}
                                            label="Country"
                                            select
                                            margin="normal"
                                            name="country"
                                            onBlur={handleBlur}
                                            onChange={handleChange('country')}
                                            value={values.country}
                                            variant="outlined"
                                            fullWidth
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {countryArray.map((state) => (
                                                <MenuItem key={state.label} value={state.value}>
                                                    {state.value}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <TextField
                                        error={Boolean(touched.state && errors.state)}
                                        helperText={touched.state && errors.state}
                                        label="State"
                                        margin="normal"
                                        name="state"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.state}
                                        variant="outlined"
                                        style={{
                                            width: '250px',
                                        }}
                                    />
                                    <TextField
                                        error={Boolean(touched.zipcode && errors.zipcode)}
                                        helperText={touched.zipcode && errors.zipcode}
                                        label="Zipcode"
                                        margin="normal"
                                        name="zipcode"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.zipcode}
                                        variant="outlined"
                                        style={{
                                            width: '250px',
                                        }}
                                    />
                                </div>
                                <Box sx={{ py: 2, alignItems: 'center', display: 'flex', ml: 5 }}>
                                    <Button
                                        color="primary"
                                        disabled={values.isSubmitting}
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        style={{ width: '475px' }}
                                        // onClick={()=>handleSubmit}
                                        // onClick={()=>{history.push('app/dashboard', { replace: true })}}
                                    >
                                        Create
                                    </Button>
                                </Box>
                                <Typography
                                    color="textSecondary"
                                    variant="body1"
                                    style={{ marginLeft: '40px' }}
                                >
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
                            </form>
                        )}
                    </Formik>
                </Container>
            </Box>
        </>
    );
};
const mapStateToProps = ({ userProfileReducer }) => ({
    userProfileReducer,
});

const mapDispatchToProps = {};

const ConnectedRegisterThruLoginDetails = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterThruLogin);
export default ConnectedRegisterThruLoginDetails;
