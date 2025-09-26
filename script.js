// script.js
let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');
let botao = document.getElementById('calcular');
let res = document.getElementById('resultado');

botao.addEventListener('click', function() {
    let n1 = parseFloat(numero1.value);
    let n2 = parseFloat(numero2.value);

    if (isNaN(n1) || isNaN(n2)) {
        res.innerHTML = 'Números inválidos!';
    } else {
        res.innerHTML = 'Resultado: ' + calcular(n1, n2);
    }
});
