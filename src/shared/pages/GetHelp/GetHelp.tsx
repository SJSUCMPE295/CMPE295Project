import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container } from '@material-ui/core';
import GetHelpToolbar from '../../components/gethelp/GetHelpToolbar';
import GetHelpResults from '../../components/gethelp/GetHelpResults';
import resources from '../../__mocks__/resources';

const GetHelp = () => (
    <>
        <Helmet>
            <title>GetHelp | WeCare</title>
        </Helmet>
        <Box
            sx={{
                backgroundColor: 'background.default',
                minHeight: '100%',
                py: 3,
            }}
        >
            <Container maxWidth={false}>
                <GetHelpToolbar />
                <Box sx={{ pt: 3 }}>
                    <GetHelpResults resources={resources} />
                </Box>
            </Container>
        </Box>
    </>
);

export default GetHelp;
