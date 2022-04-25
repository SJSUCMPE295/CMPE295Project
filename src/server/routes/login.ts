import { Router } from 'express';
import jwt from 'jsonwebtoken';
import Users from '../models/user';
import doctorModel from '../models/doctor';

const router = Router();
export const getDoctorsData = async (user) => {
    const userId = user?._id.toString() || user?.userId;
    if (user?.userMetaData?.isDoctor && userId) {
        return doctorModel.findOne({ userId });
    }
};

//API for login
router.post('/', async (req, res) => {
    // console.log('login page' + JSON.stringify(req.body));

    Users.findOne({ userName: req.body.userName }, async (err, user) => {
        if (err) {
            res.status(500).end('System Error');
        }
        if (!user) {
            res.json({ status: 401, message: 'No such user exists' });
        } else {
            console.log('user', user);
            // if (req.body.password == user.password) {
            // const payload = { name: user.name, _id: user._id };
            console.log('success');
            // const token = jwt.sign(payload, {
            //     expiresIn: 90000, //seconds
            // });
            // const jwtToken = 'JWT' + token;
            const doctor = await getDoctorsData(user);
            res.status(200).json({ user, doctor });
            // } else {
            //     res.status(401).end('Wrong password');
            // }
        }
    });
});

export default router;
