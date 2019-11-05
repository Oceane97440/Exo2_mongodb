//Connetion bdd mongoclient
var MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
var CONNECTION_URL = "mongodb+srv://oceane08:password974@cluster0-owldh.mongodb.net/test?retryWrites=true&w=majority";
var DATABASE_NAME = "utilisateurs";
 var controller = {};
var database, collection;

MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        throw error;
    }
    database = client.db(DATABASE_NAME);
    collection = database.collection("utilisateur");
    console.log("Connected to `" + DATABASE_NAME + "`!");
});


controller.index = (req, res) => {
    //récupère les résultats

    collection.find().toArray(function(err, calculs){

            res.render('liste_users.ejs',{calculs:calculs});
        });

};

controller.save=(req,res)=>{

    app.post('/ad', function(req,res){ 

        var nom = req.body.nom; 
        var prenom = req.body.prenom; 
        var genre = req.body.genre; 
        var ville = req.body.ville; 
        var domaine = req.body.domaine; 
        var dob = req.body.dob; 
        var dateChoisi = req.body.dateChoisi; 
    
      
        var data = { 
            "nom": nom, 
            "prenom": prenom, 
            "genre": genre, 
            "ville": ville, 
            "domaine": domaine, 
            "dob": dob, 
            "dateChoisi": dateChoisi, 
    
        } 
        db.collection('utilisateur').insertOne(data,function(err, collection){ 
            if (err) throw err; 
            console.log("Les donnes sont enregistré"); 
                  
        }); 
              
        return res.redirect('liste_users.ejs'); 
    }) 

    
}


















//Important pour export
module.exports = controller;
