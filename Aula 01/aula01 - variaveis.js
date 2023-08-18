// REFERÊNCIAS
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Introduction
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types#declarações


// VARIAVEIS

const ió = 1;
console.log(ió)
const j = 2;
console.log(ió + j)

if (j > 1) {
    const n = 3;
    console.log(n)
}
//console.log(n); // não conseguimos acessar a constante porque o escopo em que ela foi criada não é acessível de fora dele

const nomeDaConstante = 1;
console.log(nomeDaConstante);
// Resultado: 1

// const nomeDaConstante = 2; // se tentar redeclarar a constante acima, um erro acontece porque não podemos redeclarar uma constante já existente
// Resultado: "SyntaxError: Identifier 'nomeDaConstante' has already been declared"

// nomeDaConstante = 2; // não podemos reatribuir um valor para uma constante
// Resultado: "TypeError: Assignment to constant variable."


const contador = 1;

if (contador == 1) {
    const pi = 3.14;
    console.log(pi);
    // Resultado: 3.14
}

// console.log(pi); // o escopo do pi é o escopo do if, ou seja, ele foi criado lá dentro e só é acessível lá dentro
// Resultado: "ReferenceError: pi is not defined"

// console.log(nomeDaVariavel); // não é possível acessar uma variável do tipo let antes de criá-la

let nomeDaVariavel = 'Profe';
console.log(nomeDaVariavel);
// Resultado: Profe

//var nomeDaVariavel = 'Professor';
//console.log(nomeDaVariavel);
// Resultado: Professor

nomeDaVariavel = 'Professor de programação web';
console.log(nomeDaVariavel);
// Resultado: Professor de programação web

// const i; // tentar criar uma constante sem valor também não é possível, precisamos sempre criar e atribuir um valor a ela
// console.log(i);

let a1 = 1.3;
let a2 = 'á';
let r = a2/a1;

console.log(r)

console.log(a2.length);

let oi = String("Hello");
console.log(oi)

let texto = String("Meu texto")
console.log(texto);
// Resposta: Meu texto

let numero = Number(4)
console.log(numero)

numero = Number(4.56445)
console.log(numero)

let booleano = Boolean(true)
console.log(booleano)

let booleanoSimples = false;
console.log(booleanoSimples)

let nulo = null;
console.log(nulo)

let indefinido = undefined
console.log(indefinido)


let var9;
console.log(var9);

var teste = var9;
console.log(teste);


console.log(1+1);
console.log(1-1);
console.log(1*1);
console.log(1/1);

console.log("Teste", nulo, indefinido); // substituição
console.log("Teste" + nulo + indefinido); // concatenação
console.log(`${booleano} ${nulo} ${indefinido}`); // interpolação


var a = 10;
console.log(a);

// const a = 2; // mesmo que o tipo da variável seja diferente, não é possível reutilizar o nome dela atribuindo agora a uma constante
// console.log(a);