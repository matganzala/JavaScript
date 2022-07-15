//Contando de 1 a 10

const btnClick = () => {
    let res = document.getElementById('result')
    res.innerHTML += `<h2>Contando de 1 a 10</h2>`
    let cont = 1;
    while(cont < 10){  
        console.log(cont)      
        cont++;
        res.innerHTML += `<p>${cont}<p/>`
    }

        
    
}