

//Option 1: traversing the dom
// const btns = document.querySelectorAll(".question-btn");   /*selectorAll because there are multiple questionBtns*/

// btns.forEach(function(btn) {
//     btn.addEventListener("click", function(e) {
//         // console.log(e.currentTarget.parentElement.parentElement);
//         const question = e.currentTarget.parentElement.parentElement; 
//         question.classList.toggle("show-text"); 
//     })
// });


//Option 2: using selectors inside the element
const questions = document.querySelectorAll(".question"); 

questions.forEach(function(question) {
    const btn = question.querySelector(".question-btn");    //if we used document.querySelector, we'd end up selecting all the buttons in the html doc. we are trying to limit our scope to just the single question article, so we just search the parameter 'q'
    
    btn.addEventListener("click", function() {
        questions.forEach(function(item) { //item refers to the questions still, but we just want to isolate the articles that are not the articles of interest (the question whose button we clicked on) so we can close them 
            if (question !== item) {
                item.classList.remove("show-text"); 
            }
        });
        question.classList.toggle("show-text"); 
    });
});