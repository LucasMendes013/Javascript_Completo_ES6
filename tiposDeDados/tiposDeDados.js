// Existem 7 tipos de dados
// Todos são primitivos(imutáveis), exceto os objetos.

  var nome = 'Lucas'          //String
  var idade = 20              //Number
  var possuiFaculdade = true  //Boolean
  var time                    //Undefined
  var comida = null           //Null
  var simbolo = Symbol()      //Symbol

//exceto os Objetos, que podemos mutár
  var novoObjeto = {}         //Object



// VAMOS FOCAR NO TIPO TEXTO, SOBRE STRING:
// Existe a possibilidade de verificar o tipo de dado com 'typeof'
console.log(typeof nome, idade, possuiFaculdade, time, comida, simbolo, novoObjeto)
//retorna string

//Existe a possibilidade de somar strings, como se fossem números:
  var sobrenome = 'Mendes'
  var nomeCompleto = nome + ' ' + sobrenome
console.log(nomeCompleto)

//Existe também a possibilidade de somar strings com números:
//Se eu somo um Number com String, o resultado será string
  var nomeEIdade = 'meu nome é ' + nome + ' e tenho ' + idade + ' anos'
console.log(typeof nomeEIdade, nomeEIdade)

  var anoAtualNumber = 2022
  var anoAtualString = '2022'
  var mesAtual = 6
console.log(`Se minha variável for do tipo Number (${anoAtualNumber}), e for somada com o tipo number (${mesAtual}), o resultado é óbvio: ${anoAtualNumber + mesAtual}.`)

console.log(`Mas, se o valor somado for entre Number e String: ${anoAtualString} + ${mesAtual} = ${anoAtualString + mesAtual}, o resultado é concatenado.`) 

//Lembrando que ao usar "", podemos usar '' adentro. 


