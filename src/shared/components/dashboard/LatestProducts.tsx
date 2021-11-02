import * as React from 'react';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import {
    Box,
    Button,
    Card,
    CardHeader,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const products = [
    {
        id: uuid(),
        name: 'COVID Vaccine for Younger Kids Already Being Packed, Shipped',
        imageUrl: '/static/images/products/USNews_icon.png',
        updatedAt: moment().subtract(2, 'hours'),
    },
    {
        id: uuid(),
        name: 'Bay Area Health Officers Issue Criteria for Lifting COVID-19 Indoor Masking Requirements',
        imageUrl: '/static/images/products/santa_clara_county_news.png',
        updatedAt: moment().subtract(2, 'hours'),
    },
    {
        id: uuid(),
        name: 'COVID-19 Pfizer Booster Shots Now Available for Eligible Individuals in Santa Clara County',
        imageUrl: '/static/images/products/santa_clara_county_news.png',
        updatedAt: moment().subtract(3, 'hours'),
    },
    {
        id: uuid(),
        name: 'Flu vs. the Common Cold',
        imageUrl: '/static/images/products/USNews_icon.png',
        updatedAt: moment().subtract(5, 'hours'),
    },
];

const LatestProducts = (props) => (
    <Card {...props}>
        <CardHeader subtitle={`${products.length} in total`} title="Health News" />
        <Divider />
        <List>
            {products.map((product, i) => (
                <ListItem divider={i < products.length - 1} key={product.id}>
                    <ListItemAvatar>
                        <img
                            alt={product.name}
                            src={product.imageUrl}
                            style={{
                                height: 48,
                                width: 48,
                            }}
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary={product.name}
                        secondary={`Updated ${product.updatedAt.fromNow()}`}
                    />
                    <IconButton edge="end" size="small">
                        <MoreVertIcon />
                    </IconButton>
                </ListItem>
            ))}
        </List>
        <Divider />
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

export default LatestProducts;
