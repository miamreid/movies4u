var genreButton = document.querySelector("#genreButton");
var decadeButton = document.querySelector("#decadeButton");
var nextBtn3 = document.querySelector("#nextBtn3");


var previousBtn2 = document.querySelector("#previousBtn2");
var previousBtn3 = document.querySelector("#previousBtn3");
var previousBtn4 = document.querySelector("#previousBtn4");


genreButton.addEventListener("click", goToPrompt2);
decadeButton.addEventListener("click", goToPrompt3);
nextBtn3.addEventListener("click", goToPrompt4);
previousBtn2.addEventListener("click", goToPrompt1);
previousBtn3.addEventListener("click", goToPrompt2)
previousBtn4.addEventListener("click", goToPrompt3)

function goToPrompt1() {
    prompt1.classList.remove("hidden");
    prompt2.classList.add("hidden");
}

function goToPrompt2() {
    prompt1.classList.add("hidden");
    prompt3.classList.add("hidden");
    prompt2.classList.remove("hidden");

}

function goToPrompt3() {
    prompt2.classList.add("hidden");
    prompt4.classList.add("hidden");
    prompt3.classList.remove("hidden");
}

function goToPrompt4() {
    prompt3.classList.add("hidden");
    prompt4.classList.remove("hidden");
}



// var slider = document.getElementById("slider");
// var selector = document.getElementById("selector");

// slider.oninput = function() {
//     selector.style.left =this.value + "%";
// }