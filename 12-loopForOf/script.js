


let clientes = [
    {
        nome:'Meli',
        idade: 25,
        linguagens: ['javascript', 'css', 'html']
    },
    {
        nome:'Fulano',
        idade: 30,
        linguagens: ['php', 'c++', 'c#']
    },
    {
        nome:'Ciclano',
        idade: 45,
        linguagens: ['python', 'go', 'closure']
    }
]


/*for ( let contador = 0; contador < clientes.length; contador++) {
    console.log(clientes[contador].name)
}
*/


let htmlClientes = ''

/*
for ( let cliente of clientes) {
    console.log(cliente.nome)
}
*/


for (let cliente of clientes) {

    let listaLinguagens =''

    for (let linguagem of cliente.linguagens) {
        listaLinguagens += `<li>${linguagem}</li>`
    }

    htmlClientes += `
    <li></li>
        <b>Nome:</b> ${cliente.nome}<br>
        <b>Idade:</b>${cliente.idade}<br>
        <b>Habilidades:</b><br>
        <ul>
            ${listaLinguagens}
        </ul>
        </li>
    `
}

document.querySelector('#listaClientes').innerHTML = htmlClientes
