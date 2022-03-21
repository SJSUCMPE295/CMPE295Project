import * as React from 'react';
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
import { connect } from 'react-redux';

const states = [
    {
        value: 'alabama',
        label: 'Alabama',
    },
    {
        value: 'new-york',
        label: 'New York',
    },
    {
        value: 'san-francisco',
        label: 'San Francisco',
    },
];

const AccountProfileDetails = ({ userProfileReducer, ...props }) => {
    const [values, setValues] = React.useState({
        firstName: userProfileReducer.firstName,
        lastName: userProfileReducer.lastName,
        email: userProfileReducer.userName,
        phone: userProfileReducer.profile.phoneNumber,
        state: userProfileReducer.address.state,
        country: userProfileReducer.address.country,
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
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
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Email Address"
                                name="email"
                                onChange={handleChange}
                                required
                                value={values.email}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Phone Number"
                                name="phone"
                                onChange={handleChange}
                                type="number"
                                value={values.phone}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Country"
                                name="country"
                                onChange={handleChange}
                                required
                                value={values.country}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Select State"
                                name="state"
                                onChange={handleChange}
                                required
                                select
                                SelectProps={{ native: true }}
                                value={values.state}
                                variant="outlined"
                            >
                                {states.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
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
                        justifyContent: 'flex-end',
                        p: 2,
                    }}
                >
                    <Button color="primary" variant="contained">
                        Save details
                    </Button>
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
