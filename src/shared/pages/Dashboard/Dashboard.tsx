import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container, Grid } from '@material-ui/core';
import Statistics from '../../components/dashboard/Statistics';

const Dashboard = () => (
    <>
        <Helmet>
            <title>Dashboard | WeCare</title>
        </Helmet>
        <Box
            sx={{
                backgroundColor: 'background.default',
                minHeight: '100%',
                py: 3,
            }}
        >
            <Container maxWidth={false}>
                <Statistics />
            </Container>
        </Box>
    </>
);

export default Dashboard;
