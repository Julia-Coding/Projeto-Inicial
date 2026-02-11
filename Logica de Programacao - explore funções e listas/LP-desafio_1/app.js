//Altere o conteúdo da tag h1 com document.querySelector 
// e atribua o seguinte texto: Hora do Desafio.
let exerc = document.querySelector('h1')
exerc.innerHTML = 'Hora do desafio'

//Crie uma função que exiba no console a mensagem O botão 
// foi clicado sempre que o botão Console for pressionado.
function cliqueConsole() {
    console.log('O botao console foi clicado');
}

//Crie uma função que exiba um alerta com a mensagem: 
// Eu amo JS, sempre que o botão Alerta for pressionado.
function cliqueAlerta() {
    console.log('Eu amo JS')
}

//Crie uma função que é executada quando o botão prompt 
// é clicado, perguntando o nome de uma cidade do Brasil. 
// Em seguida, exiba um alerta com a mensagem concatenando
//  a resposta com o texto: Estive em {cidade} e lembrei de você.
function cliquePrompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil')
    alert(`Estive na cidade ${cidade} e lembrei de voce`)
}

//Ao clicar no botão soma, peça 2 números inteiros e exiba 
// o resultado da soma em um alerta.
function cliqueSoma() {
    let numero1 = parseInt(prompt('Digite o primeiro numero'))
    let numero2 = parseInt(prompt('Digite o segundo numero'))
    let soma = numero1 + numero2;
    alert(`A soma entre ${numero1} e ${numero2} é igual a ${soma}`)
}
  