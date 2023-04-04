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

function getdatabaseAPI() {
    var requestUrl = "https://api.themoviedb.org/3/movie/550?api_key=701ebb9db6b0f6cd175ada217a8261bb";

    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)

    })
}

getdatabaseAPI();






$(document.readyState(function(){
  $('recommendBtn').click(omdbAPI);
}))

*/


function omdbAPI(){
  var apiKey = 'def92d1a'
  var openMovieUrl = `https://www.omdbapi.com/?apikey=${apiKey}&type=movie`; 
  
  fetch(openMovieUrl)
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      console.log(data);
      var randomIndex = Math.floor(Math.random() * data.Search.length);
      var imdbID = data.Search[randomIndex].imdbID;
      
      return fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&plot=full`);
    })
    .then(response => response.json())
    .then(function(movie){

      var title = movie.Title;
      var genre = movie.Genre;
      var year = movie.Year;
      var plot = movie.Plot;

      console.log(title);
      console.log(genre);
      console.log(year);
      console.log(plot);

    })
    .catch(error => {
      console.error(error);
    });
}
