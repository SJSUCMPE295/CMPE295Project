import * as React from 'react';
import { Box, Card } from '@material-ui/core';

const LandingPageCard = (props) => (
    <Box {...props}>
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                width:500,
                height:700,
                p: 1
                }}
        >
            <Card 
                sx={{
                height: 400,
                width:900,
                justifyContent:'center',
                }}
            ></Card>
        </Box>
    </Box>
);

export default LandingPageCard;