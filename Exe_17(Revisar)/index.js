//Interagindo com sistema

const btnClick = () => {
    var atual = new Date;
    var res = document.getElementById('result')
    res.innerHTML = `<p>No momento são:<strong> ${atual}</strong></p>`


}