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
const hideElements = null;
const SettingsDoctor = ({ isDoctor }) => {
    const handleSubmit = () => {
        console.log(isDoctor);
    };
    return (
        <form onSubmit={handleSubmit} className="mb-2">
            <Card
                sx={{
                    mb: 2,
                }}
            >
                <CardHeader subheader="Change your status" title="Doctor's Profile" />
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
                            {hideElements && (
                                <Typography color="textPrimary" gutterBottom variant="h6">
                                    Notifications
                                </Typography>
                            )}
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="I am a Doctor"
                            />
                            {hideElements && (
                                <FormControlLabel
                                    control={<Checkbox color="primary" defaultChecked />}
                                    label="Push Notifications"
                                />
                            )}
                            <FormControlLabel control={<Checkbox />} label="Text Messages" />
                            <FormControlLabel
                                control={<Checkbox color="primary" defaultChecked />}
                                label="Phone calls"
                            />
                        </Grid>
                        {hideElements && (
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
                                    control={<Checkbox color="primary" defaultChecked />}
                                    label="Email"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Push Notifications"
                                />
                                <FormControlLabel
                                    control={<Checkbox color="primary" defaultChecked />}
                                    label="Phone calls"
                                />
                            </Grid>
                        )}
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
                        Update
                    </Button>
                </Box>
            </Card>
        </form>
    );
};
const mapStateToProps = ({ userProfileReducer }) => ({
    ...userProfileReducer?.userMetaData,
});

const mapDispatchToProps = {};

const ConnectedSettingsDoctor = connect(mapStateToProps, mapDispatchToProps)(SettingsDoctor);
export default ConnectedSettingsDoctor;
