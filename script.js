// Création des éléments
var bgBody= document.getElementById
var img = document.createElement("img");
var h1 = document.createElement("h1");




// Raccourci pour les Enfants
let body = document.body;


// Ajouts des Attributs (class/id/tag)
img.setAttribute("class", "img-fluid");
// bgBody.setAttribute("class", "bg-dark text-white")
bgBody.setAttribute("style", "background-color: dark");


// Img Header
img.src = "/assets/images/Model-3.jpeg";




// Texte 
h1.innerHTML = "Teslouche";


// Enfants
body.appendChild(h1);
body.appendChild(img);
body.appendChild(bgBody);
