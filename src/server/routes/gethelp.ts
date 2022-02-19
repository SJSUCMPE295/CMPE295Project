import { Router } from 'express';
import { Client } from '@googlemaps/google-maps-services-js';
import Services from '../models/services';
import Resources from '../models/resources';
import Category from '../models/category';
import TransactionLogger from '../models/transactionLogger';
import User from '../models/user';
const router = Router();
const calculateMiles = (kilometer) => {
    const milesFactor = 0.621371;
    const val = parseInt(kilometer.slice(0, -3).replace(',', ''));
    return (val * milesFactor).toFixed(2);
};
export const updateResourceServiceAvailability = async (req, res) => {
    const { id, sku } = req.query || {};
    const resource_service = req.query.resource_service;
    const userId = req.query.user_id;

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
        transaction_sku = sku;
        resource_sku = Number(sku) * -1;
        query_params._id = id;
        const update = { $inc: { SKU: resource_sku } };
        const resource = await Resources.findById(id);
        category_name = resource.Resource_Name;
        var remaining_resource = resource.SKU - sku;
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
    const transaction = new TransactionLogger({
        userId: userId,
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
};
export const getResourceService = async (req, res) => {
    const { name, miles } = req.query || {};
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
                    localField: 'userId',
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
                    userId: 1,
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
                    localField: 'userId',
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
                    userId: 1,
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
                destArray[destinations[k]] = calculateMiles(
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
};
//update resource/service availability and transaction _logger
router.post('/', updateResourceServiceAvailability);
// Retrieve  resources and services
router.get('/', async (_req, res) => getResourceService);
export default router;
