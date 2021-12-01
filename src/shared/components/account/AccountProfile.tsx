import * as React from 'react';
import { connect } from 'react-redux';
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

const userMockData = {
    avatar: '/static/images/avatars/avatar_2.png',
    city: 'San Jose',
    country: 'USA',
    // jobTitle: 'Senior Developer',
    name: 'Katrina Smith',
    // timezone: 'GTM-7',
};

const AccountProfile = ({ user, ...props }) => (
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
                    src={userMockData.avatar}
                    sx={{
                        height: 100,
                        width: 100,
                    }}
                />
                <Typography color="textPrimary" gutterBottom variant="h4">
                    {user.userName}
                </Typography>
                <Typography color="textSecondary" variant="body1">
                    {`${userMockData.city} ${userMockData.country}`}
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

const mapStateToProps = ({ user }) => ({
    user,
});

const mapDispatchToProps = {};

const ConnectedAccountProfile = connect(mapStateToProps, mapDispatchToProps)(AccountProfile);
export default ConnectedAccountProfile;
