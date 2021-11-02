import * as React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Typography,
    colors,
    useTheme,
} from '@material-ui/core';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PhoneIcon from '@material-ui/icons/Phone';
import TabletIcon from '@material-ui/icons/Tablet';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import WarningIcon from '@material-ui/icons/Warning';

const TrafficByDevice = (props) => {
    const theme = useTheme();

    const data = {
        datasets: [
            {
                data: [89, 11],
                backgroundColor: [colors.indigo[500], colors.orange[600]],
                borderWidth: 8,
                borderColor: colors.common.white,
                hoverBorderColor: colors.common.white,
            },
        ],
        labels: ['Vaccinated', 'Unvaccinated'],
    };

    const options = {
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

    const devices = [
        {
            title: 'Vaccinated',
            value: 89,
            icon: VerifiedUserIcon,
            color: colors.indigo[500],
        },
        {
            title: 'Unvaccinated',
            value: 11,
            icon: WarningIcon,
            color: colors.red[600],
        },/*
        {
            title: 'Mobile',
            value: 23,
            icon: PhoneIcon,
            color: colors.orange[600],
        },*/
    ];

    return (
        <Card {...props}>
            <CardHeader title="Covid-19 Vaccination Status" />
            <Divider />
            <CardContent>
                <Box
                    sx={{
                        height: 300,
                        position: 'relative',
                    }}
                >
                    <Doughnut data={data} options={options} />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        pt: 2,
                    }}
                >
                    {devices.map(({ color, icon: Icon, title, value }) => (
                        <Box
                            key={title}
                            sx={{
                                p: 1,
                                textAlign: 'center',
                            }}
                        >
                            <Icon color="action" />
                            <Typography color="textPrimary" variant="body1">
                                {title}
                            </Typography>
                            <Typography style={{ color }} variant="h2">
                                {value}%
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
};

export default TrafficByDevice;
