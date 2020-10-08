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
let instructionsDisplayed = false;

startGame.addEventListener('click', function(){
    console.log('Clicked');
    qualityCounter = 0;
    countdown();
    setTimeout(setCropQuality, gameTimer)
});

startGame.addEventListener('mouseover', function() {
    startGame.style.background= 'rgba(255, 166, 0, 0.8)';
})

startGame.addEventListener('mouseout', function() {
    startGame.style.background= 'rgba(255, 166, 0, 0.5)';
})

clickCounter.addEventListener('click', function(){
    qualityCounter=qualityCounter + 1;
    console.log('Counter Clicked')
})

clickCounter.addEventListener('mouseover', function() {
    clickCounter.style.background= 'rgba(0, 148, 0, 0.8)';
})

clickCounter.addEventListener('mouseout', function() {
    clickCounter.style.background= 'rgba(0, 128, 0, 0.5)';
})

instructionsShow.addEventListener('click', function(){
    console.log('Clicked');
    if (instructionsDisplayed === false) {
        instructionsShow.innerText = "Click here to hide instructions"
        instructions.style.display = 'block'; 
        instructionsDisplayed = true;
    } else if(instructionsDisplayed === true) {
        instructionsShow.innerText = "Click here to show instructions"
        instructions.style.display = 'none';
        instructionsDisplayed = false;
    }
    
})

instructionsShow.addEventListener('mouseover', function() {
    instructionsShow.style.background= 'rgb(184, 184, 184)';
})

instructionsShow.addEventListener('mouseout', function() {
    instructionsShow.style.background= 'grey';
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
        gameMessage.style.color = 'red'
        countdownTime --;
        if (countdownTime <= -1) {
            gameMessage.innerHTML = `Time's up!`;  
            gameMessage.style.color = 'white'
            clearInterval(timeinterval);
        }
      },1000);
    
}