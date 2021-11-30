import { Router } from 'express';
import Services from '../models/services';
import Resources from '../models/resources';
import Users from '../models/user';
import Transactions from '../models/transaction_logger';
import Doctor_Appointment from '../models/doctor_appointment';
// const auth = require('../middleware/auth');
// const fetchController = require('../controller/fetch');
const router = Router();
// router.get('/', homeController.getHome);
router.get('/', async (_req, res) => {
    // res.send({test: 'Get Home'});
    // console.log(_req);
    const response = {
        resources: [{}],
        services: [{}],
        transactions:"",
        users:"",
        usertransactions:[{}],
        userappointments:[{}]
    };
    try {
        const user = _req.query.user;
        console.log(user);
        if(user!=""){
            const usertransactions = await Transactions.aggregate(
                [   {
                    $match : { UserId : user }
                  },
                    {
                        $group:
                          {
                            _id: "$Type",
                            count: { $sum: 1}
                          }
                      }


                ], (error_ut, data_ut) => {
                if(error_ut){
                 res.status(400).send(error_ut);
                } else{
                    //console.log(data_ut);
                    response.usertransactions=data_ut;
            
                }
             });


            const userappointment = await Doctor_Appointment.find({ UserId : user });
            //console.log(userappointment);
            response.userappointments=userappointment;

        }
        const resources = await Resources.aggregate([
            
              {
                $group:
                  {
                    _id: "$Resource_Name",
                    resource_SKU: { $sum: "$SKU"}
                  }
              },
              {
                $sort : { resource_SKU: -1 }
              }
            ]
         , (error, data) => {
            if (error) {
                //console.log('error', error);
                res.status(400).send(error);
            } else {
                console.log(data);
                response.resources = data;
                const service_user = Services.aggregate(
                    [  { "$project": { "userObjId": { "$toObjectId": "$UserId" } 
                        ,AddressId:1
                        ,Service_Name:1
                        ,Availability:1
                        ,availableDate:1
                        ,Category:1
                    } },
                        {
                            $lookup: {
                                from: 'User',
                                localField: 'userObjId',
                                foreignField: '_id',
                                as: 'addresses',
                            },
                        },
                        { $unwind:{path :'$addresses',
                        //preserveNullAndEmptyArrays: true
                    } 
                    },
                        {
                            $unwind: {
                                path: '$addresses.address',
                                includeArrayIndex: 'arrayIndex'
                            },
                        },
            
                        { $match: { $expr: { $eq: [{ $toInt: '$AddressId' }, '$arrayIndex'] } } },
                        { $sort: { availableDate: 1 } },
                        {
                            $project: {
                                _id: 1,
                                Service_Name: 1,
                                UserId: 1,
                                Category: 1,
                                Phone_Number: 1,
                                Description: 1,
                                Availability: 1,
                                availableDate :1
                               ,zipcode : '$addresses.address.zipCode'
                               ,arrayIndex:1
                              ,AddressId:1
                            },
                        },
                    ],
                    function (error, result_service) {
                        if (error) {
                            console.log(error);
                            res.status(400).send(error);}
                        else{
                        response.services = result_service;
                        console.log(result_service);
                       const users =  Users.count({}, (error2, usercount) => {
                           if(error2){
                           res.status(400).send(error2);
                           } else{
                           response.users=usercount;
                           const transactions =  Transactions.count({}, (error3, transactioncount) => {
                               if(error3){
                               res.status(400).send(error3);
                               } else{
                                response.transactions=transactioncount;
                                console.log(response);
                                res.send(response);
                               }
                            });
                           }
                        });
                    }
                    });
            }
        });
        // const services = await Services.find();
        // if (resources) {
        //     response.resources = resources;
        // }

        // if (services) {
        //     response.services = services;
        // }

        // console.log(response);
        // res.send(response);
    } catch (error) {
        //return res.status(500).send(error);
    }
});

export default router;
