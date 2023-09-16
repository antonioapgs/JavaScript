// Desafio 01

const a = [[1,2],[3,4],[5,6]];
const b = new Array(a[0].length);

console.log("Matriz A:");
console.table(a);

for (let i = 0; i < b.length; i++) {
  b[i] = new Array(a.length);
  
  for (let j = 0; j < a.length; j++) {
    b[i][j] = a[j][i];
  }
}

console.log("Matriz B:")
console.table(b);