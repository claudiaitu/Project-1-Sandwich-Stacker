const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')

const logo = document.getElementById("logo-img")

const kitchenImage = new Image ()
kitchenImage.src = "images/newKitchen.jpg"

const characterImage = new Image()
characterImage.src = "images/FINALcharacter.png"

const stitchAndLiloImage = new Image()
stitchAndLiloImage.src = "images/Reuben-and-Lilo-e1585687285862.avif"

const winningStitch = new Image()
winningStitch.src = "images/happy-625-reuben-day-our-favorite-lazy-yellow-sandwich-boy-v0-qxdcqotubu791.webp"

const themeSong = new Audio()
themeSong.src = "tomp3.cc - Disney Channel  Lilo  Stitch 625 Sandwich Stacker  Main Theme (1).mp3"

const baconImage = new Image() 
baconImage.src = "images/newbacon.png"
baconImage.alt = 1
console.log(baconImage)
console.log(baconImage.alt)

const breadImage = new Image ()
breadImage.src = "images/bread-slice.png"
breadImage.alt = 1
console.log(breadImage)
console.log(breadImage.alt)

const cheeseImage = new Image ()
cheeseImage.src = "images/cheese-slice.png"
cheeseImage.alt = 1
console.log(cheeseImage)
console.log(cheeseImage.alt)

const deliMeatImage = new Image ()
deliMeatImage.src = "images/deli-meat.png"
deliMeatImage.alt = 1
console.log(deliMeatImage)
console.log(deliMeatImage.alt)

const lettuceImage = new Image()
lettuceImage.src = "images/lettuce.png"
lettuceImage.alt = 1
console.log(lettuceImage)
console.log(lettuceImage.alt)

const rottenBreadImage = new Image()
rottenBreadImage.src = "images/rotten-bread.png"
rottenBreadImage.alt = -1
console.log(rottenBreadImage)
console.log(rottenBreadImage.alt)

const rottenCheeseImage = new Image()
rottenCheeseImage.src = "images/rotten-cheese.png"
rottenCheeseImage.alt = -1
console.log(rottenCheeseImage)
console.log(rottenCheeseImage.alt)

const rottenMeatImage = new Image()
rottenMeatImage.src = "images/rotten-meat.png"
rottenMeatImage.alt = -1
console.log(rottenMeatImage)
console.log(rottenMeatImage.alt)

const rottenLettuceImage = new Image()
rottenLettuceImage.src = "images/rotten-lettuce.png"
rottenLettuceImage.alt = -1
console.log(rottenLettuceImage)
console.log(rottenLettuceImage.alt)

const rottenTomatoImage = new Image()
rottenTomatoImage.src = "images/rotten-tomato.png"
rottenTomatoImage.alt = -1
console.log(rottenTomatoImage)
console.log(rottenTomatoImage.alt)

const veggiesImage = new Image()
veggiesImage.src = "images/veggies.png"
veggiesImage.alt = 1
console.log(veggiesImage)
console.log(veggiesImage.alt)

const startingX = canvas.width/2 - 25
const startingY = canvas.height - 100

let foodsIntervalId;
let animationLoopId;

let gameOn = false;

let score= 0;
let ickMeter = 0;


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
        ctx.drawImage(this.image, this.x, this.y, 50, 50)
        // ctx.drawImage(breadImage, this.x, this.y, this.width, this.height)

    }
}

var imageArray = new Array();
imageArray[0] = baconImage; 
imageArray[1] = breadImage;
imageArray[2] = cheeseImage;
imageArray[3] = deliMeatImage;
imageArray[4] = lettuceImage;
imageArray[5] = rottenBreadImage;
imageArray[6] = rottenCheeseImage;
imageArray[7] = rottenMeatImage;
imageArray[8] = rottenLettuceImage;
imageArray[9] = rottenTomatoImage;
imageArray[10] = veggiesImage;



