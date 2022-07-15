//Qual é maior

const btnClick = () => {
    var n1 = prompt("Digite o primeiro número:");
    var n2 = prompt("DIgite o segundo número:");
    var res = document.getElementById('result');
    if (n1 > n2){        
        res.innerHTML = `${n1} é maior ${n2}`;
    }else if (n1 < n2){        
        res.innerHTML = `${n2} é maior ${n1}`;
    }else{        
        res.innerHTML = `${n1} e ${n2} são iguais`;
    }

}