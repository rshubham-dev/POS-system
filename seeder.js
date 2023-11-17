const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const connectDb = require('./config/config');
const ItemModel = require('./models/item.model')
const items = require('./utils/data');
const itemModel = require('./models/item.model');

connectDb();

const importData = async ()=>{
    try{
        await itemModel.deleteMany();
        const itemsData = await itemModel.insertMany(items)
        console.log(`All items added`);
        process.exit()
    } catch(error){
        console.log(error);
        process.exit(1)
    }
}

importData();