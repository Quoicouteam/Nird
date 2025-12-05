const canvas = document.getElementById('gameCanvas');
const format2D = canvas.getContext('2d');
const caseSize = 20;
let snake = [{ x: 10 * caseSize, y: 10 * caseSize }];
let food = { x: 5 * caseSize, y: 5 * caseSize };
let direction = 'left'; 
let score = 0;
let intervaleJeu;
let newFoodX, newFoodY;
let directionEstVerrouillee = false;

document.addEventListener('keydown', function(e) {
    if (directionEstVerrouillee) {
        return;
    }

    directionEstVerrouillee = true;

    switch (e.key) {
        case 'ArrowUp':
            if(direction !== 'down'){
                direction = 'up'
            }
            break;
        case 'ArrowDown':
            if(direction !== 'up'){
                direction = 'down'

            }
            break;
        case 'ArrowLeft':
            if(direction !== 'right'){
                direction = 'left'
            }
            break;
        case 'ArrowRight':
            if(direction !== 'left'){
                direction = 'right'
            }
            break;
    }
});

function jeu() {
    directionEstVerrouillee = false;
    const tete = { x: snake[0].x, y: snake[0].y };

    switch (direction) {
        case 'right':
            tete.x = tete.x + caseSize;
            break;
        case 'left':
            tete.x = tete.x -caseSize;
            break;
        case 'up':
            tete.y = tete.y - caseSize;
            break;
        case 'down':
            tete.y = tete.y + caseSize;
            break;
    }
    
    if(tete.x >= canvas.width){
        tete.x = 0;
    }
    else if (tete.x < 0){
        tete.x = canvas.width;
    }

    if(tete.y >= canvas.height){
        tete.y = 0;
    }
    else if (tete.y < 0){
        tete.y = canvas.height;
    }

    for (let i = 1; i < snake.length; i++) {
        if (tete.x === snake[i].x && tete.y === snake[i].y) {
            clearInterval(intervaleJeu);
            alert('Game Over! Score: ' + score);
            return;
        }
    }

    snake.unshift(tete);
    
    if(tete.x === food.x && tete.y === food.y) {
        genererNourriture();
        score ++;
    }
    else {
        snake.pop();
    }

    dessinerJeu();
}

function genererNourriture() {
    let positionValide = false;

    while (!positionValide) {
        const maxGridX = Math.floor(canvas.width / caseSize);
        const maxGridY = Math.floor(canvas.height / caseSize);

        food.x = Math.floor(Math.random() * maxGridX) * caseSize;
        food.y = Math.floor(Math.random() * maxGridY) * caseSize;

        let surLeSerpent = snake.some(segment => segment.x === newFoodX && segment.y === newFoodY);
            if (!surLeSerpent) {
                positionValide = true;
            }
    }
}

function dessinerJeu(){
    format2D.fillStyle = 'black';
    format2D.fillRect(0, 0, canvas.width, canvas.height);

    format2D.fillStyle = 'pink';
    format2D.fillRect(food.x, food.y, caseSize, caseSize);

    format2D.fillStyle = 'cyan';
    snake.forEach(segment => {
        format2D.fillRect(segment.x, segment.y, caseSize, caseSize);
    });
    document.getElementById('score').value = score;

    format2D.fillStyle = 'cyan';
    for (let i = 1; i < snake.length; i++) {
        format2D.fillRect(snake[i].x, snake[i].y, caseSize, caseSize);
    }

    const tete = snake[0];
    format2D.fillStyle = 'cyan';
    format2D.fillRect(tete.x, tete.y, caseSize, caseSize);

    format2D.fillStyle = 'black';
    const eyeSize = 3;
    let eye1_x, eye1_y, eye2_x, eye2_y;

    switch (direction) {
        case 'up':
            eye1_x = tete.x + 4; eye1_y = tete.y + 4;
            eye2_x = tete.x + caseSize - 7; eye2_y = tete.y + 4;
            break;
        case 'down':
            eye1_x = tete.x + 4; eye1_y = tete.y + caseSize - 7;
            eye2_x = tete.x + caseSize - 7; eye2_y = tete.y + caseSize - 7;
            break;
        case 'left':
            eye1_x = tete.x + 4; eye1_y = tete.y + 4;
            eye2_x = tete.x + 4; eye2_y = tete.y + caseSize - 7;
            break;
        case 'right':
            eye1_x = tete.x + caseSize - 7; eye1_y = tete.y + 4;
            eye2_x = tete.x + caseSize - 7; eye2_y = tete.y + caseSize - 7;
            break;
    }
    if (eye1_x) {
        format2D.fillRect(eye1_x, eye1_y, eyeSize, eyeSize);
        format2D.fillRect(eye2_x, eye2_y, eyeSize, eyeSize);
    }
    
}

genererNourriture();
intervaleJeu = setInterval(jeu, 125);