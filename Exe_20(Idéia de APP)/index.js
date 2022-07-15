//Sorteador de números

let res = document.getElementById('result');

const btnCont = () => {    
    res.innerHTML += `<p>Acabei de pensar no número: <strong>${Math.floor(Math.random() * 100)}</strong></p>`;
    //Math.floor(Math.random() * 100) função Math.ramdom gera números aleatórios
    //Math.floor auxilia para executar até um certo número
}
const btnZerar = () => {
    res.innerHTML = null;
}