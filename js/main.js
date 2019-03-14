var tbody = document.getElementById("tbody");
// instanciation de XMLHttpRequest
var xhttp = new XMLHttpRequest();
// creation de la fonction qui recupere le fichier json et afficher le contenu
xhttp.onreadystatechange = function(id, nom, age, ville) {
    if (this.readyState == 4 && this.status == 200) {
      //recuperation de l'objet sous format json
      var clientsListe = JSON.parse(this.responseText);
      // stocker le tableau dans la variable clients
      var clients = clientsListe.clients;
      //on parcour le tableau des clients pour recuperer tout l'objet
      for (let i = 0; i < clients.length; i++) {
        var tr = document.createElement("tr");
        tbody.appendChild(tr);
        for (attribut in clients[i]) {
          var td = document.createElement("td");
          td.innerHTML = clients[i][attribut];
          tr.appendChild(td);

        }
      }
    }
};
  xhttp.open("GET", "clients.json", true);
  xhttp.send();
