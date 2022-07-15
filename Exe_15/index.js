//Par ou ímpar
const btnChoice = () => {
    var num = prompt("Digite um número: ")
    if(num % 2 == 0){
        res = document.getElementById("result")
        res.innerHTML = `${num} é PAR`

    }else{
        res = document.getElementById("result")
        res.innerHTML = `${num} é ÍMPAR`
    }
}