// Parâmetros (Forma tradicional)
var a = "Hello";
var b = "World";
function printar(hello, world) {
    return hello + ' ' + world;
}
console.log(printar(a, b));

// Parâmetros padrão (Default parameters)
function somar(a = 10, b = 20) {
    return a + b;
}
console.log(somar());
console.log(somar(60));
console.log(somar(40,50));

// Parâmetros variáveis (Rest parameters)
function incluir(...numeros) {
    numeros.forEach(element => {
        console.log(element);
    });
}
incluir(1,2,3,4,5);