/*Trabalhando com Dados v2.0 */
// Revisar
const btnClick = () => {
    var name = prompt("Digite seu nome:")
    var resultName = document.getElementById('ifChange');
    resultName.innerHTML = `<p>Olá, <strong>${name}</strong>! É um grande prazer te conhecer!`
}

