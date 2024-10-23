let input = document.getElementById('inputnumber');
let expression = ''; // Guardará a expressão matemática

// Função para adicionar números à expressão
function number(num) {
    expression += num;
    input.value = expression;
}

// Função para adicionar operadores à expressão
function operator(op) {
    if (op === 'x') {
        op = '*'; // Substituindo 'x' pelo operador de multiplicação '*'
    }
    expression += op;
    input.value = expression;
}

// Função para adicionar ponto decimal
function dot() {
    if (!expression.endsWith('.')) {
        expression += '.';
        input.value = expression;
    }
}

// Função para calcular o resultado da expressão
function result() {
    try {
        input.value = eval(expression); // Avalia a expressão
        expression = input.value; // Atualiza a expressão com o resultado
    } catch (error) {
        input.value = 'Erro'; // Em caso de erro na expressão
        expression = '';
    }
}

// Função para limpar a entrada
function clean() {
    expression = '';
    input.value = '';
}

// Função para apagar o último caractere
function backspace() {
    expression = expression.slice(0, -1);
    input.value = expression;
}
