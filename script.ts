function remplirTableau(): number[] {
  const tableau: number[] = [];

  for (let i = 0; i < 200; i++) {
    const nombre = Math.floor(Math.random() * 2000); // Génère un nombre aléatoire entre 0 et 2000 (inclus)
    tableau.push(nombre);
  }

  return tableau;
}

const tableauRempli: number[] = remplirTableau();
console.log(tableauRempli);

const nombreATrouver: number = Math.floor(Math.random() * 200);
console.log(nombreATrouver);

const index : number = tableauRempli.indexOf(nombreATrouver);
let message: String =''
if (index == -1) {
  console.log(nombreATrouver + ' ne se trouve pas dans le tableau');
} else {
  console.log(nombreATrouver + ' se trouve dans le tableau');
}