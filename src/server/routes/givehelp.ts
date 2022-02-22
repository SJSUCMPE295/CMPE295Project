import { Router } from 'express';
import serviceModel from '../models/services';
import resourceModel from '../models/resources';
const router = Router();
export const saveResource = async (req, res) => {
    const { UserId: userId, Category, Description, AddressId, SKU } = req.body || {};
    const Resource_Name = req.body.Resource_Name;
    const Phone_Number = req.body.Phone_Number;
    const resourceData = new resourceModel({
        userId,
        Resource_Name,
        Category,
        Description,
        Phone_Number,
        AddressId,
        SKU,
    });
    try {
        await resourceData.save((error, data) => {
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
};
export const updateService = async (_req, res) => {
    const id = _req.query._id;
    try {
        serviceModel.findByIdAndUpdate(
            id,
            { $set: { Availability: _req.body.Availability } },
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
};
export const saveService = async (req, res) => {
    const { UserId, Category, Description, AddressId, Availability } = req.body || {};
    const Service_Name = req.body.Service_Name;
    const Phone_Number = req.body.Phone_Number;
    const serviceData = new serviceModel({
        UserId,
        Service_Name,
        Category,
        Description,
        Phone_Number,
        AddressId,
        Availability,
    });
    try {
        await serviceData.save((error, data) => {
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
};
// API to post resource
router.post('/resource', saveResource);
// API to post service
router.post('/service', saveService);
//Api to update Service Availability
router.post('/update', updateService);

export default router;
