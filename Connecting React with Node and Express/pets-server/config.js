const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const DB_URL = process.env.DB_URL;

const conectDB = async () => {
    try{
        await mongoose.connect(DB_URL, {
            dbName: 'pets_db'
        });
        console.log('Successfully connected to the pets_db');
    }
    catch(error){
        console.log("Somthing went wrong while conneting to the pets_db");
        throw error;
    }
}

module.exports = conectDB;