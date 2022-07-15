//Calculando Idade

const btnClick = () => {
    var ano = prompt("Digite o ano de nascimento: ");
    var res = document.getElementById('result');
    res.innerHTML = `<p>você nasceu em ${ano} e vai completar <strong>${2022 - ano} anos</strong> em 2022</p>`

    


}