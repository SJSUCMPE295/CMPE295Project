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

    const handleImageUpload = (event) => {
        console.log('Reached upload image task');
        var file = event.target.files[0];
        if (file == null || !file) {
            console.log('No image');
            setShowErrorMsg('Error: No image available');
        } else {
            setImage(file);
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
                        setFindImage(true);
                    })
                    .catch((error) => {
                        switch (error.code) {
                            case 'storage/object-not-found':
                                setUrl('');
                                setFindImage(false);
                                break;
                        }
                    });
            });
        }
    };

    const handleImageChange = (e) => {
        console.log('Reached image change');
        if (findImage) {
            console.log('Image uploaded successfully to firebase!');
            alert('Image uploaded successfully to firebase!');
        } else {
            console.log('Image upload failed!');
            alert('Image upload failed! Please try again');
        }
    };

    const handleNameChange = (e) => {
        setServiceName(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handlePhoneNumChange = (e) => {
        setPhoneNum(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleStateChange = (e) => {
        setState(e.target.value);
    };

    const handleZipcodeChange = (e) => {
        setZipcode(e.target.value);
    };

    const handleAvailabilityChange = (date) => {
        setAvailability(date);
    };

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };

    const handleSetCheck = (e) => {
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
        } else {
            window.alert('Failed to upload service data!');
            console.log('Failed to upload service data!');
            window.location.reload();
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
                                    {/* <TextField
                                    required
                                    id="outlined-required-input"
                                    label="Select State"
                                    variant="outlined"
                                    select
                                    SelectProps={{ native: true }}
                                    sx={{ m: 1, width: '50ch' }}
                                    >
                                    {states.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                    </TextField> */}
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
                            <Divider sx={{ pt: 2 }} />
                            <Grid
                                container
                                rowSpacing={1}
                                columnSpacing={{ xs: 3, sm: 3, md: 3 }}
                                zIndex={1}
                                paddingTop={3}
                            >
                                <Grid item xs={3}>
                                    <input type="file" onChange={handleImageUpload} />
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        size="medium"
                                        onClick={handleImageChange}
                                    >
                                        Upload Image
                                    </Button>
                                </Grid>
                                <Grid item xs={3}></Grid>
                                <Grid item xs={3}></Grid>
                                <Grid item xs={3}>
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        onClick={handleSubmit}
                                        size="large"
                                        fullWidth
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
