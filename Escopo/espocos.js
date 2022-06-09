//Escopo de função
//Variáveis declaradas dentro de funções não são acessadas fora das mesmas

function mostrarCarro(){
  var carro = 'Fusca'
  console.log(carro)
}

mostrarCarro()    //Fusca no console
console.log(carro)//Da erro, carro is not Defined

//Variável Global(Erro)
//Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode acessar em qualquer escopo(global). Isso é um erro
function mostrarCarro(){
  carro = 'Fusca'
  console.log(carro)
}

mostrarCarro()    //Fusca no console
console.log(carro)//Da erro, carro is not Defined


//Escopo de função(Pai)
//Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.
var carro = 'Fusca'

function mostrarCarro(){
  var frase = `Meu carro é um ${carro}`
  console.log(frase)
}

mostrarCarro()
console.log(carro)

//Escopo de bloco
//Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declararmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.
if(true){
  var carr = 'Fusca'
  console.log(carro)
}
console.log(carro)

//{} Cria um bloco
//Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}
{
  var carro = "Fusca"
  const ano = 2018
}

console.log(carro)  //Carro
console.log(ano)    //erro ano is not defined


//Const
//Mantém o escopo de bloco, impede a redeclaração e impede a modificiação do valor da variável, evitando bugs no código.
const mes = 'Maio'
mes = 'Junho'       //erro, tentou modificar o valor
const semana        //erro, declarou sem valor

const data = {
  dia: 17,
  mes: 'Janeiro',
  ano: 2002,
}

data.dia = 29   //funciona
data = 'Janeiro'//erro

//praticando
const frutaEstado = true

console.log(frutaEstado)

const verdura = {
  cor: 'verde',
  tamanho: 'pequeno',
  madura: true,
  telFornecedor: 1199999999,
}
console.log(verdura.cor = 'azul')

//Let
//Mantém o escopo de bloco, impede a redeclaração, mas permite a modificação do valor da variável.
let ano
ano = 2018
ano++
console.log(ano)    //2019

let ano = 2020      //erro, redeclarou a variável 


//praticando
const ana = 'ana'
const julia = ana
const andre = julia
console.log(andre)