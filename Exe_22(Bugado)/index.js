//Multiplas ações
//Bugado, raciocionio certo

const btnClick = () => {
    var res = document.getElementById('result');
    var n1 = prompt("Digite o primeiro valor:");
    var n2 = prompt("Digite o segundo valor: ");
    var choice = prompt("Valores informados: " + n1 + " e " + n2 +"\nO que vamos fazer ?\n[1]Somar\n[2]Subtrair\n[3]Multiplicar\n[4]Divir");
    //var adição = n1 + n2
    //var subtra = n1 - n2
    //var mult = n1 * n2
    //var divisão = n1 / n2

    switch (choice) {
        case 1:
            res.innerHTML = `<p>${n1} + ${n2} = ${n1 + n2}</p>`;
            break
        case 2:
            res.innerHTML = `<p>${n1} - ${n2} = ${n1 - n2}</p>`;
            break
        case 3:
            res.innerHTML = `<p>${n1} x ${n2} = ${n1 * n2}</p>`;
            break
        case 4:
            res.innerHTML = `<p>${n1} / ${n2} = ${n1 / n2}</p>`;
            break
        default:
            res.innerHTML = `<p>OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles.</p>`

    }






}