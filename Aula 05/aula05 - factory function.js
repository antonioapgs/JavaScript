// AQUI NÓS UTILIZAMOS O PADRÃO CAMEL CASE

// FORMA QUE FUNCIONA POREM NAO E UMA BOA PRATICA
let marido = {
    nome: 'Antônio',
    idade: 34,
    calcularAnoNascimento: function() {
        return new Date().getFullYear() - this.idade;
    },
    printarNome: function() {
        return this.nome;
    }
};
console.log(marido.calcularAnoNascimento());
console.log(marido.printarNome());

let esposa = {
    nome: 'Mirian',
    idade: 38,
    calculaAnoNascimento: function() {
        return new Date().getFullYear() - this.idade;
    }
};
console.log(esposa.calculaAnoNascimento());
//console.log(esposa.printarNome());


// // ESTRUTURA BASICA

// Forma mais verbosa
// Criar uma função, que receba os parâmetros de inicialização
// Criar um objeto de retorno e dentro dele realizar as atribuições do parametros recebidos para as variáveis, bem como criar as funções
function criarPessoa(nomePessoa, idade) {
    const pessoa = {
        nome: nomePessoa,
        idade: idade,
        printaAtributos: function() {
            return `${nome} ${idade}`;
        },
        calculaAnoNascimento: function() {
            return new Date().getFullYear() - this.idade;
        }
    };

    return pessoa;
}

let marido2 = criarPessoa('Mauricio', 90);
console.log(marido2.printaAtributos());
console.log(marido2.calculaAnoNascimento());

let esposa2 = criarPessoa('Bruna', 87);
console.log(esposa2.printaAtributos());
console.log(esposa2.calculaAnoNascimento());



// // ESTRUTURA OTIMIZADA
// Forma mais moderna, que surgiu no JavaScript 2015

function criarPessoa(nome, idade) {
    return {
        nome,
        idade,
        printaAtributos() {
            return `${nome} ${idade}`;
        },
        calculaAnoNascimento() {
            return new Date().getFullYear() - this.idade;
        }
    };
}

let marido3 = criarPessoa('José', 75);
console.log(marido3.printaAtributos());
console.log(marido3.calculaAnoNascimento());

let esposa3 = criarPessoa('Maria', 74);
console.log(esposa3.printaAtributos());
console.log(esposa3.calculaAnoNascimento());
