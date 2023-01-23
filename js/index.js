const canvas = document.getElementById("my-canvas")
const ctx = canvas.getContext('2d')

const logo = document.getElementById("logo-img")

const kitchenImage = new Image ()
kitchenImage.src = "/images/images/kitchen.jpg"

const characterImage = new Image()
characterImage.src = "/images/images/character.png"

const baconImage = new Image() 
baconImage.src = "/images/images/bacon.png"

const breadImage = new Image ()
breadImage.src = "/images/images/bread-slice.png"

const cheeseImage = new Image ()
cheeseImage.src = "/images/images/cheese-slice.png"

const deliMeatImage = new Image ()
deliMeatImage.src = "/images/images/deli-meat.png"

const lettuceImage = new Image()
lettuceImage.src = "/images/images/lettuce.png"

const rottenBreadImage = new Image()
rottenBreadImage.src = "/images/images/rotten-bread.png"

const rottenCheeseImage = new Image()
rottenCheeseImage.src = "/images/images/rotten-cheese.png"

const rottenMeatImage = new Image()
rottenMeatImage.src = "/images/images/rotten-meat.png"

const rottenLettuceImage = new Image()
rottenLettuceImage.src = "/images/images/rotten-lettuce.png"

const rottenTomatoImage = new Image()
rottenTomatoImage.src = "/images/images/rotten-tomato.png"

const veggiesImage = new Image()
veggiesImage.src = "/images/images/veggies.png"


let gameOn = false;

let score= 0;


function startGame() {
    // console.log("Starting")

    gameOn = true
    CSSTransition.draw

    logo.style.visibility = "hidden"
    logo.style.height = "0px"
    canvas.width = "650"
    canvas.height = "800"
    canvas.style.visibility = "visible"

    ctx.drawImage(kitchenImage, 0, 0, 650, 800)
    ctx.drawImage(characterImage, 400, 200, 75, 50)
}

function updateCanvas() {
    ctx.clearRect(0,0,650,800)

    ctx.drawImage(kitchenImage, 0, 0, 650, 800)

}

window.onload = function () {
    document.getElementById("start-button").onclick = () => {
        if (gameOn === false) {
        startGame();
    };

};

}
