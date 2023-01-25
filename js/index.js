const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')

const logo = document.getElementById("logo-img")

const kitchenImage = new Image ()
kitchenImage.src = "../images/newKitchen.jpg"

const characterImage = new Image()
characterImage.src = "../images/FINALcharacter.png"

const baconImage = new Image() 
baconImage.src = "../images/newbacon.png"
baconImage.alt = "rotten"
console.log(baconImage)
console.log(baconImage.alt)

const breadImage = new Image ()
breadImage.src = "../images/bread-slice.png"

const cheeseImage = new Image ()
cheeseImage.src = "../images/cheese-slice.png"

const deliMeatImage = new Image ()
deliMeatImage.src = "../images/deli-meat.png"

const lettuceImage = new Image()
lettuceImage.src = "../images/lettuce.png"

const rottenBreadImage = new Image()
rottenBreadImage.src = "../images/rotten-bread.png"

const rottenCheeseImage = new Image()
rottenCheeseImage.src = "../images/rotten-cheese.png"

const rottenMeatImage = new Image()
rottenMeatImage.src = "../images/rotten-meat.png"

const rottenLettuceImage = new Image()
rottenLettuceImage.src = "../images/rotten-lettuce.png"

const rottenTomatoImage = new Image()
rottenTomatoImage.src = "../images/rotten-tomato.png"

const veggiesImage = new Image()
veggiesImage.src = "../images/veggies.png"

const startingX = canvas.width/2 - 25
const startingY = canvas.height - 125

let foodsIntervalId;
let animationLoopId;

// let gameOn = false;

let score= 0;


class Obstacles {
    constructor() {
        this.x = Math.random() * 400,
        this.y = 0,
        this.width = 50
        this.height = 50
        this.image = imageArray[Math.floor(Math.random() * imageArray.length)] 
    }
    
    newPosition() {
        this.y++
    }

    draw() {
        ctx.drawImage(this.image.src, this.x, this.y, 50, 50)
        // ctx.drawImage(breadImage, this.x, this.y, this.width, this.height)

    }
}

var imageArray = new Array();
imageArray[0] = {src: baconImage, 
                        points: -1};
// imageArray[1] = breadImage;
// imageArray[2] = cheeseImage;
// imageArray[3] = deliMeatImage;
// imageArray[4] = lettuceImage;
// imageArray[5] = rottenBreadImage;
// imageArray[6] = rottenCheeseImage;
// imageArray[7] = rottenMeatImage;
// imageArray[8] = rottenLettuceImage;
// imageArray[9] = rottenTomatoImage;
// imageArray[10] = veggiesImage;



const player = {

    x: startingX,
    y: startingY,
    width: 60,
    height: 130,
    stack: [],
  
    draw: function() {
      ctx.drawImage(characterImage, this.x, this.y, 200, 130)
    },
  
    moveLeft: function() {
      this.x = this.x - 5
      if (this.x < 0) {
        this.x += 5
      }
    },
  
    moveRight: function() {
      this.x = this.x + 5
      console.log(this.x)
      if (this.x + 200 > canvas.width) {
        this.x -= 5
      }    },
}

// function animationLoop() {
//     intervalId = setInterval(() => {
        
//     })
// }
let obstaclesArray = []

function checkCollision (obstacle, i) {
    
    if (player.y < obstacle.y + + obstacle.height 
        && obstacle.y < player.y + player.height 
        && obstacle.x < player.x + player.width 
        & obstacle.x + obstacle.width > player.x) {
            if (obstacle.image.points > 0) {
                player.stack.push(obstacle)
                obstaclesArray.splice(i, 1)
                score++
                console.log("Colliding")  
            }
} 

}


function createObstacle() {
    foodsIntervalId = setInterval(() => {
        console.log(player.stack, "this is the player stack")
        console.log(obstaclesArray)
        obstaclesArray.push(new Obstacles())
    }, 2500)
}

let obstacleTest = new Obstacles() 
console.log(obstacleTest)

function animationLoop() {
    animationId = setInterval(() => {
        updateCanvas()
    }, 11)
}

function showScore() {
    ctx.fillStyle = "#1E90FF"
    ctx.fillRect(480, 10, 150, 75)

    ctx.fillStyle = "white"
    ctx.font = '18px serif'
    ctx.fillText(`Score: ${score}`, 500, 50)
}



function updateCanvas() {
    ctx.clearRect(0,0,650,800)

    ctx.drawImage(kitchenImage, 0, 0, 650, 800)

    
    
    player.draw()
    obstaclesArray.forEach((currentElement, i) => {
       
        checkCollision(currentElement, i) 
        currentElement.draw() 
        currentElement.y += 1
        
    })
    
    showScore()
}


function startGame() {
    console.log("Starting")

    gameOn = true
    // obstaclesArray = []
    player.x = startingX
    player.y = startingY
    CSSTransition.draw


    // // logo.style.visibility = "hidden"
    // // logo.style.height = "0px"
    // canvas.width = "650"
    // canvas.height = "800"
    // canvas.style.visibility = "visible"

    ctx.drawImage(kitchenImage, 0, 0, 650, 800)
    player.draw()
    showScore()
    animationLoop() 
    createObstacle()
    // ctx.drawImage(characterImage, 400, 700, 200, 100)
}

function gameOver() {
    gameOn = false
    console.log("Game Over")
    
    clearInterval(animationId)
    clearInterval(foodsIntervalId)

    ctx.clearRect(0,0,650,800)
    ctx.fillStyle = 'grey'
    ctx.fillRect(0,0,650,800)

    if (score > 9) {
        ctx.fillStyle= "white"
        ctx.font = '40px serif'
        ctx.fillText("You Won!!!", 150, 200)
    } else {
        ctx.fillStyle= "white"
        ctx.font = '40px serif'
        ctx.fillText("You Lose! Game Over", 150, 200)
    }

    // obstaclesArray = []
    // score = 0

    }






window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        // if (gameOn === false) {
        startGame();
    };



document.addEventListener('keydown', e => {
    switch (e.keyCode) {
      case 37:
        player.moveLeft();
        console.log('left', player);
        break;
      case 39:
        player.moveRight();
        console.log('right', player);
        break;
    } 

    updateCanvas()
});

}
