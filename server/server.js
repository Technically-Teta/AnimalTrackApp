//This is the minimal express server. 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const db = require('./db/db-connection.js'); 

const app = express();
const PORT = 8080;

// Configuring cors middleware
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.json("Hello Techtonica 2023 H2 to your Server for Animal Sightings");
  });


app.get('/api/animalsightings', async (req, res) =>{

    //real connection with the DB 
    try{
        const { rows: sightings } = await db.query('SELECT * FROM sightings');
        console.log("in the server", sightings);
        res.send(sightings);

    } catch(error){
        console.log(error);
        return res.status(400).json({error});

    }

    

})



app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));