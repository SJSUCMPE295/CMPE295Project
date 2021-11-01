import { Router } from 'express';
import { userModel } from '../models/user';
const router = Router();
const Mongoose = require('mongoose');

///API for signup
router.post('/user', async (req, res) => {
    const {
        userName = 'test002',
        password = 'test002',
        firstName = 'Joe',
        lastName = 'Drew',
        userMetaData = {
            isDoctor: false,
            gender: 'Male',
        },
        profile = {
            phoneNumber: 9010100765,
            profileActive: true,
            profilePic: '',
        },
        address = [
            {
                location: '',
                city: '',
                state: '',
                country: '',
                zipCode: '',
            },
        ],
    } = req.body;
    console.log('cmpe295: create', req);
    const userdata = new userModel({
        _UserId: new Mongoose.Types.ObjectId(),
        userName,
        password,
        firstName,
        lastName,
        userMetaData,
        profile,
        address,
    });
    try {
        console.log('cmpe295: try', userdata);
        await userdata.save((error, data) => {
            if (error) {
                console.log('cmpe295: error', error);
                return res.json(500).send('System Error');
            }
            console.log('cmpe295: data: ', data);
            res.status(400).send('User already exists');
        });
    } catch (err) {
        console.log('cmpe295: err: ', err);
        res.json({ message: err });
    }
});

export default router;
