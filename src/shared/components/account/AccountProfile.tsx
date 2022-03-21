import * as React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { styled } from '@mui/material/styles';
import MuiAlert from '@mui/material/Alert';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
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

const metadata = {
    contentType: 'image/jpg'
  };

const Input = styled('input')({
    display: 'none',
  });

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const AccountProfile = ({userProfileReducer, ...props}) => {
    const user = {
        // avatar: userProfileReducer.profile.profile_pic,
        city: userProfileReducer.address.city,
        state: userProfileReducer.address.state,
        name: userProfileReducer.firstName,
        userName: userProfileReducer.userName,
    };
    const [avatar, setAvatar] = React.useState('');
    const [showErrorMsg, setShowErrorMsg] = React.useState(false);
    const storage = getStorage();
    const storageRef = ref(storage, `/${user.userName}/profilePic/userPic`);
    const [image, setImage] = React.useState('');
    const [findImage, setFindImage] = React.useState(false);
    const [fileUploadTitle, setFileUploadTitle] = React.useState('Upload Profile Pic');
    const uploadPicture = (event) => {
        if(image == null)
            return;
        const imageName = event.target.files[0].name;
        var file = event.target.files[0];
        // const storage = getStorage();
        // const storageRef = ref(storage, `/${user.userName}/profilePic/userPic`);
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!', snapshot.metadata);
            setFileUploadTitle(snapshot.metadata.name);
            downloadProfilePic();
        });
    }

    const deletePicture = () => {
        // Delete the file
        deleteObject(storageRef).then(() => {
            setAvatar('');
        }).catch((error) => {
            setShowErrorMsg(true);
        });
    }
    const downloadProfilePic = () => {
        getDownloadURL(storageRef)
        .then((url) => {
            console.log(url);
            setAvatar(url);
            console.log('user avatar', avatar);
            setFindImage(true);
        })
        .catch((error) => {
            switch (error.code) {
            case 'storage/object-not-found':
                setAvatar('');
                // user.avatar = '';
                setFindImage(false);
                break;
            // case 'storage/unauthorized':
            //     // User doesn't have permission to access the object
            //     break;
            // case 'storage/canceled':
            //     // User canceled the upload
            //     break;
            }
        });
    }

    useEffect(() => {
        console.log('inside useeffect');
       downloadProfilePic();
      },[1]);
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
                    src={avatar}
                    // src="https://firebasestorage.googleapis.com/v0/b/cmpe295-wecare.appspot.com/o/test114%40gmail.com%2FprofilePic%2FuserPic?alt=media&token=eb7bdbea-70e3-4b32-be11-712b56d56985"
                    sx={{
                        height: 100,
                        width: 100,
                    }}
                />
                <Typography color="textPrimary" gutterBottom variant="h4">
                    {user.name}
                </Typography>
                <Typography color="textSecondary" variant="body1">
                    {`${user.city}, ${user.state}`}
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
            }}>
        <label htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={uploadPicture}/>
            <Button color="primary" fullWidth variant="text" component="span">
                {findImage ? "Update picture" : "Upload picture"}
                <input type="image" hidden onChange={uploadPicture} />
            </Button>
            </label>
        </CardActions>
            <Button color="secondary" fullWidth variant="text" component="span" onClick={deletePicture}
            style={{
                color: "#d11a2a"
            }}>
                Delete Picture
            </Button>
            {showErrorMsg? (
                <Alert severity="error">This is an error message!</Alert>
            ): ''}
    </Card>
)};
//`${moment().format('hh:mm A')} ${user.timezone}`

const mapStateToProps = ({ userProfileReducer }) => ({
    userProfileReducer,
});

const mapDispatchToProps = {};

const ConnectedAccountProfile = connect(mapStateToProps, mapDispatchToProps)(AccountProfile);
export default ConnectedAccountProfile;
