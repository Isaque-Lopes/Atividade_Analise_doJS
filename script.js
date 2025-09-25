// script.js
let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');
let botao = document.getElementById('calcular');
let res = document.getElementById('resultado');

botao.addEventListener('click', function() {
    // Get the input values and convert them to numbers
    let n1 = parseFloat(numero1.value);
    let n2 = parseFloat(numero2.value);

    // Check if both inputs are valid numbers
    if (isNaN(n1) || isNaN(n2)) {
        res.innerHTML = 'Por favor, insira números válidos!';
    } else {
        // Call the calcular function and display the result
        res.innerHTML = 'Resultado: ' + calcular(n1, n2);
    }
});