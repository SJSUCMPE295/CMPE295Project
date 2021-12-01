import { Router } from 'express';
import { userModel } from '../models/user';
const router = Router();
const Mongoose = require('mongoose');
import doctorModel from '../models/doctor';

///API for signup
router.post('/user', async (req, res) => {
    const {
        userName = 'test005',
        password = 'test005',
        firstName = 'Jimmy',
        lastName = 'Blake',
        userMetaData = {
            isDoctor: true,
            gender: 'Male',
        },
        profile = {
            phoneNumber: 9010100888,
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
    console.log('create', req);
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
        console.log('data', userdata);
        await userdata.save((error, data) => {
            if (error) {
                console.log('System Error', error);
                return res.json(500).send('System Error');
            } else {
                console.log('success');
                return res.json(200).send('User data captured successfully!');
            }
        });
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
