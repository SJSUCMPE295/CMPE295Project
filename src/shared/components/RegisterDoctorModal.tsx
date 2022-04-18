import * as React from 'react';
import { useState, useEffect } from 'react';
import { 
    Modal,
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField,
    MenuItem,
    Link
} from '@material-ui/core';
import { connect } from 'react-redux';
import {  useDispatch } from 'react-redux';
import axios from 'axios';
import serverUrl from '../utils/config';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function getModalStyle() {
    // const top = 50 + rand();
    // const left = 50 + rand();
    return {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4,
        // top: `${top}%`,
        // left: `${left}%`,
        // transform: `translate(-${top}%, -${left}%)`,
    };
}
export const RegisterDoctorModal = ({closeModal, open, userProfileReducer, ...props }) => {
    // const [open, setOpen] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);
    const [isLoading, setLoading] = useState(true);
    const[saveMsg, setSaveMsg] = useState('');
    const dispatch = useDispatch();
    const [values, setValues] = React.useState({
        firstName: userProfileReducer.firstName,
        userId: userProfileReducer.id,
        user: userProfileReducer.userName,
        speciality: '',
        license: '',
        qualification: '',
        experience: '',
        description: '',
        licenseUrl: ''

    });
    const [fileUrl, setFileUrl] = useState('');
    const [fileUploadTitle, setFileUploadTitle] = React.useState('Upload License');
    const [fileLink, setFileLink] = React.useState('');
    const [specialityOptions, setSpecialityOptions] = React.useState([]);
    useEffect(() => {
        // set the with credentials to true
        axios.defaults.withCredentials = true;
        // make a post request with the user data
        axios.get(serverUrl + 'static/speciality').then(
          (response) => {
              console.log("axios call")
            if (response.status === 200) {
                console.log("updated successfully", response.data[0].name);
                setSpecialityOptions(response.data[0].name);
                setLoading(false);
            }
          },
          (error) => {
              console.log("register error")
          //   this.setState({
          //     errorMessage: error.response.data,
          //     signupFailed: true,
          //   });
          }
        );
      },[1]);
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const saveFile = (event) => {
        if (event.target.files[0] === null) {
            return;
        }
        const fileName = event.target.files[0].name;
        const storage = getStorage();
        const storageRef = ref(storage, `/${values.user}/${fileName}`);

        const file = event.target.files[0];
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!', snapshot);
            setFileLink(snapshot.metadata.name);
            getDownloadURL(storageRef).then((url) => {
                    console.log('fileurl', url);
                    setFileUrl(url);
            })
            .catch((error) => {
                switch (error.code) {
                case 'storage/object-not-found':
                    setFileUrl('');
                    break;
                }
            });
        });
    };

    const handleSave = () => {
        const payload = {
            userId: values.userId,
            speciality: values.speciality,
            license: values.license,
            qualification: values.qualification,
            experience: values.experience,
            description: values.description,
            licenseUrl: fileUrl
        };
           // set the with credentials to true
           axios.defaults.withCredentials = true;
           // make a post request with the user data
           axios.post(serverUrl + 'signup/doctor', payload).then(
               (response) => {
                   console.log("axios call", response);
               if (response.status === 200) {
                   console.log("updated successfully");
                   setSaveMsg("Yes");
                   closeModal();
               }
               if(response.status === 401) {
                setSaveMsg("No");
               }
            },
               (error) => {
                   console.log("register error")
                   setSaveMsg("No");
               //   this.setState({
               //     errorMessage: error.response.data,
               //     signupFailed: true,
               //   });
               }
           );
    }
    return (
        <>
             <Modal
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                open={open}
                onClose={closeModal}
            >
                <form autoComplete="off" noValidate {...props} style={modalStyle}>
            <Card>
                <CardHeader subheader="The information will be edited if already exists" title="Register As a Doctor" />
                <Divider />
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                // helperText="Please specify the first name"
                                label="Speciality"
                                name="speciality"
                                select
                                onChange={handleChange}
                                required
                                value={values.speciality}
                                variant="outlined"
                            >
                              isLoading ? (<div>Loading ...</div>) :
                                ({specialityOptions.map((speciality) => (
                                <MenuItem key={speciality} value={speciality}>{speciality}</MenuItem>
                                ))})          
                            </TextField>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="License"
                                name="license"
                                onChange={handleChange}
                                required
                                value={values.license}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Qualification"
                                name="qualification"
                                onChange={handleChange}
                                value={values.qualification}
                                variant="outlined"
                                required
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="experience"
                                name="experience"
                                onChange={handleChange}
                                value={values.experience}
                                variant="outlined"
                                required
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Description"
                                name="description"
                                onChange={handleChange}
                                value={values.description}
                                variant="outlined"
                                required
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            {!fileLink &&
                            <Button
                                variant="outlined"
                                component="label"
                                size="small"
                                style={{ marginRight: '50px' }}
                            >
                                {fileUploadTitle}
                            <input type="file" hidden onChange={saveFile} />
                        </Button>
                        }
                        {fileLink && 
                        <Link href={fileUrl} 
                              variant="body2"
                              rel="noopener noreferrer"  
                              target="_blank"
                        > {fileLink}</Link> }
                        </Grid>
                        {/* <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="State"
                                name="state"
                                // onChange={handleChange}
                                required
                                // value={values.state}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Select Country"
                                name="country"
                                // onChange={handleChange}
                                required
                                select
                                SelectProps={{ native: true }}
                                // value={values.country}
                                variant="outlined"
                            > */}
                                {/* {countryArray.map((option) => (
                                    <option key={option.label} value={option.value}>
                                        {option.value}
                                    </option>
                                ))} */}
                            {/* </TextField> */}
                        {/* </Grid> */}
                    </Grid>
                </CardContent>
                <Divider />
                
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        p: 2,
                    }}
                >
                    <Button color="primary" variant="contained" 
                    onClick={handleSave}
                    >
                            Save details
                    </Button>
                    {/* {saveMsg == "Yes" && 
                    <Alert severity="success">Profile is updated!</Alert>}
                    {saveMsg === "No" &&
                    <Alert severity="error">Error updating your profile.</Alert>} */}
                </Box>
            </Card>
        </form>
            </Modal>
        </>
    );
};
const mapStateToProps = ({ userProfileReducer }) => ({
    userProfileReducer,
});

const mapDispatchToProps = {};

const ConnectedRegisterDoctorDetails = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterDoctorModal);
export default ConnectedRegisterDoctorDetails;
