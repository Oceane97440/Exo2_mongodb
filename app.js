const express = require("express");
const BodyParser = require("body-parser");
const fileUpload = require('express-fileupload');
const path = require('path');
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "mongodb+srv://oceane08:password974@cluster0-owldh.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "utilisateurs";

var app = express();

//Indique qu'on utilise express ejs
app.set('views', __dirname + '/views');
app.set('views engine','ejs');

//Ressource utiliser
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'public')));

var database, collection;

app.listen(3000, () => {
    
});

//Route vers users.js
const users = require('./routes/users');

app.use('/', users)

// Route vers form.js
const form=require('./routes/form');

app.use('/formulaire', form)





//Action upload du fichier image
app.post('/uploads', function(req, res) {
    console.log(req.files.photo); //requette.files.nom du file 
  

  });
  app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  }));
  app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

