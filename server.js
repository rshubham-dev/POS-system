const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const connectDb = require('./config/config')


const app = express();

//middlwares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));

//routes
app.use('/api/items', require('./routes/item.route'))

//port
const port = process.env.PORT || 8000;

//listen
app.listen(port, ()=>{
    connectDb();
    console.log(`Server is listening ${port}`)
})