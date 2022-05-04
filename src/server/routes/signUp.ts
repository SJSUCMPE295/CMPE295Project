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
            appNotifications: true,
            emailNotifications: true,
            phoneCalls: true,
        },
        profile = {
            phoneNumber: 0,
            profileActive: false,
            profilePic: '',
        },
        address = {
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
                res.end(JSON.stringify({ message: 'Signup Successful', data: data }));
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
    console.log('req.body : ', req.body);
    const { userName, userMetaData, profile, address } = req.body;
    console.log('address', address);
    if (userName != undefined) {
        try {
            // console.log('data', userdata);
            userModel.findOneAndUpdate(
                { userName },
                { userMetaData, profile, address },
                { new: true },
                (error, user) => {
                    if (user) {
                        console.log('success', user);
                        res.writeHead(200, {
                            'Content-Type': 'text/plain',
                        });
                        res.end(JSON.stringify({ message: 'Register successful', data: user }));
                    } else {
                        res.writeHead(404, {
                            'Content-Type': 'text/plain',
                        });
                        res.end('UserName does not exists');
                    }
                }
            );
        } catch (err) {
            console.log('Exception Error', err);
            res.json({ message: err });
        }
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/plain',
        });
        res.end('UserName is incorrect');
    }
});

//API for doctor signup
router.post('/doctor', async (req, res) => {
    const query = { userId: req.body.userId };
    const update = {
        speciality: req.body.speciality,
        license: req.body.license,
        qualification: req.body.qualification,
        experience: req.body.experience,
        description: req.body.description,
        licenseUrl: req.body.licenseUrl,
        availability: req.body.availability,
    };
    const options = {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
    };

    try {
        doctorModel.findOneAndUpdate(query, update, options, (error, doctor) => {
            if (error) {
                console.log('System Error', error);
                return res.json(500).send('System Error');
            } else {
                userModel.findOneAndUpdate(
                    { _id: req.body.userId },
                    { userMetaData: req.body.userMetaData },
                    options,
                    (error, user) => {
                        if (error) {
                            console.log('System Error', error);
                            return res.status(500).send('System Error');
                        } else {
                            res.writeHead(200, {
                                'Content-Type': 'text/plain',
                            });
                            res.end(
                                JSON.stringify({
                                    doctor,
                                    user,
                                    message: 'Doctor information is added!',
                                })
                            );
                        }
                    }
                );
            }
        });
    } catch (err) {
        console.log('Exception Error', err);
        res.json({ message: err });
    }
});
export default router;
