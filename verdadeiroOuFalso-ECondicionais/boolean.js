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
10 == 10      //true     //Pois 10 é igual a dez e igual nos numbers
10 === '10'   //false    //Pois 10 é igual a dez, mas diferente de number para string
10 === 10     //true     //Pois 10 é igual a dez e igual nos numbers
10 != 15      //true     //Pois 10 é diferente de 15(não compara os tipos de dados)
10 != '10'    //false    //Pois 10 é é igual a 10 mas diferente nos tipos de dados
10 !== '10'   //true     //Pois 10 é estritamente diferente nos tipos de dados(mas igual nos numero 10 e 10)


//Operadores Lógicos: &&
//O operador lógico & sempre retorna falso caso na comparação haja algum falso, caso não tenha, retornará o ultimo valor true:
true && true        //true
true && false       //false
false && true       //false
'Gato' && 'Cão'     //'Cão'
(5 - 5) && (5 + 5)  //0       //Retorna 0 pois 0 é false como citado acima
'Gato' && false     //false   //Retorna false pois 'gato' é uma string, e strings por não serem vazio('') retornam false
(5 >= 5) && (3 < 6) //true

//Exemplos: Retorna true
if((10 - 5) && (20 - 5)) {
  console.log('O valor é verdadeiro')
} else {
  console.log('O valor é falso')
}

//Operador lógico || ou:
//Retorna o primeiro valor true que encontrar
true || true          //true
true || false         //true
false || true         //true  
'Gato' || 'Cão'       //'Gato'
(5 - 5) || (5 + 5)    //10
'Gato' || false       //Gato
(5 >= 5) || (3 < 6)   //true



//SWITH
//Com o switch, você pode verificar se uma variável é igual à diferentes valores usando case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira

var corFavorita = 'azul'

switch(corFavorita){
  case 'azul':
    console.log('A cor é azul')
    break;
  case 'vermelho':
    console.log('A cor é vermelho')
    break;
  case 'amarelo':
    console.log('A cor é amarelo')
    break;
  case 'branco':
    console.log('A cor é branco')
    break;
  case 'preto' :
    console.log('A cor é preto')
    break;  
  default: 
    console.log('Nenhuma cor')
}

//EXERCICIOS
//Verifique se a sua idade é maior do que a de algum parente
//Dependendo do resultado coloque no console 'É maior', 'é igual' ou 'é menor
var idadeMinhaExemplo = 20
var idadeMaeExemplo = 30

if(idadeMinhaExemplo > idadeMaeExemplo){
  console.log('Idade maior que da minha mae')
} else if ( idadeMinhaExemplo = idadeMaeExemplo) {
  console.log('Idade igual a da minha mãe')
} else {
  console.log('Idade menor que da minha mae')
}

//Qual valor é retornado na seguinte expressão:
var expressao = (5 - 2) && (5 - ' ') && (5 - 2)
  console.log(expressao)

//Verifique se as seguintes variáveis são Truth ou Falsy
var nome = 'Lucas'
var idade = 28
var possuiFaculdade = false
var empregoFuturo
var dinheiroNaConta = 0
//Lembrando que o !! faz uma verificação booleana
  console.log(
    !!nome,           //true
    !!idade,          //true  
    !!possuiFaculdade,//false
    !!empregoFuturo,  //false
    !!dinheiroNaConta //false
    )

//O que aparecerá no console? //Apareça 'Condicao Falsa'
if(('Gato' === 'gato') && (5 > 2)){
  console.log('Condição Verdadeira')
} else {
  console.log('Condição Falsa')
}

//O que aparecerá no console? //Apareça 'Condicao Verdadeira'
if(('Gato' === 'gato') || (5 > 2)){
  console.log('Gato' && 'Cão')      //Nesse caso, ambas são verdadeira, por serem strings com informações acima de 0, e como são ambas verdadeiras, a ultima verdadeira é a que aparece: 'Cão', é true
} else {
  console.log('Condição Falsa')
}


