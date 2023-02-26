//  !!!COMEÇO!!!

let atletas = [
   {
     nome: "Cesar Abascal",
     notas: [10, 10, 7.88, 8.42, 9.34]
   },
   {
     nome: "Fernando Puntel",
     notas:  [8, 10, 10, 7, 9.33]
   },
   {
     nome: "Daiane Jelinsky",
     notas: [7, 10, 9.5, 9.5, 8]
   },
   {
     nome: "Bruno Castro",
     notas: [10, 10, 10, 9, 9.5]
   }
];

for (let i = 0; i < atletas.length; i++) {
   var sum = atletas[i].notas.reduce(function(accumulator,value){
 return accumulator + value;
},0);

let media = atletas[i].notas.length;

console.log("Atleta: " + atletas[i].nome);
console.log("Notas Obtidas: " + atletas[i].notas);
console.log("Soma das notas " + sum);
console.log("Média Válida: " + sum/media + "\n" + "\n");
console.log("FIM");
};

//   !!!FIM!!!