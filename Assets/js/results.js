var keyNYT = "oxAVFGzkee0zA6fTb7Q4lA32umzPGXjC"

var storedGenre = localStorage.getItem("Genre Text");
var storedGenreCode = localStorage.getItem("Stored Genre Code");
var storedDecade = localStorage.getItem("Decade Selected");
var storedYear = localStorage.getItem("Random Year");
var storedLength = localStorage.getItem("Stored Length");
var storedLengthText = localStorage.getItem("Stored Length Text");
var aside = document.querySelector(".aside-saved-search");
var asideGenre = document.getElementById("user-genre");
var asideDecade = document.getElementById("user-decade");
var asideLength = document.getElementById("user-length");
var historyBtn = document.querySelector(".history-button");
asideGenre.innerHTML = "Genre: " + storedGenre;
asideDecade.innerHTML = "Decade: " + storedDecade;
asideLength.innerHTML = "Duration: " + storedLengthText;
historyBtn.innerHTML = storedGenre + ", " + storedDecade + ", " + storedLengthText;
historyBtn.addEventListener("click", recallSearch);


function setData() {
  for(var i = 0; i < 20; i++) {
    var storedPosterPath = localStorage.getItem("Stored Image Path-" + [i]);
    var movieImg = document.getElementById("img-" + [i]);
    movieImg.setAttribute("src", "https://image.tmdb.org/t/p/w500" + storedPosterPath);
    var storedMovieTitle = localStorage.getItem("Stored Title-" + [i]);
    var movieTitle = document.getElementById("title-" + [i]);
    movieTitle.textContent = storedMovieTitle;
  }
}

setData();

function recallSearch() {
  
  var discoverURL = "https://api.themoviedb.org/3/discover/movie?api_key=701ebb9db6b0f6cd175ada217a8261bb&top_rated&primary_release_year=" + storedYear + "&with_genres" + storedGenreCode + "&&include_adult=false&sort_by=popularity.desc&language=en-US&watch_region=north%20america&page=1";

  fetch(discoverURL)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data);
    })
    return window.location.assign("./results.html");
  };

function getNYTAPI() {
    var requestUrl = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=twilight&api-key=${keyNYT}`;

    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)


    })
}

getNYTAPI();



