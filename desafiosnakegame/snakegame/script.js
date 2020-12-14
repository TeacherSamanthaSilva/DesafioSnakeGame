let canvas = document.getElementById("Snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake [0] = {
    x: 8 * box, 
    y: 8 * box
}

let food =  {

    x: Math.floor(Math.random() * 15 + 1 ) * box,
    y:Math.floor(Math.random() * 15 + 1 ) * box

}

let direction = "right";
function criarBG(){
    context.fillStyle ="lightgreen";
    context.fillRect(0,0,16 * box,16 * box);
}

function criarCobrinha(){

    for (let index = 0; index < snake.length; index++) {
    
        context.fillStyle = "green";
        context.fillRect(snake);
    }

}

function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x,food.y,box,box);
}

document.addEventListener('keydown',update);
function update(event){

    if(event.keycode == 37 && direction != "right"){

        direction = "left";

    }

    if(event.keycode == 38 && direction != "down"){
        direction = "up";
    }

    if(event.keycode == 39 && direction != "left"){
        direction = "right";
    }

    if(event.keycode == 40 && direction != "up"){
        direction = "down";
    }
    

}

function iniciarjogo(){

    for (let index = 0; index < snake.length; index++) {
        if(snake[0].x == snake[index].x && snake[0].y == snake[index].y){
            clearInterval(jogo);
            alert('Game Over');
        }
        
    }

    if(snake[0].x > 15 * box && direction == "right"){
        snake[0].x = 0;
    }
    if(snake[0].x < 0   && direction == "left"){
        snake[0];x = 16 * box;
    }

    if(snake[0].y > 15 * box && direction == "down"){
        snake[0];x = 0;
    }

    if(snake[0].y< 0   && direction == "up"){
        snake[0].y = 16 * box;
    }

    criarBG();
criarCobrinha();

let SnakeX = snake[0].x;
let SnakeY = snake[0].y;

if(direction == "right"){
    SnakeX +=box;
}

if(direction == "left"){
    SnakeX -= box;
}

if(direction == "up"){
    SnakeY -= box;
}

if(SnakeY == "down"){
    SnakeY += box;
}

if(SnakeX != food.x || SnakeY != food.y){
    snake.pop();   
} else{
  food.x = Math.floor(Math.random() * 15 + 1 ) * box,
  food.y = Math.floor(Math.random() * 15 + 1 ) * box
}



let newHead = {
    x:SnakeX,
    y:SnakeY
}

snake.unshift(newHead);

}

let jogo = setInterval(iniciarjogo,100);

