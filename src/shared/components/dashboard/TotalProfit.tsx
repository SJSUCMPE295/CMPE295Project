import * as React from 'react';
import { Avatar, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AutoAwesomeIcon from '@material-ui/icons/AutoAwesomeMosaic';

const TotalProfit = (props) => (
    <Card {...props}>
        <CardContent>
            <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
                <Grid item>
                    <Typography color="textSecondary" gutterBottom variant="h6">
                        SERVICES
                    </Typography>
                    <Typography color="textPrimary" variant="h3">
                        1,200
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar
                        sx={{
                            backgroundColor: indigo[600],
                            height: 56,
                            width: 56,
                        }}
                    >
                        <AutoAwesomeIcon />
                    </Avatar>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);

export default TotalProfit;
