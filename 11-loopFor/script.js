
let opcoes

for (let contador = 2021; contador >= 1900; contador--) {
    opcoes +=`<option>${contador}</option>`
}

document.querySelector('#ano').innerHTML = opcoes




let lista=''

let cliente = ['Paloma', 'Paulo', 'Mina', 'Bata']

for (let contador = 0; contador <= cliente.length-1; contador++) {
    lista += `<li>${cliente[contador]} - ${contador}</li>`
}

document.querySelector('#listaClientes').innerHTML = lista