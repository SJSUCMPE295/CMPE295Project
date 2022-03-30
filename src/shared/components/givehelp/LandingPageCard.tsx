import * as React from 'react';
import { Box, Card, CardContent, CardHeader, Divider, Button } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

const LandingPageCard = (props) => (
    <Box {...props}>
        <Box
            sx={{
                width: 900,
                height: 700,
                p: 1,
            }}
        >
            <Card
                sx={{
                    height: 300,
                    maxWidth: 900,
                }}
            >
                <CardHeader
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                    }}
                    titleTypographyProps={{ variant: 'h2' }}
                    subheader="select from below type resource/service to enter details"
                    title="Select type"
                />
                <Divider />
                <CardContent>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                        }}
                    >
                        <Link to="/app/givehelp/addresource">
                            <Button color="primary" variant="contained">
                                Add a Resource
                            </Button>
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            pt: 6,
                        }}
                    >
                        <Link to="/app/givehelp/addservice">
                            <Button color="primary" variant="contained">
                                Add a Service
                            </Button>
                        </Link>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    </Box>
);

export default LandingPageCard;
