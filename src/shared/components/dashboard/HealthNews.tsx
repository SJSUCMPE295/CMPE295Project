import * as React from 'react';
import { Component, useRef, useEffect, useState, FunctionComponent } from 'react';
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
    ListItemButton,
    ListItemIcon,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    ListItemText,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import PerfectScrollbar from 'react-perfect-scrollbar';

const HealthNews = () => {
    // { headers: { Accept: “application/json” } }
    const newsRssFeed =
        'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.news-medical.net%2Fsyndication.axd%3Fformat%3Drss';
    const medicalNewsLink = 'https://www.news-medical.net/syndication.axd';
    const MAX_ARTICLES = 10;
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        //const loadArticles = async () => {
        fetch(newsRssFeed)
            .then((res) => res.json())
            .then((data) => data.items.filter((item) => item.title.length > 0))
            .then((newArticles) => newArticles.slice(0, MAX_ARTICLES))
            .then((articles) => setArticles(articles));
        //.catch((error) => console.log(error))
        //.then(data => console.log(data))
        //};
        //loadArticles();
    }, [MAX_ARTICLES]);

    /* - SR
var convert = require('xml-js');
fetch(medicalNewsLink)
.then((resXML) => console.log(resXML))

useEffect(() => {
    fetch(medicalNewsLink)
    .then((res) => res.json())
    //.then((resJson) => convert.xml2json(resJson, {compact: true, spaces: 4}))
    .then((data) => data.items.filter((item) => item.title.length > 0))
    .then((articles) => setArticles(articles))
    }, [MAX_ARTICLES]);

SR-End */

    //console.log(articles);

    //}, [MAX_ARTICLES]);

    return (
        <Card>
            <CardHeader title="Health News" />
            <Divider />

            {articles != null ? (
                <List>
                    {' '}
                    {articles.map((article, i) => (
                        <ListItemButton
                            component="a"
                            href={article.link}
                            divider={i < articles.length - 1}
                            key={article.guid}
                        >
                            <ListItemIcon sx={{ paddingRight: 2 }}>
                                <img
                                    alt={article.title}
                                    src={article.enclosure.link}
                                    style={{
                                        height: 100,
                                        width: 70,
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <React.Fragment>
                                        <Typography color="textPrimary" variant="body2">
                                            {article.title}
                                        </Typography>
                                    </React.Fragment>
                                }
                                secondary={
                                    <Typography color="textSecondary" variant="caption">
                                        {article.pubDate}
                                    </Typography>
                                }
                            />
                        </ListItemButton>
                    ))}
                </List>
            ) : null}
            <Divider />
        </Card>
    );
};
export default HealthNews;
