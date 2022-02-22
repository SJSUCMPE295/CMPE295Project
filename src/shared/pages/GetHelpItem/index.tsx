import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container } from '@material-ui/core';
import { getServiceById } from 'store/actions';
const GetHelpItem = (props) => {
    const [service, setServiceData] = React.useState();
    React.useEffect(() => {
        const id = props?.match?.params?.id;
        getServiceById(id)
            .then((result) => {
                setServiceData(result.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
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
                    <Box sx={{ pt: 3 }}>{'Item Page'}</Box>
                </Container>
            </Box>
        </>
    );
};

export default GetHelpItem;
