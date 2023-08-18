// REFERÊNCIAS
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Object


// SEM CONSTRUTOR

let objSemConstrutor = {
    a: 1,
    b: 2,
    c: 3
};
console.log(typeof objSemConstrutor); // typeof serve para saber o tipo da minha variável


// COM CONSTRUTOR

let obj = Object({ id: 1, nome: 'teste'});
console.log(obj);

let objNew = new Object("oi");
console.log(objNew);


// METODOS

let objetos = [
    { nome: 'Joãozinho', idade: 34, altura: 1.76}, 
    { nome: 'Mariazinha', idade: 38, altura: 1.58}
];
console.log(objetos[0].nome); // acessando uma propriedade de um objeto específico do array

// acessando através de uma estrutura de controle de fluxo
for (let index = 0; index < objetos.length; index++) {
    const element = objetos[index];
    console.log(element);
    console.log(element.nome);
    console.log(element.idade);
    console.log(element.altura);
}

console.table(Object.keys(objSemConstrutor)); // acessando as chaves do objeto
console.table(Object.values(objSemConstrutor)); // acessando os valores do objeto

console.table(Object.keys(objetos)); // como é um array de objetos, as chaves são os índices
console.table(Object.values(objetos)); // e neste caso os valores são as propriedades/valores mesmo