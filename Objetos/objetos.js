//OBJETOS
//Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
var pessoa = {
  nome: 'Lucas',
  sobrenome: 'Mendes',
  idade: 20,
  fazFaculdade: true
}

pessoa.nome             //Lucas
pessoa.possuiFaculdade  //true

//Propriedades e métodos são: nome da chave e valor


//MÉTODOS
//É uma propriedade que possui uma função no local do seu valor
//O this menciona o seu pai, no caso do método 'petrímetro', ele menciona seu pai que é o objeto 'quadrado'. Ao invés de ficar escrevendo toda hora 'quadrado', usando o this, referenciamos o pai do método.

//Dentro de um objeto, podemos adicionar essa função, que ao entrar no objeto passa a se chamar método.
var quadrado = {
  lados: 4,
  area: function(lado){
    return lado * lado
  },
  perimetro: function(lado){
    return this.lados * lado
  }
}
//Acessar acima usando o this para pegar uma propriedade já declarada, não faria sentido criar uma variável chamada 'lados' ou 'x' dentro de 'perímetro', já que o programador procura a facilidade em não escrever um código novamente.

quadrado.lados
quadrado.area(5)
quadrado.perimetro(5)

//ABREVIAÇÃO DA CRIAÇÃO DE MÉTODOS:
//Ao invés de ter que colocar toda vez a estrutura      area: function(){}
//Podemos colocar apenas                                area(){}          , retirando o : e function.
var compras = {
  chocolate: 20,
  carrinho1(compra1, compra2){
    return `O valor da primeira compra é ${compra1 + compra2}`
  },
  carrinho2(compra3, compra4){
    return `O valor da primeira compra é ${compra3 + compra4}`
  },
  carrinho3(compra5, compra6){
    return `O valor da primeira compra é ${compra5 + compra6}`
  },
  carrinhoFinal(){
    return `O valor da compra final é o acúmulo de ${this.carrinho1(2,2) + this.carrinho2(4,4) + this.carrinho3(5,5) + this.chocolate}`
  }
}
// console.log(compras.carrinho1(20,20))
// console.log(compras.carrinho2(400,-50))
// console.log(compras.carrinho3(0.1,20))
console.log(compras.carrinhoFinal())



//Organizar o código
//Objetos servem para organizar o código em pequenas partes reutilizáveis.
//Math é um método, acessamos ele com esses exemplos e muitos mais:
Math.PI       //3,14
Math.random() //Número Aleatório

var pi = Math.PI
//console é um objeto, e log é um método 
console.log(pi) //3,14
console.table(compras) //Aparece todo o objeto criado acima mas em forma de tabela


//Dot Notation Get
//Acesse propriedades de um objeto utilizando o ponto .
var menu = {
  window: 800,
  height: 200,
  backgroundColor: '#84e'
}
//Existe também a possibilidade de colocar um objeto dentro de uma váriavel, mesmo após sua criação
var background = menu.backgroundColor



//Dot Notation Set
//Podemos também adicionar propriedades e métodos dentro de objetos sem precisar procura-lo no código: =
//Caso a propriedade já exista, a criação será sobreposta a anteriormente criada, seu valor será atualizado
menu.color = 'blue'
menu.esconder = function(){
  console.log(escondi)
}


//Palavra-Chave this
//this irá fazer uma referência ao próprio objeto.
var height = 120
var menu = {
  width: 200,
  height: 300,
  color(){
    return this.height/2
  }
}
menu.color()    //150



//Protótipo e Herança
//O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo
var menu = {
  height: 800,
}

//hasOwnProperty é uma função de objeto que verifica se existe 'x' propriedade ou método dentro de 'x' objeto
menu.hasOwnProperty('width')  //true
menu.hasOwnProperty('height') //false

//Crie um objeto de um cachorro que represente um labrador, preto, com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'labrador',
  coloracao: 'preto',
  idade: 10,
  caolate(humano){
    if(humano === 'mulher'){
      return('Não sei latir')
    } else {
      return('Eu sei latir')
    }
  },
  nome: 'busan'
}

console.log(cachorro.caolate('mulher'))
