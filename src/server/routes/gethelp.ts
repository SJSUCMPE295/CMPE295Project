import { Router } from 'express';
import { Client } from '@googlemaps/google-maps-services-js';
import Services from '../models/services';
import Resources from '../models/resources';
import Category from '../models/category';
import TransactionLogger from '../models/transactionLogger';
import User from '../models/user';
import { isNull } from 'lodash';
const router = Router();
const calculateMiles = (kilometer) => {
    const milesFactor = 0.621371;
    const val = parseInt(kilometer.slice(0, -3).replace(',', ''));
    return (val * milesFactor).toFixed(2);
};

const getUserCurrentLocation= async () => {
    const client = new Client({});
   
    const user_loc =  await client.geolocate({ params: {
    key: 'AIzaSyAfhaFLcRPYsc7S9xdeiEZUE6xp-oFGH9Y',
    },
    timeout: 1000, // milliseconds
    });
  const current_address=await user_loc.data.location;
  const current_city=await client.reverseGeocode({
    params: {
        latlng: await user_loc.data.location,
        key: 'AIzaSyCW3O6PQctDxoSoSNYWVa44nXc1ze4V-Nw',
    },
    timeout: 1000, // milliseconds
    })
    const user_currentcity=await current_city.data.results[0].address_components[3].short_name+', '+await current_city.data.results[0].address_components[5].short_name;
   console.log(await current_address);
   return  {
       current_address:await current_address,
       user_currentcity:await user_currentcity
   };
   /*return  {
    current_address:'',
    user_currentcity:''
};*/
}

