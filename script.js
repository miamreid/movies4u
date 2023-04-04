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


function moviedbAPI(){
  var apiKey = '701ebb9db6b0f6cd175ada217a8261bb'
  var movieUrl = `https://api.themoviedb.org/3/movie/550/recommendations?api_key=701ebb9db6b0f6cd175ada217a8261bb&language=en-US&page=1`; 
  
  fetch(movieUrl)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
    })
  }

moviedbAPI();
