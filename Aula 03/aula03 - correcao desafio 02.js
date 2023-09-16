// Desafio 02

const a = [[1,3],[2,5]]; // Primeira matriz
const b = [[2,2],[0,1]]; // Segunda matriz
let c = Array(a.length); // Matriz resultante

// Numero de colunas primeira matriz
const colunasA = a[0].length;

// Numero de linhas segunda matriz
const linhasB = b.length;

if (colunasA == linhasB) {

  // inicializar dentro do array principal, em cada linha, um novo array
  for (let i = 0; i < colunasA; i++) {
    c[i] = []
  }

  // criando a variável que receberá os textos de cada linha
  let textoLinhas = '';

  // vamos iterar em cada linha da primeira matriz
  for (let i = 0; i < a.length; i++) {
    
    // iterar em cada coluna da primeira matriz
    for (let j = 0; j < colunasA; j++) {
      textoLinhas += `${a[i][j]} * ${ b[j][i] }${ j < (colunasA-1) ? ' + ' : '' }`;
      //c[i][j] = a[i][j] * b[i][j];
    }

    // atribuindo para cada linha o texto preenchido
    c[i] = textoLinhas;

    // limpando a String para os próximos valores que serão preenchidos
    textoLinhas = '';
  }

  console.log("AxB=C");
  console.table(c);
} else {
  console.log("As matrizes não podem ser multiplicadas.");
}