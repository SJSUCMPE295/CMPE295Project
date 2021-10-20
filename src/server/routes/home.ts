const express = require('express');
const router = express.Router();
const Users = require('../models/user');
// const auth = require('../middleware/auth');
const fetchController = require('../controller/fetch');

router.get('/home', async (_req, res) => {
    try {
        const user = await Users.findOne({ _id: _req.query.userId }, (error, data) => {
            if (error) {
                console.log('error', error);
                res.json(500).send(error);
            } else {
                console.log('data', data);
                res.status(200).json(data);
            }
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;
