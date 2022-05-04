/*global google*/
import React, { Component, useRef, useEffect, useState, FunctionComponent } from 'react';
import { Helmet } from 'react-helmet-async';
import PerfectScrollbar from 'react-perfect-scrollbar';
import moment from 'moment';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { connect } from 'react-redux';
import {
    Box,
    Grid,
    Container,
    Typography,
    Card,
    CardContent,
    TextField,
    Divider,
    InputAdornment,
    CardActions,
    SvgIcon,
    Button,
    CardMedia,
    Pagination,
} from '@material-ui/core';
import {
    Search as SearchIcon,
    Navigation as NavigationIcon,
    Globe as CircleIcon,
    AlignRight,
} from 'react-feather';
import axios from 'axios';
import { GoogleMap, useJsApiLoader, Marker, DirectionsRenderer } from '@react-google-maps/api';

import { withRouter, useLocation, Link } from 'react-router-dom';

const containerStyle = {
    width: '570px',
    height: '770px',
};

const center = {
    lat: 37.3184,
    lng: -121.8381589,
};
const GetHelp: FunctionComponent<any> = ({ userProfileReducer, props }) => {
    const location = useLocation();
    const UserId = userProfileReducer?.id;

    //console.log(UserId);
    const [error, setError] = useState('');
    const [CityError, setCityError] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [miles, setMiles] = useState('45');
    const [currentloc, setCurrentloc] = useState(null);
    const [directions, setDirections] = useState(null);
    const [datafilter, setDataFilter] = React.useState('all');
    const [data, setData] = useState(null);
    let ignoreStat = false;
    let origin = {};
    const [UserCompleteAddress, setUserCompleteAddress] = useState(null);

    ////Pagination code
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);
    const [totalitem, setTotalItem] = useState(0);
    const [pageSize, setPageSize] = useState(4);
    let pageSizes = [4, 8, 16];
    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };
    const handlePageSizeChange = (event) => {
        setPageSize(event.target.value);
        setPage(1);
    };

    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangeCity = (event) => {
        setCityError('');
        setCity(event.target.value);
    };
    const handleChangeMiles = (event) => {
        setMiles(event.target.value);
    };
    const handlePageLoad = () => {
        const token = localStorage.getItem('token');
        // set the with credentials to true
        axios.defaults.withCredentials = true;
        axios
            .get(
                '/api/gethelp',
                {
                    params: {
                        name: name,
                        miles: miles,
                        city: '',
                        datafilter: datafilter,
                        user_location: UserCompleteAddress,
                    },
                },
                {
                    headers: {
                        authtoken: token,
                    },
                }
            )
            .then(
                (response) => {
                    ignoreStat = true;
                    setData(response?.data?.resources);
                    setDirections(null);

                    setTotalItem(Object.keys(response?.data?.resources).length);
                    setCount(Math.ceil(Object.keys(response?.data?.resources).length / pageSize));
                    setPage(1);
                },
                (error) => {
                    console.log(error);
                    setError(error);
                }
            );
    };

    const handleSearch = (event) => {
        event.preventDefault();
        setData(null);
        setTotalItem(0);
        if (miles != '' && city == '') {
            setCityError('Please enter a city to search');
            setData(null);
            setDirections(null);

            setTotalItem(0);
            setCount(0);
            setPage(1);
        } else {
            setCityError('');
            const token = localStorage.getItem('token');
            // set the with credentials to true
            axios.defaults.withCredentials = true;

            axios
                .get(
                    '/api/gethelp',
                    {
                        params: {
                            name: name,
                            miles: miles,
                            city: city,
                            datafilter: datafilter,
                            user_location: UserCompleteAddress,
                        },
                    },
                    {
                        headers: {
                            authtoken: token,
                        },
                    }
                )
                .then(
                    (response) => {
                        setData(response?.data?.resources);
                        setDirections(null);

                        setTotalItem(Object.keys(response?.data?.resources).length);
                        setCount(
                            Math.ceil(Object.keys(response?.data?.resources).length / pageSize)
                        );
                        setPage(1);
                    },
                    (error) => {
                        console.log(error);
                        setError(error);
                    }
                );
        }
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyCW3O6PQctDxoSoSNYWVa44nXc1ze4V-Nw',
    });
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
                        setCity(city + ', ' + state);
                        handlePageLoad();
                    }
                }
            );
        });
    };

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

    //function that is calling the directions service
    const getDirections = (resource) => {
        const directionsService = new google.maps.DirectionsService();
        let destination = resource.address;
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

    const handleRadioChange = (event) => {
        setDataFilter(event.target.value);
    };

    return (
        <>
            <Helmet>
                <title>GetHelp | WeCare</title>
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
                        <Box sx={{ mt: 3 }}>
                            <Card>
                                <CardContent>
                                    <Box sx={{ display: 'flex', maxWidth: 1200 }}>
                                        <Box sx={{ maxWidth: 700 }}>
                                            <span> </span>{' '}
                                            <RadioGroup
                                                row
                                                defaultValue="all"
                                                value={datafilter}
                                                onChange={handleRadioChange}
                                            >
                                                <FormControlLabel
                                                    value="all"
                                                    control={<Radio />}
                                                    label="All"
                                                />
                                                <FormControlLabel
                                                    value="resources"
                                                    control={<Radio />}
                                                    label="Resources"
                                                />
                                                <FormControlLabel
                                                    value="services"
                                                    control={<Radio />}
                                                    label="Services"
                                                />
                                            </RadioGroup>
                                            <br />
                                            <TextField
                                                style={{ width: 600 }}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <SvgIcon
                                                                fontSize="small"
                                                                color="action"
                                                            >
                                                                <SearchIcon />
                                                            </SvgIcon>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                placeholder="Search resource/service"
                                                value={name}
                                                variant="outlined"
                                                onChange={handleChangeName}
                                            />
                                            <br />
                                            <br />
                                            <TextField
                                                style={{ width: 300 }}
                                                //fullWidth
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <SvgIcon
                                                                fontSize="small"
                                                                color="action"
                                                            >
                                                                <NavigationIcon />
                                                            </SvgIcon>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                placeholder="Search within City"
                                                helperText="Search within City"
                                                value={city}
                                                variant="outlined"
                                                onChange={handleChangeCity}
                                            />
                                            <span> </span>
                                            <TextField
                                                style={{ width: 300 }}
                                                //fullWidth
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <SvgIcon
                                                                fontSize="small"
                                                                color="action"
                                                            >
                                                                <CircleIcon />
                                                            </SvgIcon>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                placeholder="Search within miles"
                                                helperText="Search within miles"
                                                value={miles}
                                                variant="outlined"
                                                onChange={handleChangeMiles}
                                            />
                                            <br />
                                            <br />
                                            <div style={{ color: 'red' }}>{CityError}</div>
                                        </Box>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                width: 200,
                                                alignItems: 'center',
                                            }}
                                        >
                                            <br />
                                            <br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <br />
                                            <br />
                                            <br />
                                            <Button
                                                style={{ width: 150, height: 50 }}
                                                color="primary"
                                                variant="contained"
                                                onClick={handleSearch}
                                            >
                                                Search
                                            </Button>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Box sx={{ pt: 3 }}>
                                {data != null && datafilter != null ? (
                                    <Grid container spacing={2}>
                                        {(pageSize > 0
                                            ? data.slice(
                                                  (page - 1) * pageSize,
                                                  (page - 1) * pageSize + pageSize
                                              )
                                            : data
                                        ).map((resource) => (
                                            <Grid item xs={6} key={resource._id}>
                                                <Card>
                                                    {resource.ImageUrl != '' ? (
                                                        <CardMedia
                                                            component="img"
                                                            height="140"
                                                            src={resource.ImageUrl}
                                                            alt={resource.Name}
                                                        />
                                                    ) : (
                                                        <CardMedia
                                                            component="img"
                                                            height="140"
                                                            alt={resource.Name}
                                                            image="/static/images/avatars/resource.png"
                                                        />
                                                    )}
                                                    <CardContent>
                                                        <Typography
                                                            gutterBottom
                                                            variant="h5"
                                                            component="div"
                                                        >
                                                            {resource.Name}
                                                        </Typography>
                                                        <Typography
                                                            variant="body2"
                                                            color="text.secondary"
                                                        >
                                                            {resource.Description}
                                                        </Typography>
                                                        <Typography
                                                            variant="body2"
                                                            color="text.secondary"
                                                        >
                                                            {resource.type != 'resource'
                                                                ? 'Available on ' +
                                                                  moment(
                                                                      resource.availableDate
                                                                  ).format('MM/DD/YYYY')
                                                                : resource.SKU +
                                                                  ' item(s) available'}
                                                        </Typography>
                                                        <Typography
                                                            variant="body2"
                                                            color="text.secondary"
                                                        >
                                                            {resource.distance + 'miles'}
                                                        </Typography>
                                                        <Typography
                                                            variant="body2"
                                                            color="text.secondary"
                                                        >
                                                            {resource.address}
                                                            <Button
                                                                style={{
                                                                    marginLeft: 'none',
                                                                    textTransform: 'none',
                                                                }}
                                                                onClick={() =>
                                                                    getDirections(resource)
                                                                }
                                                            >
                                                                Direction
                                                            </Button>
                                                        </Typography>
                                                    </CardContent>
                                                    <CardActions>
                                                        <Box style={{ marginLeft: 'auto' }}>
                                                            <Button
                                                                size="large"
                                                                component={Link}
                                                                to={`/app/gethelp/:${resource._id}/:${resource.type}/:gethelpitem`}
                                                            >
                                                                Reserve
                                                            </Button>
                                                        </Box>
                                                    </CardActions>
                                                </Card>
                                            </Grid>
                                        ))}
                                    </Grid>
                                ) : null}
                            </Box>
                            <div>
                                <br></br>
                                {'Total Items: '}
                                {totalitem} &nbsp;&nbsp;{'Items per Page: '}
                                <select onChange={handlePageSizeChange} value={pageSize}>
                                    {pageSizes.map((size) => (
                                        <option key={size} value={size}>
                                            {size}
                                        </option>
                                    ))}
                                </select>
                                <br></br>
                                <br></br>
                                <Pagination
                                    count={count}
                                    page={page}
                                    variant="outlined"
                                    shape="rounded"
                                    onChange={handlePageChange}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <Box paddingTop={3}>
                                {isLoaded ? (
                                    <GoogleMap
                                        mapContainerStyle={containerStyle}
                                        center={currentloc}
                                        zoom={13}
                                        onLoad={onLoad}
                                        onUnmount={onUnmount}
                                    >
                                        {currentloc !== null && (
                                            <Marker
                                                title="Your current location"
                                                key="marker_1"
                                                position={currentloc}
                                            />
                                        )}
                                        {data != null && directions == null
                                            ? data.map((resource) => (
                                                  <Marker
                                                      title={resource.markertitle}
                                                      key={resource._id}
                                                      position={resource.location}
                                                  />
                                              ))
                                            : null}
                                        {/* Child components, such as markers, info windows, etc. */}
                                        {directions !== null && (
                                            <DirectionsRenderer
                                                directions={directions}
                                                defaultOptions={{
                                                    suppressMarkers: false,
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
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

const mapStateToProps = ({ userProfileReducer }) => ({
    userProfileReducer,
});

const mapDispatchToProps = {};

const ConnectedGetHelp = connect(mapStateToProps, mapDispatchToProps)(GetHelp);
export default withRouter(ConnectedGetHelp);
