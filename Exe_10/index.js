//Cálculando média de um aluno v1.0
//onclick é um evento

const btnIniciarOp = () => {
    var name = prompt("Digite o nome do aluno:");
    var n1 = prompt("Digite a primeira nota do aluno:");
    var n2 = prompt("Além  de " + n1 + ", qual outra nota do aluno ?");
    var media = n1 + n2 / 2;

    resultHTML = document.getElementById('mediaId')
    resultHTML.innerHTML = `<p>Aluno: ${name} </p>\n<p>As notas obtidas foram: ${n1} e ${n2}</p>\n<p>A média final será: ${media}</p>` 



}

