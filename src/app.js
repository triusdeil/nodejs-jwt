const express = require('express');


//Initializations
const app = express();

//Settings 
app.set('port', process.env.PORT || 5000)

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use(require('./controllers/authController'))



module.exports = app