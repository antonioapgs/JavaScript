// // // PROMPT - INSERÇÃO DE DADOS

// // Para instalar esse módulo basta digitar no terminal, estando no mesmo diretório do arquivo, o comando: "npm install prompt-sync"
// // Sempre que a gente quiser utilizar o módulo prompt-sync, precisamos chamá-lo através do require e atribuí-lo a uma variável;
const prompt = require("prompt-sync")();
//console.log(prompt);

let teste = prompt("Digite alguma coisa: ");
console.log("Foi digitado:", teste);