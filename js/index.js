const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')

const logo = document.getElementById("logo-img")

const kitchenImage = new Image ()
kitchenImage.src = "../images/kitchen.jpg"

const characterImage = new Image()
characterImage.src = "../images/FINALcharacter.png"

const baconImage = new Image() 
baconImage.src = "../images/bacon.png"

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

// let intervalId;
// let animationId;

// let gameOn = false;

// let score= 0;


// class Obstacles {
//     constructor() {
//         this.x = Math.random() * 800,
//         this.y = 0,
//         this.width = 20 + Math.floor(Math.random() * 350)
//         this.height = 20
//     }
    
//     newPosition() {
//         this.y++
//     }
// }

const player = {

    x: startingX,
    y: startingY,
    // width: 50,
    // height: 100,
  
    draw: function() {
      ctx.drawImage(characterImage, this.x, this.y, 200, 100)
    },
  
    moveLeft: function() {
      this.x = this.x - 5
    },
  
    moveRight: function() {
      this.x = this.x + 5
      console.log(this.x)
      if (this.x > canvas.width) {
        this.x -= 20
      }    },
}

// function animationLoop() {
//     intervalId = setInterval(() => {
        
//     })
// }

function updateCanvas() {
    ctx.clearRect(0,0,650,800)

    ctx.drawImage(kitchenImage, 0, 0, 650, 800)

    player.draw()
}


function startGame() {
    console.log("Starting")

    // gameOn = true
    // player.x = startingX
    // player.y = startingY
    // CSSTransition.draw


    // // logo.style.visibility = "hidden"
    // // logo.style.height = "0px"
    // canvas.width = "650"
    // canvas.height = "800"
    // canvas.style.visibility = "visible"

    ctx.drawImage(kitchenImage, 0, 0, 650, 800)
    player.draw()
    // animationLoop() 
    // ctx.drawImage(characterImage, 400, 700, 200, 100)
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
