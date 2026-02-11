//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa,
//a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos
//como parâmetro.

function calculoIMC(peso, altura) {
    let valorIMC = (peso / (altura * altura));
    return valorIMC;
}

let resultadoIMC = calculoIMC(50, 1.70);
console.log(resultadoIMC);

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function fatorValor(valor1) {
    if (valor1 === 0 || valor1 === 1) {
        return 1;
    }

    let fatorial = 1;
    for (let i =2; i <= valor1; i++) {
        fatorial *= i;
    }

    return fatorial
}

let numero = 5;
let resultadoFator = fatorValor(numero);
console.log(`o fatorial de ${numero} é ${resultadoFator}`)

//Crie uma função que converte um valor em dólar, passado como parâmetro,
//e retorna o valor equivalente em reais. Para isso, considere a cotação 
//do dólar igual a R$4,80.


function convercaoReaisDolar(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar
    return valorEmReais.toFixed(2)
}
let valorEmDolar = 50
let valorEmReais = convercaoReaisDolar(valorEmDolar)
console.log(`$${valorEmDolar} equivalem a R$${valorEmReais}`)


//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular,
//utilizando altura e largura que serão dadas como parâmetro.

function calculoAreaPerimetroRetangulo(altura, largura) {
    let area = altura * largura
    let perimetro = 2 * ( altura + largura)
    console.log(`Area: ${area}m²`)
    console.log(`Perimetro: ${perimetro}`)
}

let altura = 20
let largura = 10
calculoAreaPerimetroRetangulo(altura,largura)

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular,
//utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calculoAreaPerimetroCirculo(raio) {
    let areaCirculo = raio * Math.PI
    let perimetroCirculo = 2 * Math.PI * raio
    console.log(`Area: ${areaCirculo.toFixed(2)}m²`)
    console.log(`Perimetro: ${perimetroCirculo.toFixed(2)}`)    
}

let raio = 5
calculoAreaPerimetroCirculo(raio)


//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function mostrarTabuada (numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * 1;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

//let numero = 7;
//mostrarTabuada(numero);