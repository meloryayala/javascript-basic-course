

let name = prompt ('Digite seu nome')

let age = prompt ('Qual é a sua idade?')


if (age < 18 ) {
    document.write(`Olá ${name}, Você é menor de idade! `)
} else if (age >= 18) { 
    document.write(`Olá ${name}, você é maior de idade!`)
}

if (name === 'Thomas Anderson' || name === 'thomas anderson') {
    document.write('Você é personagem do filme The Matrix! ')
}