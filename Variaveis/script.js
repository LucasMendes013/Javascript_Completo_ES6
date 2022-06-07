// As variáveis servem para não ficar repitindo, escrever o código várias vezes o mesmo código é errado, pois o programador procura facilidade.
  var nome = 'lucas'
  var idade = 20
  var fazendoCurso = true
console.log(nome, idade, fazendoCurso)

  var preco = 20
  var quantidade = 5
  var valorFinalDaCompra = preco * quantidade
console.log(`O chocolate custa ${preco} reais e caso você compre ${quantidade} unidades, o valor final será ${valorFinalDaCompra}`)

// Existe a alternativa de criar uma variável usando apenas uma vez seu nome, como vemos abaixo:
  var meuSobrenome = 'mendes', 
  ondeMoro = 'Butantã'
console.log(`Meu nome é ${nome} ${meuSobrenome}, tenho ${idade} anos e moro em São Paulo(${ondeMoro})`)

// Podemos declarar uma variável sem valor, ela retorna o valor undefined, já que ainda não foi definido
  var meuSigno
console.log(meuSigno)
//retorna undefined

//Normalmente variáveis iniciam com:
var $nome
var _nome
var NomeCompleto

//Caso a variável não tenha sido ainda definida:
// console.log(aindaNaoDefini)


// ------ PRÓXIMO ASSUNTO -------
//HOISTING - São movidas para cima do código, porém o valor atribuído não é movido
//O JS lê o código de baixo para cima, então na linha 34, ele tentará exibir o console.log, mas com que valor? Sendo que se ele leu a linha 34, a linha 35 não existe ainda. Ao menos no seu ver
console.log(animal)
  var animal = 'Porquinho da Índia'



// ------- PRÓXIMO ASSUNTO --------
// Uma variável pode ser redeclarada, o que ocorre diariamente na vida de um programador, mas não podemos dizer novamente 'var(ou let)', já que já falamos que ela é uma variável né kkkkk

//Podemos redeclarar uma variável com var e let, mas com const não.
  let minhaComidaPreferida = 'chocolate'
console.log(`Minha comida preferida é ${minhaComidaPreferida} (No dia 06/06)`)
  minhaComidaPreferida = 'sorvete'
  console.log(`Minha comida preferida é ${minhaComidaPreferida} (No dia 07/06)`)

