//Jogo de adivinhação

const btnClick = () => {
    var number = prompt("Tenta adivinhar o número:");
    var numAle = Math.floor(Math.random() * 100)
    var res = document.getElementById('result');

    if (number > numAle) {
        res.innerHTML += `<p>Seu número <strong>${number}</strong> é maior, o meu é <strong>${numAle}</strong></p>`
    
    } else if (number < numAle){
        res.innerHTML += `<p>Seu número <strong>${number}</strong> é menor, o meu é <strong>${numAle}</strong></p>`
    
    }else if (number > 100 || number < 1) {
        res.innerHTML += `<p>Número inválido</strong></p>`
    } else {
        res.innerHTML += `<p>Seu número <strong>${number}</strong> é igual, o meu é <strong>${numAle}</strong></p>`
    }
    

}