const player = {

    x: startingX,
    y: startingY,
    width: 60,
    height: 130,
    stack: [],
  
    draw: function() {
      ctx.drawImage(characterImage, this.x, 675, 200, 130)
    },

    drawStack: function() {
        for (let i = 0; i < this.stack.length; i++) {
            let stackY = startingY - (50 * i)
            // this.stack[i]
            ctx.drawImage(this.stack[i].image, this.x, stackY, 50, 50)
            // console.log(this.stack[i], "this is our stack element") 
        }
        
    },

    playerY: function() {
        if (player.stack.length === 0) {
            this.y = startingY
        } else { 
            this.y = startingY - (50 * player.stack.length)
        }
    },
  
    moveLeft: function() {
      this.x = this.x - 5
      if (this.x < 0) {
        this.x += 5
      }
    },
  
    moveRight: function() {
      this.x = this.x + 5
    //   console.log(this.x)
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

            if (Number(obstacle.image.alt) > 0) {
                player.stack.push(obstacle)
                obstaclesArray.splice(i, 1)
                // console.log(obstacle.image.alt, "this is alt")
                score += Number(obstacle.image.alt)
                player.y -= 50
                // console.log("Colliding")  

                // console.log(score, "this is the score")
            
            }

            if (Number(obstacle.image.alt) < 0) {
                obstaclesArray.splice(i, 1)
                player.stack.pop()
                ickMeter += Number(obstacle.image.alt)
                console.log("Ick", ickMeter)
            }
    
} 

}


function createObstacle() {
    foodsIntervalId = setInterval(() => {
        console.log(player.stack, "this is the player stack")
        console.log(obstaclesArray)
        obstaclesArray.push(new Obstacles())
    }, 2000)
}

let obstacleTest = new Obstacles() 
// console.log(obstacleTest)

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

    ctx.fillStyle = "red"
    ctx.fillRect(480, 100, 150, 50)
    ctx.fillStyle = "white"
    ctx.font = '18px serif'
    ctx.fillText(`Ick Meter: ${ickMeter}`, 500, 130)
}



function updateCanvas() {
    if (score > 5) {
        gameOver()
        return
    }

    if (ickMeter < -2) {
        gameOver()
        return
    }
    player.playerY() 

    ctx.clearRect(0,0,650,800)

    ctx.drawImage(kitchenImage, 0, 0, 650, 800)

    
    if (player.stack.length > 0) {
        player.drawStack()
    }
    
    player.draw()
    // if (player.stack.length > 0) {
    //     player.drawStack()
    // }
    // player.drawStack()
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
    themeSong.play()

    // ctx.drawImage(characterImage, 400, 700, 200, 100)
}

function gameOver() {
    gameOn = false
    console.log("Game Over")
    
    clearInterval(animationId)
    clearInterval(foodsIntervalId)

    ctx.clearRect(0,0,650,800)
    ctx.fillStyle = '#8FBC8F'
    ctx.fillRect(0,0,650,800)

    if (score > 5) {
        ctx.fillStyle= "white"
        ctx.font = '40px serif'
        ctx.fillText("You Won!!!", 240, 200)
        ctx.drawImage(winningStitch, 170, 250, 300, 300)
    } else {
        console.log("You lose")
        ctx.fillStyle= "white"
        ctx.font = '40px serif'
        ctx.fillText("You Lose! Game Over", 150, 200)
        ctx.drawImage(stitchAndLiloImage, 140, 250, 400, 200)
    }

    obstaclesArray = []
    player.stack = []
    score = 0
    ickMeter = 0

    }



window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        if (gameOn === false) {
        startGame();
    };
    }


document.addEventListener('keydown', e => {

    
    switch (e.keyCode) {
      case 37:
        player.moveLeft();
        // console.log('left', player);
        break;
      case 39:
        player.moveRight();
        // console.log('right', player);
        break;
    } 

    // updateCanvas()
});

}
