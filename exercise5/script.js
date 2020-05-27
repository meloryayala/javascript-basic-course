

let inputTabuada = prompt('Qual tabuala você quer saber?')

let escolha = parseInt(inputTabuada)

for (let contador = 1; contador <= 10; contador++) {

 let equacao= escolha * contador

 document.write(`${escolha} X ${contador} = ${equacao}<br>3
 `)

}
