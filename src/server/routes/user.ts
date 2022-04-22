import { Router } from 'express';
import Mongoose from 'mongoose';
import { User } from 'react-feather';
import { fabClasses } from '@mui/material';
import { userModel } from '../models/user';
import doctorModel from '../models/doctor';
import mongoose from "mongoose";
const router = Router();

///API for profileUpdate
router.post('/profileUpdate', async (req, res) => {
    // console.log('create', req);
    const { userName, userMetaData, profile, address } = req.body;
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
                    res.end(JSON.stringify({ message: 'Profile Updated!', data: user }));
                } else {
                    res.writeHead(401, {
                        'Content-Type': 'text/plain',
                    });
                    res.end('Error updating Profile.');
                }
            }
        );
    } catch (err) {
        console.log('Exception Error', err);
        res.json({ message: err });
    }
});

///API for profilePicUpdate
router.post('/profilePicUpdate', async (req, res) => {
    // console.log('create', req);
    const { userName, profile } = req.body;
    try {
        // console.log('data', userdata);
        userModel.findOneAndUpdate({ userName }, { profile }, { new: true }, (error, user) => {
            if (user) {
                console.log('success', user);
                res.writeHead(200, {
                    'Content-Type': 'text/plain',
                });
                res.end(JSON.stringify({ message: 'Profile Pic Updated!', data: user }));
            } else {
                res.writeHead(401, {
                    'Content-Type': 'text/plain',
                });
                res.end('Error updating profile pic.');
            }
        });
    } catch (err) {
        console.log('Exception Error', err);
        res.json({ message: err });
    }
});

router.put('/', async (req, res) => {
    const { id, ...data } = req.body;
    try {
        userModel.findByIdAndUpdate(id, data, (error, user) => {
            if (user) {
                res.writeHead(200, {
                    'Content-Type': 'text/plain',
                });
                res.end(JSON.stringify({ message: 'Profile Updated!', data: user }));
            } else {
                res.writeHead(401, {
                    'Content-Type': 'text/plain',
                });
                res.end('Error updating Profile.');
            }
        });
    } catch (err) {
        res.json({ message: err });
    }
});
router.put('/password', async (req, res) => {
    const { id, oldPassword, password } = req.body;
    try {
        const user = await userModel.find({
            _id: {
                $in: new mongoose.Types.ObjectId(id),
            },
        });
        if (!user?.password || user?.password !== oldPassword) {
            return res.json({ message: 'Error updating Profile.' });
        }
        userModel.findByIdAndUpdate(id, { password }, (error, user) => {
            if (user) {
                res.writeHead(200, {
                    'Content-Type': 'text/plain',
                });
                res.end(JSON.stringify({ message: 'Profile Updated!', data: user }));
            } else {
                res.writeHead(401, {
                    'Content-Type': 'text/plain',
                });
                res.end('Error updating Profile.');
            }
        });
    } catch (err) {
        res.json({ message: err });
    }
});
export default router;
