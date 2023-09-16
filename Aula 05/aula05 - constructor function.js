// // REFERENCIAS
// // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes/constructor

// AQUI NÓS UTILIZAMOS O PADRÃO PASCAL CASE

// Forma mais simples, que transforma essa função construtora em uma classe e consequentemente se comporta como um objeto
function Pessoa(paramNome, paramIdade) {
    this.nome = paramNome;
    this.idade = paramIdade;
    this.calculaAnoNascimento = function() {
        return new Date().getUTCFullYear() - this.idade;
    };
    this.printaAtributos = function() {
        return `${this.nome} ${this.idade}`;
    };
}
let faustao = new Pessoa('Faustao', 76);
console.log(faustao.printaAtributos());
console.log(faustao.calculaAnoNascimento());

let gugu = new Pessoa('Gugu', 71);
console.log(gugu.printaAtributos());
console.log(gugu.calculaAnoNascimento());


// Forma mais moderna, que surgiu no JavaScript 2015
class Carro {
    constructor(pNome, pAno) {
        this.nome = pNome;
        this.ano = pAno;
    }

    calculaAnoNascimento() {
        return (new Date().getFullYear()) - this.ano;
    }
};
let carro1 = new Carro('Marea', 2000);
let carro2 = new Carro('Fusca', 1989);
console.log(carro1.calculaAnoNascimento());
console.log(carro2.calculaAnoNascimento());