// // // REFERENCIAS
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements

// // // EXEMPLOS
// if (se, senão, senão se)
const hora = 11;
let cumprimento = "";

if (hora < 12) {
    cumprimento = "Bom dia!";
} else if (hora < 18) {
    cumprimento = "Boa tarde!";
} else {
    cumprimento = "Boa noite!";
}

console.log(cumprimento);


// switch (escolha uma das opções, caso não encontre, execute a padrão)
const diaDaSemana = 0;
let nomeDiaSemana = "";
switch (diaDaSemana) {
    case 0:
        nomeDiaSemana = "Domingo";
        break;
    case 1:
        nomeDiaSemana = "Segunda";
        break;
    case 2: 
        nomeDiaSemana = "Terça";
        break;
    case 3: 
        nomeDiaSemana = "Quarta";
        break;
    case 4: 
        nomeDiaSemana = "Quinta";
        break;
    case 5:
        nomeDiaSemana = "Sexta";
        break;
    case 6: 
        nomeDiaSemana = "Sábado";
        break;
    default:
        nomeDiaSemana = "Não encontrado";
        break;
}
console.log(nomeDiaSemana);


// // for (para cada um dos itens do array ou da sequencia, faça algo)
const nomeDiasDaSemana = [
    "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
];

for (let index = 0; index < nomeDiasDaSemana.length; index++) {
    nomeDiaSemana = nomeDiasDaSemana[index];
    console.log(nomeDiaSemana);
}


// for in (percorra as propriedades do objeto)
const estudante = {
    nome: "Monica", 
    sala: "B107", 
    idade: 21
};

for (const key in estudante) {
    console.log(`${key} - ${estudante[key]}`)
}