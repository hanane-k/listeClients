var clients = document.getElementById("clients");
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(clientsListe) {
    if (this.readyState == 4 && this.status == 200) {
      var clientsListe = JSON.parse(this.responseText);
      for (let i = 0; i < clientsListe.length; i++) {
      var id = document.getElementById("id");
      id.innerHTML = clientsListe.id + "<br>";            
      var nom = document.getElementById("nom");
      nom.innerHTML = clientsListe.nom + "<br>";
      var age = document.getElementById("age");
      age.innerHTML = clientsListe.age + "<br>";
      var ville = document.getElementById("ville");
      ville.innerHTML = clientsListe.ville + "<br>";
      }
    }
    // console.log(JSON.parse(this.responseText));    
    console.log(clientsListe.ville);    
  };
  xhttp.open("GET", "clients.json", true);
  xhttp.send(); 
  