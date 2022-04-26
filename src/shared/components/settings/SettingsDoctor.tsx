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
import { profileUpdate, updateUserProfile } from 'store/actions';
import { objectWithBoolean } from 'utils/json';

const SettingsDoctor = ({ profile, userMetaData, id, ...rest }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = objectWithBoolean({
            emailNotifications: false,
            appNotifications: false,
            phoneCalls: false,
            ...Object.fromEntries(formData),
        });
        profileUpdate({ id, userMetaData: { ...userMetaData, ...formProps } })
            .then((data) => {
                rest?.updateUserProfile(data);
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
                <CardHeader subheader="Change your status" title="Doctor Settings" />
                <Divider />
                <CardContent>
                    <Grid container spacing={6} wrap="wrap">
                        <Grid
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
                                control={
                                    <Checkbox
                                        name="emailNotifications"
                                        value={true}
                                        defaultChecked={userMetaData?.emailNotifications}
                                    />
                                }
                                label="Email"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="appNotifications"
                                        value={true}
                                        defaultChecked={userMetaData?.appNotifications}
                                    />
                                }
                                label="Push Notifications"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="phoneCalls"
                                        value={true}
                                        defaultChecked={userMetaData?.phoneCalls}
                                    />
                                }
                                label="Phone calls"
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

const mapDispatchToProps = { updateUserProfile };

const ConnectedSettingsDoctor = connect(mapStateToProps, mapDispatchToProps)(SettingsDoctor);
export default ConnectedSettingsDoctor;
