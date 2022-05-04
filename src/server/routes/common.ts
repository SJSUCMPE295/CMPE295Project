import { Router } from 'express';
import Mongoose from 'mongoose';
import { specialityModel } from '../models/speciality';
import { userModel } from '../models/user';
const router = Router();

///API to get specialities
router.get('/speciality', async (req, res) => {
    try {
        // eslint-disable-next-line array-callback-return
        specialityModel.find({}, { name: 1, _id: 0 }, (err, results) => {
            if (results) {
                res.status(200).end(JSON.stringify(results));
            } else {
                res.writeHead(404, { 'content-type': 'text/json' });
                res.end(JSON.stringify('Static Data not found'));
            }
        });
    } catch (error) {
        res.writeHead(500, { 'content-type': 'text/json' });
        res.end(JSON.stringify('Network Error'));
    }
    return res;
});

//check for user existence
router.put('/exists', async (req, res) => {
    const { userName } = req.body;
    try {
        await userModel.findOne(userName, (error, user) => {
            if (user) {
                return res.json(200).send('User already registered');
            } else {
                return res.json(404).send('User is not registered');
            }
        });
    } catch (err) {
        res.json({ message: err });
    }
});

export default router;
