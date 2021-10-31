const express = require('express');
const router = express.Router();
const Mongoose = require('mongoose');
const Users = require('../models/user');
//const Doctors=require('../models/doctor');

//API for signup
router.post('/user', async (_req, res) => {
    console.log(_req);
    const userdata = new Users({
        _UserId: new Mongoose.Types.ObjectId(),
        UserName: _req.body.UserName,
        Password: _req.body.Password,
        FirstName: _req.body.FirstName,
        LastName: _req.body.LastName,
        UserMetaData: {
            Gender: _req.body.Gender,
            isDoctor: _req.body.isDoctor,
        },
        // Profile:{
        //     PhoneNumber: _req.body.Profile.PhoneNumber,
        //     Profile_Active:_req.body.Profile.Profile_Active,
        //     Profile_Pic:_req.body.Profile.Profile_Pic
        // },
        Profile: _req.body.Profile,

        // Address:[{
        //    Location:_req.body.Address[0].Location,
        //     City:_req.body.Address[0].City,
        //     State:_req.body.State,
        //     Country:_req.body.Country,
        //     ZipCode:_req.body.ZipCode,
        // }]
        Address: _req.body.Address,
    });
    // try {
    //     await userdata.save((error, data)=>{
    //         if(error){
    //             console.log('error', error);
    //             res.json(500).send("System Error");
    //         }
    //         if(data){
    //             res.status(400).send("User already exists");
    //         }
    //         else{
    //             res.status(200).send("User added")
    //         }
    //     })
    // } catch(err){
    //     res.json({message:err});
    // }
    userdata
        .save()
        .then((result) => {
            console.log(result);
            res.status(201).json({
                message: 'User created',
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
});

export default router;
