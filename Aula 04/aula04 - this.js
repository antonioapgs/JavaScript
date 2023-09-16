// // // REFERENCIAS
// // // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this

// // EM JAVASCRIPT FUNCOES E OBJETOS TEM PROPRIEDADES
// // ESTRUTURA BASICA
let nome = 'Fulaninho';
let p1 = {
    nome: 'Joãozinho',
    printarNome: function() {
        return this.nome;
    }
};
console.log(p1.printarNome());

let p2 = {
    nome: 'Mariazinha',
    printarNome: function() {
        return this.nome;
    }
};
console.log(p2.printarNome());