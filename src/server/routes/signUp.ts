import { Router } from 'express';
import Mongoose from 'mongoose';
import { userModel } from '../models/user';
import doctorModel from '../models/doctor';
import { User } from 'react-feather';
import { fabClasses } from '@mui/material';
const router = Router();

///API for signup
router.post('/user', async (req, res) => {
    // console.log("req.body : ",req.body);
    const {
        userName,
        // password = 'test005',
        firstName,
        lastName,
        userMetaData = {
            isDoctor: false,
            gender: '',
        },
        profile = {
            phoneNumber: 0,
            profileActive: false,
            profilePic: '',
        },
        address = 
            {
                location: '',
                city: '',
                state: '',
                country: '',
                zipCode: '',
            },
    } = req.body;
    // console.log('create', req);
    const userdata = new userModel({
        _userId: new Mongoose.Types.ObjectId(),
        userName,
        // password,
        firstName,
        lastName,
        userMetaData,
        profile,
        address,
    });
    try {
        // console.log('data', userdata);
        userdata.save((error, data) => {
            if (data) {
                console.log('success', data);
                    res.writeHead(200, {
                        'Content-Type': 'text/plain',
                      });
                      res.end(JSON.stringify({message:'Signup Successful', data: data}));
                
                } else {
                    console.log('System Error', error);
                res.writeHead(404, {
                    'Content-Type': 'text/plain',
                  });
                  res.end('UserName does not exists');
                }
            });
        } catch (err) {
            console.log('Exception Error', err);
            res.json({ message: err });
        }
});

///API for user register
router.post('/user/register', async (req, res) => {
    console.log("req.body : ",req.body);
    const{userName, userMetaData, profile, address} = req.body;
    console.log("address", address);
    try {
        // console.log('data', userdata);
        userModel.findOneAndUpdate({userName}, {userMetaData, profile, address}, {new:true},(error, user) => {
            if (user) {
                console.log('success', user);
                res.writeHead(200, {
                    'Content-Type': 'text/plain',
                  });
                  res.end(JSON.stringify({message: 'Register successful', data: user}));
                
            } else {
                res.writeHead(404, {
                    'Content-Type': 'text/plain',
                  });
                  res.end('UserName does not exists');        
            }
        })
    } catch (err) {
        console.log('Exception Error', err);
        res.json({ message: err });
    }
});

//API for doctor signup
router.post('/doctor', async (req, res) => {
    //userId:req.query.user_id
    const {
        userId = '618843d8e3e166eb4f2d41e2',
        speciality = 'Child Specialist',
        license = '11009067DOC',
        qualification = 'MBBS',
        experience = '4 YRS 6 months',
        gender = 'Male',
        availability = 12 / 9 / 2021,
        description = '',
    } = req.body;
    console.log('create', req);
    const docdata = new doctorModel({
        userId,
        speciality,
        license,
        qualification,
        experience,
        gender,
        availability,
        description,
    });
    try {
        console.log('data', docdata);
        await docdata.save((error, data) => {
            if (error) {
                console.log('System Error', error);
                return res.json(500).send('System Error');
            } else {
                console.log('success');
                return res.json(200).send('Doctor data captured successfully!');
            }
        });
    } catch (err) {
        console.log('Exception Error', err);
        res.json({ message: err });
    }
});
export default router;
