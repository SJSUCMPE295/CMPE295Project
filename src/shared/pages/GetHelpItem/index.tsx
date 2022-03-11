import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container } from '@material-ui/core';
import { getResourcesById } from 'store/actions';
const GetHelpItem = (props) => {
    const [resource, setResource] = React.useState({});
    React.useEffect(() => {
        const id = props?.match?.params?.id;
        getResourcesById(id)
            .then((result) => {
                console.log('result', result.data);
                setResource(result.data);
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
                    <Box sx={{ pt: 3 }}>{resource?.Resource_Name}</Box>
                </Container>
            </Box>
        </>
    );
};

export default GetHelpItem;
