'use strict';
import { Router } from 'express';
const router = Router();
const Users = require('../models/user');
const jwt = require('jsonwebtoken');

//API for login
router.post('/', async (req, res) => {
    console.log('login page' + JSON.stringify(req.body));

    Users.findOne({ user_name: req.body.userName }, (err, user) => {
        if (err) {
            res.status(500).end('System Error');
        }
        if (!user) {
            res.status(401).end('No such user exists');
        } else {
            if (req.body.password === user.password) {
                const payload = { name: user.name, _id: user._id };
                console.log('success');
                const token = jwt.sign(payload, {
                    expiresIn: 90000, //seconds
                });
                let jwt_token = 'JWT' + token;
                res.status(200).end(jwt_token);
            } else {
                res.status(401).end('Wrong password');
            }
        }
    });
});

export default router;
