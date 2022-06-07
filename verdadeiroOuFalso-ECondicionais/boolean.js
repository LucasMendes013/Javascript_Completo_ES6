// Existem 7 tipos de dados
// Todos são primitivos(imutáveis), exceto os objetos.

  var nome = 'Lucas'          //String
  var idade = 20              //Number
  var possuiFaculdade = true  //Boolean ----------------------------
  var time                    //Undefined
  var comida = null           //Null
  var simbolo = Symbol()      //Symbol

//exceto os Objetos, que podemos mutár
  var novoObjeto = {}         //Object


// FOCO EM VERDADEIRO OU FALSO, O TIPO BOOLEAN:
  var tenhoFaculdade = true
  var tenhoMestrado = false
//Condicionais com If e Else
// O valor dentro dos parenteses (if ()), sempre será avaliado em false ou true
  if(tenhoFaculdade){
    console.log('Possui faculdade')
  } else {
    console.log('Não possui faculdade')
  }

//O mesmo código poderia ser reformulado da seguinte forma: ( que tem a semântica contrária da posterior )
  if(tenhoFaculdade == false){
    console.log('Possui faculdade')
  } else {
    console.log('Não possui faculdade')
  }

//Um caso também interessante é sobre a atribuição de um valor dentro de uma Condicional, caso especificado dentro dela (if ou/e else), não cria-la fora, dará como Undefined, mas caso contrário(seja, estipulado o valor fora), funcionará:
  var valorFicticio
  if(tenhoFaculdade){
    console.log('Possui faculdade')
    valorFicticio = 1
  } else {
    console.log('Não possui faculdade')
    valorFicticio = 2
  }
console.log(`O valor foi de ${valorFicticio}`)

//Temos também a disponibilidade do else if: 
// Else if, é como um segundo if, um 'senão', e após ele ser dado como true, o que está abaixo não é nem lido.
//Importante lembrar que inserindo Else if, o final da Condicional sempre deve ser else, apenas else
  var valorDeMedia = 10
  if (valorDeMedia >= 6){
    console.log(`Parabéns! Sua nota foi boa: ${valorDeMedia}`)
  } else if (valorDeMedia >= 5){
    console.log(`Ok, passou raspando média de: ${valorDeMedia}`)
  } else {
    console.log(`Infelizmente você não passou... Sua média é de ${valorDeMedia}`)
  }




//Truthy e Falsy
//Existem formas que retornam true e formas que retornam false, as que retornam false:
//Falsy
  if(false){        //Retornar como falso ( false )

  }
  if(0){            //Retornar como falso ( zero )

  }
  if(NaN){          //Retornar como falso ( Não é um número )

  }
  if(null){         //Retornar como falso ( Nulo )

  }
  if(undefined){    //Retornar como falso ( Indefinido )

  }
  if(''){           //Retornar como falso ( Vazio )

  }

//Tudo que existir exceto essas condiciões acima, são Truthy(true)
//Exemplo de como usar as Condicionais Falsy:
  var meuNome1 = false            //Retornar como falso ( false )
  var meuNome2 = 5 - 5            //Retornar como falso ( zero )    
  var meuNome3 = 'string' - 20    //Retornar como falso ( Não é um número )
  var meuNome4 =  null            //Retornar como falso ( Nulo )
  var meuNome5                    //Retornar como falso ( Indefinido )
  var meuNome6 = ''               //Retornar como falso ( Vazio )

//Operador Lógico de Negação: (!)
//O Operador Lógico !, nega uma operação booleano. Ou seja, !true é igual a false:
if(!true)       //false
if(!1)          //false
if(!'')         //true
if(!undefined)  //true
if(!!' ')       //true
if(!!'')        //false

//Operadores de Comparação
//Vão sempre retornar em valor booleano
10 > 5      //true
10 < 5      //false
10 <= 5     //false
10 >= 5      //true

//Operadores de comparação
//O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dados deve ser o mesmo quando usamos ===

10 == '10'    //true     //Pois 10 é igual a dez (levando em consideraçao )
10 == 10      //
10 === '10'   //
10 === 10     //
10 != 15      //
10 != '10'    //
10 !== '10'   //






