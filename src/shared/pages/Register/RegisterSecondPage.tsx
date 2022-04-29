import * as React from 'react';
import { useState } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';
import serverUrl from '../../utils/config';
import countries from 'i18n-iso-countries';
import './Register.css';
import {
    Box,
    Button,
    Checkbox,
    Container,
    Link,
    TextField,
    Typography,
    FormControlLabel,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { createUserProfile, saveUserName } from '../../store/constants/action-types';
// import {storage} from '../../utils/firebase';
// import { getStorage, ref, uploadBytes } from 'firebase/storage';

const RegisterSecondPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [user, setUser] = React.useState(useSelector((state: any) => state.userProfileReducer.userName));
    countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
    const countryObj = countries.getNames("en",{select:"official"});
    const countryArray = Object.entries(countryObj).map(([key, value]) =>{
        return {
            label: key,
            value: value,
        };
    });
    const genderOptions = ['Female', 'Male', 'Do not want to specify'];

    // const [fileUploadTitle, setFileUploadTitle] = React.useState('Upload License');
    var [checked, setChecked] = React.useState(false);
    const [speciality, setSpeciality] = React.useState('');
   
    const handleSubmit = (address1, city, zipCode, phoneNumber, state, gender, country) => {
        const payload = {
            userName: user,
            userMetaData: {
                isDoctor: checked,
                gender: gender,
            },
            profile: {
                phoneNumber: phoneNumber,
                profileActive: true,
                profilePic: '',
            },
            address: {
                location: address1,
                city: city,
                state: state,
                country: country,
                zipCode: zipCode,
            },
        };
        console.log('payload', payload);
        // set the with credentials to true
        const token = localStorage.getItem('token');
        axios.defaults.withCredentials = true;
        // make a post request with the user data
        axios.post(serverUrl + 'signup/user/register', payload, {
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
                            address1: '',
                            city: '',
                            zipcode: '',
                            phonenumber: '',
                            state: '',
                            gender: '',
                            country: '',
                            isSubmitting: false,
                        }}
                        validationSchema={Yup.object().shape({
                            address1: Yup.string().max(255).required('Address is required'),
                            city: Yup.string().max(255).required('City is required'),
                            country: Yup.string().max(255).required('Country is required'),
                            state: Yup.string().max(255).required('State is required'),
                            zipcode: Yup.string().max(255).required('Zipcode is required'),
                            gender: Yup.string().max(255).required('Gender is required'),
                            phonenumber: Yup.string().test(
                                'len',
                                'Phone Number should be 10 digits',
                                (val) => val.length === 10
                            ),
                        })}
                        onSubmit={(values) => {
                            values.isSubmitting = true;
                            handleSubmit(
                                values.address1,
                                values.city,
                                values.zipcode,
                                values.phonenumber,
                                values.state,
                                values.gender,
                                values.country
                            );
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
                                        Create new account
                                    </Typography>
                                </Box>
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
                                <div style={{  display: 'flex', justifyContent: 'flex-start' }}>
                                    <div style={{
                                            width:"250px"
                                        }}>
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
                                            required
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {genderOptions.map((state) => (
                                                <MenuItem value={state}>{state}</MenuItem>
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
                                        type="number"
                                        // onInput={(e)=>{
                                        //     e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
                                        // }}
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
                                        required
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
                                        required
                                        style={{
                                            width: '250px',
                                        }}
                                    />
                                    <div
                                        style={{
                                            width: '250px',
                                        }}
                                    >
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
                                            required
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {countryArray.map((state) => (
                                                <MenuItem value={state.value}>
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
                                        required
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
                                        required
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

export default RegisterSecondPage;
