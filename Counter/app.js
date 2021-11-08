//set initial count to 0
let count = 0;

// select value and buttons
const value = document.querySelector('#value'); //the id name is value, so we put a # THIS IS THE NUMBER
const btns = document.querySelectorAll(".btn"); 

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList; 
        if (styles.contains("decrease")) { //if the variable contains a specific class (inc/dec/res)
            count--;
        }
        else if(styles.contains("increase")) {
            count++;
        }
        else {
            count = 0; 
        }


        if(count > 0) {
            value.style.color = "green";
        }
        if(count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "black";
        }

        value.textContent = count; 
    });
});
