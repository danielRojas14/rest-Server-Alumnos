const express = require('express')
const morgan = require("morgan");
require("dotenv").config();

require("./connection");
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 3000);

// Routes
app.use(require('./routes/alumnos.routes'));
 
app.listen(app.get('port'), ()=> console.log(`Server on port ${app.get('port')}`))