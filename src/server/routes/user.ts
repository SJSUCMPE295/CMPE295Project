import { Router } from 'express';
import Mongoose from 'mongoose';
import { userModel } from '../models/user';
import doctorModel from '../models/doctor';
import { User } from 'react-feather';
import { fabClasses } from '@mui/material';
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

export default router;
