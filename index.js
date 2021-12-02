const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const logger = require('./config/winston');
const db = require('./db.js');
const router = require('./router.js');
var cors = require('cors')


const app = express();
const PORT = process.env.PORT || 3000; //Configuramos puerto heroku

//Middleware
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());
app.use(cors()) // Use this after the variable declaration

//Rutas
app.get('/', (req, res) => {res.send('Bienvenidos a la prueba tecnica');});
app.use(router);

//Connecting to the database
db.then(()=>{
    //Starting server
        app.listen(PORT, ()=> console.log(`Server on port ${PORT}`.bgGreen.black));
    })
    .catch((err)=> console.log(err.message));   