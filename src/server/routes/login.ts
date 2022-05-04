import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { getUserData } from 'utils/dao';
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
            const userData = await getUserData(user);
            res.status(200).json(userData || user);
        }
    } catch (err) {
        res.json({ message: err });
    }
});

export default router;
