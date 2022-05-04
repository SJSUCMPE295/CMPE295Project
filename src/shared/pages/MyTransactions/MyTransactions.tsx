import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container, Grid, Typography } from '@material-ui/core';

import ManageTransactionsCard from '../../components/mytransactions/ManageTransactionsCard';

const GiveHelp = () => (
    <>
        <Helmet>
            <title>My Transactions | WeCare</title>
        </Helmet>
        <Box
            sx={{
                backgroundColor: 'background.default',
                minHeight: '100%',
                py: 3,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item lg={8} md={6} xs={12}>
                        <Typography variant="h2" component="h2">
                            My Transactions
                        </Typography>
                    </Grid>
                    <Grid item lg={8} md={6} xs={12}>
                        <ManageTransactionsCard />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
);

export default GiveHelp;
