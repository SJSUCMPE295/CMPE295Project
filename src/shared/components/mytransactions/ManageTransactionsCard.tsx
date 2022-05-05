/*global google*/
import React, { Component, useRef, useEffect, useState, FunctionComponent } from 'react';
import { Helmet } from 'react-helmet-async';
import moment from 'moment';
import { connect } from 'react-redux';
import { Box, Grid,FormControlLabel,
    FormGroup,
Container,
Typography,Card,FormHelperText,
CardContent,TextField,Divider,CardHeader,Table,TableBody,TableCell,TableRow,TableHead,
InputAdornment,CardActions,
SvgIcon,Button, CardMedia,Pagination,Dialog,DialogActions,DialogTitle,DialogContent,TablePagination 
} from '@material-ui/core';
import axios from 'axios';
import { withRouter,useLocation ,Link,useHistory} from 'react-router-dom';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import countries from 'i18n-iso-countries';
const { getStates } = require('country-state-picker');
const { getCode } = require('country-list');
import CountryData from './CountryData.json';
const metadata = {
    contentType: 'image/jpeg',
};
const ManageTransactionsCard: FunctionComponent<any> = ({userProfileReducer,props}) => {
    const token = (typeof window !== 'undefined' && window.localStorage.getItem('token')) || null;
           // set the with credentials to true
           axios.defaults.withCredentials = true;
    const history = useHistory();
    const [givedata,setGiveData]= useState(null);
    const [getdata,setGetData]= useState(null);
    const [error,setError]= useState(null);
    const [service,setService]= useState(null);
    const UserId=userProfileReducer.id;
    const [check, setCheck] = useState(false);
    const userId = userProfileReducer.id;
    const [resourceName, setResourceName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    
    const [dialCode, setDialCode] = useState('+1');
    const [address, setAddress] = useState('');
    const [sku, setSku] = useState(0);
    const [city, setCity] = useState('');
    const [state, setState] = useState('California');
    const [zipcode, setZipcode] = useState(null);
    const [country, setCountry] = useState('United States of America');
    const [countryNames, setCountryNames] = useState(CountryData);
    const [code,setCode] = useState('us');
    const [showErrorMsg, setShowErrorMsg] = React.useState('');
    const storage = getStorage();
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState('');
    const [fileUploadTitle, setFileUploadTitle] = React.useState('Upload Resource Pic');
    const [findImage, setFindImage] = React.useState(false);
    const today=new Date();
    const [serviceNameError, setServiceNameError] = useState('');
    const [ifServiceError, setIfServiceError] = useState(false);
    const [resourceNameError, setResourceNameError] = useState('');
    const [ifResourceError, setIfResourceError] = useState(false);
    const [availabilityError, setAvailabilityError] = useState('');
    const [ifAvailabilityError, setIfAvailabilityError] = useState(false);
    const [categoryError, setCategoryError] = useState('');
    const [ifCategoryError, setIfCategoryError] = useState(false);
    const [descriptionError, setDescriptionError] = useState('');
    const [ifDescriptionError, setIfDescriptionError] = useState(false);
    const [phoneNumError, setPhoneNumError] = useState('');
    const [ifPhoneNumError, setIfPhoneNumError] = useState(false);
    const [addressError, setAddressError] = useState('');
    const [ifAddressError, setIfAddressError] = useState(false);
    const [skuError, setSkuError] = useState('');
    const [ifSkuError, setIfSkuError] = useState(false);
    const [cityError, setCityError] = useState('');
    const [ifCityError, setIfCityError] = useState(false);
    const [stateError, setStateError] = useState('');
    const [zipcodeError, setZipcodeError] = useState('');
    const [ifZipcodeError, setIfZipcodeError] = useState(false);
    const [countryError, setCountryError] = useState('');
    const [serviceName, setServiceName] = useState('');
    const [availability, setAvailability] = useState(new Date());
    const [datePickerIsOpen,togglePicker] = useState(false);
    let validateFormResource = () => {
        if (resourceName === '' || resourceName === null) {
            setResourceNameError('Please enter resource name');
            setIfResourceError(true);
            return false;
        } else if (category === '' || category === null) {
            setCategoryError('Please enter a category');
            setIfCategoryError(true);
            return false;
        } else if (sku === null || (sku?.toString ? sku.toString() : sku) === '0') {
            setSkuError('Please enter valid quantity');
            setIfSkuError(true);
            return false;
        } else if (sku < 0) {
            setSkuError('Please enter a valid quantity');
            setIfSkuError(true);
            return false;
        } else if (description === '' || description === null) {
            setDescriptionError('Please enter description of resource');
            setIfDescriptionError(true);
            return false;
        } else if (address === '' || address === null) {
            setAddressError('Please enter a valid address');
            setIfAddressError(true);
            return false;
        } else if (city === '' || city === null) {
            setCityError('Please enter your city of residence');
            setIfCityError(true);
            return false;
        } else if (state === '' || state === null) {
            console.log(state);
            setStateError('Please enter your state of residence');
            return false;
        } else if (country === '' || country === null) {
            setCountryError('Please enter your country of residence');
            return false;
        } else if (zipcode === null || zipcode === '') {
            setZipcodeError('Please enter your zipcode');
            setIfZipcodeError(true);
            return false;
        } else if ((zipcode?.toString ? zipcode.toString() : zipcode)?.length != 5) {
            setZipcodeError('Please enter a valid zipcode!');
            setIfZipcodeError(true);
            return false;
        } else if (phoneNum === '' || phoneNum === null) {
            setPhoneNumError('Please enter your contact number');
            setIfPhoneNumError(true);
            return false;
        } else if ((phoneNum?.toString ? phoneNum.toString() : phoneNum)?.length != 10) {
            setPhoneNumError('Please enter a valid phone number!');
            setIfPhoneNumError(true);
            return false;
        }
        return true;
    };
    let validateForm = () => {
        console.log(state, country)
        if (serviceName === '' || serviceName === null) {
            setServiceNameError('Please enter service name');
            setIfServiceError(true);
            return false;
        } else if (availability.getTime() < today.getTime()) {
            setAvailabilityError('Please select a valid date!');
            setIfAvailabilityError(true);
            return false;
        } else if (category === '' || category === null) {
            setCategoryError('Please enter a category');
            setIfCategoryError(true);
            return false;
        } else if (description === '' || description === null) {
            setDescriptionError('Please enter description of service');
            setIfDescriptionError(true);
            return false;
        } else if (address === '' || address === null) {
            setAddressError('Please enter a valid address');
            setIfAddressError(true);
            return false;
        } else if (city === '' || city === null) {
            setCityError('Please enter your city of residence');
            setIfCityError(true);
            return false;
        } else if (state === '' || state === null) {
            setStateError('Please enter your state of residence');
            //setifStateError(true);
            return false;
        } else if (country === '' || country === null) {
            setCountryError('Please enter your country of residence');
            return false;
        } else if (zipcode === null || zipcode === '') {
            setZipcodeError('Please enter your zipcode');
            setIfZipcodeError(true);
            return false;
        } else if ((zipcode?.toString ? zipcode.toString() : zipcode)?.length != 5) {
            setZipcodeError('Please enter a valid zipcode!');
            setIfZipcodeError(true);
            return false;
        } else if (phoneNum === '' || phoneNum === null) {
            setPhoneNumError('Please enter your contact number');
            setIfPhoneNumError(true);
            return false;
        } else if ((phoneNum?.toString ? phoneNum.toString() : phoneNum)?.length != 10) {
            setPhoneNumError('Please enter a valid phone number!');
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
        const file = event.target.files[0];
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
                `/${userProfileReducer.userName}/resources/${file.name}`
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
            setCountry('');
            setZipcode('');
            setState('');
            setPhoneNum('');
        }
    };
            
     ///new

     const handleNameChange = (e) => {
        setResourceNameError('');
        setIfResourceError(false);
        setResourceName(e.target.value);
    };
    const handleServiceNameChange = (e) => {
        setServiceNameError('');
        setIfServiceError(false);
        setServiceName(e.target.value);
    };
     

    const handleCategoryChange = (e) => {
        setCategoryError('');
        setIfCategoryError(false);
        setCategory(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescriptionError('');
        setIfDescriptionError(false);
        setDescription(e.target.value);
    };

    const handlePhoneNumChange = (e) => {
        setPhoneNumError('');
        setIfPhoneNumError(false);
        setPhoneNum(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddressError('');
        setIfAddressError(false);
        setAddress(e.target.value);
    };

    const handleCityChange = (e) => {
        setCityError('');
        setIfCityError(false);
        setCity(e.target.value);
    };

    const handleStateChange = (e) => {
        setStateError('');
        setState(e.target.value);
    };

    const handleZipcodeChange = (e) => {
        setZipcodeError('');
        setIfZipcodeError(false);
        setZipcode(e.target.value);
    };

    const handleAvailabilityChange = (date) => {
        setAvailabilityError('');
        setIfAvailabilityError(false);
        setAvailability(date);
    };

    const handleCountryChange = (e) => {
        setCountryError('');
        setCountry(e.target.value);
        const obj = countryNames.find(({ name }) => name === e.target.value);
        setCode(getCode(e.target.value));
        setDialCode(obj.dial_code);
    };

    const stateObj = getStates(code.toLowerCase());
    const stateArray = Object.entries(stateObj).map(([key, value]) => {
        return {
            label: value,
            value: value,
        };
    }); 

    
    const handleSubmit = async (e) => {
                e.preventDefault();
                const token = localStorage.getItem('token');
                // set the with credentials to true
                axios.defaults.withCredentials = true;
            if(service?.type=="resource"){
                const isValid = validateFormResource();
                console.log(isValid);

               if (isValid) {
                
                axios
                .post('/api/gethelp/update_resource', {id:service?._id,UserId:userProfileReducer.id, Resource_Name:resourceName, Category:category, Description:description, Phone_Number:phoneNum, Address:address, SKU:sku, 
                    City:city, State:state, Zipcode:zipcode, Country:country, ImageUrl:url},{
                  headers : {
                      authtoken: token
                  }}) 
                .then(
                    (response) => {
                        
                       //history.push('/app/mytransactions');
                       //setOpenresource(false);
                       
                       handleTransactionSearch();
                      // history.push('/app/mytransactions');
                      //.filter((m) => m.Availability != 'false')
                    },
                    (error) => {
                        if (!findImage) {
                            window.alert('Please select an image to upload!');
                            console.log('Please select an image to upload!');
                        }
                        else{
                        alert("Failed to upload resource data! Please try again.");
                        }
                        //console.log("Failed to upload resource data! Please try again.");
                        console.log(error);
                        setError(error);
                    }
                );
            
                  
                }}
                else{
                    axios
                    .post('/api/gethelp/update_service', {id:service?._id,UserId:userProfileReducer.id, Service_Name:serviceName, Category:category, Description:description, Phone_Number:phoneNum, Address:address, availableDate:availability,
                        City:city, State:state, Zipcode:zipcode, Country:country, ImageUrl:url},{ headers : {
                          authtoken: token
                      }}) 
                    .then(
                        (response) => {
                            
                           //history.push('/app/mytransactions');
                           //setOpenresource(false);
                           handleTransactionSearch();
                           //handleTransactionSearch();
                           //history.push('/app/mytransactions');
                          //.filter((m) => m.Availability != 'false')
                        },
                        (error) => {
                            if (!findImage) {
                                window.alert('Please select an image to upload!');
                                console.log('Please select an image to upload!');
                            }
                            else{
                            alert("Failed to upload service data! Please try again.");
                            }
                           // console.log("Failed to upload resource data! Please try again.");
                            console.log(error);
                            setError(error);
                        }
                    );   
                }
            }
    React.useEffect(() => {
        
                 handleTransactionSearch();

                  
             }, []);

    const [openresource, setOpenresource] = React.useState(false);
    const [openservice, setOpenservice] = React.useState(false);

   const handleTransactionSearch =()=> {
    const token = localStorage.getItem('token');
    // set the with credentials to true
    axios.defaults.withCredentials = true;
       axios.get('/api/gethelp/search/userid', { params: {userid:userProfileReducer.id}},{
     headers : {
         authtoken: token
     }}) 
   .then(
       (response) => {
         console.log(response?.data?.resources);
         setGiveData(response?.data?.resources.filter((m) => m.Availability != 'false'));
         setGetData(response?.data?.getresources);
         setOpenresource(false);
         setOpenservice(false);

         //.filter((m) => m.Availability != 'false')
       },
       (error) => {
           console.log(error);
           setError(error);
       }
   );
    }
    const handleEdit= (service) => {
        
setService(service);
if(service?.type=="resource"){
    setOpenresource(true);
    setSku(service?.SKU);
    
setResourceName(service?.Name);
}
else
{
    setOpenservice(true);
    setServiceName(service?.Name);
    setAvailability(new Date(new Date(service?.availableDate).toISOString()));
}

           
setAddress(service?.Address);
setCity(service?.City);
setCountry(service?.Country);
setZipcode(service?.Zipcode);
setState(service?.State);
setPhoneNum(service?.Phone_Number);


setCategory(service?.Category);
setDescription(service?.Description);
setUrl(service?.ImageUrl);
    }


    
    const handleImageUploadService = (event) => {
        console.log("Reached upload image task");
        var file = event.target.files[0];
        if(file==null || !file){
            console.log("No image")
            setShowErrorMsg("Error: No image available");
        } else 
            {
                setImage(file)
                console.log(file)
                const storageRef = ref(storage, `/${userProfileReducer.userName}/services/${file.name}`);
                uploadBytes(storageRef, file).then((snapshot) => {
                    console.log('Uploaded a blob or file!', snapshot.metadata);
                    setFileUploadTitle(snapshot.metadata.name);
                    setFindImage(true);
                    setShowErrorMsg("Image Uploaded successfully to firebase!")
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
                            setUrl("");
                            setFindImage(false);
                            break;
                        }
                    });
                });
            }
    }

    

    
    const handleSkuChange = (e) => {
        setSkuError('');
        setIfSkuError(false);
        setSku(e.target.value);
    };
    const handleTogglePicker = (e) => {
        togglePicker(!datePickerIsOpen)
    }

    
    const handleCancel= () => {
        setOpenresource(false);
        setOpenservice(false);
        //history.push('/app/mytransactions');

    }
    const handleDelete= (service) => {
        console.log(service._id);
        const token = localStorage.getItem('token');
                // set the with credentials to true
                axios.defaults.withCredentials = true;
        axios
        .post('/api/gethelp/delete/id', {id:service._id,type:service.type}) 
        .then(
            (response) => {
              console.log(response);
              //window.location.reload();
              handleTransactionSearch();
            },
            (error) => {
                console.log(error);
                setError(error);
            }
        );
    }
//Pagination gethelp
const [page, setPage] = React.useState(0);

const [rowsPerPage, setRowsPerPage] = React.useState(5);

const [pageGive, setPageGive] = React.useState(0);
const [rowsPerPageGive, setRowsPerPageGive] = React.useState(5);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
//pagination Givehelp data
      const handleChangePageGive = (event, newPage) => {
        setPageGive(newPage);
      };
    
      const handleChangeRowsPerPageGive = (event) => {
        setRowsPerPageGive(parseInt(event.target.value, 10));
        setPageGive(0);
      };
    
      
    
      // Avoid a layout jump when reaching the last page with empty rows.
      const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * 5 - getdata?.length) : 0;


