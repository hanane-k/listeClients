// recuperation de la balise tbody de la table par son id
var tbody = document.getElementById("tbody");
// instanciation de XMLHttpRequest
var xhttp = new XMLHttpRequest();
// creation de la fonction qui recupere le fichier json et afficher le contenu
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //recuperation de l'objet sous format json
      var clientsListe = JSON.parse(this.responseText);
      // stocker le tableau dans la variable clients
      var clients = clientsListe.clients;
      //on parcour le tableau des clients pour recuperer tout l'objet
      for (let i = 0; i < clients.length; i++) {
        // creation de l'element tr du tbody
        var tr = document.createElement("tr");
        // lier l'element tr a son parent tbody
        tbody.appendChild(tr);
        // parcourir le tableau d'un seul client
        for (attribut in clients[i]) {
          // creation de l'element td
          var td = document.createElement("td");
          // relier la balise td a son parent tr
          tr.appendChild(td);
          //remplir la balise td avec les valeur du chaque tableau
          td.innerHTML = clients[i][attribut];
        }
      }
    }
};
  xhttp.open("GET", "clients.json", true);
  xhttp.send();

  function trier() {
    // recuperation de la div qui va contenir le dropdown
    var dropdown = document.getElementById("dropdown");
    console.log(dropdown);
  }
