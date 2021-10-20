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
        const resources = await Resources.find();
        const services = await Services.find();
        if (resources) {
            response.resources = resources;
        }
        // } else {
        //     console.log('error', error);
        //     return res.json(500).send(error);
        // }
        if (services) {
            response.services = services;
        }

        console.log(response);
        res.send(response);
        // const user = await Users.findOne({ _id: _req.query.userId }, (error, data) => {
        //     if (error) {
        //         console.log('error', error);
        //         return res.json(500).send(error);
        //     } else {
        //         console.log('data', data);
        //         console.log('server');
        //         return res.send(data);
        //     }
        // });
    } catch (error) {
        return res.status(500).send(error);
    }
});

export default router;
