import { Router } from 'express';
import Mongoose from 'mongoose';
import { User } from 'react-feather';
import { fabClasses } from '@mui/material';
import { userModel } from '../models/user';
import doctorModel from '../models/doctor';
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

///API for all user fields updates
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
router.get('/:id', async (req, res) => {
    const { id } = req?.params;
    try {
        userModel.findById(id, async (error, data) => {
            const user = data?.toJSON ? data.toJSON() : data;
            if (user) {
                const doctor = (await doctorModel.find({ userId: data?.id })) || [];
                res.send({ ...user, doctor: user?.userMetaData?.isDoctor ? doctor[0] : undefined });
            } else {
                res.send({ error: 'finding user' });
            }
        });
    } catch (err) {
        res.json({ message: err });
    }
});
export default router;
