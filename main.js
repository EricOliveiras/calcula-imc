const botao = document.getElementById('botao')

function calculaImc() {
    const nome = document.getElementById('nome').value
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value
    const paragrafo = document.getElementById('paragrafo')
    
    parseFloat(peso)
    parseFloat(altura)
    
    const imc = peso / (Math.pow(altura, 2))
    
    if(imc < 18.5) {
        paragrafo.innerHTML = `${nome}, seu imc é de ${Math.round(imc)}. Você está abaixo do peso ideal.` 
    } else if(imc >= 18.5 && imc <= 24.9) {
        paragrafo.innerHTML = `${nome}, seu imc é de ${Math.round(imc)}. Você está com o peso ideal.` 
    } else if(imc > 24.9 && imc <= 29.9) {
        paragrafo.innerHTML = `${nome}, seu imc é de ${Math.round(imc)}. Você está com sobrepeso.` 
    } else if(imc > 29.9 && imc <= 39.9) {
        paragrafo.innerHTML = `${nome}, seu imc é de ${Math.round(imc)}. Você está com obesidade.` 
    } else {
        paragrafo.innerHTML = `${nome}, seu imc é de ${Math.round(imc)}. Você está com obesidade mórbida.`
    }
}

botao.addEventListener('click', (e) => {
    e.preventDefault()
    calculaImc()
})