import * as React from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    TextField,
    Divider,
    FormControlLabel,
    FormGroup,
    Grid,
} from '@material-ui/core';
import { FormHelperText } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useState, FunctionComponent, forwardRef } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import countries from 'i18n-iso-countries';
const { getStates } = require('country-state-picker');
const { getCode } =require('country-list');
import CountryData from "./CountryData.json";

const metadata = {
    contentType: 'image/jpeg',
};

const AddServiceCard: FunctionComponent<any> = ({ userProfileReducer = {}, ...props }) => {
    const [check, setCheck] = useState(false);
    const userId = userProfileReducer._id;
    // console.log("User Id")
    // console.log(userProfileReducer._id)
    const [serviceName, setServiceName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [dialCode, setDialCode] = useState("+1");
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState(null);
    const [country, setCountry] = useState("United States of America");
    const [countryNames, setCountryNames] = useState(CountryData);
    const [code,setCode] = useState('us');
    const [availability, setAvailability] = useState(new Date());
    const [datePickerIsOpen, togglePicker] = useState(false);
    const [showErrorMsg, setShowErrorMsg] = React.useState('');
    const storage = getStorage();
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState('');
    const [fileUploadTitle, setFileUploadTitle] = React.useState('Upload Resource Pic');
    const [findImage, setFindImage] = React.useState(false);
    const today=new Date();

    const [serviceNameError, setServiceNameError] = useState("");
    const [ifServiceError, setIfServiceError] = useState(false);
    const [availabilityError, setAvailabilityError] = useState("");
    const [ifAvailabilityError, setIfAvailabilityError] = useState(false);
    const [categoryError, setCategoryError] = useState("");
    const [ifCategoryError, setIfCategoryError] = useState(false);
    const [descriptionError, setDescriptionError] = useState("");
    const [ifDescriptionError, setIfDescriptionError] = useState(false);
    const [phoneNumError, setPhoneNumError] = useState("");
    const [ifPhoneNumError, setIfPhoneNumError] = useState(false);
    const [addressError, setAddressError] = useState("");
    const [ifAddressError, setIfAddressError] = useState(false);
    const [cityError, setCityError] = useState("");
    const [ifCityError, setIfCityError] = useState(false);
    const [stateError, setStateError] = useState("");
    const [zipcodeError, setZipcodeError] = useState("");
    const [ifZipcodeError, setIfZipcodeError] = useState(false);
    const [countryError, setCountryError] = useState("");

    let validateForm = () => {
        if (serviceName === "" || serviceName === null) {
            setServiceNameError("Please enter service name");
            setIfServiceError(true);
            return false;
        } else if(availability.getTime() < today.getTime()) {
            setAvailabilityError("Please select a valid date!");
            setIfAvailabilityError(true);
            return false;
        } else if (category === "" || category === null) {
            setCategoryError("Please enter a category");
            setIfCategoryError(true);
            return false;
        } else if (description === "" || description === null) {
            setDescriptionError("Please enter description of service");
            setIfDescriptionError(true);
            return false;
        } else if (address === "" || address === null) {
            setAddressError("Please enter a valid address");
            setIfAddressError(true);
            return false;
        }  else if (city === "" || city === null) {
            setCityError("Please enter your city of residence");
            setIfCityError(true)
            return false;
        } else if (state === "" || city === null) {
            setCityError("Please enter your state of residence");
            setIfCityError(true)
            return false;
        } else if (country === "" || country === null) {
            setCountryError("Please enter your country of residence");
            return false;
        } else if (zipcode === null || zipcode === "") {
            setZipcodeError("Please enter your zipcode");
            return false;
        } else if (zipcode.toString().length != 5) {
            setZipcodeError("Please enter a valid zipcode!");
            setIfZipcodeError(true);
            return false;
        } else if (phoneNum === "" || phoneNum === null) {
            setPhoneNumError("Please enter your contact number");
            setIfPhoneNumError(true);
            return false;
        } else if (phoneNum.toString().length != 10) {
            setPhoneNumError("Please enter a valid phone number!");
            setIfPhoneNumError(true);
            return false;
        } else {
            return true;
        }
    };

    countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
    const countryObj = countries.getNames('en', { select: 'official' });
    const countryArray = Object.entries(countryObj).map(([key, value]) => {
        return {
            label: key,
            value: value,
        };
    });

    const handleImageUpload = (event) => {
        console.log('Reached upload image task');
        var file = event.target.files[0];
        if (file == null || !file) {
            console.log('No image');
            setShowErrorMsg('Error: No image available');
            setFindImage(false);
        } else {
            setImage(file);
            setFindImage(true);
            console.log(file);
            const storageRef = ref(
                storage,
                `/${userProfileReducer.userName}/services/${file.name}`
            );
            uploadBytes(storageRef, file).then((snapshot) => {
                console.log('Uploaded a blob or file!', snapshot.metadata);
                setFileUploadTitle(snapshot.metadata.name);
                setFindImage(true);
                setShowErrorMsg('Image Uploaded successfully to firebase!');
                getDownloadURL(storageRef)
                    .then((url) => {
                        console.log(url);
                        setUrl(url);
                        console.log('url', url);
                        // setFindImage(true);
                    })
                    .catch((error) => {
                        switch (error.code) {
                            case 'storage/object-not-found':
                                setUrl('');
                                // setFindImage(false);
                                break;
                        }
                    });
            });
        }
    };

    const handleImageChange = (e) => {
        console.log('Reached image change');
        if (!findImage) {
            console.log('Image upload failed!');
            alert('Image upload failed! Please try again');
        } else {
            console.log('Image uploaded successfully');
            alert('Image uploaded to firebase!');
        }
    };

    const handleNameChange = (e) => {
        setServiceNameError("")
        setIfServiceError(false)
        setServiceName(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategoryError("")
        setIfCategoryError(false)
        setCategory(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescriptionError("")
        setIfDescriptionError(false)
        setDescription(e.target.value);
    };

    const handlePhoneNumChange = (e) => {
        setPhoneNumError("")
        setIfPhoneNumError(false)
        setPhoneNum(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddressError("")
        setIfAddressError(false)
        setAddress(e.target.value);
    };

    const handleCityChange = (e) => {
        setCityError("")
        setIfCityError(false)
        setCity(e.target.value);
    };

    const handleStateChange = (e) => {
        setStateError("")
        setState(e.target.value);
    };

    const handleZipcodeChange = (e) => {
        setZipcodeError("")
        setIfZipcodeError(false)
        setZipcode(e.target.value);
    };

    const handleAvailabilityChange = (date) => {
        setAvailabilityError("")
        setIfAvailabilityError(false)
        setAvailability(date);
    };

    const handleCountryChange = (e) => {
        setCountryError("")
        setCountry(e.target.value);
        const obj = countryNames.find(({ name }) => name === e.target.value);
        setCode(getCode(e.target.value))
        setDialCode(obj.dial_code)
    };

    const stateObj = getStates(code.toLowerCase())   
    const stateArray = Object.entries(stateObj).map(([key, value]) => {
        return {
            label: value,
            value: value,
        };
    });

    const handleSetCheck = (e) => {
        setAddressError("");
        setCityError("");
        setStateError("");
        setCountryError("");
        setZipcodeError("");
        setPhoneNumError("");
        setCheck(!check);
        if (!check) {
            const { address = {}, profile = {} } = userProfileReducer;
            const obj = countryNames.find(({ code }) => code === getCode(address.country));
            setAddress(address.location);
            setCity(address.city);
            setCountry(address.country);
            setZipcode(address.zipCode);
            setState(address.state);
            setPhoneNum(profile.phoneNumber);
            setCode(getCode(address.country))
            setDialCode(obj.dial_code)
        } else {
            setAddress('');
            setCity('');
            setCountry('United States of America');
            setZipcode('');
            setState('');
            setPhoneNum('');
        }
    };
    const handleTogglePicker = (e) => {
        togglePicker(!datePickerIsOpen);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateForm();

        if (isValid) {
            const res = await fetch('/api/givehelp/service', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    UserId: userId,
                    Service_Name: serviceName,
                    Category: category,
                    Description: description,
                    Phone_Number: phoneNum,
                    Address: address,
                    availableDate: availability,
                    City: city,
                    State: state,
                    Zipcode: zipcode,
                    Country: country,
                    ImageUrl: url,
                }),
            });

            const data = await res.json();
            console.log(data);

            if (res.status === 200) {
                window.alert('Service added!');
                console.log('Service added!');
                window.location.reload();
            } else if (!findImage){
                window.alert("Please select an image to upload!");
                console.log("Please select an image to upload!");
            } else {
                window.alert('Failed to upload service data!');
                console.log('Failed to upload service data!');
                window.location.reload();
            }
        }
    };

    return (
        <Box {...props}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    width: 500,
                    height: 700,
                    p: 1,
                }}
            >
                <form autoComplete="off" noValidate {...props}>
                    <Card
                        sx={{
                            height: 700,
                            width: 900,
                            justifyContent: 'center',
                        }}
                    >
                        <CardHeader
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                            }}
                            titleTypographyProps={{ variant: 'h2' }}
                            subheader="update the resource/service details you would like to provide"
                            title="Give Help"
                        />
                        <Divider />
                        <CardContent>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 9, md: 3 }}>
                                <Grid item xs={4}>
                                    <TextField
                                        id="filled-basic"
                                        label="Type"
                                        variant="filled"
                                        sx={{ m: 1, width: '30ch' }}
                                        value="Service"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    {/* <div style={{ color: 'red' }}>{serviceNameError}</div> */}
                                    <TextField
                                        required
                                        error={ifServiceError}
                                        id="outlined-required"
                                        label="Service Name"
                                        defaultValue={serviceName}
                                        onChange={handleNameChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '30ch' }}
                                        placeholder="Car Pool, Accomodation etc"
                                        helperText={serviceNameError}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}  

                                    />
                                    <FormHelperText style={{color: 'red'}}></FormHelperText>
                                </Grid>
                                <Grid item xs={4} alignItems="right">
                                    {/* <div style={{ color: 'red' }}>{availabilityError}</div> */}
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        onClick={handleTogglePicker}
                                        size="large"
                                    >
                                        Select Availability
                                    </Button>
                                    <DatePicker
                                        popperProps={{
                                            positionFixed: true,
                                        }}
                                        selected={availability}
                                        onChange={handleAvailabilityChange}
                                        // todayButton={"Today"}
                                        open={datePickerIsOpen}
                                        onClickOutside={handleTogglePicker}
                                        showOverlay
                                        confirmBtnText="OK"
                                        cancelBtnText="Cancel"
                                    />
                                    <FormHelperText>*Only dates from future are valid</FormHelperText>
                                    <FormHelperText style={{color: 'red'}}>{availabilityError}</FormHelperText>
                                </Grid>
                            </Grid>

                            <Grid
                                container
                                rowSpacing={6}
                                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                zIndex={3}
                                justify-content="center"
                            >
                                <Grid item xs={3}>
                                    {/* <div style={{ color: 'red' }}>{categoryError}</div> */}
                                    <TextField
                                        required
                                        error={ifCategoryError}
                                        id="outlined-required"
                                        label="Category Name"
                                        defaultValue={category}
                                        onChange={handleCategoryChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
                                        helperText={categoryError}
                                    />
                                </Grid>
                                <Grid item xs={3}></Grid>
                                <Grid item xs={3}>
                                    {/* <div style={{ color: 'red' }}>{descriptionError}</div> */}
                                    <TextField
                                        required
                                        error={ifDescriptionError}
                                        id="outlined-required"
                                        label="Description"
                                        defaultValue={description}
                                        onChange={handleDescriptionChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
                                        helperText={descriptionError}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={6}>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Use my profile address"
                                            onChange={handleSetCheck}
                                        />
                                    </FormGroup>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                rowSpacing={1}
                                columnSpacing={{ xs: 3, sm: 3, md: 3 }}
                                zIndex={1}
                            >
                                <Grid item xs={6}>
                                    {/* <div style={{ color: 'red' }}>{addressError}</div> */}
                                    <TextField
                                        required
                                        error={ifAddressError}
                                        id="outlined-required"
                                        label="Address"
                                        value={address}
                                        onChange={handleAddressChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
                                        helperText={addressError}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    {/* <div style={{ color: 'red' }}>{cityError}</div> */}
                                    <TextField
                                        required
                                        error={ifCityError}
                                        id="outlined-required"
                                        label="City"
                                        value={city}
                                        onChange={handleCityChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
                                        helperText={cityError}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        label="Select State"
                                        name="state"
                                        onChange={handleStateChange}
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        value={state}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
                                        InputLabelProps={{ shrink: true }}
                                    >
                                        {stateArray.map((option) => (
                                            <option key={option.label} value={option.value}>
                                                {option.value}
                                            </option>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        label="Select Country"
                                        name="country"
                                        onChange={handleCountryChange}
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        value={country}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
                                        InputLabelProps={{ shrink: true }}
                                    >
                                        {countryArray.map((option) => (
                                            <option key={option.label} value={option.value}>
                                                {option.value}
                                            </option>
                                        ))}
                                    </TextField>
                                </Grid>
                            </Grid>
                                <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={3}>
                                        {/* <div style={{ color: 'red' }}>{zipcodeError}</div> */}
                                        <TextField
                                            required
                                            error={ifZipcodeError}
                                            id="outlined-required-input"
                                            label="Zipcode"
                                            value={zipcode}
                                            onChange={handleZipcodeChange}
                                            variant="outlined"
                                            sx={{ m: 1, width: '50ch' }}
                                            InputLabelProps={{ shrink: zipcode?true:false }}
                                            helperText={zipcodeError}
                                        />
                                    </Grid>
                                    <Grid item xs={3}></Grid>
                                    <Grid item xs={1}>
                                        <TextField
                                            id="outlined-read-only-input"
                                            sx={{ m: 1 }}
                                            value={dialCode}
                                            style = {{width: 70}}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        {/* <div style={{ color: 'red' }}>{phoneNumError}</div> */}
                                        <TextField
                                            required
                                            error={ifPhoneNumError}
                                            id="outlined-required-input"
                                            label="Phone Number"
                                            value={phoneNum}
                                            onChange={handlePhoneNumChange}
                                            variant="outlined"
                                            sx={{ m: 1, width: '41ch' }}
                                            helperText={phoneNumError}
                                        />
                                    </Grid>
                                </Grid>
                            <Divider sx={{ pt: 4 }} />
                            <Grid
                                container
                                rowSpacing={1}
                                columnSpacing={{ xs: 3, sm: 3, md: 3 }}
                                zIndex={1}
                                paddingTop={3}
                            >
                                <Grid item xs={3}>
                                    <input type="file" onChange={handleImageUpload} />
                                </Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={3}>
                                    <Button
                                            color="primary"
                                            variant="contained"
                                            size="medium"
                                            onClick={handleImageChange}
                                        >
                                            Upload Image
                                        </Button>
                                </Grid>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={3}>
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        onClick={handleSubmit}
                                        size="medium"
                                    >
                                        Save details
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </form>
            </Box>
        </Box>
    );
};
const mapStateToProps = ({ userProfileReducer }) => ({
    userProfileReducer,
});
const mapDispatchToProps = {};

const ConnectedAddServiceCard = connect(mapStateToProps, mapDispatchToProps)(AddServiceCard);

export default ConnectedAddServiceCard;
