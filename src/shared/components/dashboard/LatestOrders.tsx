import * as React from 'react';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Box,
    Button,
    Card,
    CardHeader,
    Chip,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
    Tooltip,
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const orders = [
    {
        id: uuid(),
        ref: 'Car Pool',
        amount: 30.5,
        customer: {
            name: 'Travel',
        },
        createdAt: 1633069035000,
        status: '95125',
    },
    {
        id: uuid(),
        ref: 'Accommodation',
        amount: 25.1,
        customer: {
            name: 'Accommodation',
        },
        createdAt: 1633328235000,
        status: '94085',
    },
    {
        id: uuid(),
        ref: 'Car Pool',
        amount: 30.5,
        customer: {
            name: 'Travel',
        },
        createdAt: 1633328235000,
        status: '95336',
    }, 
    {
        id: uuid(),
        ref: 'Car Pool',
        amount: 30.5,
        customer: {
            name: 'Travel',
        },
        createdAt: 1633587435000,
        status: '95336',
    },
    {
        id: uuid(),
        ref: 'Car Pool',
        amount: 30.5,
        customer: {
            name: 'Travel',
        },
        createdAt: 1633587435000,
        status: '95336',
    },
    {
        id: uuid(),
        ref: 'Accommodation',
        amount: 25.1,
        customer: {
            name: 'Accommodation',
        },
        createdAt: 1633587435000,
        status: '94085',
    },
];

const LatestOrders = (props) => (
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
                            <TableCell sortDirection="desc">
                                <Tooltip enterDelay={300} title="Sort">
                                    <TableSortLabel active direction="desc">
                                        Available Date
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                            <TableCell>Zip Code</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow hover key={order.id}>
                                <TableCell>{order.ref}</TableCell>
                                <TableCell>{order.customer.name}</TableCell>
                                <TableCell>
                                    {moment(order.createdAt).format('DD/MM/YYYY')}
                                </TableCell>
                                <TableCell>{order.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
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
            <Button color="primary" endIcon={<ArrowRightIcon />} size="small" variant="text">
                View all
            </Button>
        </Box>
    </Card>
);

export default LatestOrders;
