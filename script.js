const numeroSecreto = Math.floor(Math.random() * 11);
let tentativas = 3; 
alert("Bem-vindo ao jogo de adivinhação! O computador escolheu um número entre 0 e 10. Você tem 3 tentativas para adivinhar.");

while (tentativas > 0) {
  let chute = prompt("Digite seu palpite (um número entre 0 e 10):");
  chute = parseInt(chute);

  if (chute === numeroSecreto) {
    alert("Parabéns! Você acertou o número!");
    break;
  } else {
    tentativas--;
    if (tentativas > 0) {
      alert(`Você errou! Você ainda tem ${tentativas} tentativa(s).`);
    } else {
      alert(`Que pena! Suas tentativas acabaram. O número secreto era ${numeroSecreto}.`);
    }
  }
}

alert("Obrigado por jogar! Tente novamente para melhorar sua sorte.");
