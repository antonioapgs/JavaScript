//Exercício da String retornando um Array

function retornaArrayPalavras(valor) {
    return valor.split(' ');
}

const valor = 'Antônio Augusto Pinto Gama dos Santos';
const palavras = retornaArrayPalavras(valor)
palavras.forEach(palavra => {
    console.log(`${palavra}`)
});