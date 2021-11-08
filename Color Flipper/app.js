const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color"); //need the period .color to change text

btn.addEventListener('click', function() {
    //get random mumber between 0 and 3 (the indexes for the colors array)
    const randomNumber = getRandomNumber();
    console.log(randomNumber); 
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}
