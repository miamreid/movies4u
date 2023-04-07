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