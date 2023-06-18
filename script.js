function remplirTableau() {
    var tableau = [];
    for (var i = 0; i < 200; i++) {
        var nombre = Math.floor(Math.random() * 2000); // Génère un nombre aléatoire entre 0 et 2000 (inclus)
        tableau.push(nombre);
    }
    return tableau;
}
var tableauRempli = remplirTableau();
console.log(tableauRempli);
var nombreATrouver = Math.floor(Math.random() * 200);
console.log(nombreATrouver);
var index = tableauRempli.indexOf(nombreATrouver);
var message = '';
if (index == -1) {
    console.log(nombreATrouver + ' ne se trouve pas dans le tableau');
}
else {
    console.log(nombreATrouver + ' se trouve dans le tableau');
}
