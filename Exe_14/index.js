//Média Aluno v2.0

const calcMedia = () => {
    var nome = prompt("Digite o seu nome: ")
    var n1 = prompt("Digite a primeira nota:")
    var n2 = prompt("Digite a segunda nota: ")
    var media = (n1 + n2) / 2
    var medboa = media > 60
    var medruim = media < 60
    
    if (medboa){
        res = document.getElementById('medId')
        res.innerHTML = `
        <p>Aluno: ${nome}</p>
        <p>Nota 1: ${n1}</p>
        <p>Nota 2: ${n2}</p>
        <p>Media: ${media}</p>
        <p><strong>Parabéns !</strong></p>
        
        `
    } else if(medruim){
        res = document.getElementById('medId')
        res.innerHTML = `
        <p>Aluno: ${nome}</p>
        <p>Nota 1: ${n1}</p>
        <p>Nota 2: ${n2}</p>
        <p>Media: ${media}</p>
        <p><strong>Se esforce mais</strong></p>
        
        `
    }else{
        console.log("Error!")
    }    
}