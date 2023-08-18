// REFERÊNCIAS
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString


// SEM CONSTRUTOR

let numb = 546
console.log(numb);


// COM CONSTRUTOR

numb = Number();
console.log(numb);

numb = Number(undefined);
console.log(numb);

numb = Number('');
console.log(numb);

numb = Number(false);
console.log(numb);

numb = Number(null);
console.log(numb);

numb = Number(1.0);
console.log(numb);

numb = Number(-9.0);
console.log(numb);

numb = Number(5.467582698542638);
console.log(numb);


// PROPRIEDADES

console.log(Number.NaN);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.EPSILON);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);


// MÉTODOS

const num_B = 2000.555;
console.log(num_B); // Number()
console.log(num_B.toString()); // String()

console.log(num_B.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})); // String formatada


console.log(num_B.toExponential(0));
console.log(num_B.toFixed(1));
console.log(num_B.toPrecision(5));
console.log(num_B.valueOf());

console.log(Number.isNaN(num_B));
console.log(Number.isInteger(num_B));
console.log(Number.isFinite(num_B));