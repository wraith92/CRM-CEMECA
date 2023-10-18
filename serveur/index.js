const express = require('express');
const app = express();
const cors = require('cors');
//routes

//dotenv permet de cacher les informations de connexion à la base de données
require('dotenv').config();
const PORT = process.env.PORT || 8080 ;
app.use(express.json()); 
//cors permet de faire des requêtes depuis un autre domaine que celui du serveur    
app.use(cors());
//connexion à la base de données
let mysql = require('mysql2');
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});
connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

app.get('/', (req, res) => res.send('Hello World!'));

//syncroniser la base de donner

/*
const db = require("./models");
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
});
*/


//routes
require('./routes/societe.route')(app);
//listen port
app.listen(PORT, () => {
    console.log(`Server is running `,PORT,"cors",process.env.HOST);
  });