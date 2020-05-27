

function exibir() {
    
    let inputName = prompt('Digite seu nome')
    let inputAge = prompt('Qual é a sua idade')

    let age = parseInt(inputAge)

    if(inputName ==='') {
        alert('Preencha os campos corretamente!'),
        document.querySelector('mensagem').innerHTML = ''
    }

    if (age >= 18) {
        age = 'maior'
    } else if (age < 18) {
        age = 'menor'
    }

    document.querySelector('#mensagem').innerHTML = `Olá ${inputName}, você é ${age} de idade`


    if(inputName === 'Thomas Anderson' || inputName === 'thomas anderson') {
        document.querySelector('#mensagemPersonalizada').innerHTML = 'Você é personagem do filme The Matrix!'
    } else if (inputName!== 'Thomas Anderson' || inputName !== 'thomas anderson') {
        document.querySelector('#mensagemPersonalizada').innerHTML = ''
    }


}