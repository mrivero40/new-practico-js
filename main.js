const h1 = document.querySelector('h1');
const input1 = document.querySelector('#valor1');
const input2 = document.querySelector('#valor2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#resultado');

btn.addEventListener('click', dispararConsole);

function dispararConsole() {
    const result1 = input1.value + input2.value;
    const result2 = parseInt(input1.value) + Number(input2.value);
    pResult.innerText = `resultado de sumar string: ${result1}
    resultado de sumar números: ${result2}`;    
};

