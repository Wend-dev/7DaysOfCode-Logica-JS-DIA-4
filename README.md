# Jogo de Adivinhação

Este é um jogo interativo de adivinhação desenvolvido em **JavaScript**, onde o jogador tenta adivinhar um número escolhido aleatoriamente pelo computador. O jogador tem 3 tentativas para acertar o número secreto, que está no intervalo de 0 a 10.

## Funcionalidades

1. **Número Aleatório**:
   - O número secreto é gerado automaticamente pelo computador usando `Math.random()`.
   - O intervalo do número é configurado de 0 a 10, mas pode ser facilmente alterado no código.

2. **Tentativas Limitadas**:
   - O jogador tem **3 tentativas** para acertar o número secreto.

3. **Mensagens de Feedback**:
   - Mensagens dinâmicas informam se o palpite foi correto, se restam tentativas, ou qual era o número secreto caso todas as tentativas acabem.

4. **Finalização**:
   - Após o término das tentativas ou acerto do número, o jogo encerra com uma mensagem de agradecimento.

## Tecnologias Utilizadas

- **JavaScript**: Linguagem de programação usada para implementar o jogo.
- **Prompt e Alert**: Para interação com o jogador.

## Como Jogar

1. Abra o console do navegador ou um ambiente adequado (como Node.js).
2. Copie e cole o seguinte código:

   ```javascript
   // Gera um número aleatório entre 0 e 10
   const numeroSecreto = Math.floor(Math.random() * 11);
   let tentativas = 3; // Número de tentativas permitidas

   alert("Bem-vindo ao jogo de adivinhação! O computador escolheu um número entre 0 e 10. Você tem 3 tentativas para adivinhar.");

   // Loop para dar as 3 tentativas ao jogador
   while (tentativas > 0) {
     let chute = prompt("Digite seu palpite (um número entre 0 e 10):");
     chute = parseInt(chute);

     if (chute === numeroSecreto) {
       alert("Parabéns! Você acertou o número!");
       break; // Encerra o loop caso o jogador acerte
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
