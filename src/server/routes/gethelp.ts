const express = require('express');
const router = express.Router();
const Services = require('../models/services');
const Resources = require('../models/resources');
const Category = require('../models/category');
const Transaction_Logger = require('../models/transaction_logger');
const User = require('../models/user');
const { Client } = require('@googlemaps/google-maps-services-js');
var ObjectId = require('mongodb').ObjectID;

//update resource/service availability and transaction _logger
router.post('/', async (_req, res) => {
    const resource_service = _req.query.resource_service;
    const id = _req.query.id;
    const userid = _req.query.user_id;
    console.log(userid);
    var resource_sku = 0;
    var category_name;
    var category_id;
    var query_params = {
        _id: '',
    };
    var service_Id = '';
    var resource_Id = '';

    var transaction_sku = 0;
    if (resource_service == 'resource') {
        resource_Id = id;
        transaction_sku = _req.query.sku;
        resource_sku = Number(_req.query.sku) * -1;
        query_params._id = id;
        const update = { $inc: { SKU: resource_sku } };
        const resource = await Resources.findById(id);
        category_name = resource.Resource_Name;
        var remaining_resource = resource.SKU - _req.query.sku;
        console.log(remaining_resource);
        if (remaining_resource == 0) {
            Resources.deleteOne(query_params, function (error) {
                if (error) throw error;
            });
        } else {
            Resources.updateOne(query_params, update, { new: true }, function (err, result) {
                if (err) throw err;
            });
        }
    } else {
        const service = await Services.findById(id);
        category_name = service.Service_Name;
        service_Id = id;
    }
    var category = await Category.findOne({ Name: category_name });
    category_id = category._id;
    var currentDate = new Date();
    const transaction = new Transaction_Logger({
        UserId: userid,
        ResourceId: resource_Id,
        ServiceId: service_Id,
        Date: currentDate,
        CategoryId: category_id,
        Quantity: transaction_sku,
        Type: 'Get Help',
    });
    console.log(transaction);
    transaction.save(function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

// Retrieve  resources and services
router.get('/', async (_req, res) => {
    const client = new Client({});
    const user_location = {};
    const user_loc = await client
        .geolocate({
            params: {
                key: 'AIzaSyCW3O6PQctDxoSoSNYWVa44nXc1ze4V-Nw',
            },
            timeout: 1000, // milliseconds
        })
        .then((r) => {
            user_location.lat = r.data.location.lat;
            user_location.lng = r.data.location.lng;
        })
        .catch((e) => {
            console.log(e.response.data.error_message);
        });
    const response = {
        resources: [{}],
        services: [{}],
    };
    const name = _req.query.name;
    const miles = _req.query.miles;
    var query_params_resource = {};
    var query_params_service = {};
    const destArray = {};
    if (name !== 'All') {
        query_params_resource = { Resource_Name: name };
        query_params_service = { Service_Name: name };
    }

    const resource_user = await Resources.aggregate(
        [
            { $match: query_params_resource },

            {
                $lookup: {
                    from: 'User',
                    localField: 'UserId',
                    foreignField: '_id',
                    as: 'addresses',
                },
            },
            {
                $unwind: {
                    path: '$addresses',
                },
            },

            {
                $unwind: {
                    path: '$addresses.Address',
                    includeArrayIndex: 'arrayIndex',
                },
            },
            { $match: { $expr: { $eq: [{ $toInt: '$AddressId' }, '$arrayIndex'] } } },
            {
                $project: {
                    _id: 1,
                    Resource_Name: 1,
                    UserId: 1,
                    Category: 1,
                    Phone_number: 1,
                    Description: 1,
                    SKU: 1,
                    address: {
                        $concat: [
                            '$addresses.Address.City',
                            ',',
                            '$addresses.Address.State',
                            ',',
                            '$addresses.Address.Country',
                        ],
                    },
                    distance: '',
                },
            },
        ],
        function (err, result) {
            if (err) throw err;
            for (var i = 0; i < result.length; i++) {
                destArray[result[i].address] = '';
            }
            response.resources = result;
        }
    );
    const service_user = await Services.aggregate(
        [
            { $match: query_params_service },
            {
                $lookup: {
                    from: 'User',
                    localField: 'UserId',
                    foreignField: '_id',
                    as: 'addresses',
                },
            },
            { $unwind: '$addresses' },
            {
                $unwind: {
                    path: '$addresses.Address',
                    includeArrayIndex: 'arrayIndex',
                },
            },

            { $match: { $expr: { $eq: [{ $toInt: '$AddressId' }, '$arrayIndex'] } } },

            {
                $project: {
                    _id: 1,
                    Service_Name: 1,
                    UserId: 1,
                    Category: 1,
                    Phone_Number: 1,
                    Description: 1,
                    Availability: 1,
                    address: {
                        $concat: [
                            '$addresses.Address.City',
                            ',',
                            '$addresses.Address.State',
                            ',',
                            '$addresses.Address.Country',
                        ],
                    },
                    distance: '',
                },
            },
        ],
        function (error, result_service) {
            if (error) throw error;
            for (var j = 0; j < result_service.length; j++) {
                destArray[result_service[j].address] = '';
            }
            response.services = result_service;
            //res.send(response);//comment
        }
    );
    var destinations = Array.from(new Set(Object.keys(destArray)));
    const distance_matrix = await client
        .distancematrix({
            params: {
                destinations: destinations, //["San Francisco, CA, USA","Victoria, BC, Canada"],
                origins: [user_location],
                key: 'AIzaSyCW3O6PQctDxoSoSNYWVa44nXc1ze4V-Nw',
            },
            timeout: 1000, // milliseconds
        })
        .then((r) => {
            for (var k = 0; k < destinations.length; k++) {
                destArray[destinations[k]] = calculatemiles(
                    r.data.rows[0].elements[0].distance.text
                ); //+","+r.data.rows[0].elements[0].duration.text;
            }
            sendResponse();
        })
        .catch((e) => {
            console.log(e);
        });

    function sendResponse() {
        for (var key in destArray) {
            for (var o = 0; o < response.resources.length; o++) {
                if (response.resources[o]['address'] == key) {
                    response.resources[o]['distance'] = destArray[key];
                }
            }
            for (var p = 0; p < response.services.length; p++) {
                if (response.services[p]['address'] == key) {
                    response.services[p]['distance'] = destArray[key];
                }
            }
        }
        console.log(destArray);
        console.log(response);
        response.resources = response.resources.filter((m) => m['distance'] <= miles);
        response.services = response.services.filter((m) => m['distance'] <= miles);

        res.send(response);
    }

    function calculatemiles(kilomet) {
        const milesfactor = 0.621371;
        var val = parseInt(kilomet.slice(0, -3).replace(',', ''));
        return (val * milesfactor).toFixed(2);
    }
});

export default router;
