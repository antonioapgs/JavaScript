// REFERÊNCIAS
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals


// SEM CONSTRUTOR

let programacao = "Programação";
console.log(programacao);


// COM CONSTRUTOR

let sala = String("Sala B 107 ");
console.log(sala);

let ucb = new String("UCB"); // Lembrem que utilizar o tipo primitivo String com o new é diferente de sem o new. Na prática o acesso ao valor é igual.
console.log(ucb);
console.log(sala + ucb); // Concatenação de dois valores, no caso Strings.


// PROPRIEDADES

let fulano = String("Fulano");
console.log(fulano.length); // A propriedade length nos permite saber a quantidade de caracteres que nossa String possui.



// METODOS - (lembrem que ao parar o mouse em cima do comando vocês conseguem ver a documentação do método, explicando o seu funcionamento como um todo)

const disciplina = 'Programação WEB';
console.log(disciplina.length);
console.log("Um índice: " + disciplina.slice(6)); // se a gente não falar qual o final, o método slice entende que é a partir dessa posição indicada
console.log("Um range: " + disciplina.slice(6, 10)); // passando o início e o fim, o método slice pega um pedaço da String que foi delimitada
console.log("Um índice: " + disciplina.slice(-3)); // faz a leitura da direita para a esquerda e anda a quantidade de posições indicada e pega este pedaço indicado
console.log("Um range: " + disciplina.slice(-20, -2)); // faz a leitura da direita para a esquerda e anda a quantidade de posições indicada pegando um pedaço da String que foi delimitada

let nomeQualquer = `João 
Batista
Silva`; // Quando a String é declarada com o caractere ` (TemplateString) a formatação é respeitada (quebras de linha por exemplo) e permite a interpolação de valores dentro dela.
console.log(nomeQualquer, 1, 'teste', 0); // Substituição
console.log(`${nomeQualquer} ${1} teste ${0}`); // Interpolação

let nomeQualquerEscape = 'João\nBatista\nSilva'; // Escape de caracteres, caracteres especiais que realizam algo especial em sua String (\n neste caso, que quebra linha)

let textoLinear = 'fdsajklfdasj klfjdlksa \
fdjsakljfkdlsa'; // Escape de caracteres, neste caso a barra invertida (\) permite que mesmo que você quebra linhas, ele mantém a estrutura linear (contínua do texto) em uma única linha.
console.log(textoLinear);

console.log(nomeQualquerEscape, 1, 'teste', 0); // Substituição
console.log(`${nomeQualquerEscape} ${1} teste ${0}`); // Interpolação

let textoConcatenado = 'fdsafas' + 9 + 'fsdfd'; // Concatenação
console.log(textoConcatenado);

textoConcatenado.concat(" ai minha vuaida."); // Realiza a concatenação, porém não atribui a variável
console.log(textoConcatenado);

textoConcatenado = textoConcatenado.concat(" ai minha vuaida."); // Realizamos a concatenação, porém, aqui sim, atribuimos a variável
console.log(textoConcatenado);