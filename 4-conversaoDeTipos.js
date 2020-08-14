console.log('Conversao de Tipos')

/* 
  Quando tentamos somar dois números porém em formato de string isso não ocorre
  porque quando possui um dado do tipo string em um dos lados do operador 
  aritmético '+' o mesmo realiza uma concatenação, agora quando se trata dos 
  outros operadores aritméticos será realmente feita uma conversão por baixo 
  dos panos e então trazer o resultado esperado em uma conta de matemática, e 
  se você tentar realizar essas outras operações aritméticas em uma string com 
  algo escrito sem ser númerico e do outro lado por um número seja em string ou 
  não, será visível 'NaN', ou seja, Not a Number.
*/

console.log('ano' + 2020)
console.log('2' + '2')
console.log(parseInt('2') + parseInt('2'))

console.log('10' / '2')
console.log('7' / '2')
console.log('Ricardo' / '2') // NaN: Not a Number

// Números com casas decimais não são declarados com vírgula, e sim com um ponto '.'.
console.log(6.5)

// Imprime 6 e 5.
console.log(6, 5)