// REFERÊNCIAS
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


// SEM CONSTRUTOR

let arrSimples = ['tese', 1, 1.1]; // lembrando da tipagem fraca
console.log(arrSimples);
console.log(arrSimples[2]);


// COM CONSTRUTOR

let outroArray = Array(1, 2, 3, 1); // cria o array com os elementos
console.log(outroArray);

let novoArray = Array(5); // quando é um único parametro numérico, o JavaScript interpreta como o tamanho do array
console.log(novoArray[3]);
console.log(novoArray.length);

let novoArray2 = Array("5");
console.log(novoArray2.length);
console.log(novoArray2[0]);

let a = Array();
console.log(a.length);

let cores = ["branco", "preto", "preto-fosco", "azul", "amarelo", "verde", "vermelha"];
console.log(cores);


// METODOS

console.log(outroArray.lastIndexOf(1));
console.log(outroArray.find((valor) => valor > 1)); // encontra, retorna o primeiro valor encontrado e não continua a busca

console.log(novoArray[2]);
console.log(novoArray.fill("Mengão")); // preenche com o valor informado de uma posição até outra posição

console.log(cores.filter((cor) => cor.startsWith("preto") || 
cor.endsWith("a") || 
cor.endsWith("l"))); // encontra e retorna todos os valores encontrados

cores.push("laranja"); // insere ao final do array
cores.splice(1,0,"lilás"); // insere em uma posição específica
console.log(cores);
console.table(cores);

cores.pop(); // remove ao final do array
cores.splice(1, 2); // remove em uma posição específica
console.table(cores);

var arrObjeto = [{ nome: 'Joãozinho', idade: 34, altura: 1.76}, { nome: 'Mariazinha', idade: 38, altura: 1.58}]; // exemplo de um array de objetos
console.log(arrObjeto);
for (let index = 0; index < arrObjeto.length; index++) {
    const element = arrObjeto[index];
    console.log(element);
    console.log(element.nome);
    console.log(element.idade);
    console.log(element.altura);
}
console.table(arrObjeto);

const matriz = [[1,2], [3,4], [5,6]]; // exemplo de matriz, através de array dentro de array
console.table(matriz);