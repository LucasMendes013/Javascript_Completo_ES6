//Array
//É um grupo de valores geralmente relacionados, Servem para guardamos diferentes valores em uma única variável

//Acesse um elemento da array usando [n]
var videoGame = ['Switch', 'PS4', 'Xbox']

videoGame[0]
videoGame[2]

//Métodos e propriedades de um array
var videoGame = ['Switch', 'PS4', 'Xbox', '3DS']
videoGame.pop()       //Remove o último item e retorna ele
videoGame.push('3ds') //Adiciona ao final da array
videoGame.length      //3
//Existem diversos outros métodos, como map, reduce, forEach e mais



//For Loop
//Fazem algo repetidamente até que uma condição seja atingida

//EM INICIO: Defina uma variavél de onde o loop deve começar
//EM CONDIÇÃO:Qual a condição eu quero que ocorra para que o inicio continue acontecendo? Na condição o valor de resposta deve ser true para continuar ocorrendo
//EM INCREMENTO: Adicionar ao inicio algo. numero++ = numero = numero + 1

//Caso eu não coloque um incremento, o loop será infinito

//    inicio          condição    incremento
for (var numero = 0; numero < 10; numero++){
  console.log(numero)
}
//Retorna de 0 a 9 no console


//While loop
var i = 0
while (i < 10){
  console.log(i)
  i++
}

//Exemplo
//Break: para a condição
var videoGame = ['Switch', 'PS4', 'Xbox', '3DS']
for(var item = 0; item < videoGame.length; item++){
  console.log(videoGame[item])
  if(videoGame[i] === 'PS4'){
    break;
  }
}

//forEach
//forEach é um método de Array que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays(ou array-like)
//Podemos passar o seguintes valores: item, index, array
var videoGame = ['Switch', 'PS4', 'Xbox', '3DS']
videoGame.forEach(function(item,index){
  console.log(item,index)
})
//O argumento item será atribuido dinamicamente

//Não se confunda com a sintaxe
var frutasComidas = 0
var frutas = 50

//Podemos até mesmo colocar apenas a condição dentro do for, que é o mais importante

for(;frutasComidas <= frutas;) {
  console.log(frutasComidas)
  frutasComidas = frutasComidas + 2
}