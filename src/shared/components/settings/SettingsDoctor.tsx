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

const SettingsDoctor = (props) => (
    <form {...props}>
        <Card>
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
                        {/* <Typography color="textPrimary" gutterBottom variant="h6">
                            Notifications
                        </Typography> */}
                        <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="I am a Doctor"
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
                <Button color="primary" variant="contained">
                    Save
                </Button>
            </Box>
        </Card>
    </form>
);

export default SettingsDoctor;
