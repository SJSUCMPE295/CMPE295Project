import { Router } from 'express';
import { serviceModel } from '../models/services';
import { resourceModel } from '../models/resources';
const router = Router();
// const auth = require('../middleware/auth');
// const fetchController = require('../controller/fetch');
// API to post resource
router.post('/resource', async (req, res) => {
    const {
        UserId = 'test',
        Resource_Name = 'test',
        Category = 'test',
        Description = 'test',
        Phone_Number = 1,
        AddressId = 'test',
        SKU = 1,
    } = req.body;
    const resourcedata = new resourceModel({
        UserId,
        Resource_Name,
        Category,
        Description,
        Phone_Number,
        AddressId,
        SKU,
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

// API to post service
router.post('/service', async (req, res) => {
    //    const {UserId='test', Resource_Name='test', Category='test', Description='test', Phone_Number=1, AddressId='test', SKU=1}  = req.body
    const servicedata = new serviceModel({
        UserId: req.body.UserId,
        Service_Name: req.body.Service_Name,
        Category: req.body.Category,
        Description: req.body.Description,
        Phone_Number: req.body.Phone_Number,
        AddressId: req.body.AddressId,
        Availability: req.body.Availability,
    });
    try {
        await servicedata.save((error, data) => {
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

//Api to update Service Availability
router.post('/update', async (_req, res) => {
    const id = _req.body.serviceId;
    try {
        serviceModel.findByIdAndUpdate(
            id,
            { Availability: _req.body.Availability },
            (error, data) => {
                if (error) {
                    console.log('error', error);
                    res.json(500).send(error);
                } else {
                    console.log('data', data);
                    res.status(200).json(data);
                }
            }
        );
    } catch (err) {
        res.json({ message: err });
    }
});

export default router;
