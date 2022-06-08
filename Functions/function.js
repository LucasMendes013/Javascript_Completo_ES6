//FUNÇÕES
//A função é um bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.

function areaQuadrado(lado) {
  return lado * lado
}

console.log(areaQuadrado(4))
console.log(areaQuadrado(5))
console.log(areaQuadrado(2))

function pi(){
  return 3.14
}
var total = 5 * pi()

//caso coloquemos:
console.log(pi())
//o resultado é o que especificamos em return;

//caso coloquemos:
console.log(pi)
//o resultado será toda a funcao, ela toda aparecera no console.log

// PARÂMETROS E ARGUMENTOS
//Ao criar uma função, você pode definir parâmetros.
//Ao executar uma função, você pode definir argumentos

//peso e altura são os parâmetros
function imc(peso, altura){ // parametros
  const imc = peso / (altura ** 2)
  return imc
}

imc(80, 1.80)   //Argumentos
imc(60, 1.70)   //Argumentos


//Functions com if e else 
//Se dentro da function colocarmos 'return', quando chama-la afora, coloque console.log(corEscolhida()); Se dentro da function ao inves de 'return', colocarmos 'console.log', afora não precisa colocar 'console.log'. Quando usamos um, não precisa usar o outro.
function corEscolhida(cor){
  if(cor === 'Azul'){
    return('A cor é Azul')
  } else if (cor === 'Branco') {
    return('A cor é Branco')
  } else if (cor === 'Amarelo') {
    return('A cor é Amarelo')
  } else {
    return('Cor não cadastrada')
  }
}
console.log(corEscolhida('Amarelo'))

//OU

function corEscolhida(cor){
  if(cor === 'Azul'){
    console.log('A cor é Azul')
  } else if (cor === 'Branco') {
    console.log('A cor é Branco')
  } else if (cor === 'Amarelo') {
    console.log('A cor é Amarelo')
  } else {
    console.log('Cor não cadastrada')
  }
}
corEscolhida('Amarelo')


//Argumentos podem ser funções
//Chamadas de Callback, geralmente são funções que ocorrem após algum evento.
//Essa função 'addEventListener' serve para incluir um evento, no caso colocamos o de click, sempre que a pagina for clicada, exibirá no console('clicou')
addEventListener('click', function() {
  console.log('Clicou')
})
//A função possui dois argumentos
//Primeiro é a string 'click'
//Segundo é uma função anônima
//Funções anônimas são aquelas em que o nome da função não é definido, escritas como      'function(){}'              ou
//        '() => {}' .

//Escrever dessa forma:
addEventListener('click', function(){
  console.log('Oi')
})

//É o mesmo que escrever dessa forma: ; Mas nessa de baixo, ao invés da function ser anônima, colocamos ela fora do argumento do 'AddEventListener' e seu escopo passa a não ser mais anônimo, agora pode ser mencionado.
function exemplo(){
  console.log('Oi')
}
  addEventListener('click', exemplo)


//Pode ou não retornar um valor, mas quando ela retorna, ela só retorna um valor
//Quando não definimos um return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor no return ou não.
function imc(peso, altura){
  const imc = peso / (altura ** 2)
  console.log(imc)
}

imc(80, 1.80)             //retorna o imc
console.log(imc(80,1.80)) //retorna o imc e undefined


//Valores retornados
//Uma função pode retornar qualquer tipo de dados, e até outras funções
//Cuidado, retornar vários tipos de dados em uma mesma função não é uma boa ideia
function terceiraIdade(idade){
    if(typeof idade !== 'number') {       //console.log(terceiraIdade('aaaa'))
      return 'Informe a sua idade!'
  } else if(idade >= 60){                 //console.log(terceiraIdade(60))
    return true
  } else {                                //console.log(terceiraIdade(20))
    return false
  }
}


//ESCOPO
//Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele
//Podemos também colocar afrente do retun um template string
function precisoVisitar (paisesVisitados) {
  var totalPaises = 193
  return `Ainda faltam ${totalPaises - paisesVisitados} países`
}

precisoVisitar(100)

//ESCOPO LÉXICO
//Funções conseguem acessar variáveis que foram criadas no contexto pai
var profissao = 'Designer'

function dados() {
    var nome = 'André'
    var idade = 28
  function outrosDados(){
    var endereco = 'Rio de Janeiro'
    var idade = 29
    return `${nome},${idade},${endereco},${profissao}`
  }
  return outrosDados()
}

console.log(dados())

//HOISTING
//Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória
imc(80, 1.80)

function imc(peso, altura) {
  const imc = peso / (altura ** 2)
  console.log(imc)
}

//EXERCÍCIOS
//Crie uma função para verificar se um valor é Truthy
function verificandoTruthy (truthy) {
  if (truthy == 0){
        console.log('Falsy, 0')
    } else if (truthy === undefined){
        console.log('Falsy, undefined')
    } else if (truthy === null){
    //     console.log('Falsy, null')
    // } else if (truthy === ''){
    //     console.log('Falsy, vazio')
    // } else if (truthy === false){
    //     console.log('Falsy, falso')
    } else if (truthy === NaN){
        console.log('Falsy')
    } else {
        console.log('A informação é verdadeira, Truthy!!')
    }
}
verificandoTruthy()

