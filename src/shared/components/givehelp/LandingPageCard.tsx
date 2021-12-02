import * as React from 'react';
import { Box, Card, CardContent, CardHeader, Divider, Button } from '@material-ui/core';

const LandingPageCard = (props) => (
    <Box {...props}>
        <Box 
            sx={{
                width:900,
                height:700,
                p: 1
                }}
        >
            <Card 
                sx={{
                height: 400,
                maxWidth:900
                }}
            >
               <CardHeader 
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                        }}
                        titleTypographyProps={{ variant: 'h2' }} subheader="select from below type resource/service to enter details" title="Select type"
                />
                <Divider />
                <CardContent>
                    <Box 
                        sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',       
                        }}
                    >
                        <Button 
                            type="submit" 
                            color="primary" 
                            variant="contained"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href='givehelp/addresource';
                                }}
                        >
                            Add a Resource
                        </Button> 
                    </Box>
                    <Box 
                        sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                pt:4       
                        }}
                    >
                        <Button 
                            type="submit" 
                            color="primary" 
                            variant="contained"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href='givehelp/addservice';
                                }}
                        >
                            Add a Service
                        </Button> 
                    </Box>
                </CardContent>
            </Card>
        </Box>
    </Box>
);

export default LandingPageCard;