require('dotenv').config();
const express = require("express");
const router = require('./app/router');

const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const app = express();

const expressJSDocSwagger = require('express-jsdoc-swagger');
const { options } = require('./app/utils/swaggerDocs.js');

expressJSDocSwagger(app)(options);

const port = process.env.PORT || 8080;

app.use(morgan('combined')); 
app.use(cors()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
        extended: true
    }));
app.use(router); // Requests processing will be defined in the file router
app.listen(port, () => console.log('Server app listening on port ' + port));