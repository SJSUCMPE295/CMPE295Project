import React, { Component, useRef, useEffect, useState, FunctionComponent } from 'react';
import { Helmet } from 'react-helmet-async';
import { connect } from 'react-redux';
import moment from 'moment';
import {
    Box,
    Grid,
    Container,
    Card,
    CardHeader,
    CardContent,
    TextField,
    CardActions,
    Divider,
    Button,
    CardMedia,
    Table,
    TableBody,
    TableCell,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    TableRow,
    TableContainer,
    Paper,
    Typography,
} from '@material-ui/core';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
init('Tf7lGE0yewFvOLxah');

import serverUrl from '../../utils/config';
import { GoogleMap, useJsApiLoader, Marker, DirectionsRenderer } from '@react-google-maps/api';

import { withRouter, useLocation, Link, useHistory, useParams } from 'react-router-dom';
const GetHelpItem: FunctionComponent<any> = ({ userProfileReducer, props }) => {
    const param = useParams();
    const location = useLocation();
    const user_email = userProfileReducer?.userName; //"abc@gmail.com";//change
    const history = useHistory();
    const [resource, setResource] = React.useState({});
    const [currentloc, setCurrentloc] = React.useState({
        lat: 37.3184,
        lng: -121.8381589,
    });
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [errorText, setErrorText] = useState('');
    const [directions, setDirections] = useState(null);
    const [open, setOpen] = React.useState(false);
    const [quantity, setQuantity] = useState(0);
    const [pagetype, setPageType] = useState(null);
    let ignoreStat = false;
    const [UserCompleteAddress, setUserCompleteAddress] = useState(null);
    const containerStyle = {
        width: '1125px',
        height: '450px',
    };

    const center = {
        lat: 37.3184,
        lng: -121.8381589,
    };
    //change start
    const UserId = userProfileReducer?.id; //'6225e61bf81d2541a4000bc9';
    let id;
    let item_type;
    // let pagetype;
    React.useEffect(() => {
        id = param?.id?.substring(param?.id?.indexOf(':') + 1);
        item_type = param?.type?.substring(param?.type?.indexOf(':') + 1) + 's';
        pagetype = param?.pagetype?.substring(param?.pagetype?.indexOf(':') + 1);
        //console.log(pagetype);
        setPageType(pagetype);
    }, []);

    const handlepageload = () => {
        const token = localStorage.getItem('token');
        // set the with credentials to true
        axios.defaults.withCredentials = true;

        axios
            .get(
                '/api/gethelp/search',
                { params: { item_type: item_type, id: id, user_location: UserCompleteAddress } },
                {
                    headers: {
                        authtoken: token,
                    },
                }
            )
            .then(
                (response) => {
                    ignoreStat = true;
                    if (response?.data?.resources[0].type == 'resource') {
                        setQuantity(response?.data?.resources[0].SKU);
                    }
                    setData(response?.data?.resources);
                    //setCity(response.data.user_currentcity);
                    //setCurrentloc(response?.data?.user_currentaddress);
                    getDirections(response?.data?.resources[0]);
                },
                (error) => {
                    console.log(error);
                    setError(error);
                }
            );
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'API key',
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map);
        if (ignoreStat == false) {
            getCurrentUserLocation();
        }
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);
    const getCurrentUserLocation = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            //console.log("position",position);
            console.log('Latitude is :', position.coords.latitude);
            console.log('Longitude is :', position.coords.longitude);
            let location = { lat: position.coords.latitude, lng: position.coords.longitude };
            setCurrentloc(location);
            currentloc = location;
            console.log(currentloc);
            var geocoder = new google.maps.Geocoder(),
                latitude = position.coords.latitude, //sub in your latitude
                longitude = position.coords.longitude, //sub in your longitude
                city = '',
                state = '';
            geocoder.geocode(
                { location: { lat: latitude, lng: longitude } },
                function (results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        ignoreStat = true;
                        results.forEach(function (element) {
                            element.address_components.forEach(function (element2) {
                                element2.types.forEach(function (element3) {
                                    switch (element3) {
                                        case 'administrative_area_level_1':
                                            state = element2.long_name;
                                            break;
                                        case 'locality':
                                            city = element2.long_name;
                                            break;
                                    }
                                });
                            });
                        });
                        setUserCompleteAddress(results[0].formatted_address);
                        UserCompleteAddress = results[0].formatted_address;
                        //setCity(city+", "+state);
                        handlepageload();
                    }
                }
            );
        });
    };
    //function that is calling the directions service
    const getDirections = (resource) => {
        const directionsService = new google.maps.DirectionsService();
        let destination = resource.address;
        //let origin="2239 McLaughlin Ave,San Jose,95122"
        // console.log(destination);
        // console.log(currentloc);
        if (origin !== null && destination !== null) {
            directionsService.route(
                {
                    origin: currentloc,
                    destination: destination,
                    travelMode: google.maps.TravelMode.DRIVING,
                },
                (result, status) => {
                    if (status === google.maps.DirectionsStatus.OK) {
                        //changing the state of directions to the result of direction service
                        setDirections(null);
                        setDirections(result); //setShow(true);
                    } else {
                        console.error(`error fetching directions ${result}`);
                    }
                }
            );
        }
    };

    const handleItemQuantityChange = (event) => {
        if ((event.target.value<=0) || (event.target.value > data[0].SKU)) {
            setErrorText('Quantity should be between 1 and ' + data[0].SKU);
        } else {
            setErrorText('');
            setQuantity(event.target.value);
        }
    };

    ////Email

    let state = {
        feedback: '',
        name: 'Name',
        to_email: '',
        subject: 'Subject',
    };
    const sendEmail = (templateId, variables) => {
        emailjs
            .send('service_wgfnh0b', templateId, variables)
            .then((res) => {
                console.log('Email successfully sent!');
            })
            .catch((err) =>
                console.error(
                    'Oh well, you failed. Here some thoughts on the error that occured:',
                    err
                )
            );
    };

    const handleConfirm = (event) => {
        if (errorText === '') {
            let resource = data[0];
            ///email to victim
            let resource_email_quantity =
                resource.type == 'resource'
                    ? quantity
                    : moment(resource.availableDate).format('MM-DD-YYYY');
            let qua_date = resource.type == 'resource' ? 'Quantity' : 'Available Date';
            let email_subject =
                resource.type == 'resource'
                    ? 'Resource reservation details'
                    : 'Service reservation details';
            let to_user_email = userProfileReducer.userName; //change later state.to_email;
            let url =
                'https://arcane-crag-92966.herokuapp.com' +
                '/app/gethelp/:' +
                resource._id +
                '/:' +
                resource.type +
                '/:email' +
                resource_email_quantity;
            console.log(url);
            //serverUrl+'app/gethelp/:'+resource._id+'/:resource';console.log(url);console.log(location.pathname);
            const templateId = 'template_v9fkqmy';

            sendEmail(templateId, {
                resource_name: resource.Name,
                resource_description: resource.Description,
                resource_address: resource.address,
                resource_quantity: resource_email_quantity,
                qua_date: qua_date,
                owner_name: resource.owner_name,
                phone_num: resource.Phone_Number,

                from_name: state.name,
                to_name: userProfileReducer.firstName + ' ' + userProfileReducer.lastName, //'Katarina Smith'//
                subject: email_subject,
                to_email: to_user_email,
                url: url,
            });
            //email to owner
            sendEmail('template_znup9ah', {
                resource_name: resource.Name,
                resource_description: resource.Description,
                resource_address: resource.address,
                resource_quantity: resource_email_quantity,
                qua_date: qua_date,
                victim_name: userProfileReducer.firstName + ' ' + userProfileReducer.lastName,
                victim_phone_num: userProfileReducer.profile.phoneNumber,

                from_name: state.name,
                to_name: resource.owner_name, //'Katarina Smith'//
                subject: state.subject,
                to_email: resource.owner_email,
            });
            if (quantity == null) {
                setQuantity(data[0].SKU);
            }
            const token = localStorage.getItem('token');
            // set the with credentials to true
            axios.defaults.withCredentials = true;
            axios
                .post(
                    '/api/gethelp',
                    { resource: data[0], user_id: UserId, quantity: quantity },
                    {
                        headers: {
                            authtoken: token,
                        },
                    }
                )
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
                );
        } else {
            setErrorText(
                'Maximum available Quantity is ' +
                    data[0].SKU +
                    '. Please update Quantity between 1 and ' +
                    data[0].SKU +
                    ' before confirming the reservation.'
            );
        }
    };
    const handleClose = (event) => {
        setOpen(false);
        history.push('/app/gethelp');
    };

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
                        <Card>
                            <CardHeader
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                }}
                                titleTypographyProps={{ variant: 'h2' }}
                                title="GetHelp Reservation"
                            />
                            <Divider />
                            <CardContent>
                                <Grid container spacing={2}>
                                    {data != null
                                        ? data.map((resource) => (
                                              <Grid item key={resource._id}>
                                                  <Card
                                                      sx={{ display: 'flex' }}
                                                      style={{ border: 'none', boxShadow: 'none' }}
                                                  >
                                                      {resource.ImageUrl != '' ? (
                                                          <CardMedia
                                                              component="img"
                                                              height="475"
                                                              src={resource.ImageUrl}
                                                              alt={resource.Name}
                                                              sx={{ width: 400 }}
                                                          />
                                                      ) : (
                                                          <CardMedia
                                                              component="img"
                                                              height="475"
                                                              alt={resource.Name}
                                                              sx={{ width: 400 }}
                                                              image="/static/images/avatars/resource.png"
                                                          />
                                                      )}
                                                      <CardContent>
                                                          <TableContainer component={Paper}>
                                                              <Table
                                                                  sx={{ minWidth: 650 }}
                                                                  aria-label="simple table"
                                                              >
                                                                  <TableBody>
                                                                      <TableRow
                                                                          key="1"
                                                                          sx={{
                                                                              '&:last-child td, &:last-child th':
                                                                                  { border: 0 },
                                                                          }}
                                                                      >
                                                                          <TableCell
                                                                              component="th"
                                                                              scope="row"
                                                                          >
                                                                              {' '}
                                                                              <b>Name</b>
                                                                          </TableCell>
                                                                          <TableCell align="left">
                                                                              :{resource.Name}
                                                                          </TableCell>
                                                                      </TableRow>
                                                                      <TableRow
                                                                          key="2"
                                                                          sx={{
                                                                              '&:last-child td, &:last-child th':
                                                                                  { border: 0 },
                                                                          }}
                                                                      >
                                                                          <TableCell
                                                                              component="th"
                                                                              scope="row"
                                                                          >
                                                                              {' '}
                                                                              {resource.type ==
                                                                              'resource' ? (
                                                                                  <b>Quantity</b>
                                                                              ) : (
                                                                                  <b>
                                                                                      Available date
                                                                                  </b>
                                                                              )}
                                                                          </TableCell>
                                                                          {pagetype?.substring(
                                                                              0,
                                                                              5
                                                                          ) != 'email' ? (
                                                                              resource.type ==
                                                                              'resource' ? (
                                                                                  <TableCell align="left">
                                                                                      :
                                                                                      <TextField
                                                                                          id="standard-number"
                                                                                          type="number"
                                                                                          InputLabelProps={{
                                                                                              shrink: true,
                                                                                              style: {
                                                                                                  color: 'blue',
                                                                                              },
                                                                                          }}
                                                                                          InputProps={{
                                                                                              inputProps:
                                                                                                  {
                                                                                                      type: 'number',
                                                                                                      min: 1,
                                                                                                  },
                                                                                          }}
                                                                                          variant="standard"
                                                                                          defaultValue={
                                                                                              resource.SKU
                                                                                          }
                                                                                          error={
                                                                                              errorText.length ===
                                                                                              0
                                                                                                  ? false
                                                                                                  : true
                                                                                          }
                                                                                          helperText={
                                                                                              errorText.length ===
                                                                                              0
                                                                                                  ? 'Update required quantity'
                                                                                                  : errorText
                                                                                          }
                                                                                          sx={{
                                                                                              width: '41ch',
                                                                                          }}
                                                                                          onChange={
                                                                                              handleItemQuantityChange
                                                                                          }
                                                                                      />
                                                                                  </TableCell>
                                                                              ) : (
                                                                                  <TableCell>
                                                                                      :
                                                                                      {moment(
                                                                                          resource.availableDate
                                                                                      ).format(
                                                                                          'MM/DD/YYYY'
                                                                                      )}
                                                                                  </TableCell>
                                                                              )
                                                                          ) : (
                                                                              <TableCell>
                                                                                  :
                                                                                  {pagetype?.substring(
                                                                                      5,
                                                                                      pagetype.length
                                                                                  )}
                                                                              </TableCell>
                                                                          )}
                                                                      </TableRow>

                                                                      <TableRow
                                                                          key="3"
                                                                          sx={{
                                                                              '&:last-child td, &:last-child th':
                                                                                  { border: 0 },
                                                                          }}
                                                                      >
                                                                          <TableCell
                                                                              component="th"
                                                                              scope="row"
                                                                          >
                                                                              {' '}
                                                                              <b>Description</b>
                                                                          </TableCell>
                                                                          <TableCell align="left">
                                                                              :
                                                                              {resource.Description}
                                                                          </TableCell>
                                                                      </TableRow>
                                                                      <TableRow
                                                                          key="6"
                                                                          sx={{
                                                                              '&:last-child td, &:last-child th':
                                                                                  { border: 0 },
                                                                          }}
                                                                      >
                                                                          <TableCell
                                                                              component="th"
                                                                              scope="row"
                                                                          >
                                                                              {' '}
                                                                              <b>Owner Name</b>
                                                                          </TableCell>
                                                                          <TableCell align="left">
                                                                              :{resource.owner_name}
                                                                          </TableCell>
                                                                      </TableRow>
                                                                      <TableRow
                                                                          key="4"
                                                                          sx={{
                                                                              '&:last-child td, &:last-child th':
                                                                                  { border: 0 },
                                                                          }}
                                                                      >
                                                                          <TableCell
                                                                              component="th"
                                                                              scope="row"
                                                                          >
                                                                              {' '}
                                                                              <b>Address</b>
                                                                          </TableCell>
                                                                          <TableCell align="left">
                                                                              :{resource.address}
                                                                          </TableCell>
                                                                      </TableRow>

                                                                      <TableRow
                                                                          key="5"
                                                                          sx={{
                                                                              '&:last-child td, &:last-child th':
                                                                                  { border: 0 },
                                                                          }}
                                                                      >
                                                                          <TableCell
                                                                              component="th"
                                                                              scope="row"
                                                                          >
                                                                              {' '}
                                                                              <b>Distance</b>
                                                                          </TableCell>
                                                                          <TableCell align="left">
                                                                              :
                                                                              {isNaN(
                                                                                  resource.distance
                                                                              )
                                                                                  ? '0'
                                                                                  : resource.distance}{' '}
                                                                              miles
                                                                          </TableCell>
                                                                      </TableRow>

                                                                      <TableRow
                                                                          key="7"
                                                                          sx={{
                                                                              '&:last-child td, &:last-child th':
                                                                                  { border: 0 },
                                                                          }}
                                                                      >
                                                                          <TableCell
                                                                              component="th"
                                                                              scope="row"
                                                                          >
                                                                              {' '}
                                                                              <b>Phone Number</b>
                                                                          </TableCell>
                                                                          <TableCell align="left">
                                                                              :
                                                                              {
                                                                                  resource.Phone_Number
                                                                              }
                                                                          </TableCell>
                                                                      </TableRow>
                                                                      <TableRow
                                                                          key="8"
                                                                          sx={{
                                                                              '&:last-child td, &:last-child th':
                                                                                  { border: 0 },
                                                                          }}
                                                                      >
                                                                          <TableCell
                                                                              component="th"
                                                                              scope="row"
                                                                          >
                                                                              {' '}
                                                                              <b>Email</b>
                                                                          </TableCell>
                                                                          <TableCell align="left">
                                                                              :
                                                                              {resource.owner_email}
                                                                          </TableCell>
                                                                      </TableRow>
                                                                  </TableBody>
                                                              </Table>
                                                          </TableContainer>
                                                      </CardContent>
                                                  </Card>
                                              </Grid>
                                          ))
                                        : null}
                                </Grid>
                                <Grid>
                                    <Box paddingTop={3}>
                                        {isLoaded ? (
                                            <GoogleMap
                                                mapContainerStyle={containerStyle}
                                                center={currentloc}
                                                zoom={13}
                                                onLoad={onLoad}
                                                onUnmount={onUnmount}
                                            >
                                                {/* Child components, such as markers, info windows, etc. */}
                                                {directions !== null && (
                                                    <DirectionsRenderer
                                                        directions={directions}
                                                        defaultOptions={{
                                                            suppressMarkers: true,
                                                        }}
                                                    />
                                                )}
                                                <></>
                                            </GoogleMap>
                                        ) : (
                                            <></>
                                        )}
                                    </Box>
                                </Grid>
                            </CardContent>

                            <CardActions>
                                <Box style={{ marginLeft: 'auto' }}>
                                    <Button
                                        component={Link}
                                        to={'/app/gethelp'}
                                        color="primary"
                                        variant="contained"
                                        size="medium"
                                    >
                                        Cancel
                                    </Button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {pagetype?.substring(0, 5) != 'email' ? (
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            size="medium"
                                            onClick={handleConfirm}
                                        >
                                            Confirm
                                        </Button>
                                    ) : null}
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>{' '}
                </Container>
            </Box>
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
