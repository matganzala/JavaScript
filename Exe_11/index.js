//Vários cálculos em JS

const btnIniOp = () => {
    var number = prompt("Digite um número")    
    resultHTML = document.getElementById('varID')
    resultHTML.innerHTML = `
        O número a ser analisado aqui será o <stronger> ${number}<hr>
        <p>O seu valor absoluto é: ${number}</p>
        <p>Sua raiz quadrada é: ${Math.sqrt(number)}</p>
        <p>Sua raiz cúbica é: ${Math.cbrt(number)}</p>
        <p>O valor de ${number}² é: ${Math.pow(number, 2)}</p>
        <p>O valor de ${number}³ é: ${Math.pow(number, 3)}</p>
    `
}