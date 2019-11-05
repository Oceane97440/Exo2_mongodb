const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "mongodb+srv://oceane08:password974@cluster0-owldh.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "utilisateurs";

var app = Express();

app.set('views', __dirname + '/views');
app.set('views engine','ejs');

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var database, collection;

app.listen(3000, () => {
    
});

//Route vers users.js
const users = require('./routes/users');

app.use('/', users)

