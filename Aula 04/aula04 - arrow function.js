// // // REFERENCIAS
// // // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions


// // ESTRUTURA BASICA
console.log(() => { console.log("Hello World!") }); // printa o objeto função
console.log((() => { console.log("Hello World!") })()); // printa o resultado da função

// // Pegadinha
const a = () => console.log("oi"); console.log("tchau");
a();

// // // EXEMPLOS
const funcion = () => {
    let texto = "Printar: ";
    console.log(texto + " Tio Antônio");
}
funcion();

const funcao = (param, param2) => console.log("Printar o texto:", param, param2);
funcao("Tio Antônio", "Bruxão");

// // // ATENÇÃO
// // Não confundir arrow function com predicate
const vogais = ['a','e','i','o','u'];
console.log(vogais.find(x => x == 'e').length);