return (
    <Grid container spacing={2}>
<Grid item>
                        <Card {...props}>
                            <CardHeader title="GiveHelp Transactions" titleTypographyProps={{variant:'h4' }}/>
                            <Divider />
                                <Box sx={{ minWidth: 800 }}>
                                   
                                {givedata != null ? ( <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Name</TableCell>
                                                <TableCell>Type</TableCell>
                                                <TableCell>Description</TableCell>
                                                <TableCell>Available Quantity</TableCell>
                                                <TableCell>AvailableDate</TableCell>
                                                {/*<TableCell sortDirection="desc">
                                <Tooltip enterDelay={300} title="Sort">
                                    <TableSortLabel active direction="desc">
                                        Available Date
                                    </TableSortLabel>
                                </Tooltip>
                    </TableCell>*/}           <TableCell>Address</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Edit</TableCell>
                                                <TableCell>Delete</TableCell>
                                            </TableRow>
                                        </TableHead>
                                            <TableBody>
                                                {givedata?.slice(pageGive * rowsPerPageGive, pageGive * rowsPerPageGive + rowsPerPageGive).map((service) => (
                                                    <TableRow hover key={service._id}>
                                                        <TableCell align='center'>
                                                            {service?.ImageUrl===''?<img src="/static/images/avatars/resource.png" height="75"/>:
                                                        <img src={service.ImageUrl} height="75"/>}
                                                        <br />{service.Name}</TableCell>
                                                        <TableCell>{service.type}</TableCell>
                                                        <TableCell>{service.Description}</TableCell>
                                                       <TableCell>{service.SKU}</TableCell>
                                                        <TableCell>{service.type==='resource'?service.availableDate:moment(service.availableDate).format(
                                                                'MM/DD/YYYY' )}</TableCell>
                                                        <TableCell>{service.Address+", "+service.City+", "+service.State+", "+service.Country+", "+service.Zipcode}</TableCell>
                                                        <TableCell>{service.Phone_Number}</TableCell>
                                                        <TableCell><Button component={Link} to="/app/mytransactions" onClick={() => handleEdit(service)}>Edit</Button></TableCell>
                                                        <TableCell><Button component={Link} to="/app/mytransactions" onClick={() => handleDelete(service)}>Delete</Button></TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                       
                                    </Table> ) : <Typography>You do not have any GiveHelp Transactions.</Typography>}
                                    <TablePagination
                                    rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={givedata?.length}
          rowsPerPage={rowsPerPageGive}
          page={pageGive}
          onPageChange={handleChangePageGive}
          
          onRowsPerPageChange={handleChangeRowsPerPageGive}
        />
                                </Box> </Card>
                    </Grid>
                    <Grid item>
                    <Card {...props}>
                            <CardHeader title="GetHelp Transactions" titleTypographyProps={{variant:'h4' }}/>
                            <Divider />
                                <Box sx={{ minWidth: 800 }}>
                                {getdata != null ? (
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Name</TableCell>
                                                <TableCell>Type</TableCell>
                                                <TableCell>Description</TableCell>
                                                <TableCell>Quantity</TableCell>
                                                <TableCell>AvailableDate</TableCell>           
                                                <TableCell>Address</TableCell>
                                                <TableCell>PhoneNumber</TableCell>
                                                <TableCell>TransactionDate</TableCell>
                    
                                            </TableRow>
                                        </TableHead>
                                        
                                            <TableBody>
                                                {getdata?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((service) => (
                                                    <TableRow hover key={service._id}>
                                                        <TableCell align='center'>
                                                            {service.ImageUrl===''?<img src="/static/images/avatars/resource.png" height="75"/>:
                                                        <img src={service.ImageUrl} height="75"/>}
                                                        <br />
                                                            {service.Name}
                                                        </TableCell>
                                                        <TableCell>{service.type}</TableCell>
                                                        <TableCell>{service.Description}</TableCell>
                                                        <TableCell>{service.SKU}</TableCell>
                                                        <TableCell>
                                                        {service.type==='resource'?service.availableDate:moment(service.availableDate).format(
                                                                'MM/DD/YYYY'
                                                                )}
                                                        </TableCell>
                                                        <TableCell>{service.address}</TableCell>
                                                        <TableCell>{service.Phone_Number}</TableCell>
                                                        <TableCell>{moment(service.Date).format(
                                                                'MM/DD/YYYY'
                                                                )}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                       
                                    </Table> ) : <Typography>You do not have any GetHelp Transactions.</Typography>}
                                    <TablePagination
                                    rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={getdata?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
                                    
                                </Box>
                           
                        </Card>
                </Grid><Dialog open={openresource} fullWidth maxWidth="xl"  style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                 <DialogContent>
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
                            title="Edit Give Help Transaction"
                        />
                        <Divider />
                        <CardContent>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 9, md: 3 }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 9, md: 3 }}  style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <Grid item xs={3} style={{display:'flex',alignSelf:'center'}}>
                            {url===''?<img src="/static/images/avatars/resource.png" width="200" height="150"/>:
                                                        <img src={url} width="200" height="150"/>}
                             </Grid>
                             
                             <Grid item xs={6}>
                             <Grid container direction="row" rowSpacing={3}>
                                <Grid item xs={6}>
                                    <input type="file" onChange={handleImageUpload} />
                                    
                        
                                </Grid>
                                
                                <Grid item xs={6}>
                                    <Button
                                            color="primary"
                                            variant="contained"
                                            size="medium"
                                            onClick={handleImageChange}
                                        >
                                            Update Image
                                        </Button>
                                </Grid>
                                </Grid>
                                </Grid>
                                <Grid item xs={3}>
                                </Grid>
                                </Grid>
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
                                    <TextField
                                        required
                                        label="Resource Name"
                                        defaultValue={service?.Name}
                                        onChange={handleNameChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
                                        helperText="Mask, Oxygen Cylinder, Sanitizer etc."
                                        error={ifResourceError}
                                        helperText={resourceNameError}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 9, md: 3 }}>
                                <Grid item xs={3}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Category Name"
                                        defaultValue={service?.Category}
                                        onChange={handleCategoryChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
                                        error={ifCategoryError}
                                        helperText={categoryError}
                                        
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        required
                                        id="outlined-number"
                                        label="Quantity"
                                        type="number"
                                        defaultValue={service?.SKU}
                                        onChange={handleSkuChange}
                                        sx={{ m: 1, width: '50ch' }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        error={ifSkuError}
                                        placeholder="Quanity should be greater than 0."
                                        helperText={skuError}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 9, md: 3 }}>
                                <Grid item xs={4}>
                                    <TextField
                                        id="outlined-decsription-input"
                                        label="Description"
                                        defaultValue={service?.Description}
                                        onChange={handleDescriptionChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '106ch' }}
                                        error={ifDescriptionError}
                                        helperText={descriptionError}
                                        
                                    />
                                </Grid>
                            </Grid>
            
                            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={3}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Address"
                                        defaultValue={service?.Address}
                                        onChange={handleAddressChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
                                        error={ifAddressError}
                                        helperText={addressError}
                                    />
                                </Grid>
                                <Grid item xs={3}></Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="City"
                                        defaultValue={service?.City}
                                        onChange={handleCityChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
                                        error={ifCityError}
                                        helperText={cityError}
                                        
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
                                        defaultValue={service?.State}
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
                                   {/* <TextField
                                        required
                                        id="outlined-required"
                                        label="State"
                                        defaultValue={service?.State}
                                        onChange={handleStateChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
                                        
                                    />*/}
                                </Grid>
                                <Grid item xs={3}></Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        label="Select Country"
                                        name="country"
                                        onChange={handleCountryChange}
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        defaultValue={service?.Country}
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
                                    {/*<TextField
                                        required
                                        id="outlined-required-input"
                                        label="Country"
                                        defaultValue={service?.Country}
                                        onChange={handleCountryChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
                                        
                                        />*/}
                                </Grid>
                            </Grid>
                            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={3}>
                                    <TextField
                                        required
                                        id="outlined-required-input"
                                        label="Zipcode"
                                        defaultValue={service?.Zipcode}
                                        onChange={handleZipcodeChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '400px' }}
                                        InputLabelProps={{ shrink: zipcode ? true : false }}
                                        helperText={zipcodeError}
                                        error={ifZipcodeError}
                                    />
                                </Grid>
                                <Grid item xs={3}></Grid>
                                <Grid item xs={1}>
                                    <TextField
                                        id="outlined-read-only-input"
                                        sx={{ m: 1 }}
                                        value={dialCode}
                                        style = {{width: 70}}
                                        // InputProps={{
                                        //     readOnly: true,
                                        // }}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        required
                                        id="outlined-required-input"
                                        label="Phone Number"
                                        defaultValue={service?.Phone_Number}
                                        onChange={handlePhoneNumChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
                                        error={ifPhoneNumError}
                                        helperText={phoneNumError}
                                    />
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                rowSpacing={4}
                                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                zIndex={1}
                                paddingTop={3} style={{display:'flex',alignItems:'right',justifyContent:'right'}}
                            >
                                <Grid item xs={3}>
                                <Button component={Link} to="/app/mytransactions" onClick={handleCancel} color="primary"
                                size="medium"
                                        variant="contained"> Cancel</Button>
                                        &nbsp;&nbsp;&nbsp;
                                    <Button component={Link} to="/app/mytransactions" 
                                        color="primary"
                                        variant="contained"
                                        onClick={handleSubmit}
                                        size="medium"
                                    >
                                        Update
                                    </Button>
                                </Grid>
                        
                            </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    </form>
                 </DialogContent>
               </Dialog>
               <Dialog open={openservice} fullWidth maxWidth="xl"  style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                 <DialogContent>
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
                            title="Edit Give Help Transaction"
                        />
                        <Divider />
                        <CardContent>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 9, md: 3 }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 9, md: 3 }}  style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <Grid item xs={3} style={{display:'flex',alignSelf:'center'}}>
                            {url===''?<img src="/static/images/avatars/resource.png" width="200" height="150"/>:
                                                        <img src={url} width="200" height="150"/>}
                             </Grid>
                             
                             <Grid item xs={6}>
                             <Grid container direction="row" rowSpacing={3}>
                                <Grid item xs={6}>
                                    <input type="file" onChange={handleImageUploadService} />
                                    
                        
                                </Grid>
                                
                                <Grid item xs={6}>
                                    <Button
                                            color="primary"
                                            variant="contained"
                                            size="medium"
                                            onClick={handleImageChange}
                                        >
                                            Update Image
                                        </Button>
                                </Grid>
                                </Grid>
                                </Grid>
                                <Grid item xs={3}>
                                </Grid>
                                </Grid>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 9, md: 3 }}>
                                <Grid item xs={3}>
                                    <TextField
                                        id="filled-basic"
                                        label="Type"
                                        variant="filled"
                                        sx={{ m: 1, width: '50ch' }}
                                        value="Service"
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Service Name"
                                        error={ifServiceError}
                                        defaultValue={service?.Name}
                                        onChange={handleServiceNameChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '30ch' }}
                                        placeholder="Car Pool, Accomodation etc"
                                        helperText={serviceNameError}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <FormHelperText style={{ color: 'red' }}></FormHelperText>
                                </Grid> 
                               
                            </Grid>
                               
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 9, md: 3 }}>
                                <Grid item xs={3}>
                                <div style={{ color: 'red' }}>{categoryError}</div>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Category Name"
                                        error={ifCategoryError}
                                        defaultValue={service?.Category}
                                        onChange={handleCategoryChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
                                        helperText={categoryError}
                                        
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                </Grid>
                                <Grid item xs={4} alignItems="right">
                                    <Button color="primary" variant="contained" onClick={handleTogglePicker} size="small">
                                        Select Availability
                                    </Button>
                                    <DatePicker
                                        popperProps={{
                                            positionFixed: true 
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
                                    <FormHelperText>
                                        *Only dates from future are valid
                                    </FormHelperText>
                                    <FormHelperText style={{ color: 'red' }}>
                                        {availabilityError}
                                    </FormHelperText>
                                </Grid>
                            </Grid>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 9, md: 3 }}>
                                <Grid item xs={4}>
                                    <div style={{ color: 'red' }}>{descriptionError}</div>
                                    <TextField
                                        id="outlined-decsription-input"
                                        label="Description"
                                        defaultValue={service?.Description}
                                        onChange={handleDescriptionChange}
                                        error={ifDescriptionError}
                                        variant="outlined"
                                        sx={{ m: 1, width: '106ch' }}
                                        helperText={descriptionError}
                                        
                                    />
                                </Grid>
                            </Grid>
            
                            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={3}>
                                    <div style={{ color: 'red' }}>{addressError}</div>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Address"
                                        defaultValue={service?.Address}
                                        onChange={handleAddressChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
                                        error={ifAddressError}
                                        helperText={addressError}
                                    />
                                </Grid>
                                <Grid item xs={3}></Grid>
                                <Grid item xs={3}>
                                   
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="City"
                                        defaultValue={service?.City}
                                        onChange={handleCityChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
                                        error={ifCityError}
                                        helperText={cityError}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={3}>
                                    <TextField
                                        label="State"
                                        name="state"
                                        onChange={handleStateChange}
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        defaultValue={service?.State}
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
                                    {/*<TextField
                                        required
                                        id="outlined-required"
                                        label="State"
                                        defaultValue={service?.State}
                                        onChange={handleStateChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
                                        
                                        />*/}
                                </Grid>
                                <Grid item xs={3}></Grid>
                                <Grid item xs={3}>
                                    
                                    <TextField
                                        label="Country"
                                        name="country"
                                        onChange={handleCountryChange}
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        defaultValue={service?.Country}
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
                                   {/* <TextField
                                        required
                                        id="outlined-required-input"
                                        label="Country"
                                        defaultValue={service?.Country}
                                        onChange={handleCountryChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
                                        
                                        />*/}
                                </Grid>
                            </Grid>
                            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={3}>
                                    <TextField
                                        required
                                        id="outlined-required-input"
                                        label="Zipcode"
                                        defaultValue={service?.Zipcode}
                                        onChange={handleZipcodeChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
                                        error={ifZipcodeError}
                                        InputLabelProps={{ shrink: zipcode ? true : false }}
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
                                        // InputProps={{
                                        //     readOnly: true,
                                        // }}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        required
                                        id="outlined-required-input"
                                        label="Phone Number"
                                        defaultValue={service?.Phone_Number}
                                        onChange={handlePhoneNumChange}
                                        variant="outlined"
                                        sx={{ m: 1, width: '50ch' }}
                                        error={ifPhoneNumError}
                                        helperText={phoneNumError}
                                    />
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                rowSpacing={4}
                                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                zIndex={1}
                                paddingTop={3} style={{display:'flex',alignItems:'right',justifyContent:'right'}}
                            >
                                <Grid item xs={3}>
                                <Button component={Link} to="/app/mytransactions" onClick={handleCancel} color="primary"
                                size="medium"
                                        variant="contained"> Cancel</Button>
                                        &nbsp;&nbsp;&nbsp;
                                    <Button component={Link} to="/app/mytransactions" 
                                        color="primary"
                                        variant="contained"
                                        onClick={handleSubmit}
                                        size="medium"
                                    >
                                        Update
                                    </Button>
                                </Grid>
                        
                            </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    </form>
                 </DialogContent>
               </Dialog></Grid>
                 
)}

const mapStateToProps = ({ userProfileReducer }) => ({
    userProfileReducer,
});

const mapDispatchToProps = {};

const ConnectedManageTransactionsCard = connect(mapStateToProps, mapDispatchToProps)(ManageTransactionsCard);
export default ConnectedManageTransactionsCard; 