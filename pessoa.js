const pessoa = {
    nome: "Adailton",
    idade: 27,
    imprimirNome: function(){
        return `${this.nome} tem ${this.idade} anos`;
    },

    beber: function(){
        return false
    }
}

console.log(pessoa, pessoa.imprimirNome(), pessoa.beber())