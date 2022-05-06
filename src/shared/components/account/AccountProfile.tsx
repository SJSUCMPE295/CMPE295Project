import * as React from 'react';
import { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
// import MuiAlert from '@mui/material/Alert';
import { Alert, Snackbar } from '@mui/material';
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    deleteObject,
} from 'firebase/storage';
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
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import serverUrl from '../../utils/config';
import { createUserProfile, saveUserName } from '../../store/constants/action-types';

const metadata = {
    contentType: 'image/jpg',
};

const Input = styled('input')({
    display: 'none',
});

// const Alert = React.forwardRef(function Alert(props, ref) {
//     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
//   });

const AccountProfile = ({ userProfileReducer, ...props }) => {
    const user = {
        // avatar: userProfileReducer.profile.profile_pic,
        address: userProfileReducer.address,
        profile: userProfileReducer.profile,
        userMetaData: userProfileReducer.userMetadata,
        lastName: userProfileReducer.lastName,
        firstName: userProfileReducer.firstName,
        userName: userProfileReducer.userName,
    };
    console.log('user ', user);
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [saveMsg, setSaveMsg] = useState('');
    const [avatar, setAvatar] = React.useState(userProfileReducer?.profile?.profilePic);
    const [showErrorMsg, setShowErrorMsg] = React.useState(false);
    const storage = getStorage();
    const storageRef = ref(storage, `/${user.userName}/profilePic/userPic`);
    const [image, setImage] = React.useState('');
    const [findImage, setFindImage] = React.useState(false);
    const [fileUploadTitle, setFileUploadTitle] = React.useState('Upload Profile Pic');
    const [progress, setProgress] = useState(100);
    // const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    //     if (reason === 'clickaway') {
    //       return;
    //     }
    //     setOpen(false);
    //   };
    const uploadPicture = (event) => {
        if (image == null) {
            return;
        }
        const imageName = event.target.files[0].name;
        const file = event.target.files[0];
        console.log(event.target.files[0]);
        // const storage = getStorage();
        // const storageRef = ref(storage, `/${user.userName}/profilePic/userPic`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setFileUploadTitle(imageName);
                downloadProfilePic();
            },
            (error) => {}
        );
    };

    const deletePicture = () => {
        // Delete the file
        deleteObject(storageRef)
            .then(() => {
                setAvatar('');
                const profile = {
                    phoneNumber: user?.profile?.phoneNumber,
                    profileActive: user?.profile?.profileActive,
                    profilePic: '',
                };
                // dispatch({
                //     type: createUserProfile,
                //     userMetaData: user?.userMetaData,
                //     profile: profile,
                //     address: user?.address,
                // });
                updateProfilePicApiCall(profile);
            })
            .catch((error) => {
                setShowErrorMsg(true);
            });
    };
    const downloadProfilePic = () => {
        getDownloadURL(storageRef)
            .then((url) => {
                console.log(url);
                setAvatar(url);
                user.profile.profilePic = url;
                console.log('user avatar', user);
                updateProfilePic();
                setFindImage(true);
            })
            .catch((error) => {
                switch (error.code) {
                    case 'storage/object-not-found':
                        setAvatar('');
                        setFindImage(false);
                        break;
                }
            });
    };

    const updateProfilePic = () => {
        const profile = {
            phoneNumber: user?.profile?.phoneNumber,
            profileActive: user?.profile?.profileActive,
            profilePic: user?.profile?.profilePic,
        };
        updateProfilePicApiCall(profile);
    };

    const updateProfilePicApiCall = (profile) => {
        const payload = {
            userName: user.userName,
            profile: profile,
        };
        const token = localStorage.getItem('token');
        axios.defaults.withCredentials = true;
        // make a post request with the user data
        axios
            .post(serverUrl + 'user/profilePicUpdate', payload, {
                headers: {
                    authtoken: token,
                },
            })
            .then(
                (response) => {
                    console.log('axios call', response);
                    if (response.status === 200) {
                        console.log('updated successfully');
                        dispatch({
                            type: createUserProfile,
                            userMetaData: response?.data?.data?.userMetaData,
                            profile: response?.data?.data?.profile,
                            address: response?.data?.data?.address,
                            ...response?.data?.data,
                        });
                        setSaveMsg('Yes');
                    }
                    if (response.status === 401) {
                        setSaveMsg('No');
                    }
                },
                (error) => {
                    console.log('register error');
                    setSaveMsg('No');
                    //   this.setState({
                    //     errorMessage: error.response.data,
                    //     signupFailed: true,
                    //   });
                }
            );
    };

    // useEffect(() => {
    //     console.log('inside useeffect');
    //     downloadProfilePic();
    // }, [1]);
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
                    {progress > 0 && progress < 100 && (
                        <CircularProgress variant="determinate" value={progress} />
                    )}
                    {progress == 100 && (
                        <Avatar
                            src={avatar}
                            // src="https://firebasestorage.googleapis.com/v0/b/cmpe295-wecare.appspot.com/o/test114%40gmail.com%2FprofilePic%2FuserPic?alt=media&token=eb7bdbea-70e3-4b32-be11-712b56d56985"
                            sx={{
                                height: 100,
                                width: 100,
                            }}
                        />
                    )}
                    <Typography color="textPrimary" gutterBottom variant="h4">
                        {user?.firstName}
                    </Typography>
                    <Typography color="textSecondary" variant="body1">
                        {`${user?.address?.city}, ${user?.address?.state}`}
                    </Typography>
                    {/* <Typography color="textSecondary" variant="body1">
                    {`${moment().format('hh:mm A')} ${user.timezone}`}
                </Typography> */}
                </Box>
            </CardContent>
            <Divider />
            <CardActions
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <label htmlFor="contained-button-file">
                    <Input
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={uploadPicture}
                    />
                    <Button color="primary" fullWidth variant="text" component="span">
                        {findImage ? 'Update picture' : 'Upload picture'}
                        <input type="image" hidden onChange={uploadPicture} />
                    </Button>
                </label>
            </CardActions>
            <Button
                color="secondary"
                fullWidth
                variant="text"
                component="span"
                onClick={deletePicture}
                style={{
                    color: '#d11a2a',
                }}
            >
                Delete Picture
            </Button>
            {/* {showErrorMsg? (
                <Alert severity="error">This is an error message!</Alert>
            ): ''} */}
            {/* <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {saveMsg == 'Yes' &&
                <Snackbar autoHideDuration={6000} onClose={handleClose}>
                 <Alert severity="success">Profile Pic is updated!</Alert>
                 </Snackbar>}
                {saveMsg === 'No' && (
                    <Alert severity="error">Error updating your profile pic.</Alert>
                )}
            </div> */}
        </Card>
    );
};
//`${moment().format('hh:mm A')} ${user.timezone}`

const mapStateToProps = ({ userProfileReducer }) => ({
    userProfileReducer,
});

const mapDispatchToProps = {};

const ConnectedAccountProfile = connect(mapStateToProps, mapDispatchToProps)(AccountProfile);
export default ConnectedAccountProfile;
