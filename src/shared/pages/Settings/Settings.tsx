import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { connect } from 'react-redux';
import { Box, Container } from '@material-ui/core';
import SettingsProfileStatus from '../../components/settings/SettingsProfileStatus';
import SettingsPassword from '../../components/settings/SettingsPassword';
import SettingsDoctor from '../../components/settings/SettingsDoctor';

const SettingsView = (props) => (
    <>
        <Helmet>
            <title>Settings</title>
        </Helmet>
        <Box
            sx={{
                backgroundColor: 'background.default',
                minHeight: '100%',
                py: 3,
            }}
        >
            <Container maxWidth="lg">
                {null && <SettingsPassword />}
                {props.isDoctor && <SettingsDoctor {...props} />}
                <SettingsProfileStatus />
            </Container>
        </Box>
    </>
);

const mapStateToProps = ({ userProfileReducer }) => ({
    ...userProfileReducer?.userMetaData,
});

const mapDispatchToProps = {};

const ConnectedSettingsView = connect(mapStateToProps, mapDispatchToProps)(SettingsView);
export default ConnectedSettingsView;
