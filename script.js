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
// HTML Elements

var userGenre = document.getElementById("user-genre");

var API_KEY = "701ebb9db6b0f6cd175ada217a8261bb";

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

function moviedbAPI(){
  var API_URL = "https://api.themoviedb.org/3/discover/movie";
  
  // Get the filter inputs
  var releaseYear = 2006 //document.getElementById("decade").value;
  var genre = 35//document.getElementById("genre").value;
  var lengthTime = 90;
  var nc17 = true;
  
  // Construct the API URL with the filter parameters
  var discoverURL = `${API_URL}?api_key=${API_KEY}&top_rated&primary_release_year=${releaseYear}&with_genres=${genre}&with_runtime.gte=${lengthTime}&include_adult=${nc17}&append_to_response=genre&sort_by=popularity.desc&language=en-US&page=1`;

  // Fetch the data from the API
  fetch(discoverURL)
    .then(function(response){
      return response.json()
    })
    .then(function(data) {
      console.log(data);
  })
}

moviedbAPI();

