alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 8;
console.log(numeroSecreto);
let chute = prompt('Escolha um núumero entre 1 e 10');
console.log(chute);
//se o chute for igual ao numero secreto
if (numeroSecreto == chute) {
    alert(`Isso ai! Acertou o número secreto! ${numeroSecreto}`);
} else {
    alert(`Numero errado, tente novamente`);
}
