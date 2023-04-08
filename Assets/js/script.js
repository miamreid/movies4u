//oxAVFGzkee0zA6fTb7Q4lA32umzPGXjC

/*
function getNYTAPI() {
    var requestUrl = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=twilight&api-key=oxAVFGzkee0zA6fTb7Q4lA32umzPGXjC";

    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)

    })
}

getNYTAPI();

$(document.readyState(function(){
  $('recommendBtn').click(omdbAPI);
}))


*/
// index.html Elements
var submitBtn = document.querySelector(".submit");
var genreBtn = document.querySelector("#genreButton");
var genreDiv = document.getElementById("user-genre");
var releaseYear;
var decadeBtn = document.querySelector("#decadeButton");
var userLength = document.getElementById("user-length").value;

var API_KEY = "701ebb9db6b0f6cd175ada217a8261bb";
var decadeDiv = document.getElementById("user-decade");
var lengthTime = userLength;

var previousBtn2 = document.querySelector("#previousBtn2");
var previousBtn3 = document.querySelector("#previousBtn3");
var previousBtn4 = document.querySelector("#previousBtn4");

//Saves user's selected genre to local storage and passes selection to discoverURL
function saveUserGenre() {
  var userGenre = document.getElementById("user-genre").value;
  console.log(userGenre);
  var storedGenreTextKey = "Genre Text";
  var genreText = genreDiv.options[genreDiv.selectedIndex].text;
  localStorage.setItem(storedGenreTextKey, genreText);
  var storedGenreCodeKey = "Stored Genre Code";
  var genreCode = genreDiv.options[genreDiv.selectedIndex].value;
  localStorage.setItem(storedGenreCodeKey, genreCode);
  console.log("User Selected Genre: " + userGenre + ", Genre Text Stored: " + genreText + ", Genre Code Stored: " + genreCode);
  genre = userGenre;
  console.log(genre);
  prompt1.classList.add("hidden");
  prompt2.classList.remove("hidden");
  prompt3.classList.add("hidden");
}
genreBtn.addEventListener("click", saveUserGenre);

function goToPrompt1() {
  prompt1.classList.remove("hidden");
  prompt2.classList.add("hidden");
}
  previousBtn2.addEventListener("click", goToPrompt1);

//Translates user decade selection to a random year within decade and saves it within storage
function randomYear(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function saveUserDecade() {
  var userDecade = document.getElementById("user-decade").value;
  console.log(userDecade);
  if (userDecade == "1950s") {
    releaseYear = randomYear(1950, 1959);
  }
  if (userDecade == "1960s") {
    releaseYear = randomYear(1960, 1969);
  }
  if (userDecade == "1970s") {
    releaseYear = randomYear(1970, 1979);
  }
  if (userDecade == "1980s") {
    releaseYear = randomYear(1980, 1989);
  }
  if (userDecade == "1990s") {
    releaseYear = randomYear(1990, 1999);
  }
  if (userDecade == "2000s") {
    releaseYear = randomYear(2000, 2009);
  }
  if (userDecade == "2010s") {
    releaseYear = randomYear(2010, 2019);
  }
  if (userDecade == "2020s") {
    releaseYear = randomYear(2020, 2023);
  }

  var storedDecadeKey = "Decade Selected";
  var decadeSelection = decadeDiv.options[decadeDiv.selectedIndex].text;
  localStorage.setItem(storedDecadeKey, decadeSelection);
  var storedRandomYearKey = "Random Year";
  localStorage.setItem(storedRandomYearKey, releaseYear);
  console.log("Decade: " + userDecade + ", Random Year: " + releaseYear);
  prompt2.classList.add("hidden");
  prompt3.classList.remove("hidden");
};

  decadeBtn.addEventListener("click", saveUserDecade);

function goToPrompt2() {
  prompt1.classList.add("hidden");
  prompt3.classList.add("hidden");
  prompt2.classList.remove("hidden");
}

previousBtn3.addEventListener("click", goToPrompt2);


function moviedbAPI() {
  var API_URL = "https://api.themoviedb.org/3/discover/movie";

  // Construct the API URL with the filter parameters
  lengthTime = userLength;

  var discoverURL = `${API_URL}?api_key=${API_KEY}&top_rated&primary_release_year=${releaseYear}&with_genres=${genre}&with_runtime.gte=${lengthTime}&include_adult=false&sort_by=popularity.desc&original_language=en-US&watch_region=north%20america&page=1`;

  // Fetch the data from the API
  fetch(discoverURL)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data);

      //var storeData = "DiscoverUrl";
      //window.localStorage.setItem(storeData, JSON.stringify(data));

      for (var i = 0; i < 20; i++) {
        var result = document.getElementById("img-" + [i]);
        result.src = "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;
        var storeImagePath = "Stored Image Path-" + [i];
        var imagePath = data.results[i].poster_path;
        localStorage.setItem(storeImagePath, imagePath);

        var title = document.getElementById("title-" + [i]);
        title.innerHTML = data.results[i].title;
        var storeTitle = "Stored Title-" + [i];
        localStorage.setItem(storeTitle, title.innerHTML);

        var plot = data.results[i].overview;
        var storePlot = "Stored Plot-" + [i];
        localStorage.setItem(storePlot, plot)
      }
    })
}

//if (submitBtn !== null) {
  //submitBtn.addEventListener("click", moviedbAPI);
//}

decadeBtn.addEventListener("click", moviedbAPI);

function redirect() {
  return window.location.assign("./results.html");
}

submitBtn.addEventListener("click", redirect);




/*
  result1 = data.results[0].title;
  console.log(result1);
  img1.src = "https://image.tmdb.org/t/p/w500" + data.results[0].poster_path;

function genreSelector(){
  var genreURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
  // Fetch the data from the API
  fetch(genreURL)
    .then(function(response){
      return response.json()
    })
    .then(function(data) {
      for (var i = 0; i < 19; i++){
        console.log(data.genres[i].id + " " + data.genres[i].name);
      }
  })
}

genreSelector();
*/
