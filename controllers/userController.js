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
    //Chemain vers l'affiche les donnée de la bdd

    collection.find().toArray(function(err, users){

            res.render('liste_users.ejs',{users:users});
        });

};
controller.formindex = (req, res) => {
    //Chemain vers l'affichage du formulaire


            res.render('form.ejs');
};




controller.save=(req,res)=>{
//message erreur si la photos de upload pas

        if (!req.files || Object.keys(req.files).length === 0) {
          return res.status(400).send('Echec du upload');
        }

        var photo_file = req.files.photo;
        var nom = req.body.nom; 
        var prenom = req.body.prenom; 
        var genre = req.body.genre; 
        var ville = req.body.ville; 
        var domaine = req.body.domaine; 
        var dob = req.body.dob; 
        var dateChoisi = req.body.dateChoisi; 
        var photo = photo_file.name;//req.body.photo; 

      
        var data = { 
            "nom": nom, 
            "prenom": prenom, 
            "genre": genre, 
            "ville": ville, 
            "domaine": domaine, 
            "dob": dob, 
            "dateChoisi": dateChoisi,
            "photo":photo 
    
        } 
           console.log(data)
           console.log(req.files)


//Trouve et deplace la photo vers le dossier public/upload

          photo_file.mv(mainDir+'/public/uploads/'+photo_file.name, function(err) {
            if (err)res
            //return res.send(err);(affiche l'erreur)
            return res.status(500).send(err);
        
          });


//Apres tout traitement les donnée sont enregistré retourne vers la racine
         database.collection('utilisateur').insertOne(data,function(err, collection){ 
            if (err) throw err; 
            console.log("Les donnes sont enregistré"); 
                  
        }); 
           

        return res.redirect('/'); 
    

    
}


//Important pour export
module.exports = controller;
