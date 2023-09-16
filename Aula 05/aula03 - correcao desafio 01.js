//Exercício da Calculadora + Fatorial

const calculadora = {
    somar: function(a, b) { 
        console.log('Soma: ' + (a + b)); 
    },
    multiplicar: function(a, b) { 
        console.log('Multiplicação: ' + (a * b)); 
    },
    subtrair: function(a, b) { 
        console.log('Subtração: ' + (a - b)); 
    },
    dividir: function(a, b) { 
        console.log('Divisão: ' + (a / b)); 
    }, 
    fatorial: function (a) {
        if (a == 0 || a == 1) {
            return 1;
        }

        return a * this.fatorial(a - 1);
    }
}

calculadora.somar(5, 5);
calculadora.multiplicar(5, 5);
calculadora.subtrair(5, 5);
calculadora.dividir(5, 5);

const fat = 5;
console.log(`${fat}! = ${calculadora.fatorial(fat)}`);