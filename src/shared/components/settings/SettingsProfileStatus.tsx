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
} from '@material-ui/core';
import { connect } from 'react-redux';
import { profileUpdate } from 'store/actions';
import { objectWithBoolean } from 'utils/json';
const SettingsProfileStatus = ({ profile, id }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = objectWithBoolean({
            ...profile,
            profileActive: false,
            ...Object.fromEntries(formData),
        });
        profileUpdate({ id, profile: formProps })
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
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color="primary"
                                        name="profileActive"
                                        value={false}
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

const mapDispatchToProps = {};

const ConnectedSettingsProfileStatus = connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsProfileStatus);
export default ConnectedSettingsProfileStatus;
