/* This is for the results.js
function infoRedirect() {
  var cards = document.querySelectorAll('.result-item');
  cards.forEach(function(card) {
    var index = card.getAttribute('data-index');
    card.addEventListener('click', function(){

      var storedMovieTitle = localStorage.getItem('Stored Title-' + index);
      var titleSelectKey = "Selected Title";
      localStorage.setItem(titleSelectKey, storedMovieTitle);

      var storedImgPath = localStorage.getItem("Stored Image Path-" + index);
      var imgSelectKey = "Selected Image";
      localStorage.setItem(imgSelectKey, storedImgPath);

      var storedPlot = localStorage.getItem("Stored Plot-" + index);
      var plotSelectKey = "Selected Plot"
      localStorage.setItem(plotSelectKey, storedPlot);

      toMoviePage();
    });
  }); 
}

function toMoviePage(){
  window.location.assign('./movie-page.html');
}
  */

var selectedImg = localStorage.getItem("Selected Image");
var selectedTitle = localStorage.getItem("Selected Title");
var selectedGenre = localStorage.getItem("Genre Text");
var selectedPlot = localStorage.getItem("Selected Plot");

function selectedInfo(){
    var printImg = document.getElementById("selected-img");
    printImg.src = "https://image.tmdb.org/t/p/w500" + selectedImg;

    
    var printTitle = document.getElementById("selected-title");
    printTitle.textContent = selectedTitle;

    var printGenre = document.getElementById("genre-1");
    printGenre.textContent = selectedGenre;

    var printPlot = document.getElementById("selected-plot");
    printPlot.textContent = selectedPlot;
}

selectedInfo();

function getNYTAPI(){
    var keyNYT = "oxAVFGzkee0zA6fTb7Q4lA32umzPGXjC"
    var reviewUrl = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${selectedTitle}&api-key=${keyNYT}`;
    
    fetch(reviewUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
      console.log(data)
    })
}