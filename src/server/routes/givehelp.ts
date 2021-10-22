const express = require('express');
const router = express.Router();
const Services = require('../models/services');
const Resources = require('../models/resources');
// const auth = require('../middleware/auth');
// const fetchController = require('../controller/fetch');

router.post('/resource', async (_req, res) => {
    const resourcedata = new Resources({
        UserId: _req.body.UserId,
        Resource_Name: _req.body.Resource_Name,
        Category: _req.body.Category,
        Description: _req.body.Description,
        Phone_Number: _req.body.Phone_Number,
        AddressId: _req.body.AddressId,
        SKU: _req.body.SKU,
    });
    try {
        await resourcedata.save((error, data) => {
            if (error) {
                console.log('error', error);
                res.json(500).send(error);
            } else {
                console.log('data', data);
                res.status(200).json(data);
            }
        });
    } catch (err) {
        res.json({ message: err });
    }
});

export default router;
