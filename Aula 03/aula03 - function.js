// // // REFERENCIAS
// // // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function


// // // ESTRUTURA BASICA
function nomeDaFuncao(parametrosDaFuncao) {
    let algumaCoisa = parametrosDaFuncao;

    // faça aqui o que for necessário

    return algumaCoisa;
}
console.log(nomeDaFuncao("Antonio"));

// // // EXEMPLOS
function saudar() {
    console.log('Olá mundo!');
}
saudar();

function saudar(saudacao) {
    return saudacao;
}
console.log(saudar('Hello world!'));


// // // EXEMPLOS COM CONSTRUTOR
const soma = new Function('a', 'b', 'let x = 10; let resultado = x + a + b; return resultado;');
let resultadoSoma = soma(5, 4);
console.log(resultadoSoma);

let subtracao = new Function(
    "array", "return array.reduce((previousValue, currentValue) => previousValue + currentValue);"
);
console.log(subtracao([100,20,30]));


// // // EXEMPLOS COMO PROPRIEDADE
const calculadora = {
    a: 2,
    b: 5,
    somar: function() {
        return this.a + this.b;
    },
    multiplicar: function() {
        return this.a * this.b;
    }
}

console.log('Nosso teste:' + calculadora.multiplicar);

console.log('Soma: ' + calculadora.somar(5, 5));
console.log('Multiplicação: ' + calculadora.multiplicar(5, 5));

console.log(eval('10 + 5 + 6'));

//const soma = new Function('a', 'b', 'let x = 10; let resultado = x + a + b; return resultado;');
new Array()

new Function('array', 'console.log(array.reduce((p, c) => p + \' \' + c))')(['teste','de','algo', 'a', 'mais']);

const coisa = function (array, op) {
    console.log(array.reduce((p, c) => eval(`${p} ${op} ${c}`)));
}
coisa([1,2,3], '+');

// // EXEMPLO DE RECURSIVIDADE
function contagemRegressiva(n) {
    if (n > 0) {
        console.log(n);
        contagemRegressiva(n-1);
    } else {
        console.log('Feliz ano novo!!!')
    }
}
contagemRegressiva(10);

const cores = ['azul', 'branco', 'preto', 'vermelho'];
function sorteio(cor) {
    let corSelecionada = cores[Math.floor(Math.random() * cores.length)];
    //console.log(corSelecionada);
    if (corSelecionada != cor) {
        console.log(corSelecionada);
        sorteio(cor);
    } else {
        console.log('Encontrei:' + cor);
    }
}
sorteio('branco');