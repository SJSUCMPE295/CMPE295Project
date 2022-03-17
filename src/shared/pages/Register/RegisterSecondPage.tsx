import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';
import serverUrl from '../../utils/config';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import './Register.css';
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

const RegisterSecondPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = React.useState(useSelector((state: any) => state.userProfileReducer.userName));
    const genderOptions = [
        "Female",
        "Male",
        "Do not want to specify"
    ]

    const [fileUploadTitle, setFileUploadTitle] = React.useState('Upload License');
    var [checked, setChecked] = React.useState(false);
    const [speciality, setSpeciality] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [state, setState] = React.useState('');
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
                //history.push('app/dashboard', { replace: true });
              // this.setState({
              //   errorMessage: response.data,
              //   signupSuccess: true,
              // });
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
   
    const handleSubmit = (address1, city, zipCode, phoneNumber) => {
        console.log('inside submit');
        console.log("first page data",  user);
        const isDoctor = checked;
        const payload = {
            userName: user,
            userMetaData: {
                isDoctor: checked,
                gender: gender,
            },
            profile: {
                phoneNumber: phoneNumber,
                profileActive: true,
                profilePic: '',
            },
            address: 
                {
                    location: address1,
                    city: city,
                    state: state,
                    country: country,
                    zipCode: zipCode,
                },
        };
        console.log("payload", payload);
        // set the with credentials to true
          axios.defaults.withCredentials = true;
          // make a post request with the user data
          axios.post(serverUrl + 'signup/user/register', payload).then(
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
                    userMetaData: response.data.data.userMetaData,
                      profile: response.data.data.profile,
                      address: response.data.data.address,
                });
                //   dispatch({
                //     type: createUserProfile,
                //     isDoctor,
                //     address1,
                //     city,
                //     state,
                //     zipCode,
                //     country,
                //     phoneNumber,
                //     gender,
                // });
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

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    const selectCountry = (val) => {
        setCountry(val);
      }

    const selectState = (val) => {
        setState(val);
      }

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
                            city: '',
                            zipcode: '',
                            phonenumber: '',
                            isSubmitting: false
                        }}
                        validationSchema={Yup.object().shape({
                            address1: Yup.string().max(255).required('Address is required'),
                            city: Yup.string().max(255).required('City is required'),
                            // country: Yup.string().max(255).required('Country is required'),
                            // state: Yup.string().max(255).required('State is required'),
                            zipcode: Yup.string().max(255).required('Zipcode is required'),
                            // gender: Yup.string().max(255).required('Gender is required'),
                            phonenumber: Yup.number().max(10).required('Phone Number is required'),
                            // policy: Yup.boolean().oneOf([true], 'This field must be checked'),
                        })}
                        onSubmit={(values) => {
                            console.log("insde submit");
                            values.isSubmitting = true;
                            handleSubmit(
                                values.address1,
                                values.city,
                                values.zipcode,
                                values.phonenumber
                                // values.gender
                            );
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
                                <div style={{  display: 'flex', justifyContent: 'flex-start' , marginTop:"20px"}}>
                                    <div style={{
                                            width:"250px"
                                        }}>
                                    <FormControl variant="outlined" sx={{ minWidth: 190 }}>
                                        <InputLabel id="demo-simple-select-standard-label">
                                            Gender
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={gender}
                                            onChange={handleChangeGender}
                                            label="Gender"
                                            style={{width:"250px"}}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {genderOptions.map((state) => (
                                          <MenuItem value={state}>{state}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    </div>
                                </div>
                                <div style={{  display: 'flex', justifyContent: 'flex-start', marginTop:"15px" }}>
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
                                        style={{
                                            width:"250px"
                                        }}
                                    />
                                    <div style={{marginTop:"17px"}}>
                                    <FormControl variant="outlined" sx={{ minWidth: 200 }}>
                                        {/* <InputLabel id="demo-simple-select-standard-label">
                                            Country
                                        </InputLabel> */}
                                     <CountryDropdown
                                        value={country}
                                        onChange={(val) => selectCountry(val)}
                                        style={{
                                            width:"250px",
                                            height:"60px",
                                            borderRadius: "4px",
                                            // fontSize: 15,
                                            borderColor: "grey",
                                            color:"grey",
                                            fontFamily: "'Roboto','Helvetica','Arial',sans-serif",
                                            fontWeight: 400,
                                            fontSize: "1rem"
                                        }}
                                          tabIndex={1000}
                                        />
                                        </FormControl>
                                    {/* <FormControl variant="outlined" sx={{ minWidth: 190 }}>
                                        <InputLabel id="demo-simple-select-standard-label">
                                            Country
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={country}
                                            onChange={handleChangeCountry}
                                            label="Country"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {countryOptions.map((state) => (
                                          <MenuItem value={state}>{state}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl> */}
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <FormControl variant="outlined" sx={{ minWidth: 190, marginTop:"15px" }}>
                                        {/* <InputLabel id="demo-simple-select-standard-label">
                                            Select State
                                        </InputLabel> */}
                                <RegionDropdown
                                    country={country}
                                    value={state}
                                    onChange={(val) => selectState(val)}
                                    blankOptionLabel={"Select State"}
                                    defaultOptionLabel={"Select State"}
                                    style={{
                                        width:"250px",
                                        height:"60px",
                                        borderRadius: "4px",
                                        // fontSize: 15,
                                        borderColor: "grey",
                                        color:"grey",
                                        fontFamily: "'Roboto','Helvetica','Arial',sans-serif",
                                        fontWeight: 400,
                                        fontSize: "1rem"
                                    }}
                                      tabIndex={1000} />
                                      </FormControl>
                                {/* <FormControl variant="outlined" sx={{ minWidth: 190 }}>
                                        <InputLabel id="demo-simple-select-standard-label">
                                            State
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={state}
                                            onChange={handleChangeState}
                                            label="State"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {statesOptions.map((state) => (
                                          <MenuItem value={state}>{state}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl> */}
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
