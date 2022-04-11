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
} from '@material-ui/core';
import Checkbox from '@mui/material/Checkbox';
import { useState, FunctionComponent} from 'react';
import { connect} from 'react-redux';

const AddResourceCard : FunctionComponent<any> = ({userProfileReducer={},...props }) => {
    const [check, setCheck] = useState(false);
    const userId = userProfileReducer.id;
    const [resourceName, setResourceName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [address, setAddress] = useState("");
    const [sku, setSku] = useState(0);
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState(null);
    const [country, setCountry] = useState("");

    const handleNameChange = (e) => {
        setResourceName(e.target.value)
    };

    const handleSetCheck = (e) => {
        setCheck(!check)
        if(!check){
            const {address={},profile={}}=userProfileReducer
            setAddress(address.location)
            setCity(address.city)
            setCountry(address.country)
            setZipcode(address.zipCode)
            setState(address.state)
            setPhoneNum(profile.phoneNumber)
        }else{
            setAddress("")
            setCity("")
            setCountry("")
            setZipcode("")
            setState("")
            setPhoneNum("") 
        }
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    };

    const handlePhoneNumChange = (e) => {
        setPhoneNum(e.target.value)
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value)
    };

    const handleSkuChange = (e) => {
        setSku(e.target.value)
    };
    
    const handleCityChange = (e) => {
        setCity(e.target.value)
    };

    const handleStateChange = (e) => {
        setState(e.target.value)
    };

    const handleZipcodeChange = (e) => {
        setZipcode(e.target.value)
    };

    const handleCountryChange = (e) => {
        setCountry(e.target.value)
    };

    const handleSubmit = async (e) => {
                e.preventDefault();
            
                const res = await fetch("/api/givehelp/resource", {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json"
                        
                    },
                    body: JSON.stringify({
                    UserId:userId, Resource_Name:resourceName, Category:category, Description:description, Phone_Number:phoneNum, Address:address, SKU:sku, 
                    City:city, State:state, Zipcode:zipcode, Country:country 
                    })
                })
        
                const data = await res.json();
                console.log(data);
        
                if (res.status === 200){
                    window.alert("Resource added!");
                    console.log("Resource added!");
                } else {
                    window.alert("Failed to upload resource data!");
                    console.log("Failed to upload resource data!");
                }
            }
    
   

    return (
        <Box {...props}>
            <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    width:500,
                    height:700,
                    p: 1
                    }}
            >
            <form autoComplete="off" noValidate {...props} method="POST">
                <Card 
                    sx={{
                    height: 700,
                    width:900,
                    justifyContent:'center',
                    }}
                >
                        <CardHeader 
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                            }}
                            titleTypographyProps={{ variant: 'h2' }} subheader="update the resource/service details you would like to provide" title="Give Help"
                        />
                        <Divider />
                        <CardContent>
                            <Box 
                            sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',       
                            }}
                            >
                                <TextField
                                    id="filled-basic"
                                    label="Type"
                                    variant="filled"
                                    sx={{ m: 1, width: '50ch' }}
                                    value="Resource"
                                />
                                <TextField
                                    required
                                    label="Resource Name"
                                    defaultValue={resourceName}
                                    onChange={handleNameChange}
                                    variant="outlined"
                                    sx={{ m: 1, width: '50ch' }}
                                    helperText="Mask, Oxygen Cylinder, Sanitizer etc."
                                    
                                />
                            </Box>
                            <Box>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Category Name"
                                    defaultValue={category}
                                    onChange={handleCategoryChange}
                                    variant="outlined"
                                    sx={{ m: 1, width: '50ch' }}
                                    
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Quantity"
                                    defaultValue={sku}
                                    onChange={handleSkuChange}
                                    variant="outlined"
                                    sx={{ m: 1, width: '50ch' }}
                                    
                                />
                            </Box>
                            <Box>
                                <TextField
                                    id="outlined-decsription-input"
                                    label="Description"
                                    value={description}
                                    onChange={handleDescriptionChange}
                                    variant="outlined"
                                    sx={{ m: 1, width: '102ch' }}
                                    
                                />
                            </Box>
                            <Box sx={{ pt: 2 }}>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox/>} label="Use my profile address" onChange={handleSetCheck} />
                                </FormGroup>
                            </Box>
                            <Box sx={{ pt: 2 }}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Address"
                                    value={address}
                                    onChange={handleAddressChange}
                                    variant="outlined"
                                    sx={{ m: 1, width: '50ch' }}
                                    
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="City"
                                    value={city}
                                    onChange={handleCityChange}
                                    variant="outlined"
                                    sx={{ m: 1, width: '50ch' }}
                                    
                                />
                            </Box>
                            <Box>
                                {/* <TextField
                                    required
                                    id="outlined-required-input"
                                    label="Select State"
                                    variant="outlined"
                                    //onChange={handleChange}
                                    select
                                    SelectProps={{ native: true }}
                                    sx={{ m: 1, width: '50ch' }}
                                >
                                    {states.map((option) => (
                                        <option key={option.value} value={option.state}>
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
                                <TextField
                                    required
                                    id="outlined-required-input"
                                    label="Country"
                                    value={country}
                                    onChange={handleCountryChange}
                                    variant="outlined"
                                    sx={{ m: 1, width: '50ch' }}
                                    
                                />
                            </Box>
                            <Box>
                                <TextField
                                    required
                                    id="outlined-required-input"
                                    label="Zipcode"
                                    value={zipcode}
                                    onChange={handleZipcodeChange}
                                    variant="outlined"
                                    sx={{ m: 1, width: '50ch' }}
                                    
                                />
                                <TextField
                                    required
                                    id="outlined-required-input"
                                    label="Phone Number"
                                    value={phoneNum}
                                    onChange={handlePhoneNumChange}
                                    variant="outlined"
                                    sx={{ m: 1, width: '50ch' }}
                                    
                                />
                            </Box>
                            <Divider sx={{ pt: 2 }} />
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    p: 1,
                                }}
                            >
                                <Button color="primary" variant="contained" onClick={handleSubmit}>
                                    Save details
                                </Button>
                            </Box>
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

const ConnectedAddResourceCard = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddResourceCard);

export default ConnectedAddResourceCard;
