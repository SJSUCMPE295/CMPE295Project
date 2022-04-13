import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';
import serverUrl from '../../utils/config';
import countries from "i18n-iso-countries";
// import './Register.css';
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
    Select
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { createUserProfile, saveUserName } from '../../store/constants/action-types';
// import {storage} from '../../utils/firebase';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
// import RootState from '../../store/rootReducer';

const RegisterSecondPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(true);
    countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
    const countryObj = countries.getNames("en",{select:"official"});
    const countryArray = Object.entries(countryObj).map(([key, value]) =>{
        return {
            label: key,
            value: value
        }
    })
    const [user, setUser] = React.useState(useSelector((state: any) => state.loginReducer.email));
    const genderOptions = [
        {      
           key: 1,
           value: "Female"
        },
        {      
            key: 1,
            value: "Male"
         },
         {      
            key: 1,
            value: "Do not want to specify"
         }
        ];
    const [fileUploadTitle, setFileUploadTitle] = React.useState('Upload License');
    var [checked, setChecked] = React.useState(false);
    const [speciality, setSpeciality] = React.useState('');
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
   
    const handleSubmit = (values) => {
        console.log('inside submit');
        console.log("first page data",  user);
        const isDoctor = checked;
        const payload = {
            userName: user,
            //password = 005',
            firstName: values.firstName,
            lastName: values.lastName,
            userMetaData: {
                isDoctor: checked,
                gender: values.gender,
            },
            profile: {
                phoneNumber: values.phoneNumber,
                profileActive: true,
                profilePic: '',
            },
            address: 
                {
                    location: values.address1,
                    // address2: address2,
                    city: values.city,
                    state: values.state,
                    country: values.country,
                    zipCode: values.zipCode,
                },
        };
        console.log("payload", payload);
        // set the with credentials to true
          axios.defaults.withCredentials = true;
          // make a post request with the user data
          axios.post(serverUrl + 'signup/user', payload).then(
            (response) => {
                console.log("axios call", response);
              if (response.status === 200) {
                  console.log("updated successfully");
                  dispatch({
                    type: saveUserName,
                    firstName: response.data.data.firstName,
                    lastName: response.data.data.lastName,
                    userName: response.data.data.userName,
                });
                dispatch({
                    type: createUserProfile,
                    id: response.data.data._id,
                    userMetaData: response.data.data.userMetaData,
                      profile: response.data.data.profile,
                      address: response.data.data.address,
                });
                  history.push('app/dashboard', { replace: true });
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
        
    };

    const handleChangeSpeciality = (event) => {
        setSpeciality(event.target.value);
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
                            firstName: '',
                            lastName: '',
                            address1: '',
                            city: '',
                            state: '',
                            zipcode: '',
                            phonenumber: '',
                            gender: '',
                            country: '',
                            isSubmitting: false
                        }}
                        validationSchema={Yup.object().shape({
                            firstName: Yup.string().max(255).required('First Name is required'),
                            lastName: Yup.string().max(255).required('Last Name is required'),
                            address1: Yup.string().max(255).required('Address is required'),
                            city: Yup.string().max(255).required('City is required'),
                            country: Yup.string().max(255).required('Country is required'),
                            state: Yup.string().max(255).required('State is required'),
                            zipcode: Yup.string().max(255).required('Zipcode is required'),
                            gender: Yup.string().max(255).required('Gender is required'),
                            phonenumber: Yup.string()
                                        .test('len', 'Phone Number should be 10 digits', (val) => val.length === 10)
                            // policy: Yup.boolean().oneOf([true], 'This field must be checked'),
                        })}
                        onSubmit={(values) => {
                            console.log("insde submit");
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
                            <form onSubmit={handleSubmit}>
                                <Box
                                    sx={{ mb: 3 }}
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Typography color="textPrimary" variant="h2">
                                        New User! Complete the Registration
                                    </Typography>
                                </Box>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <TextField
                                        error={Boolean(touched.firstName && errors.firstName)}
                                        helperText={touched.firstName && errors.firstName}
                                        label="First Name"
                                        margin="normal"
                                        name="firstName"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.firstName}
                                        variant="outlined"
                                        required
                                        style={{
                                            width:"250px"
                                        }}
                                    />
                                    <TextField
                                        error={Boolean(touched.lastName && errors.lastName)}
                                        helperText={touched.lastName && errors.lastName}
                                        label="Last Name"
                                        margin="normal"
                                        name="lastName"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.lastName}
                                        variant="outlined"
                                        required
                                        style={{
                                            width:"250px"
                                        }}
                                    />
                                </div>
                                <div >
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
                                            
                                        }}
                                    >
                                        <FormControl
                                            variant="standard"
                                            sx={{ m: 1, minWidth: 120 }}
                                        >
                                            <InputLabel id="demo-simple-select-standard-label" >
                                                Speciality
                                            </InputLabel>
                                            
                                            <Select
                                                labelId="demo-simple-select-standard-label"
                                                id="demo-simple-select-standard"
                                                value={speciality}
                                                onChange={handleChangeSpeciality}
                                                label="Speciality"
                                                style={{width:"250px"}}
                                            > 
                                            
                                                isLoading ? (<div>Loading ...</div>) :
                                        ({specialityOptions.map((speciality) => (
                                          <MenuItem key={speciality} value={speciality}>{speciality}</MenuItem>
                                        ))})
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
                                <div style={{  display: 'flex', justifyContent: 'flex-start' }}>
                                    <div style={{
                                            width:"250px"
                                        }}>
                                         <TextField
                                        error={Boolean(touched.gender && errors.gender)}
                                        helperText={touched.gender && errors.gender}
                                        label="Gender"
                                        select
                                        margin="normal"
                                        name="gender"
                                        onBlur={handleBlur}
                                        onChange={handleChange("gender")}
                                        value={values.gender}
                                        variant="outlined"
                                        fullWidth
                                        required
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {genderOptions.map((state) => (
                                            <MenuItem key={state.key} value={state.value}>{state.value}</MenuItem>
                                        ))}
                                    </TextField>
                                    </div>
                                </div>
                                <div style={{  display: 'flex', justifyContent: 'flex-start' }}>
                                    <TextField
                                        error={Boolean(touched.phonenumber && errors.phonenumber)}
                                        helperText={touched.phonenumber && errors.phonenumber}
                                        label="Phone Number"
                                        margin="normal"
                                        name="phonenumber"
                                        type="number"
                                        // onInput={(e)=>{ 
                                        //     e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
                                        // }}
                                        style={{
                                            width:"250px",
                                            height:"60px",
                                        }}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.phonenumber}
                                        variant="outlined"
                                    />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'flex-start'}}>
                                    <TextField
                                        error={Boolean(touched.address1 && errors.address1)}
                                        helperText={touched.address1 && errors.address1}
                                        label="Address"
                                        margin="normal"
                                        name="address1"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.address1}
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
                                        required
                                        style={{
                                            width:"250px"
                                        }}
                                    />
                                    <div style={{ width:"250px"}}>
                                    <TextField
                                        error={Boolean(touched.country && errors.country)}
                                        helperText={touched.country && errors.country}
                                        label="Country"
                                        select
                                        margin="normal"
                                        name="country"
                                        onBlur={handleBlur}
                                        onChange={handleChange("country")}
                                        value={values.country}
                                        variant="outlined"
                                        fullWidth
                                        required
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {countryArray.map((state) => (
                                            <MenuItem key={state.label} value={state.value}>{state.value}</MenuItem>
                                        ))}
                                    </TextField>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
                                            required
                                            style={{
                                                width:"250px"
                                            }}
                                        />
                                    <TextField
                                        error={Boolean(touched.zipcode && errors.zipcode)}
                                        helperText={touched.zipcode && errors.zipcode}
                                        label="Zipcode"
                                        margin="normal"
                                        name="zipcode"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.zipcode}
                                        variant="outlined"
                                        required
                                        style={{
                                            width:"250px"
                                        }}
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
                                        disabled={values.isSubmitting}
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        style={{ width: '475px' }}
                                        // onClick={()=>handleSubmit}
                                        // onClick={()=>{history.push('app/dashboard', { replace: true })}}
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
