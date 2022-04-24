import { Router } from 'express';
import { Client } from '@googlemaps/google-maps-services-js';
import Services from '../models/services';
import Resources from '../models/resources';
import Category from '../models/category';
import Transaction_Logger from '../models/transactionLogger';
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
   console.log(query_params_resource);
   //console.log(datafilter);
    const resource_pipeline = [
        { $match: query_params_resource },
            { $project: {
                    resourceuserId: { $toObjectId: '$UserId' },
                    _id: 1,
                    Resource_Name: 1,
                    UserId: 1,
                    Category: 1,
                    Phone_Number: 1,
                    Description: 1,
                    SKU:1,
                    Address:1,
                    City:1,
                    State:1,
                    Zipcode:1,
                    Country:1,
                    ImageUrl:{ $ifNull: [ "$ImageUrl", "" ] }

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
            {
                $project: {
                    _id: 1,
                    Name: '$Resource_Name',
                    UserId: 1,
                    Category: 1,
                    Phone_Number: 1,
                    Description: 1,
                    SKU: 1,
                    owner_name: {
                        $concat: ['$addresses.firstName',
                        ',',
                          '$addresses.lastName'
                         
                       ],
                   },
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
                  availableDate:'',
                  Availability:'',
                  type:'resource',
                  ImageUrl:1,
                  owner_email:'$addresses.userName'
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
                UserId: 1,
                Category: 1,
                Phone_Number: 1,
                Description: 1,
                availableDate:1,
                Availability:1,
                Address:1,
                City:1,
                State:1,
                Zipcode:1,
                Country:1,
                ImageUrl:{ $ifNull: [ "$ImageUrl", "" ] }
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
                UserId: 1,
                Category: 1,
                Phone_Number: 1,
                Description: 1,
                SKU: '',
                owner_name: {
                    $concat: ['$addresses.firstName',
                    ',',
                      '$addresses.lastName'
                     
                   ],
               },
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
              type:'service',
              ImageUrl:1,
              owner_email:'$addresses.userName'
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

 

       let destinations = [];
    for (var k = 0; k < resources.length; k++) {
        destinations.push(resources[k].address);
    }
    //let destination=new Set(destinations);
    destinations = Array.from(new Set(destinations));
    let geocodearray={};
    let distancearray={};
    const client = new Client({});
    for (var j=0;j< destinations.length;j++) {
        let geocodedaddress=await client.geocode({
            params: {
                address: [destinations[j]],
                key: 'AIzaSyCW3O6PQctDxoSoSNYWVa44nXc1ze4V-Nw',
            },
            timeout: 1000, // milliseconds
            });
            geocodearray[destinations[j]]=await geocodedaddress.data.results[0].geometry?.location;
            //console.log(await geocodedaddress.data.results[0]);
            let distance_matrix = await client
            .distancematrix({
                params: {
                    destinations: [destinations[j]],// ["San Francisco, CA, USA","Victoria, BC, Canada"],
                    origins: [user_location],//["San Jose, CA"],
                    key: 'AIzaSyCW3O6PQctDxoSoSNYWVa44nXc1ze4V-Nw',
                },
                timeout: 1000, // milliseconds
            });
            distancearray[destinations[j]]=calculateMiles(await distance_matrix.data.rows[0].elements[0].distance.text);
    }

            //console.log("inside distance");
            //console.log(geocodearray);
            //console.log(distancearray);
           
       for (var j=0;j< resources.length;j++) {
            resources[j]['distance'] = distancearray[resources[j].address] ;
            resources[j]['location'] = geocodearray[resources[j].address] ;
            

        }
        
     
    if(miles!='')
        {
        resources = await resources.filter((m) => parseFloat(m['distance']) <= miles);
        }  
    return await resources;
    
        
    }

   
router.post('/', async (_req, res) => {
    //console.log(_req.body.resource)
    const userid = _req.body.user_id;
   // console.log(userid);
    const data= _req.body.resource;
    //console.log(data);
    const resource_service =data.type;
    const id = data._id;
    
    var resource_sku = 0;
    var quantity=0;
    var category_name;
    var category_id;
    var query_params = {
        _id: '',
    };
    var service_Id = '';
    var resource_Id = '';

    var transaction_sku = 0;
    if (resource_service == 'resource') {
        quantity=_req.body.quantity;
        resource_Id = id;
        transaction_sku = quantity;
        resource_sku = Number(quantity) * -1;
        query_params._id = id;
        const update = { $inc: { SKU: resource_sku } };
        const resource = await Resources.findById(id);
        category_name = await resource.Resource_Name;
        var remaining_resource = await resource.SKU - quantity;
        //console.log(await remaining_resource);
        /*if (await remaining_resource == 0) {
            Resources.deleteOne(query_params, function (error) {
                if (error) throw error;
            });
        } else {*/
            Resources.updateOne(query_params, update, { new: true }, function (err, result) {
                if (err) throw err;
            });
        //}
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
    const transaction = await new Transaction_Logger({
        UserId: userid,
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
       
       getData(query_params_resource,query_params_service,response.user_currentaddress,miles,datafilter).then(resources=>{response.resources=resources.filter(function(resource){
        return (resource.type==='resource'?resource.SKU > 0  : (resource.availableDate >= Date.now()));
    });;//console.log(response);*/
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
   //console.log("miles:"+miles);
   //console.log("city"+city);
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
   getData(query_params_resource,query_params_service,user_loc,miles,datafilter).then(resources=>{response.resources=resources.filter(function(resource){
    return (resource.type==='resource'?resource.SKU > 0  : (resource.availableDate >= Date.now()));
});;//console.log(response);*/;console.log(response);

    res.send(response);})
    .catch(e=>{console.log(e);});  
}
else{
    name ='';
    city='';
    miles = '';
    const user_address=await getUserCurrentLocation();
    let user_loc=await user_address.current_address;
    getData(query_params_resource,query_params_service,user_loc,miles,datafilter).then(resources=>{response.resources=resources.filter(function(resource){
        return (resource.type==='resource'?resource.SKU > 0  : (resource.availableDate >= Date.now()));
    });;//console.log(response);*/;console.log(response);
        res.send(response);})
        .catch(e=>{console.log(e);});
   }
   
});
//get item by id
router.get('/search', async (_req, res) => {
    //console.log("inside gethelpsearch");
    var ObjectId = require('mongodb').ObjectID;
    const id = _req.query.id;
    const response = {
        resources:[{}],
        user_currentaddress:''
    };
    let miles='';
    let datafilter=_req.query.item_type;
    let query_params_resource={};
    let query_params_service={};
    getUserCurrentLocation().then(user_location =>{
                if(user_location.user_currentcity!='')
                 {
                if (datafilter == 'resources') {
                 query_params_resource = { "_id": new ObjectId(id) };query_params_service ={};
                }
                else {
                    query_params_service = { "_id": new ObjectId(id) };query_params_resource ={};
                   }
              }
                 if(user_location.current_address!='')
                 {response.user_currentaddress=user_location.current_address;}
                  getData(query_params_resource,query_params_service,response.user_currentaddress,miles,datafilter).then(resources=>{response.resources=resources;console.log(response);
                    res.send(response);})
                    .catch(e=>{console.log(e);});
               })
    
               .catch(e=>{console.log(e);});

                });
        
//get item by user id
router.get('/search/userid', async (_req, res) => {
    console.log("inside gethelpsearchuserid");
    var ObjectId = require('mongodb').ObjectID;
    const userid = _req.query.userid;
    //console.log(typeof userid);
    const response = {
        resources:[{}],
        getresources:[{}]
    };
    const query_params_service={"UserId": userid};
    const query_params_resource={"UserId": userid};
    const service_user_pipeline =[{ $match: query_params_service },
        {
            $project: {
                _id: 1,
                Name: '$Service_Name',
                UserId: 1,
                Category: 1,
                Phone_Number: 1,
                Description: 1,
                SKU:'',
                Address: 1,
                City:1,
                State:1,
                Zipcode:1,
                Country:1,
              availableDate:1,
              //Availability:1,
              type:'service',
              ImageUrl:{ $ifNull: [ "$ImageUrl", "" ] },
              Availability:{ $ifNull: [ "$Availability", "" ] },
            },
        }
    ];
    const resources_pipeline=[{ $match: query_params_resource },
                {
                    $project: {
                        _id: 1,
                        Name: '$Resource_Name',
                        UserId: 1,
                        Category: 1,
                        Phone_Number: 1,
                        Description: 1,
                        SKU: 1,
                        Address: 1,
                        City:1,
                        State:1,
                        Zipcode:1,
                        Country:1,
                      availableDate:'',
                      //Availability:'',
                      type:'resource',
                      ImageUrl:{ $ifNull: [ "$ImageUrl", "" ] },
                      
              Availability:{ $ifNull: [ "$Availability", "" ] },
                    },
                }
                ];

                
    const query_params_getresource={"UserId": userid,"ServiceId":"","Type":"Get Help"};
    const query_params_getservice={"UserId": userid,"Type":"Get Help","ResourceId":""};
    //console.log(query_params_getresource);
const resource_get_pipeline =[{ $match: query_params_getresource },
        {
            $project: {
                _id: 1,
                Trans_UserId:'$UserId',
                ResourceId:{ $toObjectId: '$ResourceId'},
                ServiceId:1,
                Date:1,
                CategoryId: 1,
                SKU:'$Quantity',
                type:'resource'
            },
        },
        {
            $lookup: {
                from: 'Resource',
                localField: 'ResourceId',
                foreignField: '_id',
                as: 'transactions',
            },
        },
     { "$unwind": "$transactions" },
       {
            $project: {
                _id: 1,
                Name: '$transactions.Resource_Name',
                Trans_UserId: 1,
                Category: '$transactions.Category',
                Phone_Number: '$transactions.Phone_Number',
                Description: '$transactions.Description',
                SKU: 1,
                address: {
                    $concat: ['$transactions.Address',
                    ',',
                      '$transactions.City',
                      ',',
                        '$transactions.State',
                     
                        ',',
                        { $toString: '$transactions.Zipcode' }
                   ],
               },
              availableDate:'',
              type:1,
              ImageUrl:{ $ifNull: [ "$transactions.ImageUrl", "" ] },
              Date:1,
              
              Availability:{ $ifNull: [ "$transactions.Availability", "" ] },
            },
        },

    ];
    const service_get_pipeline =[{ $match: query_params_getservice},
            {
                $project: {
                    _id: 1,
                    Trans_UserId:'$UserId',
                    ResourceId:1,
                    ServiceId:{ $toObjectId: '$ServiceId'},
                    Date:1,
                    CategoryId: 1,
                    Quantity:1,
                    type:'service'
                },
            },//{ "$cond": [ { "$eq": [ "$ResourceId", "" ] },"$ServiceId", "$ResourceId" ]}
             {
                $lookup: {
                    from: 'Services',
                    localField: 'ServiceId',
                    foreignField: '_id',
                    as: 'transactions',
                },
            },
         { "$unwind": "$transactions" },
           {
                $project: {
                    _id: 1,
                    Name: '$transactions.Service_Name',
                    Trans_UserId: 1,
                    Category: '$transactions.Category',
                    Phone_Number: '$transactions.Phone_Number',
                    Description: '$transactions.Description',
                    SKU: '',
                    address: {
                        $concat: ['$transactions.Address',
                        ',',
                          '$transactions.City',
                          ',',
                            '$transactions.State',
                         
                            ',',
                            { $toString: '$transactions.Zipcode' }
                       ],
                   },
                  availableDate:'$transactions.availableDate',
                  type:1,
                  ImageUrl:{ $ifNull: [ "$transactions.ImageUrl", "" ] },
                  Date:1,
        
              Availability:{ $ifNull: [ "$transactions.Availability", "" ] },
                },
            },
    
        ];
        let [giveresource,giveservice]=await Promise.all([Resources.aggregate(resources_pipeline).exec(),Services.aggregate(service_user_pipeline).exec()]);
        response.resources=await giveresource;
       let [getresource,getservice]=await Promise.all([Transaction_Logger.aggregate(resource_get_pipeline).exec(),Transaction_Logger.aggregate(service_get_pipeline).exec()]);
       
        response.getresources=await getresource;
       if(Object.keys(await giveservice).length != 0){
            response.resources=await response.resources.concat(await giveservice);//console.log(response.resources);
            
    };
         if(Object.keys(await getservice).length != 0){
                         response.getresources=await response.getresources.concat(await getservice);//console.log(response.resources);
                         
                 };
               //console.log(await response);
              
                 res.send(await response);
                   
               // console.log(response);
        
});
       
//delete item by id
router.post('/delete/id', async (_req, res) => {
   // console.log("inside delete");
    var ObjectId = require('mongodb').ObjectID;
    const id = _req.body.id;
    //console.log(id);
    //console.log(typeof id);
    const type=_req.body.type;
    if (type=="resource"){
    Resources.updateOne({_id:id},{SKU:0,Availability: "false"},{ new: true }, function(err, result){

        if(err){
            res.send(err);
        }
        else{
            //res.send(result);
            console.log("Deleted successfully");
            res.send(result);
        }

    })
}

else{
    Services.updateOne({_id:id},{availableDate:new Date("2000-05-18T16:00:00Z"),Availability: "false"},{ new: true }, function(err, result){

        if(err){
            console.log(err);
        }
        else{
            
            console.log("Deleted successfully");
            res.send(result);
        }

    })

}

});



router.post('/update_resource', async (_req, res) => {
    //console.log("inside update_resource");
    var ObjectId = require('mongodb').ObjectID;
    const id = _req.body.id;
    //console.log(id);
    //console.log(typeof id);
    const Resource_Name=_req.body.Resource_Name;
     const Category=_req.body.Category;
      const Description=_req.body.Description;
      const Phone_Number=_req.body.Phone_Number;
        const Address=_req.body.Address;
         const SKU=_req.body.SKU; 
        const City=_req.body.City;
         const State=_req.body.State;
         const  Zipcode=_req.body.Zipcode;
           const Country=_req.body.Country;
            const ImageUrl=_req.body.ImageUrl;
    Resources.updateOne({_id:id},{Resource_Name:Resource_Name,Category:Category,Description:Description,Phone_Number:Phone_Number,Address:Address,SKU:SKU, 
        City:City,State:State,Zipcode:Zipcode,Country:Country,ImageUrl:ImageUrl},{ new: true }, function(err, result){
//
        if(err){
            res.send(err);
        }
        else{
            //res.send(result);
            console.log("Updated successfully");
            res.send(result);
        }

    })


});



        router.post('/update_service', async (_req, res) => {
            //console.log("inside update_service");
            var ObjectId = require('mongodb').ObjectID;
            const id = _req.body.id;
           // console.log(id);
            //console.log(typeof id);
            const Service_Name=_req.body.Service_Name;
             const Category=_req.body.Category;
              const Description=_req.body.Description;
              const Phone_Number=_req.body.Phone_Number;
                const Address=_req.body.Address;
                 const availableDate=_req.body.availableDate; 
                const City=_req.body.City;
                 const State=_req.body.State;
                 const  Zipcode=_req.body.Zipcode;
                   const Country=_req.body.Country;
                    const ImageUrl=_req.body.ImageUrl;
            Services.updateOne({_id:id},{Service_Name:Service_Name,Category:Category,Description:Description,Phone_Number:Phone_Number,Address:Address,availableDate:availableDate, 
                City:City,State:State,Zipcode:Zipcode,Country:Country,ImageUrl:ImageUrl},{ new: true }, function(err, result){
        //
                if(err){
                    res.send(err);
                }
                else{
                    //res.send(result);
                    console.log("Updated successfully");
                    res.send(result);
                }
        
            })
        
        
        });
export default router;
