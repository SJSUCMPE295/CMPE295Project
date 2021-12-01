import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container, Grid } from '@material-ui/core';
import GiveHelpToolbar from '../../components/givehelp/GiveHelpToolbar';

const GiveHelp = () => (
    <>
        <Helmet>
            <title>GiveHelp | WeCare</title>
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
                        <GiveHelpToolbar />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
);

export default GiveHelp;
