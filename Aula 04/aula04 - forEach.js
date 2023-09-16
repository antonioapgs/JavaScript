// // // REFERENCIAS
// // // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


// // ESTRUTURA BASICA
// A partir de um array, chamar a função .forEach, implementar a função a ser executada durante a iteração com cada item do array
const array = ['Fulano', 'Beltrano'];

// Iterando os elementos com Arrow Function
array.forEach((nome) => { console.log(nome) });

// Iterando os elementos com Function tradicional
array.forEach(function(nome) { console.log(nome) });


// // // EXEMPLOS

// Array de objetos
const objetos = [
    {
        nome: 'Paulo',
        sobrenome: 'Silva',
        data: new Date(2013, 6, 1)
    }
    ,{
        nome: 'Joana',
        sobrenome: 'Souza',
        data: new Date(2008, 6, 1)
    }
];

objetos.forEach((elemento) => {
    console.log(`Nome: ${elemento.nome}`)
    console.log(`Sobrenome: ${elemento.sobrenome}`)
    console.log(`Nascimento: ${elemento.data.toLocaleDateString('pt-BR')}.`)
});

// Array de strings
const nomes = ['Antonio', 'Daniel', 'Maria'];
nomes.forEach((nome) => {
    console.log(nome);
});

// Array de números
const numeros = [10, 20.4, 100.55555];
numeros.forEach(function(numero) {
    console.log(numero);
});