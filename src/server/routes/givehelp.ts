import { Router } from 'express';
import serviceModel from '../models/services';
import resourceModel from '../models/resources';
const router = Router();
import Transaction_Logger from '../models/transactionLogger';
import categoryModel from '../models/category';

// API to post resource
router.post('/resource', async (req, res) => {
    const UserId = req.body.UserId;
    const Resource_Name = req.body.Resource_Name;
    const Category = req.body.Category;
    const Description = req.body.Description;
    const Phone_Number = req.body.Phone_Number;
    const Address = req.body.Address;
    const City = req.body.City;
    const State = req.body.State;
    const Zipcode = req.body.Zipcode;
    const Country = req.body.Country;
    const SKU = req.body.SKU;
    const ImageUrl = req.body.ImageUrl;

    const resourcedata = new resourceModel({
        UserId,
        Resource_Name,
        Category,
        Description,
        Phone_Number,
        Address,
        City,
        State,
        Zipcode,
        Country,
        SKU,
        ImageUrl,
    });

    try {
        await resourcedata.save((error, data) => {
            if (error) {
                console.log('error', error);
                return res
                    .status(500)
                    .send({
                        message: 'Unable to upload resource data due to internal server error!',
                    });
            } else {
                console.log('data', data);
                //adding transaction to transaction_logger if no error in resource data
                const id = data._id;
                var currentDate = new Date();
                var category_id;
                var category = categoryModel.findOne({ Name: Category });
                if (category != null)
                {category_id =  category._id;}
                else{category_id="0";}
                const transaction = new Transaction_Logger({
                    UserId: UserId,
                    ResourceId: id,
                    ServiceId: "",
                    Date: currentDate,
                    CategoryId: category_id,
                    Quantity: SKU,
                    Type: 'Give Help',
                });
                console.log(transaction)
                transaction.save(function (err, result) {
                    if (err) throw err;
                    console.log(result)
                    res.status(200).send({ message: 'Resource data uploaded!' });

                });
            }
        });
    } catch (err) {
        res.json({ message: err });
    }
});

// API to post service
router.post('/service', async (req, res) => {
    const UserId = req.body.UserId;
    const Service_Name = req.body.Service_Name;
    const Category = req.body.Category;
    const Description = req.body.Description;
    const Phone_Number = req.body.Phone_Number;
    const Address = req.body.Address;
    const City = req.body.City;
    const State = req.body.State;
    const Zipcode = req.body.Zipcode;
    const Country = req.body.Country;
    const availableDate = req.body.availableDate;
    const ImageUrl = req.body.ImageUrl;

    const servicedata = new serviceModel({
        UserId,
        Service_Name,
        Category,
        Description,
        Phone_Number,
        Address,
        City,
        State,
        Zipcode,
        Country,
        availableDate,
        ImageUrl,
    });
    try {
        await servicedata.save((error, data) => {
            if (error) {
                console.log('error', error);
                return res
                    .status(500)
                    .send({
                        message: 'Unable to upload service data due to internal server error!',
                    });
            } else {
                console.log('data', data);
                const id = data._id;
                var currentDate = new Date();
                var category_id;
                var category = categoryModel.findOne({ Name: Category });
                if (category != null)
                {category_id =  category._id;}
                else{category_id="0";}
                const transaction = new Transaction_Logger({
                    UserId: UserId,
                    ServiceId: id,
                    ResourceId: "",
                    Date: currentDate,
                    CategoryId: category_id,
                    Quantity: 0,
                    Type: 'Give Help',
                });
                console.log(transaction)
                transaction.save(function (err, result) {
                    if (err) throw err;
                    console.log(result)
                    res.status(200).send({ message: 'Service data uploaded!' });

                });
            }
        });
    } catch (err) {
        res.json({ message: err });
    }
});

//Api to update Service Availability
router.post('/update', async (_req, res) => {
    const id = _req.query._id;
    try {
        serviceModel.findByIdAndUpdate(
            id,
            { $set: { availableDate: _req.body.availableDate } },
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
