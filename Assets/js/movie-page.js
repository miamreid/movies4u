/* This is for the results.js
function infoRedirect() {
    var cards = document.querySelectorAll('.result-item');
    cards.forEach(function(card) {
      var index = card.getAttribute('data-index');
      card.addEventListener('click', function() {
  
        var storedMovieTitle = localStorage.getItem('Stored Title-' + index);
        var titleSelectKey = "Selected Title";
        localStorage.setItem(titleSelectKey,storedMovieTitle);
  
        var storedImgPath = localStorage.getItem("Stored Image Path-" + index);
        var imgSelectKey = "Selected Image";
        localStorage.setItem(imgSelectKey, storedImgPath);
  
        var storedPlot = localStorage.getItem("Stored Plot-" + index);
        var plotSelectKey = "Selected Plot"
        localStorage.setItem(plotSelectKey, storedPlot);
  
        return window.location.assign('./movie-page.html');
      });
    });
  }
  */

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