console.log(`Trabalhando com listas`)

// const salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioJaneiro = `Rio de Janeiro`

const listaDestino = new Array(
  'Salvador',
  'São Paulo',
  'Rio de Janeiro'
)

listaDestino.push('Rio Grande do Sul')

console.log('Destinos possíveis:')
console.log(listaDestino)

listaDestino.splice(1, 1)

console.log(listaDestino)

console.log(listaDestino[1])
