                        /*----------------------------------------------------------------------------------------------------------------/+

                                    This database to connect in Models property to given by controller and you can  
                                           Change this database by your select what you want and don't forget
                                                To require this database in inde.js to given connected
                                                          written by fathoni waseso jati 1337
    
                        /------------------------------------------------------------------------------------------------------------------*/ 

/*
|--------------------------------------------------------------------------
| mongoose required component describe by mongodb
|--------------------------------------------------------------------------
|
| Mongoose guides provide detailed tutorials on Mongoose's core concepts 
| and integrating Mongoose with external tools and frameworks
|
*/

const mongoose = require('mongoose')

/*
|--------------------------------------------------------------------------
| Dotenv required component describe by mongodb
|--------------------------------------------------------------------------
|
| Dotenv is a zero-dependency module that loads environment variables from a .env
| file into process.env. Storing configuration in the environment separate 
| from code is based on The Twelve-Factor App methodology
|
*/

require('dotenv').config({path: './.env'})

/*
|--------------------------------------------------------------------------
| URI mongoDB describe by mongodb
|--------------------------------------------------------------------------
|
| the standard format of the MongoDB connection URI used to connect to a .
| MongoDB deployment: standalone, replica set, or a sharded cluster
|
*/

const url = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}?authSource=admin`;

/*
|--------------------------------------------------------------------------
| mongoDB connect describe by mongodb
|--------------------------------------------------------------------------
|
| Creates a connection to a MongoDB instance and returns the reference to the database. 
| However, in most cases, use the Mongo() object and its getDB() method instead.
|
*/

mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
});

db = mongoose.connection;
db.on('error', ()=>{
    console.log("Database Error Connection")
})
