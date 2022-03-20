import * as React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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



const AccountProfile = ({userProfileReducer, ...props}) => {
    const userMockData = {
        avatar: '/static/images/avatars/avatar_2.png',
        city: userProfileReducer.address.city,
        country: userProfileReducer.address.country,
        name: userProfileReducer.firstName,
    };
   return (
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
                    {userMockData.name}
                </Typography>
                <Typography color="textSecondary" variant="body1">
                    {`${userMockData.city}, ${userMockData.country}`}
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
)};
//`${moment().format('hh:mm A')} ${user.timezone}`

const mapStateToProps = ({ userProfileReducer }) => ({
    userProfileReducer,
});

const mapDispatchToProps = {};

const ConnectedAccountProfile = connect(mapStateToProps, mapDispatchToProps)(AccountProfile);
export default ConnectedAccountProfile;
