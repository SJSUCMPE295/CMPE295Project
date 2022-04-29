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
        phone: userProfileReducer?.profile?.phoneNumber,
        address: userProfileReducer?.address?.location,
        zipCode: userProfileReducer?.address?.zipCode,
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

    // const handleChangePhone = (event) => {
    //     setValues({
    //         ...values,
    //         [event.target.name]: event.target.value,
    //     });
    //     if(values.phone)
    // };

    const handleSave = () => {
        const payload = {
            userName: values.userName,
            firstName: values.firstName,
            lastName: values.lastName,
            userMetaData: values.userMetaData,
            profile: {
                phoneNumber: values.phone,
                profileActive: values?.profileActive,
                profilePic: values?.profilePic,
            },
            address: {
                location: values.address,
                city: values.city,
                state: values.state,
                country: values.country,
                zipCode: values.zipCode,
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
                                required
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
                                required
                                value={values.lastName}
                                variant="outlined"
                            />
                        </Grid>
                        {/* <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Email Address"
                                name="email"
                                onChange={handleChange}
                                required
                                value={values.email}
                                variant="outlined"
                            />
                        </Grid> */}
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Phone Number"
                                name="phone"
                                onChange={handleChange}
                                type="number"
                                InputProps={{
                                    inputProps: {
                                        max: 10,
                                        min: 10,
                                    },
                                }}
                                value={values.phone}
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
                                onChange={handleChange}
                                type="number"
                                InputProps={{
                                    inputProps: {
                                        max: 5,
                                        min: 5,
                                    },
                                }}
                                value={values.zipCode}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="State"
                                name="state"
                                onChange={handleChange}
                                required
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
