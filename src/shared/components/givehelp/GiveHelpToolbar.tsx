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
    Checkbox,
    FormControlLabel,
} from '@material-ui/core';
import { CheckBox } from '@material-ui/icons';

const states = [
    {
        value: 'alabama',
        label: 'California',
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

const AccountProfileDetails = (props) => {
    const [values, setValues] = React.useState({
        firstName: 'Katarina',
        lastName: 'Smith',
        email: 'demo@devias.io',
        phone: '',
        state: 'Alabama',
        country: 'USA',
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
                <CardHeader
                    subheader="          update the resource/service details you would like to provide"
                    titleTypographyProps={{ variant: 'h2' }}
                    title="Give Help"
                />
                <Divider />
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                helperText="Is it a Resource/Service Type?"
                                label="Type"
                                name="firstName"
                                onChange={handleChange}
                                required
                                value="Service"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                //helperText="Please specify the first name"
                                label="Resource/Service name"
                                name="firstName"
                                onChange={handleChange}
                                required
                                value="Car Pool"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Category Name"
                                name="lastName"
                                onChange={handleChange}
                                required
                                value="Travel"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Availability"
                                name="lastName"
                                onChange={handleChange}
                                required
                                value="Yes"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <TextField
                                fullWidth
                                label="Description"
                                name="email"
                                onChange={handleChange}
                                value="Available on 3rd Nov 2021"
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item md={12} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Use my profile address"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Address"
                                name="country"
                                onChange={handleChange}
                                required
                                value="ABC Ave,Apt 1"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="City"
                                name="country"
                                onChange={handleChange}
                                required
                                value="San Jose"
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
                                value="California"
                                variant="outlined"
                            >
                                {states.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Country"
                                name="country"
                                onChange={handleChange}
                                required
                                value="USA"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="ZipCode"
                                name="country"
                                onChange={handleChange}
                                required
                                value="95122"
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
                                required
                                value="1234567890"
                                variant="outlined"
                            />
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

export default AccountProfileDetails;
