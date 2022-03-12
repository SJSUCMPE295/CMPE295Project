import { Router } from 'express';
import Mongoose from 'mongoose';
import { specialityModel } from '../models/speciality';
const router = Router();

///API to get specialities
router.get('/speciality', async (req, res) => {
    try {
        // eslint-disable-next-line array-callback-return
        specialityModel.find({},{name:1, _id:0},(err, results) => {
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

export default router;
