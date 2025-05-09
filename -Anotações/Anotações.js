// Alertas e Prompts

window.alert('Minha primeira mensagem!')
window.confirm('Você está gostando do curso?')
window.prompt('Qual é o seu nome?')

// Variáveis
var n1 = parseInt(window.prompt('Digite um número:'))
var n2 = parseInt(window.prompt('Digite outro número:'))
var s = n1 + n2
window.alert('A soma é: ' + s) 

//template string
window.alert(`a soma é: ${s}`) //tem que ser ``

// (number + number) para adição
// (string + string) para concatenação

var n1 = parseInt(window.prompt('Digite um número:'))
var n2 = parseInt(window.prompt('Digite outro número:'))
var n1 = String(n1)
var n2 = String(n2)
var s = n1 + n2
window.alert('Como eu transformei em string o resultado da concatenação é: ' + s) // Concatenação

//Funcionalidades
var s = 'JavaScript'
'Eu estou aprendendo s'     // não faz interpolação
'Eu estou aprendendo' + s   // usa concatenação
'Eu estou aprendendo ${s}'  // usa template string
s.length                    // conta o número de caracteres
s.toUpperCase()             // tudo para 'MAIÚSCULAS'
s.toLowerCase()             // tudo para 'minúsculas' 

var nome = window.prompt("Qual é o seu nome?");
document.write(`Seu nome tem ${nome.length} letras.`);

// Funcionalidades de Números
var n1 = 1543.5

n1.toFixed(2)
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
 
// operadores aritméticos
5 + 2 = 7
5 - 2 = 3
5 * 2 = 10
5 / 2 = 2.5
5 % 2 = 1 // resto da divisão
5 ** 2 = 25 // potência (exponenciação)

n = n + 4
n += 4 // n = n + 4

x = 5
x ++ // x = x + 1 (incrementa 1)
x = 6

// Operadores Relacionais
4 < 5 // menor que
5 > 4 // maior que
5 <= 5 // menor ou igual
5 >= 4 // maior ou igual
5 == 5 // igual
5 != 4 // diferente
5 === 5 // igual e do mesmo tipo
'5' === '5' // diferente e do mesmo tipo
5 !== '5' // diferente e do mesmo tipo

// Operadores Lógicos
! // NÃO (NOT)
&& // E (AND)
|| // OU (OR)
! > && > || // ordem de precedência dos operadores lógicos


//precedencia dos operadores
aritimeticos > relational > logicos

//Operador ternário
var n1 = 5
var n2 = 10
var res = (n1 > n2) ? 'n1 é maior' : 'n2 é maior'
res // 'n2 é maior'

// Selecionar elementos do DOM
window.document.getElementsByTagName()      //Por TAG
window.document.getElementById()            //Por ID
window.document.getElementsByName()         //Por NOME
window.document.getElementsByClassName()    //Por CLASSE
window.document.querySelector()             //Por SELETOR

window.document.querySelector(TAG.ID) // Por ID
window.document.querySelector(TAG#CLASS) // Por CLASSE

var a
a.innerText = 'Exemplo' // texto dentro da tag
a.innerHTML = '<strong>Exemplo</strong>' // texto dentro da tag com formatação HTML

//Eventos DOM
mouseenter = 'mouse entrou'
mouseout = 'mouse saiu'
mousemove = 'mouse se moveu'
mousedown = 'mouse pressionado'
mouseup = 'mouse solto'
click = 'mouse clicado'

//functions
Aula 10

//Pegar horario atual
var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var seg = agora.getSeconds()
var dia = agora.getDate()
var mes = agora.getMonth()






