const getData= async (query_params_resource,query_params_service,user_location,miles,datafilter)=>{
   console.log("inside getdata");
   console.log(datafilter);
    const resource_pipeline = [
        { $match: query_params_resource },
            { $project: {
                    resourceuserId: { $toObjectId: '$UserId' },
                    _id: 1,
                    Resource_Name: 1,
                    userId: 1,
                    Category: 1,
                    Phone_number: 1,
                    Description: 1,
                    SKU:1,
                    Address:1,
                    City:1,
                    State:1,
                    Zipcode:1,
                    Country:1

                },
        
            },
            {
                $lookup: {
                    from: 'User',
                    localField: 'resourceuserId',
                    foreignField: '_id',
                    as: 'addresses',
                },
            },
         { "$unwind": "$addresses" },
            /*  { "$unwind": "$addresses.address" },
           { $match: { $expr: { $eq: [{ $toObjectId: '$AddressId' }, '$addresses.address._id'] } } },*/
            {
                $project: {
                    _id: 1,
                    Name: '$Resource_Name',
                    userId: 1,
                    Category: 1,
                    Phone_number: 1,
                    Description: 1,
                    SKU: 1,
                    address: {
                        $concat: ['$Address',
                        ',',
                          '$City',
                          ',',
                            '$State',
                         
                            ',',
                            { $toString: '$Zipcode' }
                       ],
                   },
                  distance: '40',
                  availableDate:'',
                  Availability:'',
                  type:'resource'
                },
            },
            
        ]
        
    const service_pipeline = 
        [
        { $match: query_params_service },
            { $project: {
                serviceuserId: { $toObjectId: '$UserId' },
                _id: 1,
                Service_Name: 1,
                userId: 1,
                Category: 1,
                Phone_number: 1,
                Description: 1,
                availableDate:1,
                Availability:1,
                Address:1,
                City:1,
                State:1,
                Zipcode:1,
                Country:1
            },
    
        },
            {
                $lookup: {
                    from: 'User',
                    localField: 'serviceuserId',
                    foreignField: '_id',
                    as: 'addresses',
                },
            },
            { $unwind: '$addresses' },
           /* {
                $unwind: '$addresses.address'
            },

            
           { $match: { $expr: { $eq: [{ $toObjectId: '$AddressId' }, '$addresses.address._id'] } } },
*/
           {
            $project: {
                _id: 1,
                Name: '$Service_Name',
                userId: 1,
                Category: 1,
                Phone_number: 1,
                Description: 1,
                SKU: '0',
                address: {
                    $concat: ['$Address',
                    ', ',
                      '$City',
                      ', ',
                        '$State',
                        ', ',
                        { $toString: '$Zipcode' }
                   ],
               },
              distance: '40',
              availableDate:1,
              Availability:1,
              type:'service'
            },
        },
        ]
let resources,services;  
if (datafilter ==="resources")
  { resources=await (Resources.aggregate(resource_pipeline).exec());

  }
  else if 
  (datafilter ==="services")
  { 
      resources=await (Services.aggregate(service_pipeline).exec());

  }
  else{ [resources,services]=await Promise.all([Resources.aggregate(resource_pipeline).exec(),Services.aggregate(service_pipeline).exec()]);

    if(Object.keys(services).length != 0){resources=resources.concat(services)}
 
   }




    let destinations=[];
   for (var k = 0; k < resources.length; k++) {
    
    destinations.push(resources[k].address);
   }
   let destination=new Set(destinations);
   destinations=Array.from(new Set(destinations));
   const client = new Client({});
   const geocodedaddress=await client.geocode({
    params: {
        address: destinations,
        key: 'AIzaSyCW3O6PQctDxoSoSNYWVa44nXc1ze4V-Nw',
    },
    timeout: 1000, // milliseconds
    })
    //console.log(await geocodedaddress.data.results[0].geometry.location);
   
   //calculate distance and direction
   
 const distance_matrix = await client
        .distancematrix({
            params: {
                destinations: destinations,// ["San Francisco, CA, USA","Victoria, BC, Canada"],
                origins: [user_location],//["San Jose, CA"],
                key: 'AIzaSyCW3O6PQctDxoSoSNYWVa44nXc1ze4V-Nw',
            },
            timeout: 1000, // milliseconds
        })
       for (var j=0;j< resources.length;j++) {
            for (var i = 0; i < destinations.length; i++) {
                if (resources[j]['address'] == destinations[i]) {
                    resources[j]['distance'] = calculateMiles(await distance_matrix.data.rows[0].elements[i].distance.text);
                    resources[j]['location'] = await geocodedaddress.data.results[i].geometry.location;
                }
            }}
    if(miles!='')
        {
            //console.log(resources);
        resources = await resources.filter((m) => parseFloat(m['distance']) <= miles);
        }
      //console.log(await resources);  
    return await resources;
    
        
    }

   /* const getDirections= async (origin,destination) => {
        const client = new Client({});
        destination=[{ lat: 37.77961, lng: -122.4194 }];//37.77961, -122.40338
        origin=[{ lat: 37.3304014, lng: -121.8391808 }];
        //console.log("inside directfn");
        const directions = await client
        .directions({
            params: {
                destination: { lat: 37.7749, lng: -122.4194 },// ["San Francisco, CA, USA","Victoria, BC, Canada"],
                origin: { lat: 37.3304014, lng: -121.8391808 },
                key: 'AIzaSyCW3O6PQctDxoSoSNYWVa44nXc1ze4V-Nw',
               travelMode: 'DRIVING'
            },
            timeout: 1000, // milliseconds
        })
       //console.log(await directions.data);
       return await directions.data.routes;
    }*/
