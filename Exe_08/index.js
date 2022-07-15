//Trabalhando com números
// mais informações no readme.md

alert("Seja bem-vindo(a) ao meu site !")

const changeNumber = () => {
    var number = prompt("Digite um número:");
    var resultNum = document.getElementById('numId')
    resultNum.innerHTML = `<p>O dobro de ${number} é ${number*2}e a metade ${number/2}`


}