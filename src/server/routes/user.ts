import { Router } from 'express';
import Mongoose from 'mongoose';
import { User } from 'react-feather';
import { fabClasses } from '@mui/material';
import { getUserByIdWithAppointments, getUserById } from 'utils/dao';
import { userModel } from '../models/user';
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
        const update = await userModel.findByIdAndUpdate(id, data);
        if (update) {
            const user = (await getUserById(id)) || {};
            if (user) {
                res.send(user);
            } else {
                res.send({ error: 'updating user' });
            }
        } else {
            res.send({ error: 'updating user' });
        }
    } catch (err) {
        res.json({ message: err });
    }
});
router.get('/:id', async (req, res) => {
    const { id } = req?.params;
    try {
        const user = (await getUserByIdWithAppointments(id)) || {};
        if (user) {
            res.send(user);
        } else {
            res.send({ error: 'finding user' });
        }
    } catch (err) {
        res.json({ message: err });
    }
});
export default router;
