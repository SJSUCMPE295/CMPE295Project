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
import { useState, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import countries from 'i18n-iso-countries';
const { getStates } = require('country-state-picker');
const { getCode } =require('country-list');
import CountryData from "./CountryData.json";


// const Input = styled('input')({
//     display: 'none',
//   });

// const Alert = React.forwardRef(function Alert(props, ref) {
//     return <MuiAlert elevation={6}  ref={ref} variant="filled" {...props} />;
//   });

const metadata = {
    contentType: 'image/jpeg',
};

const AddResourceCard: FunctionComponent<any> = ({ userProfileReducer = {}, ...props }) => {
    const [check, setCheck] = useState(false);
    const userId = userProfileReducer._id;
    const [resourceName, setResourceName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [dialCode, setDialCode] = useState("+1");
    const [address, setAddress] = useState("");
    const [sku, setSku] = useState(null);
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState(null);
    const [country, setCountry] = useState("United States of America");
    const [countryNames, setCountryNames] = useState(CountryData);
    const [code,setCode] = useState('us');
    const [showErrorMsg, setShowErrorMsg] = React.useState('');
    const storage = getStorage();
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState('');
    const [fileUploadTitle, setFileUploadTitle] = React.useState('Upload Resource Pic');
    const [findImage, setFindImage] = React.useState(false);

    const [resourceNameError, setResourceNameError] = useState("");
    const [ifResourceError, setIfResourceError] = useState(false);
    const [categoryError, setCategoryError] = useState("");
    const [ifCategoryError, setIfCategoryError] = useState(false);
    const [descriptionError, setDescriptionError] = useState("");
    const [ifDescriptionError, setIfDescriptionError] = useState(false);
    const [phoneNumError, setPhoneNumError] = useState("");
    const [ifPhoneNumError, setIfPhoneNumError] = useState(false);
    const [addressError, setAddressError] = useState("");
    const [ifAddressError, setIfAddressError] = useState(false);
    const [skuError, setSkuError] = useState("");
    const [ifSkuError, setIfSkuError] = useState(false);
    const [cityError, setCityError] = useState("");
    const [ifCityError, setIfCityError] = useState(false);
    const [stateError, setStateError] = useState("");
    const [zipcodeError, setZipcodeError] = useState("");
    const [ifZipcodeError, setIfZipcodeError] = useState(false);
    const [countryError, setCountryError] = useState("");

    let validateForm = () => {
        if (resourceName === "" || resourceName === null) {
            setResourceNameError("Please enter resource name");
            setIfResourceError(true);
            return false;
        } else if (category === "" || category === null) {
            setCategoryError("Please enter a category");
            setIfCategoryError(true);
            return false;
        } else if (sku.toString() === "0" || sku === null) {
            setSkuError("Please enter valid quantity");
            setIfSkuError(true);
            return false;
        } else if (sku < 0) {
            setSkuError("Please enter a valid quantity");
            setIfSkuError(true);
            return false;
        } else if (description === "" || description === null) {
            setDescriptionError("Please enter description of resource");
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
            setStateError("Please enter your state of residence");
            return false;
        } else if (country === "" || country === null) {
            setCountryError("Please enter your country of residence");
            return false;
        } else if (zipcode === null || zipcode === "") {
            setZipcodeError("Please enter your zipcode");
            setIfZipcodeError(true);
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

    

    const handleNameChange = (e) => {
        setResourceNameError("")
        setIfResourceError(false);
        setResourceName(e.target.value)
    };


    const handleImageUpload = (event) => {
        console.log('Reached upload image task');
        var file = event.target.files[0];
        if (file == null || !file) {
            console.log('No image');
            setShowErrorMsg('Error: No image available');
            setFindImage(false)
        } else {
            setImage(file);
            setFindImage(true)
            console.log(file);
            const storageRef = ref(
                storage,
                `/${userProfileReducer.userName}/resources/${file.name}`
            );
            uploadBytes(storageRef, file).then((snapshot) => {
                console.log('Uploaded a blob or file!', snapshot.metadata);
                setFileUploadTitle(snapshot.metadata.name);
                setShowErrorMsg('Image Uploaded successfully to firebase!');
                getDownloadURL(storageRef)
                    .then((url) => {
                        console.log(url);
                        setUrl(url);
                        console.log('url', url);
                    })
                    .catch((error) => {
                        switch (error.code) {
                            case 'storage/object-not-found':
                                setUrl('');
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
            setCode(getCode(address.country))
            setDialCode(obj.dial_code)
            setPhoneNum(profile.phoneNumber);
        } else {
            setAddress('');
            setCity('');
            setCountry('United States of America');
            setZipcode('');
            setState('');
            setPhoneNum('');
        }
    };

    const handleCategoryChange = (e) => {
        setCategoryError("")
        setIfCategoryError(false)
        setCategory(e.target.value)
    };

    const handleDescriptionChange = (e) => {
        setDescriptionError("")
        setIfDescriptionError(false)
        setDescription(e.target.value)
    };

    const handlePhoneNumChange = (e) => {
        setPhoneNumError("")
        setIfPhoneNumError(false)
        setPhoneNum(e.target.value)
    };

    const handleAddressChange = (e) => {
        setAddressError("")
        setIfAddressError(false)
        setAddress(e.target.value)
    };

    const handleSkuChange = (e) => {
        setSkuError("")
        setIfSkuError(false)
        setSku(e.target.value)
    };

    const handleCityChange = (e) => {
        setCityError("")
        setIfCityError(false);
        setCity(e.target.value)
    };

    const handleStateChange = (e) => {
        setStateError("")
        setState(e.target.value)
    };

    const handleZipcodeChange = (e) => {
        setZipcodeError("")
        setIfZipcodeError(false)
        setZipcode(e.target.value)
    };

    const handleCountryChange = (e) => {
        setCountryError("")
        setCountry(e.target.value)
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


    const handleSubmit = async (e) => {
                e.preventDefault();
                const isValid = validateForm();

                if (isValid) {
                    const res = await fetch("/api/givehelp/resource", {
                        method: "POST",
                        headers: {
                            "Content-Type" : "application/json"
                            
                        },
                        body: JSON.stringify({
                        UserId:userId, Resource_Name:resourceName, Category:category, Description:description, Phone_Number:phoneNum, Address:address, SKU:sku, 
                        City:city, State:state, Zipcode:zipcode, Country:country, ImageUrl:url, 
                        })
                    })
            
                    const data = await res.json();
                    console.log(data);
            
                    if (res.status === 200){
                        window.alert("Resource added!");
                        console.log("Resource added!");
                        window.location.reload();
                    } else if (!findImage){
                        window.alert("Please select an image to upload!");
                        console.log("Please select an image to upload!");
                    } else {
                        window.alert("Failed to upload resource data! Please try again.");
                        console.log("Failed to upload resource data! Please try again.");
                        window.location.reload();
                    }
                }
                
            }
 
    

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
                <form autoComplete="off" noValidate {...props} method="POST">
                    <Card
                        sx={{
                            height: 750,
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
                                <Grid item xs={3}>
                                    <TextField
                                        id="filled-basic"
                                        label="Type"
                                        variant="filled"
                                        sx={{ m: 1, width: '50ch' }}
                                        value="Resource"
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                </Grid>
                                <Grid item xs={3}>
                                    {/* <div style={{ color: 'red' }}>{resourceNameError}</div> */}
                                    <TextField
                                        required
                                        error={ifResourceError}
                                        label="Resource Name"
                                        defaultValue={resourceName}
                                        onChange={handleNameChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
                                        helperText={resourceNameError}
                                        
                                    />
                                </Grid>
                            </Grid>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 9, md: 3 }}>
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
                                <Grid item xs={3}>
                                </Grid>
                                <Grid item xs={3}>
                                {/* <div style={{ color: 'red' }}>{skuError}</div> */}
                                    <TextField
                                        required
                                        error={ifSkuError}
                                        id="outlined-number"
                                        label="Quantity"
                                        type="number"
                                        defaultValue={sku}
                                        onChange={handleSkuChange}
                                        sx={{ m: 1, width: '50ch' }}
                                        placeholder="Quanity should not be less than or equal to 0."
                                        helperText={skuError}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}     
                                    />
                                </Grid>
                            </Grid>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 9, md: 3 }}>
                                <Grid item xs={4}>
                                    {/* <div style={{ color: 'red' }}>{descriptionError}</div> */}
                                    <TextField
                                        id="outlined-decsription-input"
                                        error={ifDescriptionError}
                                        label="Description"
                                        value={description}
                                        onChange={handleDescriptionChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '106ch' }}
                                        helperText={descriptionError}
                                        
                                    />
                                </Grid>
                            </Grid>
                            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={6}>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox/>} label="Use my profile address" onChange={handleSetCheck} />
                                    </FormGroup>
                                </Grid>
                            </Grid>
                            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={3}>
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
                                <Grid item xs={3}></Grid>
                                <Grid item xs={3}>
                                    {/* <div style={{ color: 'red' }}>{cityError}</div> */}
                                    <TextField
                                        required
                                        error={ifCityError}
                                        id="outlined-required"
                                        label="City"
                                        value={city}
                                        onChange={handleCityChange}
                                        variant="outlined"
                                        helperText={cityError}
                                        sx={{ m: 1, width: '50ch' }}
                                        
                                    />
                                </Grid>
                            </Grid>
                            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={3}>
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
                                <Grid item xs={3}></Grid>
                                <Grid item xs={3}>
                                    {/* <div style={{ color: 'red' }}>{countryError}</div> */}
                                    <TextField
                                        label="Select Country"
                                        name="country"
                                        onChange={handleCountryChange}
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        value={country}
                                        variant="outlined"
                                        sx={{ m: 1, width: '400px' }}
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
                                        sx={{ m: 1, width: '400px' }}
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
                                rowSpacing={4}
                                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                zIndex={1}
                                paddingTop={3}
                            >
                                <Grid item xs={3}>
                                    <input type="file" onChange={handleImageUpload} />
                                    
                                    {/* {showErrorMsg? (
                                        <Alert severity="error">This is an error message!</Alert>
                                    ): ''} */}
                                    {/* <Modal setOpenModal={showModal} onClose={() => setShowModal(false)} /> */}
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

const ConnectedAddResourceCard = connect(mapStateToProps, mapDispatchToProps)(AddResourceCard);

export default ConnectedAddResourceCard;
