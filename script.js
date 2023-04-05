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
var API_KEY = "701ebb9db6b0f6cd175ada217a8261bb";

function genreSelector(){
  var genreURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
  // Fetch the data from the API
  fetch(genreURL)
    .then(function(response){
      return response.json()
    })
    .then(function(data) {
      console.log(data);
  })
}

genreSelector();

function moviedbAPI(){
  var API_URL = "https://api.themoviedb.org/3/discover/movie";
  
  // Get the filter inputs
  var releaseYear = 2006 //document.getElementById("decade").value;
  var genre = 'Comedy'//document.getElementById("genre").value;
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
  // Display the first movie that matches the filter criteria
    if (data.results.length > 0) {
      var movie = data.results[0];
      var title = movie.title;
      var releaseDate = movie.release_date;
      var genre = movie.genre_ids[0];
      var duration = movie.runtime;

      console.log(`Title: ${title}, Release Date: ${releaseDate}, Genre: ${genre}, Duration: ${duration}`);
      } else {
      console.log("No movies found that match the filter criteria.");
      }
    });
  }

moviedbAPI();