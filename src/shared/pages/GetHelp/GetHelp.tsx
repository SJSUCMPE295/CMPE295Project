import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container } from '@material-ui/core';
import { getHelp } from 'store/actions';
import GetHelpToolbar from '../../components/gethelp/GetHelpToolbar';
import GetHelpResults from '../../components/gethelp/GetHelpResults';
import resourcesMock from '../../__mocks__/resources';

const GetHelp = ({ history, ...props }) => {
    const [resources, setResources] = React.useState(resourcesMock);
    React.useEffect(() => {
        getHelp()
            .then((result) => {
                const data = result?.data?.resources;
                data?.length && setResources(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const handleOnClickTableRow = (e, resource) => {
        console.log(props, resource, 'api/gethelp/resources/61731b22a76a197cf20e7d4f');
        history.push(`/app/gethelp/${resource.id}`);
    };
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
                        <GetHelpResults
                            onClickTableRow={handleOnClickTableRow}
                            resources={resources}
                        />
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default GetHelp;
