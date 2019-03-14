// instanciation de XMLHttpRequest
var xhttp = new XMLHttpRequest();
// creation de la fonction qui recupere le fichier json et afficher le contenu
xhttp.onreadystatechange = function(clientsListe) {
    if (this.readyState == 4 && this.status == 200) {
      //recuperation de l'objet sous format json
      var clientsListe = JSON.parse(this.responseText);
      // stocker le tableau dans la variable clients
      var clients = clientsListe.clients;
      //on parcour le tableau des clients pour recuperer tout l'objet
      for (let index = 0; index < clients.length; index++) {
        // on stock le tableau d'un seul client dans la variable client
        var client = clients[index]; 
        // on parcours les proprietes d'un client       
        for (property in client) {
          balise();
          // remplir les champs des balises de la table
          id.innerHTML = client.id + "<br>";            
          nom.innerHTML = client.nom + "<br>";
          age.innerHTML = client.age + "<br>";
          ville.innerHTML = client.ville + "<br>";
          console.log(client[property]);
        }      
      }
    }
  };
  xhttp.open("GET", "clients.json", true);
  xhttp.send();
function balise() {
  // fonction qui recupere des balise de la table
  var id = document.getElementById("id")
  var nom = document.getElementById("nom");
  var age = document.getElementById("age");
  var ville = document.getElementById("ville");    
}