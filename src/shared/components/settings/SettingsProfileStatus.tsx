import * as React from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Checkbox,
    Divider,
    FormControlLabel,
    Grid,
    Typography,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { profileUpdate } from 'store/actions';

const SettingsProfileStatus = ({ userMetaData }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userMetaData);
        profileUpdate({})
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <form onSubmit={handleSubmit} className="mb-2">
            <Card
                sx={{
                    mb: 2,
                }}
            >
                <CardHeader subheader="Deactivate Profile" title="Profile Status" />
                <Divider />
                <CardContent>
                    <Grid container spacing={6} wrap="wrap">
                        <Grid
                            item
                            md={12}
                            sm={6}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                            xs={12}
                        >
                            {/* <Typography color="textPrimary" gutterBottom variant="h6">
                            Notifications
                        </Typography> */}
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="Deactivate your profile - This will delete your profile permanently"
                            />
                            {/* <FormControlLabel
                            control={<Checkbox color="primary" defaultChecked />}
                            label="Push Notifications"
                        />
                        <FormControlLabel control={<Checkbox />} label="Text Messages" />
                        <FormControlLabel
                            control={<Checkbox color="primary" defaultChecked />}
                            label="Phone calls"
                        /> */}
                        </Grid>
                        {/* <Grid
                        item
                        md={4}
                        sm={6}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                        xs={12}
                    >
                        <Typography color="textPrimary" gutterBottom variant="h6">
                            Messages
                        </Typography>
                        <FormControlLabel
                            control={<Checkbox color="primary" defaultChecked />}
                            label="Email"
                        />
                        <FormControlLabel control={<Checkbox />} label="Push Notifications" />
                        <FormControlLabel
                            control={<Checkbox color="primary" defaultChecked />}
                            label="Phone calls"
                        />
                    </Grid> */}
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
                    <Button color="primary" variant="contained" type="submit">
                        Update
                    </Button>
                </Box>
            </Card>
        </form>
    );
};

const mapStateToProps = ({ userProfileReducer }) => ({
    ...userProfileReducer,
});

const mapDispatchToProps = {};

const ConnectedSettingsProfileStatus = connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsProfileStatus);
export default ConnectedSettingsProfileStatus;
