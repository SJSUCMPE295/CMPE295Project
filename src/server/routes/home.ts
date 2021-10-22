const express = require('express');
const router = express.Router();
const Services = require('../models/services');
const Resources = require('../models/resources');
// const auth = require('../middleware/auth');
// const fetchController = require('../controller/fetch');

router.get('/', async (_req, res) => {
    // res.send({test: 'Get Home'});
    // console.log(_req);
    const response = {
        resources: [{}],
        services: [{}],
    };
    try {
        const resources = await Resources.find({}, (error, data) => {
            if (error) {
                res.status(400).send(error);
            } else {
                response.resources = data;
                const services = Services.find({}, (error1, data1) => {
                    if (error1) {
                        res.status(400).send(error1);
                    } else {
                        response.services = data1;
                        console.log(response);
                        res.send(response);
                    }
                });
            }
        });
        // const services = await Services.find();
        // if (resources) {
        //     response.resources = resources;
        // }

        // if (services) {
        //     response.services = services;
        // }

        // console.log(response);
        // res.send(response);
    } catch (error) {
        return res.status(500).send(error);
    }
});

export default router;
