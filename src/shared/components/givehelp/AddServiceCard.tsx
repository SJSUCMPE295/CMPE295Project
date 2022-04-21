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

const metadata = {
    contentType: 'image/jpeg',
};

const AddServiceCard: FunctionComponent<any> = ({ userProfileReducer = {}, ...props }) => {
    const [check, setCheck] = useState(false);
    const userId = userProfileReducer.id;
    const [serviceName, setServiceName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState(null);
    const [country, setCountry] = useState('');
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
    const [availabilityError, setAvailabilityError] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [phoneNumError, setPhoneNumError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [cityError, setCityError] = useState("");
    const [stateError, setStateError] = useState("");
    const [zipcodeError, setZipcodeError] = useState("");
    const [countryError, setCountryError] = useState("");

    let validateForm = () => {
        if (serviceName === "" || serviceName === null) {
            setServiceNameError("Please enter service name");
            return false;
        } else if(availability.getTime() < today.getTime()) {
            setAvailabilityError("Please select a valid date!");
        } else if (category === "" || category === null) {
            setCategoryError("Please enter a category");
            return false;
        } else if (description === "" || description === null) {
            setDescriptionError("Please enter description of service");
            return false;
        } else if (address === "" || address === null) {
            setAddressError("Please enter a valid address");
            return false;
        }  else if (city === "" || city === null) {
            setCityError("Please enter your city of residence");
            return false;
        } else if (state === "" || city === null) {
            setCityError("Please enter your state of residence");
            return false;
        } else if (country === "" || country === null) {
            setCountryError("Please enter your country of residence");
            return false;
        } else if (zipcode === null || zipcode === "") {
            setZipcodeError("Please enter your zipcode");
            return false;
        } else if (zipcode.toString().length != 5) {
            setZipcodeError("Please enter a valid zipcode!");
            return false;
        } else if (phoneNum === "" || phoneNum === null) {
            setPhoneNumError("Please enter your contact number");
            return false;
        } else if (phoneNum.toString().length != 10) {
            setPhoneNumError("Please enter a valid phone number!");
            return false;
        } else {
            return true;
        }
    };

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
        setServiceName(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategoryError("")
        setCategory(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescriptionError("")
        setDescription(e.target.value);
    };

    const handlePhoneNumChange = (e) => {
        setPhoneNumError("")
        setPhoneNum(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddressError("")
        setAddress(e.target.value);
    };

    const handleCityChange = (e) => {
        setCityError("")
        setCity(e.target.value);
    };

    const handleStateChange = (e) => {
        setStateError("")
        setState(e.target.value);
    };

    const handleZipcodeChange = (e) => {
        setZipcodeError("")
        setZipcode(e.target.value);
    };

    const handleAvailabilityChange = (date) => {
        setAvailabilityError("")
        setAvailability(date);
    };

    const handleCountryChange = (e) => {
        setCountryError("")
        setCountry(e.target.value);
    };

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
            setAddress(address.location);
            setCity(address.city);
            setCountry(address.country);
            setZipcode(address.zipCode);
            setState(address.state);
            setPhoneNum(profile.phoneNumber);
        } else {
            setAddress('');
            setCity('');
            setCountry('');
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
                                    <div style={{ color: 'red' }}>{serviceNameError}</div>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Service Name"
                                        defaultValue={serviceName}
                                        onChange={handleNameChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '30ch' }}
                                        helperText="Car pool, Accomodation etc. "
                                    />
                                </Grid>
                                <Grid item xs={4} alignItems="right">
                                    <div style={{ color: 'red' }}>{availabilityError}</div>
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
                                    <div style={{ color: 'red' }}>{categoryError}</div>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Category Name"
                                        defaultValue={category}
                                        onChange={handleCategoryChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
                                    />
                                </Grid>
                                <Grid item xs={3}></Grid>
                                <Grid item xs={3}>
                                    <div style={{ color: 'red' }}>{descriptionError}</div>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Description"
                                        defaultValue={description}
                                        onChange={handleDescriptionChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
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
                                {/* <Grid item xs={4} >
                                    <Button color="primary" variant="contained" size="large">
                                        Upload Image
                                    </Button>
                                </Grid> */}
                            </Grid>
                            <Grid
                                container
                                rowSpacing={1}
                                columnSpacing={{ xs: 3, sm: 3, md: 3 }}
                                zIndex={1}
                            >
                                <Grid item xs={6}>
                                    <div style={{ color: 'red' }}>{addressError}</div>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Address"
                                        value={address}
                                        onChange={handleAddressChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{ color: 'red' }}>{cityError}</div>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="City"
                                        value={city}
                                        onChange={handleCityChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{ color: 'red' }}>{stateError}</div>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="State"
                                        value={state}
                                        onChange={handleStateChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{ color: 'red' }}>{countryError}</div>
                                    <TextField
                                        required
                                        id="outlined-required-input"
                                        label="Country"
                                        value={country}
                                        onChange={handleCountryChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{ color: 'red' }}>{zipcodeError}</div>
                                    <TextField
                                        required
                                        id="outlined-required-input"
                                        label="Zipcode"
                                        value={zipcode}
                                        onChange={handleZipcodeChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{ color: 'red' }}>{phoneNumError}</div>
                                    <TextField
                                        required
                                        id="outlined-required-input"
                                        label="Phone Number"
                                        value={phoneNum}
                                        onChange={handlePhoneNumChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
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
