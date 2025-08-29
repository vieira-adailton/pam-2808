// const pessoa = {
//     nome: "Adailton",
//     idade: 27,
//     imprimirNome: function(){
//         return `${this.nome} tem ${this.idade} anos`;
//     },

//     beber: function(){
//         return false
//     }
// }

// console.log(pessoa, pessoa.imprimirNome(), pessoa.beber())

/*
Exercício:
Modele uma classe/objeto de um produto de uma papelaria esse produto precisa ter como atributos: nome e preço e um método que calcule o valor de uma venda quando passados uma quantidade como parâmetro;
*/

const produto = {
    nome: "caneta",
    preço: 2,
    cor: "azul",
    calcular: function(qtd){
        return this.preço * qtd
    }
}

console.log(produto.calcular(3), produto.cor)