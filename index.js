// const express = require('express');
// const { MongoClient } = require('mongodb');  // from mongo db server
// const ObjectId = require('mongodb').ObjectId;
// const cors = require('cors');
// require('dotenv').config();  // DOTENV REQUIRE


// const app = express();
// const port = process.env.PORT || 5000;

// // middleware
// app.use(cors());
// app.use(express.json());

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.uhb9e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// // console.log(uri);  // to check whether uri  is working or not (check in server CMD)
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


// //*****************FUNCTION START FROM HERE**********************
// async function run(){
//    try{
//        await client.connect();
//     //    console.log('connected to database');  // if this is connected then you can see in CMD that means it's connected to mongo server
//     const database = client.db('travelBee');
//     const servicesCollection= database.collection('services');
    // const allOrders = database.collection('allOrders');
//     // console.log(allOrders);

    
     


//     // GET API 
//     app.get('/services', async(req,res)=>{
//         const query = {};  //n
//         const cursor = servicesCollection.find(query); // n
//         // const cursor = servicesCollection.find({}); //u
//         const services = await cursor.toArray();
//         res.send(services);
//     });

//     // GET SINGLE SERVICE
//     app.get('/services/:id', async(req,res)=>{
//         const id = req.params.id;
//         console.log('getting service', id);
//         const query = {_id: ObjectId(id)};
//         const service = await servicesCollection.findOne(query);
//         res.send(service);
//     })

//     //  POST API
//     app.post('/services', async(req,res)=>{
//         const service = req.body;
//         // console.log('hit the post api',service);
//         const query = {service}; // n
//         const result = await allOrders.insertOne(query); //n
//         // const result = await servicesCollection.insertOne(service);  // uncomment
//         console.log(result);
//         res.json(result);
//     });



//     // post for adding new tour package plan (new addition)
//     app.post('/services', async(req,res)=>{
//         const addingInfo = req.body;
//         const result = await services.insertOne({addingInfo});
//         res.json(result);

//     })

//     //Find all order
//     app.get('/allOrder', async(req,res)=>{
//         const query = {};
//         const cursor = allOrders.find(query);
//         const result = await cursor.toArray();
//         res.send(result);
//     });

//     // Delete Operation
//     app.delete('/allOrder/:id', async(req,res)=>{
//         const id = req.params.id;
//         const query = { _id: ObjectId(id)};
//         const result = await allOrders.deleteOne(query);
//         res.json(result);
//     });

//     // ***************end delete*******************


//    }
//    finally{
//     //    await client.close();
//    }
// }
// run().catch(console.dir);





// app.get('/', (req,res)=>{
//     res.send('In Sha Allah I can Finish this TravelBee server Assignment on Time');
// });
// app.listen(port,()=>{
//     console.log('Running TravelBee Server', port);
// });





// *********************************main*****************************************

const express = require('express');
const { MongoClient } = require('mongodb');  // from mongo db server
const ObjectId = require('mongodb').ObjectId;
const cors = require('cors');
require('dotenv').config();  // DOTENV REQUIRE


const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.uhb9e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// console.log(uri);  // to check whether uri  is working or not (check in server CMD)
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


//*****************FUNCTION START FROM HERE**********************
async function run(){
   try{
       await client.connect();
    //    console.log('connected to database');  // if this is connected then you can see in CMD that means it's connected to mongo server
    const database = client.db('travelBee');
    const servicesCollection= database.collection('services');
    const allOrders = database.collection('allOrders');


    // GET API 
    app.get('/services', async(req,res)=>{
        const cursor = servicesCollection.find({});
        const services = await cursor.toArray();
        res.send(services);
    });

    //  POST API
    app.post('/allOrders', async(req,res)=>{
        const service = req.body;
        // console.log('hit the post api',service);
        const query = {service}; // n
        const result = await allOrders.insertOne(query); //n
        // const result = await servicesCollection.insertOne(service);  // uncomment
        console.log(result);
        res.json(result);
    });

    // GET SINGLE SERVICE
    app.get('/services/:id', async(req,res)=>{
        const id = req.params.id;
        console.log('getting service', id);
        const query = {_id: ObjectId(id)};
        const service = await servicesCollection.findOne(query);
        res.json(service);
    })

    //  POST API
    app.post('/services', async(req,res)=>{
        const service = req.body;
        console.log('hit the post api',service);
        const result = await servicesCollection.insertOne(service);
        console.log(result);
        res.json(result);
    });

   }
   finally{
    //    await client.close();
   }
}
run().catch(console.dir);





app.get('/', (req,res)=>{
    res.send('In Sha Allah I can Finish this TravelBee server Assignment on Time');
});
app.listen(port,()=>{
    console.log('Running TravelBee Server', port);
});

