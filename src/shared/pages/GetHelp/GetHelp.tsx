import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container } from '@material-ui/core';
import { getHelp } from 'store/actions';
import GetHelpToolbar from '../../components/gethelp/GetHelpToolbar';
import GetHelpResults from '../../components/gethelp/GetHelpResults';
import resourcesMock from '../../__mocks__/resources';

const GetHelp = (props) => {
    const [resources, setResources] = React.useState(resourcesMock);
    React.useEffect(() => {
        const id = props?.match?.params?.id;
        getHelp(id)
            .then((result) => {
                setResources(result.data);
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
                    <GetHelpToolbar />
                    <Box sx={{ pt: 3 }}>
                        <GetHelpResults resources={resources} />
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default GetHelp;
