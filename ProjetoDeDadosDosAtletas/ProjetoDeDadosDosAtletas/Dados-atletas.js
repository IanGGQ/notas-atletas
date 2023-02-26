//  !!!COMEÇO!!!

class Dados {
    constructor(nome, sobrenome, idade, peso, altura, notas) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    obtemNomeAtleta() {
        return `${this.nome} ${this.sobrenome}`;
    }
    obtemIdadeAtleta() {
        return this.idade;
    }
    obtemPesoAtleta() {
        return this.peso;
    }
    obtemAlturaAtleta() {
        return this.altura;
    }
    obtemNotasAtleta() {
        return this.notas;
    }
    obtemCategoria() {
       if(this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if(this.idade === 12 && this.idade === 13) {
            return "Juvenil";
        } else if(this.idade === 14 && this.idade === 15) {
            return "Intermediário";
        } else if(this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }
    obtemIMC() {
        let imc = this.peso / (this.altura * this.altura);
        return imc;
    }
    obtemMediaValida() {
      var sum = this.notas.reduce(function(accumulator,value){
        return accumulator + value;
      },0);
        let media = sum/this.notas.length;
        console.log(media);
        return media;
    }
}
const atleta = new Dados("Cesar", "Abascal", 
30, 80, 1.70, 
[10, 9.34, 8.42, 10, 7.88]);


console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.obtemAlturaAtleta()}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);
console.log(`Média válida: ${atleta.obtemMediaValida()}`);


//  !!!FIM!!!