import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container, Grid, Pagination } from '@material-ui/core';
import AddServiceCard from '../../components/givehelp/AddServiceCard';

const AddService = () => (
    <>
        <Helmet>
            <title>WeCare</title>
        </Helmet>
        <Box
            sx={{
                backgroundColor: 'background.default',
                minHeight: '100%',
                py: 3,
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ pt: 3 }}>
                    <AddServiceCard />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        pt: 3,
                    }}
                ></Box>
            </Container>
        </Box>
    </>
);

export default AddService;
