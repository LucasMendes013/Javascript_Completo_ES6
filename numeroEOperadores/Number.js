// Existem 7 tipos de dados
// Todos são primitivos(imutáveis), exceto os objetos.

  var nome = 'Lucas'          //String
  var idade = 20              //Number --------------------------------------
  var possuiFaculdade = true  //Boolean
  var time                    //Undefined
  var comida = null           //Null
  var simbolo = Symbol()      //Symbol

//exceto os Objetos, que podemos mutár
  var novoObjeto = {}         //Object



// VAMOS FOCAR NO TIPO NÚMERO, SOBRE NUMBER:
  var inteiro = 13
  var pi = 3.14           //ponto para decimal
  var exponencial = 2e10  //200000000



//Operadores Aritméticos
  var soma = 100 + 50           //150
  var subtracao = 100 - 50      //50
  var multiplicacao = 100 * 50  //500
  var divisao = 100 / 50        //2 
  var exponente = 2 ** 4     //16
console.log(soma + subtracao + multiplicacao + divisao + exponente)
//O operador modulo serve como a divisão mas arredonda o número, abaixo o resultado seria 1,92223234435, mas ao invés de aparecer esse número, será 2
  var modulo = 100 % 52         //2


//Operadores Aritméticos em Strings 
  var somaString = '100' + 50           //10050
  var subtracaoString = '100' - 50      //50
  var multiplicacaoString = '100' * '50'  //500 
  var divisaoString = '100' / 50        //2
  var exponenteString = 'Comprei 2' ** 4     //NaN (Not a Number)
console.log(exponenteString)


//A ordem importa 
//Sua ordem é multiplicaçao, divisão, depois soma e depois subtração (parenteses é sempre o primeiro)
  var total1 = 20 + 5 * 2
  var total2 = (20 + 5) * 2
  var total3 = 20 / 2 * 5
  var total4 = 10 + 10 * 2 + 20 / 2


//Operadores Aritiméticos Unários
  var incremento = 5
  var incremento2 = 5
//O incremento declarado dessa forma, no final da variável, indica que após o JS ler o programa, será adicionado, ou seja:
console.log(incremento++)   // Aqui aparece:     5
console.log(incremento)     // Já aqui aparece:  6

//O incremento declarado no início da variável, indica que antes do JS ler o 'incremento2', fará o incremento
console.log(++incremento2)  // Aqui aparece:     5
console.log(incremento2)    // Já aqui aparece:  6

  var descremento = 5
  var descremento2 = 5
console.log(descremento--)  //5
console.log(descremento)    //4

console.log(--descremento2) //4
console.log(descremento2)   //4

//O + e - tenta transformar uma string em número:
  var fraseologia = 'Testando'
  +fraseologia     //NaN
  -fraseologia     //NaN

  var minhaIdade1 = '20'
  var somaIdade = 5
  // +minhaIdade1                 //20
  // -minhaIdade1                 //-20
//Mesmo minhaIdade1 sendo string, por adicionar + em seu inicio da operação, terá seu tipo transformado em number positivo, caso tivesse - no inicio, seria transformado em number também, mas negativo
console.log(+minhaIdade1 + somaIdade)  //25




//EXERCICIO:

// Criar duas expressções que retornam NaN
  var NotANumber = 'string'
  var somaNotANumber = NotANumber / idade
console.log(somaNotANumber)

  var NotANumber2 = 'string2'
  var somaNotANumber2 = NotANumber2 * idade
console.log(somaNotANumber2)


//Como dividir o peso por 2?
  var number = '80' / 2
  var unidade = 'kg'
  var peso = number + unidade     //80kg
console.log(peso)



