const ingredientesPizza = [
  "Masa",
  "Tomate",
  "Champiñones",
  "Cebolla",
  "Pollo",
  "Atún",
  "Carne",
  "Pescado",
  "Espinaca",
  "Mozarella",
];
const pares = [];
const impares = [];

function paresEImpares(ingredientesPizza) {
  for (let i = 0; i < ingredientesPizza.length; i++) {
    if (ingredientesPizza[i].length % 2 == 0) {
      pares.push(ingredientesPizza[i]);
    } else {
      impares.push(ingredientesPizza[i]);
    }
  }
}

paresEImpares(ingredientesPizza);

console.log(`Los ingredientes pares son ${pares}`);
console.log(`Los ingredientes impares son ${impares}`);
