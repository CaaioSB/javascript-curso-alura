console.log(`Trabalhando com condicionais`)

const idadeComprador = 15
const estaAcompanhada = true
let temPassagemComprada = false

console.log('Destinos possíveis')
const listaDestino = new Array(
  'Salvador',
  'São Paulo',
  'Rio de Janeiro'
)
console.log(listaDestino, '\n')


// if (idadeComprador >= 18) {
//   console.log(`O pacote para ${listaDestino[1]} foi vendido.`)
//   listaDestino.splice(1, 1)
// }
// else if (estaAcompanhada) {
//   console.log(`O pacote para ${listaDestino[1]} foi vendido.`)
//   listaDestino.splice(1, 1)
// }
// else {
//   console.log(`O pacote para ${listaDestino[1]} não foi vendido porque o comprador não possuí idade maior ou igual a 18 e não está acompanhado.`)
// }

if (idadeComprador >= 18 || estaAcompanhada) {
  console.log(`O pacote para ${listaDestino[1]} foi vendido.`)
  temPassagemComprada = true
  listaDestino.splice(1, 1)
}
else {
  console.log(`O pacote para ${listaDestino[1]} não foi vendido porque o comprador não possuí idade maior ou igual a 18 e não está acompanhado.`)
}

console.log(listaDestino)

console.log('\nEmbarque:')
if (idadeComprador >= 18 || estaAcompanhada && temPassagemComprada) {
  console.log('Boa viagem!')
}
else {
  console.log('Você não possui uma passagem comprada, não poderá embarcar.')
}

// console.log(idadeComprador > 18)
// console.log(idadeComprador >= 18)

// console.log(idadeComprador < 18)
// console.log(idadeComprador <= 18)

// console.log(idadeComprador != 18)
// console.log(idadeComprador == 18)