//update resource/service availability and transaction _logger
router.post('/', async (_req, res) => {
    //console.log(_req.body.resource)
    const userid = _req.body.user_id;
    //console.log(userid);
    const data= _req.body.resource;
    //console.log(data);
    const resource_service =data.type;
    const id = data._id;
    
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
        transaction_sku = data.SKU;
        resource_sku = Number(data.SKU) * -1;
        query_params._id = id;
        const update = { $inc: { SKU: resource_sku } };
        const resource = await Resources.findById(id);
        category_name = await resource.Resource_Name;
        var remaining_resource = await resource.SKU - data.SKU;
        //console.log(await remaining_resource);
        if (await remaining_resource == 0) {
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
        category_name = await service.Service_Name;
        service_Id = id;
    }
    var category = await Category.findOne({ Name: category_name });
    if (category != null)
    {category_id = await category._id;}
    else{category_id=0;}
    var currentDate = new Date();
    const transaction = await new TransactionLogger({
        userId: userid,
        ResourceId: resource_Id,
        ServiceId: service_Id,
        Date: currentDate,
        CategoryId: category_id,
        Quantity: transaction_sku,
        Type: 'Get Help',
    });
    //console.log(await transaction);
    transaction.save(function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

// Retrieve  resources and services
router.get('/', async (_req, res) => {
   
    const response = {
        resources:[{}],
        user_currentcity:'',
        user_currentaddress:''
    };
    const type=_req.query.type;
    let name;
    let miles;
    let city;
    const datafilter=_req.query.datafilter;
    var query_params_resource = {};
    var query_params_service = {};
    //const destArray = {};
    //console.log(type);
    if (type=='pageload'){
       name='';
       
       //console.log(getUserCurrentLocation());
       getUserCurrentLocation().then(user_location =>{
      if(user_location.user_currentcity!='')
       {city= user_location.user_currentcity.slice(0,user_location.user_currentcity.indexOf(','));
       //console.log(city);
       response.user_currentcity=user_location.user_currentcity;
       query_params_resource = { City:   {'$regex': city.trim(),$options:'i'} };
       query_params_service = { City:   {'$regex': city.trim(),$options:'i'} };
    }
       if(user_location.current_address!='')
       {response.user_currentaddress=user_location.current_address;}
       miles='45';
       
       getData(query_params_resource,query_params_service,response.user_currentaddress,miles,datafilter).then(resources=>{response.resources=resources;//console.log(response);
        res.send(response);})
        .catch(e=>{console.log(e);});
       })
       .catch(error => {console.log("error");})
       
    }
    
    else if(type=='button')

   {
    name = _req.query.name;
    city=_req.query.city;
    miles = _req.query.miles;
   console.log("miles:"+miles);
   console.log("city"+city);
    const user_address=await getUserCurrentLocation();
   let user_loc=await user_address.current_address;
    if (name != '' && city=='') {
        query_params_resource = { Resource_Name: {'$regex': name.trim(),$options:'i'} };
        query_params_service = { Service_Name: {'$regex': name.trim(),$options:'i'}};
        
       
    }
    else if (name == '' && city!='') {
        city=city.slice(0,city.indexOf(','));
        query_params_resource = { City:  {'$regex': city.trim(),$options:'i'} };
        query_params_service = { City:  {'$regex': city.trim(),$options:'i'} };
       
    }
    else if (name != '' && city!='') {
        city=city.slice(0,city.indexOf(','));
        query_params_resource = {  Resource_Name:  {'$regex': name.trim(),$options:'i'}, City:  {'$regex': city.trim(),$options:'i'} };
        query_params_service = { Service_Name:  {'$regex': name.trim(),$options:'i'}, City: {'$regex': city.trim(),$options:'i'} };
      
    }

   else{
    name ='';
    city='';
    miles = '';
   }
   getData(query_params_resource,query_params_service,user_loc,miles,datafilter).then(resources=>{response.resources=resources;console.log(response);

    res.send(response);})
    .catch(e=>{console.log(e);});  
}
else{
    name ='';
    city='';
    miles = '';
    const user_address=await getUserCurrentLocation();
    let user_loc=await user_address.current_address;
    getData(query_params_resource,query_params_service,user_locs,miles,datafilter).then(resources=>{response.resources=resources;console.log(response);
        res.send(response);})
        .catch(e=>{console.log(e);});
   }
   
});

export default router;
