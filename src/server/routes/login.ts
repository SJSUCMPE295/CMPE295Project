import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { getUserData } from "utils/dao";
import Users from '../models/user';

const router = Router();

//API for login
router.post('/', async (req, res) => {
    // console.log('login page' + JSON.stringify(req.body));
    try {
        const user = await Users.findOne({ userName: req.body.userName });
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
            const userData = await getUserData(user);
            res.status(200).json(userData || user);
            // } else {
            //     res.status(401).end('Wrong password');
            // }
        }
    } catch (err) {
        res.json({ message: err });
    }
});

export default router;
