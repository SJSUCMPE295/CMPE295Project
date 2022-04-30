import * as React from 'react';
import {
    Alert,
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Checkbox,
    Divider,
    FormControlLabel,
    Grid
} from "@material-ui/core";
import { connect } from 'react-redux';
import { profileUpdate, updateUserProfile } from 'store/actions';
import { objectWithBoolean } from 'utils/json';
const SettingsProfileStatus = ({ profile, id, ...rest }) => {
    const [successAlert, setSuccessAlert] = React.useState('');
    const setSuccessAlertWithTimer = (msg) => {
        setSuccessAlert(msg);
        setTimeout(() => {
            setSuccessAlert('');
        }, 6000);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData)
        const formProps = objectWithBoolean({
            ...profile,
            ...data,
        });
        console.log('settings',data?.profileActive,{ ...formProps, profileActive: formProps?.profileActive !== 'off' });
        profileUpdate({
            id,
            profile: { ...formProps, profileActive: formProps?.profileActive !== 'off' },
        })
            .then(({ data }) => {
                rest?.updateUserProfile(data);
                console.log(data);
                setSuccessAlertWithTimer('Saved');

            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <form onSubmit={handleSubmit} className="mb-2">
            {successAlert && <Alert severity="success">{successAlert}</Alert>}

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
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color="primary"
                                        name="profileActive"
                                        value="off"
                                        defaultChecked={!profile?.profileActive}
                                    />
                                }
                                label="Deactivate your profile"
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

const ConnectedSettingsProfileStatus = connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsProfileStatus);
export default ConnectedSettingsProfileStatus;
