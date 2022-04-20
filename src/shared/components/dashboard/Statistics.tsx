import React, { Component, useRef, useEffect, useState, FunctionComponent } from 'react';
import { Link as RouterLink } from "react-router-dom";
import { connect } from 'react-redux';
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography,
    Button,
    CardHeader,
    Divider,
    useTheme,
    colors,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
    Tooltip,
} from '@material-ui/core';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Doughnut } from 'react-chartjs-2';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import MoneyIcon from '@material-ui/icons/Money';
import { red, green, orange, indigo } from '@material-ui/core/colors';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import { Bar } from 'react-chartjs-2';
import AutoAwesomeIcon from '@material-ui/icons/AutoAwesomeMosaic';
import HealthNews from '../../components/dashboard/HealthNews';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import WarningIcon from '@material-ui/icons/Warning';
import axios from 'axios';

const Statistics: FunctionComponent<any> = ({userProfileReducer,props}) => {
    const UserId =userProfileReducer.id; //'6225e61bf81d2541a4000bc9'//userProfileReducer.id;
    console.log(UserId);
    //const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    //'617f2fb40583ba49a0091425';
    useEffect(() => {
       // if (typeof myVar !== 'undefined'
        axios
            .get('/api/home', {params:{ user: UserId}} ) //change later
            .then(
                (response) => {
                    console.log(response.data);
                    setData(response.data);
                },
                (error) => {
                    console.log(error);
                    setError(error);
                }
            );
        //.finally(()=> {setLoading(false); })
    }, []);
    //if (loading) return "Loading...."
    //if (error) return "Error"
    let resourcename = [];
    let resourcesku = [];
    let transactiontype = [];
    let transactioncount = [];
    let totalusertrans = 0;
    let totalresources=0;
    let usertransactions={};
    let userappointments={};
    const theme = useTheme();
    if (data != null) {
        const resources = data.resources;

        resources.forEach((element) => {
            resourcename.push(element._id);
            resourcesku.push(element.resource_SKU);
        });
         totalresources = resourcesku.reduce((result, number) => result + number);

         usertransactions = data.usertransactions;
        if (usertransactions.length > 0) {
            usertransactions.forEach((element) => {
                transactiontype.push(element._id);
                transactioncount.push(element.count);
            });
            totalusertrans = transactioncount.reduce((result, number) => result + number);
        }
        userappointments = data.userappointments;
    }
    const data_donut = {
        datasets: [
            {
                data: transactioncount,
                backgroundColor: [colors.indigo[500], colors.orange[600]],
                borderWidth: 8,
                borderColor: colors.common.white,
                hoverBorderColor: colors.common.white,
            },
        ],
        labels: transactiontype,
    };

    const options_donut = {
        animation: false,
        cutoutPercentage: 80,
        layout: { padding: 0 },
        legend: {
            display: false,
        },
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
            backgroundColor: theme.palette.background.paper,
            bodyFontColor: theme.palette.text.secondary,
            borderColor: theme.palette.divider,
            borderWidth: 1,
            enabled: true,
            footerFontColor: theme.palette.text.secondary,
            intersect: false,
            mode: 'index',
            titleFontColor: theme.palette.text.primary,
        },
    };

    const datab = {
        datasets: [
            {
                backgroundColor: colors.indigo[500],
                barPercentage: 0.5,
                barThickness: 12,
                borderRadius: 4,
                categoryPercentage: 0.5,
                data: resourcesku,
                label: 'Quantity available',
                maxBarThickness: 13,
            },
        ],
        labels: resourcename,
    };

    const options = {
        animation: false,
        cornerRadius: 20,
        layout: { padding: 0 },
        legend: { display: false },
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            xAxes: 
                {
                    ticks: {
                        Color: theme.palette.text.secondary,
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                },
            
            yAxes: 
                {
                    ticks: {
                        fontColor: theme.palette.text.secondary,
                        beginAtZero: true,
                        min: 0,
                    },
                    gridLines: {
                        borderDash: [2],
                        borderDashOffset: [2],
                        color: theme.palette.divider,
                        drawBorder: false,
                        zeroLineBorderDash: [2],
                        zeroLineBorderDashOffset: [2],
                        zeroLineColor: theme.palette.divider,
                    },
                },
            
        },
        tooltips: {
            backgroundColor: theme.palette.background.paper,
            bodyFontColor: theme.palette.text.secondary,
            borderColor: theme.palette.divider,
            borderWidth: 1,
            enabled: true,
            footerFontColor: theme.palette.text.secondary,
            intersect: false,
            mode: 'index',
            titleFontColor: theme.palette.text.primary,
        },
    };

    return (
        <Grid container spacing={3}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Card sx={{ height: '100%' }} {...props}>
                    <CardContent>
                        <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
                            <Grid item>
                                <Typography color="textSecondary" gutterBottom variant="h6">
                                    TOTAL TRANSACTIONS
                                </Typography>

                                {data != null ? (
                                    <Typography color="textPrimary" variant="h3">
                                        {data.transactions}
                                    </Typography>
                                ) : null}
                            </Grid>
                            <Grid item>
                                <Avatar
                                    sx={{
                                        backgroundColor: red[600],
                                        height: 56,
                                        width: 56,
                                    }}
                                >
                                    <MoneyIcon />
                                </Avatar>
                            </Grid>
                        </Grid>
                        <Box
                            sx={{
                                pt: 2,
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Typography
                                sx={{
                                    color: green[900],
                                    mr: 1,
                                }}
                                variant="body2"
                            ></Typography>
                            <Typography color="textSecondary" variant="caption"></Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Card sx={{ height: '100%' }} {...props}>
                    <CardContent>
                        <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
                            <Grid item>
                                <Typography color="textSecondary" gutterBottom variant="h6">
                                    RESOURCES
                                </Typography>
                                {data != null ? (
                                    <Typography color="textPrimary" variant="h3">
                                      {totalresources}
                                    </Typography>
                                ) : null}
                            </Grid>
                            <Grid item>
                                <Avatar
                                    sx={{
                                        backgroundColor: orange[600],
                                        height: 56,
                                        width: 56,
                                    }}
                                >
                                    <InsertChartIcon />
                                </Avatar>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Card {...props}>
                    <CardContent>
                        <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
                            <Grid item>
                                <Typography color="textSecondary" gutterBottom variant="h6">
                                    TOTAL USERS
                                </Typography>
                                {data != null ? (
                                    <Typography color="textPrimary" variant="h3">
                                        {data.users}
                                    </Typography>
                                ) : null}
                            </Grid>
                            <Grid item>
                                <Avatar
                                    sx={{
                                        backgroundColor: green[600],
                                        height: 56,
                                        width: 56,
                                    }}
                                >
                                    <PeopleIcon />
                                </Avatar>
                            </Grid>
                        </Grid>
                        <Box
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                pt: 2,
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    color: green[900],
                                    mr: 1,
                                }}
                            ></Typography>
                            <Typography color="textSecondary" variant="caption"></Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Card {...props} sx={{ height: '100%' }}>
                    <CardContent>
                        <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
                            <Grid item>
                                <Typography color="textSecondary" gutterBottom variant="h6">
                                    SERVICES
                                </Typography>
                                {data != null ? (
                                    <Typography color="textPrimary" variant="h3">
                                        {data.services.length}
                                    </Typography>
                                ) : null}
                            </Grid>
                            <Grid item>
                                <Avatar
                                    sx={{
                                        backgroundColor: indigo[600],
                                        height: 56,
                                        width: 56,
                                    }}
                                >
                                    <AutoAwesomeIcon />
                                </Avatar>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid align="left" direction="row" item container spacing={3}>
                <Grid item lg={9} md={12} xl={9} xs={12}>
                    <Grid item paddingBottom={3}>
                        <Card {...props}>
                            <CardHeader
                                /*action={
                    <Button endIcon={<ArrowDropDownIcon />} size="small" variant="text">
                        Medical
                    </Button>
                }*/
                                title="Available Resources"
                            />
                            <Divider />
                            <CardContent>
                                <Box
                                    sx={{
                                        height: 400,
                                        position: 'relative',
                                    }}
                                >
                                    <Bar data={datab} options={options} />
                                </Box>
                            </CardContent>
                            <Divider />
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    p: 2,
                                }}
                            >
                                <Button
                                    
                                  
                                    href="/app/gethelp"
                                    color="primary"
                                    endIcon={<ArrowRightIcon />}
                                    size="small"
                                    variant="text"
                                >
                                    VIEW ALL
                                </Button>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card {...props}>
                            <CardHeader title="Available Services" />
                            <Divider />
                            <PerfectScrollbar>
                                <Box sx={{ minWidth: 800 }}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Service Name</TableCell>
                                                <TableCell>Category</TableCell>
                                                <TableCell>
                                                    <TableSortLabel>Available Date</TableSortLabel>
                                                </TableCell>
                                                {/*<TableCell sortDirection="desc">
                                <Tooltip enterDelay={300} title="Sort">
                                    <TableSortLabel active direction="desc">
                                        Available Date
                                    </TableSortLabel>
                                </Tooltip>
                    </TableCell>*/}
                                                <TableCell>Zip Code</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        {data != null ? (
                                            <TableBody>
                                                {data.services.map((service) => (
                                                    <TableRow hover key={service._id}>
                                                        <TableCell>
                                                            {service.Service_Name}
                                                        </TableCell>
                                                        <TableCell>{service.Category}</TableCell>
                                                        <TableCell>
                                                            {moment(service.availableDate).format(
                                                                'DD/MM/YYYY'
                                                            )}
                                                        </TableCell>
                                                        <TableCell>{service.Zipcode}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        ) : null}
                                    </Table>
                                </Box>
                            </PerfectScrollbar>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    p: 2,
                                }}
                            >
                                <Button
                                    
                                    href="/app/gethelp"
                                    color="primary"
                                    endIcon={<ArrowRightIcon />}
                                    size="small"
                                    variant="text"
                                >
                                    View all
                                </Button>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>

                <Grid item lg={3} md={12} xl={3} xs={12}>
                    {UserId != '' ? (
                        <Grid item paddingBottom={3}>
                            <Card {...props}>
                                <CardHeader title="My Activity" />
                                <Divider />
                                <CardContent>
                                    <Typography variant="h6">
                                        Total Transactions : {totalusertrans}
                                    </Typography>
                                    {data && usertransactions.length > 0 ? (
                                        <Box
                                            sx={{
                                                height: 300,
                                                position: 'relative',
                                            }}
                                        >
                                            <Doughnut data={data_donut} options={options_donut} />
                                        </Box>
                                    ) : null}
                                    <Divider />
                                    <Box
                                        sx={{
                                            //height: 300,
                                            position: 'relative',
                                        }}
                                    >
                                        <Typography variant="h6">Upcoming Appointments</Typography>
                                        {data != null ? (
                                            userappointments.length > 0 ? (
                                                userappointments.map(
                                                    ({
                                                        doctor_name: doctor_name,
                                                        AppointmentDetails: AppointmentDetails,
                                                        _id:_id
                                                    }) => (
                                                        <Typography
                                                            color="textPrimary"
                                                            variant="text" key={_id}
                                                        >
                                                            You have an appointment with{' '}
                                                            {doctor_name} at {AppointmentDetails}
                                                        </Typography>
                                                    )
                                                )
                                            ) : (
                                                <Typography color="textPrimary" variant="h7">
                                                    You do not have any appointment scheduled.
                                                </Typography>
                                            )
                                        ) : null}
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ) : null}
                    <Grid item style={{ maxHeight: '100vh', overflow: 'auto' }}>
                        <HealthNews />
                    </Grid>
                </Grid>
            </Grid>
            {/*<Grid item lg={4} md={6} xl={3} xs={12}></Grid>*/}
        </Grid>
    );
};

const mapStateToProps = ({ userProfileReducer }) => ({
    userProfileReducer,
});

const mapDispatchToProps = {};

const ConnectedStatistics = connect(mapStateToProps, mapDispatchToProps)(Statistics);
export default ConnectedStatistics;
//export default Statistics;
