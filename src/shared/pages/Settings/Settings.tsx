import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import {
    Box,
    Button,
    Container,
    Card,
    CardContent,
    CardHeader,
    Checkbox,
    Divider,
    FormControlLabel,
    Grid,
    Typography,
} from '@material-ui/core';
import SettingsProfileStatus from '../../components/settings/SettingsProfileStatus';
import SettingsDoctor from '../../components/settings/SettingsDoctor';
import SettingsPassword from '../../components/settings/SettingsPassword';

const SettingsView = () => (
    <>
        <Helmet>
            <title>Settings | Material Kit</title>
        </Helmet>
        <Box
            sx={{
                backgroundColor: 'background.default',
                minHeight: '100%',
                py: 3,
            }}
        >
            <Container maxWidth="lg">
                <SettingsPassword />

                <SettingsDoctor />
                <SettingsProfileStatus />
            </Container>
        </Box>
    </>
);

export default SettingsView;
