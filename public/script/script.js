console.log('Up and running!');

const startGame = document.querySelector('#startGame');
const clickCounter = document.querySelector('#clickCounter');
const qualityDisplay = document.querySelector('#qualityDisplay');
const cropAttribute = document.querySelector('#newCrop');
const gameMessage = document.querySelector('.gameMessage');
const instructionsShow = document.querySelector('.instructionsShow');
const instructions = document.querySelector('.instructions');
const oldCropAttribute = cropAttribute.getAttribute('action');

cropAttribute.setAttribute('action', `${oldCropAttribute}/0`)

const gameTimer = 10000;
let qualityCounter = 0;

startGame.addEventListener('click', function(){
    console.log('Clicked');
    qualityCounter = 0;
    countdown();
    setTimeout(setCropQuality, gameTimer)
});

clickCounter.addEventListener('click', function(){
    qualityCounter=qualityCounter + 1;
    console.log('Counter Clicked')
})

instructionsShow.addEventListener('click', function(){

})

function setCropQuality() {
    console.log(`User clicked ${qualityCounter} times`)
    qualityDisplay.innerHTML = qualityCounter;
    cropAttribute.setAttribute('action', `${oldCropAttribute}/${qualityCounter}`)
}

function countdown() {
    let countdownTime = 9;
    const timeinterval = setInterval(() => {
        gameMessage.innerHTML = `Time left: ${countdownTime}`;
        countdownTime --;
        if (countdownTime <= -1) {
            gameMessage.innerHTML = `Time's up!`;  
            clearInterval(timeinterval);
        }
      },1000);
    
}