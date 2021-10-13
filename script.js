let order = [];
let clickedOrder = []; // Esta é a ordem dos cliques
let score = 0; // Contagem dos scores

// Lógica de cores
// 0 = verde (green)
// 1 = vermelho (red)
// 2 = amarelo (yellow)
// 3 = azul (blue)

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// função para gerar a ordem aleatória da sequência de cores
// Math.floor para arrendodar o número sorteado
// Math.random para multiplicar por quatro.

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for( let i in order ) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// Acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout (() => {
        element.classList.add('selected');
    }, number - 250);  // o tempo que a luz aparece

    setTimeout(() => {
        element.classList.remove('selected');
    });
}

// Verifica se os botões clicados são os mesmos da ordem gerada
let checkOrder = () => {
    for ( let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert (`Pontuação: ${score}\nVocê acertou! Inicciando próximo nível!`);
        nextLevel();
    }
}

// Clique do usuário = user click
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout (() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250)
}

// Retorna a cor = Return the color
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

// Próximo nível do jogo = next level of the game
 let nextLevel = () => {
     score++;
     shuffleOrder();
 }

 // Game over
 let gameOver = () => {
     alert (`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
     order = [];
     clickedOrder = [];

     playGame();
 }

 // Inicio do jogo = beginning of the game
 let playGame = () => {
     alert (`Bem vindo ao Gênesis! Iniciando um novo jogo!`);
     score = 0;

     nextLevel();
 }

 // eventos de clique para as cores = click events for colors

//  green.addEventListener('click', click(0));
//  red.addEventListener('click', click(1));
//  yellow..addEventListener('click', click(2));
//  blue..addEventListener('click', click(3));

 green.onclick = () => click(0);
 red.onclick = () => click(1);
 yellow.onclick = () => click(2);
 blue.onclick = () => click(3);

 // inicio do jogo = beginning of the game
 playGame();