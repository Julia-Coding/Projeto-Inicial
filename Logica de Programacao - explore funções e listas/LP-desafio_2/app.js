//Criar uma função que exibe "Olá, mundo!" no console.
function saudacao() {
    console.log('Ola, mundo!');
}

saudacao();


//Criar uma função que recebe um nome como parâmetro e 
//exibe "Olá, [nome]!" no console.

function exibirOlaNome(nome) {
  console.log(`Olá, ${nome}!`);
}

exibirOlaNome("Alice");


//Criar uma função que recebe um número como parâmetro e 
//retorna o dobro desse número.
function calcularDobro(numero) {
    return numero * 2;
}

let resultadoDoDobro = calcularDobro(5);
console.log(resultadoDoDobro);


//Criar uma função que recebe três números como parâmetros
//e retorna a média deles.
function calcularMedia(a, b, c) {
    return (a + b + c) / 3
}

let media = calcularMedia(5, 10, 15)
console.log(media)


//Criar uma função que recebe dois números como parâmetros
// e retorna o maior deles.
function acharMaior(d, e) {
   return d > e ? d : e; //operador ternario
}

let maiorNumero = acharMaior(40, 60);
console.log(maiorNumero);


//Criar uma função que recebe um número como parâmetro
// e retorna o resultado da multiplicação desse número por ele mesmo
function quadrado(g) {
    return (g * g)
}

let resultadoQuadrado = quadrado(5)
console.log(resultadoQuadrado)