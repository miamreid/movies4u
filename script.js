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
var genre = document.getElementById("user-genre").value;

//results.html Elements
result1 = document.getElementById("results1");
img1 = document.getElementById("img-1");

function saveUserGenre() {
  genre = genre.value;
  var genreSelection = genreDiv.options[genreDiv.selectedIndex].text;
  console.log(genreSelection);
  localStorage.setItem(genreDiv.options[genreDiv.selectedIndex].value, genreSelection);
}

genreBtn.addEventListener("click", saveUserGenre);

function randomYear(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function saveUserDecade() {
  var userDecade = document.getElementById("user-decade").value;
  console.log(userDecade);
  if(userDecade == "1950s") {
    releaseYear = randomYear(1950, 1959);
  }
  if(userDecade == "1960s") {
    releaseYear = randomYear(1960, 1969);
  }
  if(userDecade == "1970s") {
    releaseYear = randomYear(1970, 1979);
  }
  if(userDecade == "1980s") {
    releaseYear = randomYear(1980, 1989);
  }
  if(userDecade == "1990s") {
    releaseYear = randomYear(1990, 1999);
  }
  if(userDecade == "2000s") {
    releaseYear = randomYear(2000, 2009);
  }
  if(userDecade == "2010s") {
    releaseYear = randomYear(2010, 2019);
  }
  if(userDecade == "2020s") {
    releaseYear = randomYear(2020, 2023);
  }
  console.log(userDecade + " " + releaseYear);
  var decadeSelection = decadeDiv.options[decadeDiv.selectedIndex].text;
  console.log(decadeSelection);
  localStorage.setItem(releaseYear, decadeSelection)
};

decadeBtn.addEventListener("click", saveUserDecade);

function moviedbAPI(){
  var API_URL = "https://api.themoviedb.org/3/discover/movie";
  
  // Construct the API URL with the filter parameters
  var discoverURL = `${API_URL}?api_key=${API_KEY}&top_rated&primary_release_year=${releaseYear}&with_genres=${genre}&with_runtime.gte=${lengthTime}&include_adult=true&append_to_response=genre&sort_by=popularity.desc&language=en-US&page=1`;

  // Fetch the data from the API
  fetch(discoverURL)
    .then(function(response){
      return response.json()
    })
    .then(function(data) {
      console.log(data);

      window.localStorage.setItem(discoverURL, JSON.stringify(data));

      window.location.href = "results.html"
  })
}

submitBtn.addEventListener("click", moviedbAPI);

var data = JSON.parse(window.localStorage.getItem("discoverURL"));
console.log(data);
/*
  result1 = data.results[0].title;
  console.log(result1);
  img1.src = "https://image.tmdb.org/t/p/w500" + data.results[0].poster_path;
*/
/*
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