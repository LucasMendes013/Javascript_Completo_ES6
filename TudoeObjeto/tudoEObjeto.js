//TUDO É OBJETO

//String - também possuem métodos e propriedades
//Strings, numbers, boolean, objetos e mais, possuem propriedades e métodos. Por isso são objetos.
//Uma string herda propriedades e métodos do constructor String()
var nome = 'Lucas'

nome.length       //5     //length diz o total de caracteres 
nome.charAt(0)     //L      //Retorna exatamento o que está na posição especificada ex: nome.charAt(5), retorna s, pois é a quinta letra da string. Sempre começa por 0
nome.replace('lu', 'lus')    //luscas        //Ele troca, o que está escrito, pelo o que quero trocar
nome              //


var elefante = 'Pequeno'

console.log(elefante.length)                    
console.log(elefante.charAt(0))
console.log(elefante.replace('Pequeno','Grande'))
console.log(elefante.toLowerCase())    //torna os caracteres de string minusculos
console.log(elefante.toUpperCase())    //torna os caracteres de string maisculos

//Números - também possuem métodos e propriedades
var altura = 1.7

altura.toString() //torna o tipo number em string
altura.toFixed()  //Arredonda o número quebrado


//Funções - também possuem métodos e propriedades
function areaQuadrado(lado) {
  return lado * lado
}

areaQuadrado.toString()
//Retorna:
//function areaQuadrado(lado) {
//  return lado * lado
//}

areaQuadrado.length

//exercicio
//Criei uma var para armazenar a informação de que peguei a class .btn por JS, assim sempre que eu for usar esse dado armazenado, coloco btn.(parametro ou metodo).
var btn = document.querySelector('.btn',)
btn.addEventListener('click', function(){
  console.log('cliccado')
})
btn.classList.add('azul')   //Adiciona a classe azul 
btn.innerText

//Nomeie 3 propriedades ou métodos de strings
var nome = lucas
lucas.addEventListener
lucas.splice
lucas.length

