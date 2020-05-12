

let inputNota1 = prompt('Digite a primeira nota') 

let inputNota2 = prompt('Digite a segunda nota')

let nota1 = parseInt (inputNota1)
let nota2 = parseInt (inputNota2)

let media = (nota1 + nota2) / 2

let mediaMinima = 7

if(media >= mediaMinima) {
    document.write('Ok, passou de ano!')
} else if (media < mediaMinima) {
    document.write('Ops, Você não passou de ano!')
}

document.write('<br>')

if(media >= mediaMinima && media === 10) {
    document.write('Nossa você foi muito bem, continue assim!')
} else if(media >= mediaMinima && media === 9) {
    document.write('Você mandou bem, mas pode melhorar mais, vamos tentar o dez?')
} else if(media >= mediaMinima && media===8) {
    document.write('Você está se saindo bem, mas pode melhorar ainda mais!')
}

if(media)





console.log(media)