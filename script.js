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

function moviedbAPI(){
  var API_KEY = "701ebb9db6b0f6cd175ada217a8261bb";
  var API_URL = "https://api.themoviedb.org/3/discover/movie";
  
  // Get the filter inputs
  var releaseYear = 2008;
  var genre = 'action';
  
  // Construct the API URL with the filter parameters
  var url = `${API_URL}?api_key=${API_KEY}&primary_release_year=${releaseYear}&with_genres=${genre}&sort_by=vote_average.desc`;

  // Fetch the data from the API
  fetch(url)
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

      console.log(`Title: ${title}, Release Date: ${releaseDate}, Genre: ${genre}`);
      } else {
      console.log("No movies found that match the filter criteria.");
      }
    });
  }

moviedbAPI();



  