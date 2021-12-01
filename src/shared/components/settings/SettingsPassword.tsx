import * as React from 'react';
import { useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Divider, TextField } from '@material-ui/core';

const SettingsPassword = (props) => {
    const [values, setValues] = useState({
        oldpassword: '',
        password: '',
        confirm: '',
    });

    const handleChange = ({ target }) => {
        target &&
            setValues({
                ...values,
                [target.name]: target.value,
            });
    };
    const handleSubmit = () => {
        console.log(values);
    };
    return (
        <form onSubmit={handleSubmit} className="mb-2">
            <Card
                sx={{
                    mb: 2,
                }}
            >
                <CardHeader title="Change Password" />
                <Divider />
                <CardContent>
                    <TextField
                        fullWidth
                        label="Old Password"
                        margin="normal"
                        name="oldpassword"
                        onChange={handleChange}
                        type="password"
                        value={values.oldpassword}
                        variant="outlined"
                    />
                    <TextField
                        fullWidth
                        label="New Password"
                        margin="normal"
                        name="password"
                        onChange={handleChange}
                        type="password"
                        value={values.password}
                        variant="outlined"
                    />
                    <TextField
                        fullWidth
                        label="Confirm New password"
                        margin="normal"
                        name="confirm"
                        onChange={handleChange}
                        type="password"
                        value={values.confirm}
                        variant="outlined"
                    />
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
                        Update
                    </Button>
                </Box>
            </Card>
        </form>
    );
};

export default SettingsPassword;
