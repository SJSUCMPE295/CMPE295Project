import * as React from 'react';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField,
} from '@material-ui/core';
import countries from 'i18n-iso-countries';
import { connect } from 'react-redux';
import axios from 'axios';
import serverUrl from '../../utils/config';
import { useDispatch } from 'react-redux';
import { createUserProfile, saveUserName } from '../../store/constants/action-types';

const AccountProfileDetails = ({ userProfileReducer, ...props }) => {
    const [values, setValues] = React.useState({
        firstName: userProfileReducer.firstName,
        lastName: userProfileReducer.lastName,
        userName: userProfileReducer.userName,
        // phone: userProfileReducer?.profile?.phoneNumber,
        address: userProfileReducer?.address?.location,
        // zipcode: userProfileReducer?.address?.zipCode,
        city: userProfileReducer?.address?.city,
        state: userProfileReducer?.address?.state,
        country: userProfileReducer?.address?.country,
        userMetaData: userProfileReducer.userMetaData,
        profileActive: userProfileReducer?.profile?.profileActive,
        profilePic: userProfileReducer?.profile?.profilePic,
    });
    console.log('Values', values);
    const dispatch = useDispatch();
    const [saveMsg, setSaveMsg] = useState('');
    const [phone, setPhone] = useState(userProfileReducer?.profile?.phoneNumber)
    const [phoneNumbeErr, setPhoneNumberErr] = useState(false);
    const [phoneNumbeErrMsg, setPhoneNumberErrMsg] = useState('');
    const [zipcode, setZipcode] = useState(userProfileReducer?.address?.zipCode)
    const [zipcodeErr, setZipcodeErr] = useState(false);
    const [zipcodeErrMsg, setZipcodeErrMsg] = useState('');
    countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
    const countryObj = countries.getNames('en', { select: 'official' });
    const countryArray = Object.entries(countryObj).map(([key, value]) => {
        return {
            label: key,
            value: value,
        };
    });
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const validation = () => {
        console.log('phone length', phone.toString().length);
        if(phone.toString().length != 10) {
            setPhoneNumberErr(true);
            setPhoneNumberErrMsg('Phone Number should be 10 digits');
            return false;
        } else if(zipcode.toString().length != 5){
            setZipcodeErr(true);
            setZipcodeErrMsg('ZipCode should be 5 digits');
            return false;
        }
        else {
            return true;
        }
    }
    const handleChangePhone = (event) => {
        setPhoneNumberErr(false);
        setPhoneNumberErrMsg('');
        setPhone(event.target.value);
    };

    const handleChangeZipcode = (event) => {
        setZipcodeErr(false);
        setZipcodeErrMsg('');
        setZipcode(event.target.value);
    };

    const handleSave = () => {
        const isValid = validation();
        if(isValid) {
        const payload = {
            userName: values.userName,
            firstName: values.firstName,
            lastName: values.lastName,
            userMetaData: values.userMetaData,
            profile: {
                phoneNumber: phone,
                profileActive: values?.profileActive,
                profilePic: values?.profilePic,
            },
            address: {
                location: values.address,
                city: values.city,
                state: values.state,
                country: values.country,
                zipCode: zipcode,
            },
        };
        const token = localStorage.getItem('token');
           // set the with credentials to true
           axios.defaults.withCredentials = true;
           // make a post request with the user data
           axios.post(serverUrl + 'user/profileUpdate', payload,  {
            headers : {
                authtoken: token
            }
            }).then(
               (response) => {
                   console.log("axios call", response);
               if (response.status === 200) {
                   console.log("updated successfully");
                   dispatch({
                       type: saveUserName,
                       firstName: response.data.data.firstName,
                       lastName: response.data.data.lastName,
                       userName: response.data.data.userName,
                   });
                   dispatch({
                       type: createUserProfile,
                       userMetaData: response.data.data.userMetaData,
                       profile: response.data.data?.profile,
                       address: response.data.data.address,
                   });
                   setSaveMsg("Yes");
               }
               if(response.status === 401) {
                setSaveMsg("No");
               }
            },
            (error) => {
                console.log('register error');
                setSaveMsg('No');
                //   this.setState({
                //     errorMessage: error.response.data,
                //     signupFailed: true,
                //   });
            }
        );
        }
    };

    return (
        <form autoComplete="off" noValidate {...props}>
            <Card>
                <CardHeader subheader="The information can be edited" title="User Profile" />
                <Divider />
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                helperText="Please specify the first name"
                                label="First name"
                                name="firstName"
                                onChange={handleChange}
                                value={values.firstName}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Last name"
                                name="lastName"
                                onChange={handleChange}
                                value={values.lastName}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Phone Number"
                                error={phoneNumbeErr}
                                helperText={phoneNumbeErrMsg}
                                name="phone"
                                onChange={handleChangePhone}
                                type="number"
                                InputProps={{
                                    inputProps: {
                                        max: 10,
                                        min: 10,
                                    },
                                }}
                                value={phone}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Address"
                                name="address"
                                onChange={handleChange}
                                value={values.address}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="City"
                                name="city"
                                onChange={handleChange}
                                value={values.city}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                        <TextField
                                fullWidth
                                label="ZipCode"
                                name="zipcode"
                                type="number"
                                error={zipcodeErr}
                                helperText={zipcodeErrMsg}
                                onChange={handleChangeZipcode}
                                InputProps={{
                                    inputProps: {
                                        max: 5,
                                        min: 5,
                                    },
                                }}
                                value={zipcode}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="State"
                                name="state"
                                onChange={handleChange}
                                value={values.state}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Select Country"
                                name="country"
                                onChange={handleChange}
                                required
                                select
                                SelectProps={{ native: true }}
                                value={values.country}
                                variant="outlined"
                            >
                                {countryArray.map((option) => (
                                    <option key={option.label} value={option.value}>
                                        {option.value}
                                    </option>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider />

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        p: 2,
                    }}
                >
                    <Button color="primary" variant="contained" onClick={handleSave}>
                        Save details
                    </Button>
                    {saveMsg == 'Yes' && <Alert severity="success">Profile is updated!</Alert>}
                    {saveMsg === 'No' && (
                        <Alert severity="error">Error updating your profile.</Alert>
                    )}
                </Box>
            </Card>
        </form>
    );
};

const mapStateToProps = ({ userProfileReducer }) => ({
    userProfileReducer,
});

const mapDispatchToProps = {};

const ConnectedAccountProfileDetails = connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountProfileDetails);
export default ConnectedAccountProfileDetails;
