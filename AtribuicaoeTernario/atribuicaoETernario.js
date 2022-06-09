//Operadores de Atribuição
//Podem funcionar como formas abreviadas:

var x = 5
var y = 10

x += y  // x = x + y (15)
x -= y  // x = x - y (-5)
x *= y  // x = x * y (50)
x /= y  // x = x / y (0.5)
x %= y  // x = x % y (0)
x **= y // x = x ** y (9765625)


//Operador Ternário
//Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição
//Abreviação de condicionais com if e else

var idade = 19
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber'
console.log(podeBeber)

//condicao ? true : false


//If abreviado
//Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código

var possuiFaculdade = true
if(possuiFaculdade)console.log('possui facul')
else console.log('Não possui faculdade')

//ou
if(possuiFaculdade)
  console.log('Possui faculdade')
else
console.log('Não possui faculdade')



//Exercício
//Some 500 ao valor de scroll abaixo
//atribuindo o novo valor a scroll
var scroll = 100
for(var semScroll = 0; semScroll <= scroll; semScroll++){
  console.log(scroll+= 10)
}

//Atribua true para a variável darCredito, caso o cliente possua carro e casa. E false caso o contrário
var possuiCarro = true
var possuiCasa = true
var darCredito

darCredito = (possuiCarro && possuiCasa)? darCredito = true : darCredito = false

console.log(darCredito)

