//Contador de cliques

let contador = 0 
let res = document.querySelector('resultCont')
// As variáveis declaradas aqui fora são consideradas GLOBAIS e funcionam dentro do programa inteiro

const contar = () => {
    contador ++ // É a mesma coisa que contador = contador + 1
    res.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques.</p>`
}

const zerar = () => {
    contador = 0
    res.innerHTML = null
}