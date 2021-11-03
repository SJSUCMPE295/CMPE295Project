import * as React from 'react';
import moment from 'moment';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography,
} from '@material-ui/core';

const user = {
    avatar: '/static/images/avatars/avatar_2.png',
    city: 'San Jose',
    country: 'USA',
    // jobTitle: 'Senior Developer',
    name: 'Katrina Smith',
    // timezone: 'GTM-7',
};

const AccountProfile = (props) => (
    <Card {...props}>
        <CardContent>
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Avatar
                    src={user.avatar}
                    sx={{
                        height: 100,
                        width: 100,
                    }}
                />
                <Typography color="textPrimary" gutterBottom variant="h4">
                    {user.name}
                </Typography>
                <Typography color="textSecondary" variant="body1">
                    {`${user.city} ${user.country}`}
                </Typography>
                {/* <Typography color="textSecondary" variant="body1">
                    {`${moment().format('hh:mm A')} ${user.timezone}`}
                </Typography> */}
            </Box>
        </CardContent>
        <Divider />
        <CardActions>
            <Button color="primary" fullWidth variant="text">
                Upload picture
            </Button>
        </CardActions>
    </Card>
);
//`${moment().format('hh:mm A')} ${user.timezone}`
export default AccountProfile;
