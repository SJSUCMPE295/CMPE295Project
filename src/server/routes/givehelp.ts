import { Router } from 'express';
import serviceModel from '../models/services';
import resourceModel from '../models/resources';
import userModel from '../models/user';
import { json } from 'stream/consumers';
const router = Router();
// const auth = require('../middleware/auth');
// const fetchController = require('../controller/fetch');
// API to post resource
router.post('/resource', async (req, res) => {
    const UserId=req.body.UserId;
    const Resource_Name=req.body.Resource_Name;
    const Category=req.body.Category;
    const Description=req.body.Description;
    const Phone_Number=req.body.Phone_Number;
    const Address=req.body.Address;
    const City=req.body.City;
    const State=req.body.State;
    const Zipcode=req.body.Zipcode;
    const Country=req.body.Country;
    const SKU=req.body.SKU;
    // var id=null;

    // userModel.find({userName:UserName}, (err, user) => {
    //     if(err){
    //         console.log(err);
    //     }else{
    //     console.log("Inside function")
    //     console.log(user)
    //     }
    // });
    // const UserId=id;
    // console.log(id);
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
    });
    try {
        await resourcedata.save((error, data) => {
            if (error) {
                console.log('error', error);
                return res.status(500).send({message:'Unable to upload resource data due to internal server error!'});
            } else {
                console.log('data', data);
                res.status(200).send({message:'Resource data uploaded!'});
            }
        });
    } catch (err) {
        res.json({ message: err });
    }
});

// API to post service
router.post('/service', async (req, res) => {
    const UserId=req.body.UserId;
    const Service_Name=req.body.Service_Name;
    const Category=req.body.Category;
    const Description=req.body.Description;
    const Phone_Number=req.body.Phone_Number;
    const Address=req.body.Address;
    const City=req.body.City;
    const State=req.body.State;
    const Zipcode=req.body.Zipcode;
    const Country=req.body.Country;
    const availableDate=req.body.availableDate;
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
    });
    try {
        await servicedata.save((error, data) => {
            if (error) {
                console.log('error', error);
                return res.status(500).send({message:'Unable to upload service data due to internal server error!'});
            } else {
                console.log('data', data);
                res.status(200).send({message:'Resource data uploaded!'});
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
            {$set:{ availableDate: _req.body.availableDate }},
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