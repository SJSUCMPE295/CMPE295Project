
import React, { Component, useRef, useEffect, useState, FunctionComponent } from 'react';
import { Helmet } from 'react-helmet-async';
import { connect } from 'react-redux';
import { Box, Grid,
Container,Card,CardHeader,
CardContent,TextField,CardActions,Divider,Button, CardMedia, Table,TableBody,
TableCell,Dialog,DialogActions,DialogContent,DialogContentText,
TableRow,TableContainer,Paper
} from '@material-ui/core';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
init("Tf7lGE0yewFvOLxah");

import serverUrl from '../../utils/config';
import { GoogleMap, useJsApiLoader,Marker ,DirectionsRenderer } from '@react-google-maps/api';


import { withRouter,useLocation ,Link,useHistory,useParams} from 'react-router-dom';
const GetHelpItem : FunctionComponent<any>= ({userProfileReducer,props}) => {
  
const param=useParams();
const location=useLocation();
  const user_email=userProfileReducer?.userName;//"abc@gmail.com";//change
  const history = useHistory();
    const [resource, setResource] = React.useState({});
    const [currentloc,setCurrentloc]= React.useState({
      lat: 37.318400,
      lng: -121.8381589
    });
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [errorText,setErrorText]=useState("");
    const [directions,setDirections]= useState(null);
    const [open, setOpen] = React.useState(false);
    const [quantity,setQuantity]=useState(null);
const containerStyle = {
    width: '1125px',
    height: '450px'
  };
  
  const center = {
    lat: 37.318400,
    lng: -121.8381589
  };
  //change start
  const UserId = userProfileReducer?.id;//'6225e61bf81d2541a4000bc9';
    
React.useEffect(() => {
  const id = param?.id?.substring(param?.id?.indexOf(':') + 1);
  const item_type = param?.type?.substring(param?.type?.indexOf(':') + 1)+"s";
  //alert(param.id);
    //const id='62474b2f4a682270e03d0dfc';
    //const item_type='resources';
//alert(location.pathname);
    //changeend
    const token = localStorage.getItem('token');
      // set the with credentials to true
      axios.defaults.withCredentials = true;
           axios
            .get('/api/gethelp/search', { params: {item_type:item_type,id:id}},  {
              headers : {
                  authtoken: token
              }
              }) 
            .then(
                (response) => {
                  
                    setData(response?.data?.resources);
                    //setCity(response.data.user_currentcity);
                    setCurrentloc(response?.data?.user_currentaddress);
                    getDirections(response?.data?.resources[0]);
                },
                (error) => {
                    console.log(error);
                    setError(error);
                }
            );
       }, []);
       const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCW3O6PQctDxoSoSNYWVa44nXc1ze4V-Nw"
      })
    
      const [map, setMap] = React.useState(null);
    
      const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])
    
      //function that is calling the directions service
     const getDirections = (resource) => {
        const directionsService = new google.maps.DirectionsService();
       let destination=resource.address;
       //let origin="2239 McLaughlin Ave,San Jose,95122"
      // console.log(destination);
      // console.log(currentloc);
    if (origin !== null && destination !== null) {
        directionsService.route(
          {
            origin: currentloc,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING
          },
          (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              //changing the state of directions to the result of direction service
                setDirections(null);
                setDirections(result);//setShow(true);
            
            } else {
              console.error(`error fetching directions ${result}`);
            }
          }
        );
    }
      };
          
        
          
          const handleItemQuantityChange=(event)=> {
            if ((1 < event.target.value) &&  (event.target.value> data[0].SKU)){
              setErrorText("Quantity should be between 1 and "+data[0].SKU);
            }
            else{
              setErrorText("");
              setQuantity(event.target.value);
            }
           
         }  
         
         
        ////Email 

         let state = { feedback: '', name: 'Name',to_email:"snehathomasdiv@gmail.com",subject:'Subject'};
          const sendEmail = (templateId, variables) => {
        
  
        emailjs.send(
          'service_wgfnh0b', templateId,
          variables
          ).then(res => {
            console.log('Email successfully sent!')
          })
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }
    
         const handleConfirm = (event) => {
           if(errorText===""){
            let resource=data[0];
            ///email to victim
            let resource_email_quantity=resource.type=="resource"?quantity:resource.availableDate;
            let qua_date=resource.type=="resource"?"Quantity":"Available Date";
            let email_subject=resource.type=="resource"?"Resource reservation details":"Service reservation details";
            let to_user_email=userProfileReducer.userName; //change later state.to_email;
            let url ="http://localhost:8500"+location.pathname;console.log(url);
            //serverUrl+'app/gethelp/:'+resource._id+'/:resource';console.log(url);console.log(location.pathname);
            const templateId = 'template_v9fkqmy';
          

    
        sendEmail(templateId, {resource_name: resource.Name,resource_description:resource.Description,resource_address:resource.address,
          resource_quantity:resource_email_quantity,qua_date:qua_date,owner_name:resource.owner_name,phone_num:resource.Phone_Number,
          
          from_name: state.name,to_name:userProfileReducer.firstName+" "+userProfileReducer.lastName//'Katarina Smith'//
          ,subject:email_subject,to_email:to_user_email,url:url})
          //email to owner
          sendEmail('template_znup9ah', {resource_name: resource.Name,resource_description:resource.Description,resource_address:resource.address,
            resource_quantity:resource_email_quantity,qua_date:qua_date,
            victim_name:userProfileReducer.firstName+" "+userProfileReducer.lastName,
            victim_phone_num:userProfileReducer.profile.phoneNumber,
            
            from_name: state.name,to_name:resource.owner_name//'Katarina Smith'//
            ,subject:state.subject,to_email:resource.owner_email})
           if(quantity == null){
             setQuantity(data[0].SKU);
           }
           const token = localStorage.getItem('token');
      // set the with credentials to true
      axios.defaults.withCredentials = true;
           axios
           .post('/api/gethelp', {resource:data[0],user_id:UserId,quantity:quantity},  {
            headers : {
                authtoken: token
            }
            }) 
           .then(
               (response) => {
                //handleSearch(event);
setOpen(true);
                //history.push('/app/gethelp') ;
              },
               (error) => {
                   console.log(error);
                   setError(error);
               }
           );}
           else{
            setErrorText("Maximum available Quantity is "+data[0].SKU+". Please update Quantity between 1 and "+data[0].SKU+" before confirming the reservation.");
           }
         }; 
         const handleClose = (event) => {
          setOpen(false);
          history.push('/app/gethelp') ;
         }

       return (
        <>
           
               <Helmet>
                   <title>GetHelpItem | WeCare</title>
               </Helmet>
               <Box
                   sx={{
                       backgroundColor: 'background.default',
                       minHeight: '100%',
                       py: 3,
                   }}
               >
  <Container maxWidth={false}>
    <Box {...props}>
   <Card><CardHeader sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                    }}
                    titleTypographyProps={{ variant: 'h2' }}
                    title="GetHelp Reservation" />
                    <Divider />
                    <CardContent>
    <Grid container spacing={2}>
    {data != null ? data.map((resource) => (
      
    <Grid item  key={resource._id}>
        <Card  sx={{ display: 'flex' }} style={{ border: "none", boxShadow: "none" }}>
            <CardMedia
        component="img"
        height="475" 
        sx={{ width:400 }}
        image="/static/images/avatars/resource.png"
        alt={resource.Name}
      />
                <CardContent>
                <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
            <TableRow
              key="1"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> <b>Name</b>
              </TableCell>
              <TableCell align="left">:{resource.Name}</TableCell>
            </TableRow>
            <TableRow
              key="2"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> {resource.type=="resource"?<b>Quantity</b>:<b>Available date</b>}
              </TableCell>
              <TableCell align="left">:{resource.type=="resource"?<TextField
          id="standard-number"
          type="number"
          InputLabelProps={{
            shrink: true,style : {color : 'blue'},
          }}
          InputProps={{
            inputProps: {
              type: 'number',
              min: 1
            },
          }}
          variant="standard"
          defaultValue= {resource.SKU}
          error={errorText.length === 0 ? false : true }
          helperText={errorText.length === 0 ? "Update required quantity":errorText}
          sx={{  width: '41ch' }}
          onChange={handleItemQuantityChange}
        />: <TextField
           InputLabelProps={{style : {color : 'blue'} }}
           id="standard-read-only-input"
           InputProps={{
             readOnly: true,
           }}
           variant="standard"
          defaultValue= {resource.availableDate}
          sx={{  width: '41ch' }}
        />}</TableCell>
            </TableRow>
            

            <TableRow
              key="3"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> <b>Description</b>
              </TableCell>
              <TableCell align="left">:{resource.Description}</TableCell>
            </TableRow>
            <TableRow
              key="6"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> <b>Owner Name</b>
              </TableCell>
              <TableCell align="left">:{resource.owner_name}</TableCell>
            </TableRow>
            <TableRow
              key="4"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> <b>Address</b>
              </TableCell>
              <TableCell align="left">:{resource.address}</TableCell>
            </TableRow>
            
            <TableRow
              key="5"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> <b>Distance</b>
              </TableCell>
              <TableCell align="left">:{resource.distance} miles</TableCell>
            </TableRow>
            
            <TableRow
              key="7"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> <b>Phone Number</b>
              </TableCell>
              <TableCell align="left">:{resource.Phone_Number}</TableCell>
            </TableRow>
            <TableRow
              key="8"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> <b>Email</b>
              </TableCell>
              <TableCell align="left">:{resource.owner_email}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
                  
       
      </CardContent>
      
                
                    </Card>
                    </Grid> )):null}</Grid>
                    <Grid>
                <Box paddingTop={3}>
                
               { isLoaded ? (

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentloc}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >

        { /* Child components, such as markers, info windows, etc. */ }
        {directions !== null && (
                <DirectionsRenderer
                  directions={directions}
                  defaultOptions={{
                    suppressMarkers: true
                  }}
                />
                
              )}
        <></>
      </GoogleMap>
  ) : <></>}
              
          </Box>
          </Grid>





</CardContent>
                
<CardActions>
  <Box style={{ marginLeft: "auto" }}>
  <Button component={Link} to={'/app/gethelp'} color="primary" variant="contained" size="medium">Cancel</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <Button color="primary" variant="contained" size="medium"  onClick={handleConfirm}>Confirm</Button>
          </Box></CardActions>
           </Card>
                </Box> </Container></Box>
                <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Reservation details were successfully send to {user_email}.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
         
   </>
);

        };
  // export default withRouter(GetHelpItem);

const mapStateToProps = ({ userProfileReducer }) => ({
    userProfileReducer,
});

const mapDispatchToProps = {};

const ConnectedGetHelpItem = connect(mapStateToProps, mapDispatchToProps)(GetHelpItem);
export default withRouter(ConnectedGetHelpItem); 
//export default GetHelpItem;
