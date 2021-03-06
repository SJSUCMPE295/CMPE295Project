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
    Link,
    Typography,
    FormControlLabel,
    Checkbox,
} from '@material-ui/core';
import Alert from '@mui/material/Alert';
import { withStyles } from '@material-ui/styles';
import { styled } from '@mui/material/styles';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import * as Yup from 'yup';
import { Formik } from 'formik';
import serverUrl from '../utils/config';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { createUserProfile, saveUserName } from '../store/constants/action-types';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 15,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: '#EEEEEE',
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
    },
}))(LinearProgress);

const Input = styled('input')({
    display: 'none',
});
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
export const RegisterDoctorModal = ({ closeModal, open, userProfileReducer, ...props }) => {
    // const [open, setOpen] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);
    const [isLoading, setLoading] = useState(true);
    const [fileErr, setFileErr] = useState(false);
    const [fileErrMsg, setFileErrMsg] = useState('');
    const dispatch = useDispatch();
    var userMetaData = userProfileReducer.userMetaData;
    const [doctorProfile, setDoctorProfile] = React.useState({
        firstName: userProfileReducer.firstName,
        userId: userProfileReducer.id,
        user: userProfileReducer.userName,
        licenseUrl: '',
    });
    var fileName = '';
    const [fileUrl, setFileUrl] = useState('');
    const [fileUploadTitle, setFileUploadTitle] = React.useState('Upload License');
    const [fileLink, setFileLink] = React.useState('');
    const [specialityOptions, setSpecialityOptions] = React.useState([]);
    const [progress, setProgress] = useState(0);
    const [errMessage, setErrMessage] = useState('');
    // const [fileErrMsg, setFileErrMsg] = useState('');
    useEffect(() => {
        // set the with credentials to true
        axios.defaults.withCredentials = true;
        // make a post request with the user data
        axios.get(serverUrl + 'common/speciality').then(
            (response) => {
                console.log('axios call');
                if (response.status === 200) {
                    console.log('updated successfully', response.data[0].name);
                    setSpecialityOptions(response.data[0].name);
                    setLoading(false);
                }
            },
            (error) => {
                console.log('register error');
                // this.setState({
                // errorMessage: error.response.data,
                // signupFailed: true,
                // });
            }
        );
    }, [1]);

    const saveFile = (event) => {
        setFileErr(false);
        setFileErrMsg('');
        fileName = event.target.files[0].name;
        const storage = getStorage();
        const storageRef = ref(storage, `/${doctorProfile.user}/license/${fileName}`);

        const file = event.target.files[0];
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setFileLink(fileName);
            },
            (error) => {},
            () => {
                getDownloadURL(storageRef)
                    .then((url) => {
                        setFileUrl(url);
                    })
                    .catch((error) => {
                        switch (error.code) {
                            case 'storage/object-not-found':
                                setFileUrl('');
                                break;
                        }
                    });
            }
        );
    };

    const handleSubmit = (values) => {
        console.log(values);
        console.log('filename', fileName);
        if (fileLink == '' && values.isDoctor) {
            setFileErr(true);
            setFileErrMsg('Please upload the license');
            return;
        } else {
            setFileErr(false);
            setFileErrMsg('');

            userMetaData.isDoctor = values.isDoctor;
            const payload = {
                userId: doctorProfile.userId,
                userMetaData: userMetaData,
                speciality: values.speciality,
                license: values.license,
                qualification: values.qualification,
                experience: values.experience,
                description: values.description,
                licenseUrl: fileUrl.replace,
                availability: '',
            };
            const token = localStorage.getItem('token');
            // set the with credentials to true
            axios.defaults.withCredentials = true;
            // make a post request with the user data
            axios
                .post(serverUrl + 'signup/doctor', payload, {
                    headers: {
                        authtoken: token,
                    },
                })
                .then(
                    (response) => {
                        console.log('axios call', response);
                        if (response.status === 200) {
                            console.log('updated successfully');
                            const user = response?.data?.user || response?.data;
                            dispatch({
                                type: saveUserName,
                                ...user,
                            });
                            dispatch({
                                type: createUserProfile,
                                id: user._id,
                                ...user,
                                payload: response?.data,
                            });
                            closeModal();
                        }
                        if (response.status === 401) {
                            setErrMessage('System Error, contact Administrator!');
                        }
                    },
                    (error) => {
                        console.log('register error');
                        setErrMessage('System Error, contact Administrator!');
                    }
                );
        }
    };

    return (
        <>
            <Formik
                // userProfileReducer?.doctor?.speciality
                initialValues={{
                    isDoctor: userProfileReducer?.userMetaData?.isDoctor,
                    speciality: '',
                    license: userProfileReducer?.doctor?.license,
                    qualification: userProfileReducer?.doctor?.qualification,
                    experience: userProfileReducer?.doctor?.experience,
                    description: userProfileReducer?.doctor?.description,
                    file: null,
                    isSubmitting: false,
                }}
                validationSchema={Yup.object().shape({
                    isDoctor: Yup.boolean(),
                    speciality: Yup.string()
                        .max(255)
                        .when('isDoctor', {
                            is: true,
                            then: Yup.string().required('Speciality is required'),
                        }),
                    license: Yup.string()
                        .max(255)
                        .when('isDoctor', {
                            is: true,
                            then: Yup.string().required('License is required'),
                        }),
                    qualification: Yup.string()
                        .max(255)
                        .when('isDoctor', {
                            is: true,
                            then: Yup.string().required('Qualification is required'),
                        }),
                    experience: Yup.string()
                        .max(255)
                        .when('isDoctor', {
                            is: true,
                            then: Yup.string().required('Experience is required'),
                        }),
                    description: Yup.string()
                        .max(255)
                        .when('isDoctor', {
                            is: true,
                            then: Yup.string().required('Description is required'),
                        }),
                })}
                onSubmit={(values, errors) => {
                    console.log('insde submit', errors);
                    values.isSubmitting = true;
                    handleSubmit(values);
                }}
            >
                {({
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    touched,
                    values,
                }) => (
                    <Modal
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        open={open}
                        onClose={closeModal}
                    >
                        <form autoComplete="off" noValidate {...props} style={modalStyle}>
                            <Card>
                                <CardHeader
                                    subheader="The information will be edited if already exists"
                                    title="Register As a Doctor"
                                />
                                <Divider />
                                <CardContent>
                                    <div>
                                        <FormControlLabel
                                            label="I am a Doctor"
                                            name="isDoctor"
                                            control={
                                                <Checkbox
                                                    checked={values.isDoctor}
                                                    onChange={handleChange}
                                                />
                                            }
                                        />
                                    </div>
                                    {!values.isDoctor && (
                                        <div
                                            style={{
                                                width: '300px',
                                                height: '50px',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                            }}
                                        >
                                            <Alert variant="standard" severity="info">
                                                This will delete your Doctor info!
                                            </Alert>
                                        </div>
                                    )}
                                    <Grid container spacing={3}>
                                        <Grid item md={6} xs={12}>
                                            <TextField
                                                error={Boolean(
                                                    touched.speciality && errors.speciality
                                                )}
                                                helperText={touched.speciality && errors.speciality}
                                                fullWidth
                                                label="Speciality"
                                                name="speciality"
                                                select
                                                onChange={handleChange}
                                                required
                                                disabled={!values.isDoctor}
                                                value={values.speciality}
                                                variant="outlined"
                                            >
                                                isLoading ? (<div>Loading ...</div>) : (
                                                {specialityOptions.map((speciality) => (
                                                    <MenuItem key={speciality} value={speciality}>
                                                        {speciality}
                                                    </MenuItem>
                                                ))}
                                                )
                                            </TextField>
                                        </Grid>
                                        <Grid item md={6} xs={12}>
                                            <TextField
                                                error={Boolean(touched.license && errors.license)}
                                                helperText={touched.license && errors.license}
                                                fullWidth
                                                label="License"
                                                name="license"
                                                disabled={!values.isDoctor}
                                                onChange={handleChange}
                                                required
                                                value={values.license}
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item md={6} xs={12}>
                                            <TextField
                                                error={Boolean(
                                                    touched.qualification && errors.qualification
                                                )}
                                                helperText={
                                                    touched.qualification && errors.qualification
                                                }
                                                fullWidth
                                                label="Qualification"
                                                name="qualification"
                                                disabled={!values.isDoctor}
                                                onChange={handleChange}
                                                value={values.qualification}
                                                variant="outlined"
                                                required
                                            />
                                        </Grid>
                                        <Grid item md={6} xs={12}>
                                            <TextField
                                                error={Boolean(
                                                    touched.experience && errors.experience
                                                )}
                                                helperText={touched.experience && errors.experience}
                                                fullWidth
                                                label="experience"
                                                name="experience"
                                                disabled={!values.isDoctor}
                                                onChange={handleChange}
                                                value={values.experience}
                                                variant="outlined"
                                                required
                                            />
                                        </Grid>
                                        <Grid item md={6} xs={12}>
                                            <TextField
                                                error={Boolean(
                                                    touched.description && errors.description
                                                )}
                                                helperText={
                                                    touched.description && errors.experience
                                                }
                                                fullWidth
                                                label="Description"
                                                name="description"
                                                disabled={!values.isDoctor}
                                                onChange={handleChange}
                                                value={values.description}
                                                variant="outlined"
                                                required
                                            />
                                        </Grid>
                                        <Grid item md={6} xs={12}>
                                            {!fileLink && (
                                                <Button
                                                    variant="outlined"
                                                    component="label"
                                                    size="small"
                                                    onClick={() => {
                                                        setFileErr(false);
                                                        setFileErrMsg('');
                                                    }}
                                                    disabled={!values.isDoctor}
                                                    style={{ marginRight: '50px' }}
                                                >
                                                    {fileUploadTitle}
                                                    <input type="file" hidden onChange={saveFile} />
                                                </Button>
                                            )}

                                            {fileErr && (
                                                <div style={{ font: 'sans-serif', color: 'red' }}>
                                                    {' '}
                                                    {fileErrMsg}
                                                </div>
                                            )}
                                            {progress > 0 && progress < 100 && (
                                                <Box
                                                    className="mb25"
                                                    display="flex"
                                                    alignItems="center"
                                                >
                                                    <Box width="100%" mr={1}>
                                                        <BorderLinearProgress
                                                            variant="determinate"
                                                            value={progress}
                                                        />
                                                    </Box>
                                                    <Box minWidth={35}>
                                                        <Typography
                                                            variant="body2"
                                                            color="textSecondary"
                                                        >{`${Math.round(progress)}%`}</Typography>
                                                    </Box>
                                                </Box>
                                            )}
                                            {progress == 100 && (
                                                <Link
                                                    href={fileUrl}
                                                    variant="body2"
                                                    rel="noopener noreferrer"
                                                    target="_blank"
                                                >
                                                    {' '}
                                                    {fileLink}
                                                </Link>
                                            )}
                                        </Grid>
                                    </Grid>
                                    <Grid>
                                        {errMessage && (
                                            <Grid item md={12} xs={12}>
                                                <Alert variant="standard" severity="error">
                                                    {errMessage}
                                                </Alert>
                                            </Grid>
                                        )}
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
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        onClick={handleSubmit}
                                    >
                                        Save details
                                    </Button>
                                </Box>
                            </Card>
                        </form>
                    </Modal>
                )}
            </Formik>
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
