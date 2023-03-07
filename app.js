var rangeNumber = document.querySelector('.upperInput')
var maxRangeNumberSet = document.querySelector('.changeNumber')
var points = document.querySelector('.points')
var highScore = document.querySelector('.highScore')
var correctNumber = document.querySelector('.correctNumber')
var yourNumber = document.querySelector('.yourNumber')
var tryAgain = document.querySelector('.tryAgain')
var inputUser = document.querySelector('.inputUser')
var check = document.querySelector('.check')


rangeNumber.addEventListener('click',() => {
    console.log(rangeNumber.value)
    rangeNumber.value = ""
    
})

rangeNumber.addEventListener('input',() => {
    console.log(rangeNumber.value)
    maxRangeNumberSet.innerHTML =rangeNumber.value
    
})
check.addEventListener('click',() =>{
    if(points.innerHTML >0){
        var generateNumber = Math.round(Math.random()*rangeNumber.value)
        console.log(generateNumber)
        if(generateNumber == inputUser.innerHTML){
            correctNumber.innerHTML = "Matched";
            yourNumber.innerHTML = "Matched";
            points.textContent = +points.textContent + 1;
            if(highScore.textContent < points.textContent ){
                highScore.textContent = points.textContent
               
                
            }
    
        }
        else{
            points.textContent = +points.textContent - 1;
            correctNumber.innerHTML = generateNumber
            yourNumber.innerHTML = inputUser.value
        }
    
    }
    else{
        alert("Gameover please try again")
    }
   
})
tryAgain.addEventListener('click',() =>{
    rangeNumber.value = "";
    inputUser.value="";
    points.innerHTML = 20;
    highScore.innerHTML=0;
    maxRangeNumberSet.innerHTML="?";
    correctNumber.innerHTML="?";
    yourNumber.innerHTML="?";
})