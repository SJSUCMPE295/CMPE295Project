import { Router } from 'express';
const router = Router();
const Mongoose=require("mongoose");
import { userModel } from '../models/user';
//const Doctors=require('../models/doctor');

///API for signup
router.post('/user', async (req, res) => {
    console.log(req);
    const userdata = new userModel({
        _UserId: new Mongoose.Types.ObjectId(),
        UserName: req.body.UserName,
        Password: req.body.Password,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        UserMetaData: {
            Gender: req.body.Gender,
            isDoctor: req.body.isDoctor,
        },
        // Profile:{
        //     PhoneNumber: req.body.Profile.PhoneNumber,
        //     Profile_Active:req.body.Profile.Profile_Active,
        //     Profile_Pic:req.body.Profile.Profile_Pic
        // },
        Profile: req.body.Profile,

        // Address:[{
        //    Location:req.body.Address[0].Location,
        //     City:req.body.Address[0].City,
        //     State:req.body.State,
        //     Country:req.body.Country,
        //     ZipCode:req.body.ZipCode,
        // }]
        Address: req.body.Address,
    });
    try {
        await userdata.save((error, data)=>{
            if(error){
                console.log('error', error);
                res.json(500).send("System Error");
            }
            if(data){
                res.status(400).send("User already exists");
            }
            else{
                userdata.save((err,data)=>{
                    if(err){
                        res.status(500).end("Error in data");
                    }
                    else{
                        res.status(200).end("User added");
                    }
                })
            }
        })
    } catch(err){
        res.json({message:err});
    }
//     userdata
//         .save()
//         .then((result) => {
//             console.log(result);
//             res.status(201).json({
//                 message: 'User created',
//     userModel.find({UserName:req.body.UserName})
//     .exec()
//     .then(user_info => {
//         if(user_info.length>=1) {
//             return res.status(409).json({
//                 message:"User exists"
//             });
//         })
//         .catch((err) => {
//             console.log(err);
//             res.status(500).json({
//                 error: err,
//         }  else{
//                 console.log(req);
//                 const userdata = new userModel({
//                 _UserId: new Mongoose.Types.ObjectId(),
//                 UserName: req.body.UserName,
//                 Password: req.body.Password,
//                 FirstName: req.body.FirstName,
//                 LastName: req.body.LastName,
//                 UserMetaData: {
//                     Gender: req.body.Gender,
//                     isDoctor: req.body.isDoctor,
//                 },
//                 // Profile:{
//                 //     PhoneNumber: req.body.Profile.PhoneNumber,
//                 //     Profile_Active:req.body.Profile.Profile_Active,
//                 //     Profile_Pic:req.body.Profile.Profile_Pic
//                 // },
//                 Profile: req.body.Profile,

//                 // Address:[{
//                 //    Location:req.body.Address[0].Location,
//                 //     City:req.body.Address[0].City,
//                 //     State:req.body.State,
//                 //     Country:req.body.Country,
//                 //     ZipCode:req.body.ZipCode,
//                 // }]
//                 Address: req.body.Address,
//             });
//         });
// });
//             // try {
//             //     await userdata.save((error, data)=>{
//             //         if(error){
//             //             console.log('error', error);
//             //             res.json(500).send("System Error");
//             //         }
//             //         if(data){
//             //             res.status(400).send("User already exists");
//             //         }
//             //         else{
//             //             res.status(200).send("User added")
//             //         }
//             //     })
//             // } catch(err){
//             //     res.json({message:err});
//             // }
//             userdata
//                 .save()
//                 .then((result) => {
//                     console.log(result);
//                     res.status(201).json({
//                         message: 'User created',
//                     });
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                     res.status(500).json({
//                         error: err,
//                     });
//                 });
//             }  
});

export default router;