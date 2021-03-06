console.log(`Trabalhando com condicionais`)

const idadeComprador = 18
const estaAcompanhada = false
let temPassagemComprada = false
const destino = 'São Paulo'

const listaDestino = new Array(
  'Salvador',
  'São Paulo',
  'Rio de Janeiro'
)

console.log('\nDestinos possíveis')
console.log(listaDestino)

const podeComprar = idadeComprador >= 18 || estaAcompanhada

let destinoExiste = false

let contador = 0

while (contador < listaDestino.length) {
  if (listaDestino[contador] === destino) {
    destinoExiste = true;
    break;
  }
  contador += 1;
}


if (podeComprar && destinoExiste) {
  console.log(`\nBoa viagem! Esperamos que você curta ${destino}`)
}
else if (destinoExiste) {
  console.log(`\nO destino "${destino}" esta disponível para compras"`)
}
else {
  console.log(`\nO destino "${destino}" não esta disponível para compras"`)
}

for (let i = 0; i < listaDestino.length; i++) {
  if (listaDestino[i] === destino) {
    destinoExiste = true
    break
  }
}