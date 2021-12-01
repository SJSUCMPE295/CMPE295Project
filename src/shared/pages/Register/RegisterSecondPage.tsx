import * as React from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';
import serverUrl from '../../utils/config';
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormHelperText,
    Link,
    TextField,
    Typography,
    Grid,
    FormControlLabel,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { createUserProfile } from '../../store/constants/action-types';
// import {storage} from '../../utils/firebase';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

const RegisterSecondPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [user, setUser] = React.useState(useSelector((state) => state.userProfileReducer.email));
    const [firstName, setFirstName] = React.useState(
        useSelector((state) => state.userProfileReducer.firstName)
    );
    const [lastName, setLastName] = React.useState(
        useSelector((state) => state.userProfileReducer.lastName)
    );

    const [fileUploadTitle, setFileUploadTitle] = React.useState('Upload License');
    var [checked, setChecked] = React.useState(false);
    const [speciality, setSpeciality] = React.useState('');
    const [gender, setGender] = React.useState('');
    // const [fileName, setFileName] = React.useState('');

    const handleSubmit = (address1, address2, city, state, zipCode, phoneNumber, gender) => {
        const isDoctor = checked;
        const payload = {
            userName: user,
            //password = 005',
            firstName: firstName,
            lastName: lastName,
            userMetaData: {
                isDoctor: checked,
                gender: gender,
            },
            profile: {
                phoneNumber: phoneNumber,
                profileActive: true,
                profilePic: '',
            },
            address: [
                {
                    address1: address1,
                    address2: address2,
                    city: '',
                    state: '',
                    country: '',
                    zipCode: '',
                },
            ],
        };
        dispatch({
            type: createUserProfile,
            isDoctor,
            address1,
            address2,
            city,
            state,
            zipCode,
            phoneNumber,
            gender,
        });
        // set the with credentials to true
        //   axios.defaults.withCredentials = true;
        //   // make a post request with the user data
        //   axios.post(serverUrl + 'user', payload).then(
        //     (response) => {
        //       if (response.status === 201) {
        //         this.setState({
        //           errorMessage: response.data,
        //           signupSuccess: true,
        //         });
        //       }
        //     },
        //     (error) => {
        //       this.setState({
        //         errorMessage: error.response.data,
        //         signupFailed: true,
        //       });
        //     }
        //   );
        history.push('app/dashboard', { replace: true });
    };

    const handleChangeSpeciality = (event) => {
        setSpeciality(event.target.value);
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    const saveFile = (event) => {
        if (event.target.files[0] === null) {
            return;
        }
        const fileName = event.target.files[0].name;
        const storage = getStorage();
        const storageRef = ref(storage, `/${user}/${fileName}`);

        const file = event.target.files[0];
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!', snapshot);
            setFileUploadTitle(snapshot.metadata.name);
        });
    };
    return (
        <>
            <Helmet>
                <title>WeCare - Register</title>
            </Helmet>
            <Box
                sx={{
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'center',
                }}
            >
                <Container maxWidth="sm" style={{ marginTop: '100px' }}>
                    <Formik
                        initialValues={{
                            address1: '',
                            address2: '',
                            city: '',
                            state: '',
                            zipcode: '',
                            phonenumber: '',
                            gender: '',
                        }}
                        validationSchema={Yup.object().shape({
                            address1: Yup.string().max(255).required('Address1 is required'),
                            city: Yup.string().max(255).required('City is required'),
                            state: Yup.string().max(255).required('State is required'),
                            zipcode: Yup.string().max(255).required('Zipcode is required'),
                            gender: Yup.string().max(255).required('Gender is required'),
                            // phonenumber: Yup.number().max(10).required('Phone Number is required'),
                            // policy: Yup.boolean().oneOf([true], 'This field must be checked'),
                        })}
                        onSubmit={(values) => {
                            handleSubmit(
                                values.address1,
                                values.address2,
                                values.city,
                                values.state,
                                values.zipcode,
                                values.phonenumber,
                                values.gender
                            );
                            // history.push('app/dashboard', { replace: true });
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
                            <form onSubmit={handleSubmit}>
                                <Box
                                    sx={{ mb: 3 }}
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Typography color="textPrimary" variant="h2">
                                        Create new account
                                    </Typography>
                                </Box>
                                <div style={{ marginLeft: '50px' }}>
                                    <FormControlLabel
                                        label="I am a Doctor"
                                        control={
                                            <Checkbox
                                                checked={checked}
                                                onChange={() => {
                                                    setChecked(!checked);
                                                }}
                                            />
                                        }
                                    />
                                </div>
                                {checked ? (
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            marginLeft: '50px',
                                        }}
                                    >
                                        <FormControl
                                            variant="standard"
                                            sx={{ m: 1, minWidth: 120 }}
                                        >
                                            <InputLabel id="demo-simple-select-standard-label">
                                                Speciality
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-standard-label"
                                                id="demo-simple-select-standard"
                                                value={speciality}
                                                onChange={handleChangeSpeciality}
                                                label="Speciality"
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Neurologists</MenuItem>
                                                <MenuItem value={20}>Psychiatrists</MenuItem>
                                                <MenuItem value={30}>Family physicians</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <Button
                                            variant="text"
                                            component="label"
                                            size="small"
                                            style={{ marginRight: '50px' }}
                                        >
                                            {fileUploadTitle}
                                            <input type="file" hidden onChange={saveFile} />
                                        </Button>
                                    </div>
                                ) : (
                                    ''
                                )}
                                <div style={{ marginLeft: '35px' }}>
                                    <FormControl variant="outlined" sx={{ m: 1, minWidth: 190 }}>
                                        <InputLabel id="demo-simple-select-standard-label">
                                            Gender
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={values.gender}
                                            onChange={handleChangeGender}
                                            label="Gender"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Female</MenuItem>
                                            <MenuItem value={20}>Male</MenuItem>
                                            <MenuItem value={30}>Do no want to specify</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <TextField
                                        error={Boolean(touched.address1 && errors.address1)}
                                        helperText={touched.address1 && errors.address1}
                                        label="Address1"
                                        margin="normal"
                                        name="address1"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.address1}
                                        variant="outlined"
                                    />
                                    <TextField
                                        error={Boolean(touched.address2 && errors.address2)}
                                        helperText={touched.address2 && errors.address2}
                                        label="Address2"
                                        margin="normal"
                                        name="address2"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.address2}
                                        variant="outlined"
                                    />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <TextField
                                        error={Boolean(touched.city && errors.city)}
                                        helperText={touched.city && errors.city}
                                        label="City"
                                        margin="normal"
                                        name="city"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.city}
                                        variant="outlined"
                                    />
                                    <TextField
                                        error={Boolean(touched.state && errors.state)}
                                        helperText={touched.state && errors.state}
                                        label="State"
                                        margin="normal"
                                        name="state"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.state}
                                        variant="outlined"
                                    />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <TextField
                                        error={Boolean(touched.zipcode && errors.zipcode)}
                                        helperText={touched.state && errors.state}
                                        label="Zipcode"
                                        margin="normal"
                                        name="zipcode"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.zipcode}
                                        variant="outlined"
                                    />
                                    <TextField
                                        error={Boolean(touched.phonenumber && errors.phonenumber)}
                                        helperText={touched.phonenumber && errors.phonenumber}
                                        label="Phone Number"
                                        margin="normal"
                                        name="phonenumber"
                                        type="number"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.phonenumber}
                                        variant="outlined"
                                    />
                                </div>
                                {/* <Box
                                    sx={{
                                        alignItems: 'center',
                                        display: 'flex',
                                        ml: 3.5,
                                    }}
                                >
                                    <Checkbox
                                        checked={values.policy}
                                        name="policy"
                                        onChange={handleChange}
                                    />
                                    <Typography color="textSecondary" variant="body1">
                                        I have read the{' '}
                                        <Link
                                            color="primary"
                                            component={RouterLink}
                                            to="#"
                                            underline="always"
                                            variant="h6"
                                        >
                                            Terms and Conditions
                                        </Link>
                                    </Typography>
                                </Box> */}
                                {/* {Boolean(touched.policy && errors.policy) && (
                                    <FormHelperText error>{errors.policy}</FormHelperText>
                                )} */}
                                <Box sx={{ py: 2, alignItems: 'center', display: 'flex', ml: 5 }}>
                                    <Button
                                        color="primary"
                                        disabled={isSubmitting}
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        style={{ width: '475px' }}
                                    >
                                        Create
                                    </Button>
                                </Box>
                                <Typography
                                    color="textSecondary"
                                    variant="body1"
                                    style={{ marginLeft: '40px' }}
                                >
                                    Have an account?{' '}
                                    <Link
                                        component={RouterLink}
                                        to="/login"
                                        variant="h6"
                                        underline="hover"
                                    >
                                        Sign in
                                    </Link>
                                </Typography>
                                {/* <Box
                                    sx={{
                                        pb: 1,
                                        pt: 3,
                                    }}
                                >
                                    <Typography
                                        align="center"
                                        color="textSecondary"
                                        variant="body1"
                                    >
                                        or signup with social platform
                                    </Typography>
                                </Box> */}
                                {/* <Grid
                                    container
                                    spacing={3}
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Grid item xs={12} md={6}>
                                        <Button
                                            fullWidth
                                            startIcon={<GoogleIcon />}
                                            onClick={handleSubmit}
                                            size="large"
                                            variant="contained"
                                        >
                                            Login with Google
                                        </Button>
                                    </Grid>
                                </Grid> */}
                            </form>
                        )}
                    </Formik>
                </Container>
            </Box>
        </>
    );
};

export default RegisterSecondPage;
