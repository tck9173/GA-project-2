console.log('Up and running!');

const startGame = document.querySelector('#startGame');
const clickCounter = document.querySelector('#clickCounter');
const qualityDisplay = document.querySelector('#qualityDisplay');
const cropAttribute = document.querySelector('#newCrop');

const oldCropAttribute = cropAttribute.getAttribute('action');

cropAttribute.setAttribute('action', `${oldCropAttribute}/0`)

const gameTimer = 10000;
let qualityCounter = 0;

startGame.addEventListener('click', function(){
    console.log('Clicked');
    qualityCounter = 0;
    setTimeout(setCropQuality, gameTimer)
});

clickCounter.addEventListener('click', function(){
    qualityCounter=qualityCounter + 1;
    console.log('Counter Clicked')
})

function setCropQuality() {
    console.log(`User clicked ${qualityCounter} times`)
    qualityDisplay.innerHTML = qualityCounter;
    cropAttribute.setAttribute('action', `${oldCropAttribute}/${qualityCounter}`)
}