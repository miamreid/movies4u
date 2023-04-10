var keyNYT = "oxAVFGzkee0zA6fTb7Q4lA32umzPGXjC"

var storedGenre = localStorage.getItem("Genre Text"); 
var storedGenreCode = localStorage.getItem("Stored Genre Code");
var storedDecade = localStorage.getItem("Decade Selected");
var storedYear = localStorage.getItem("Random Year");
var storedLength = localStorage.getItem("Stored Length");
var storedLengthText = localStorage.getItem("Stored Length Text");
var aside = document.querySelector(".saved-search");
var asideGenre = document.getElementById("user-genre");
var asideDecade = document.getElementById("user-decade");
var asideLength = document.getElementById("user-length");
var historyBtn = document.querySelector(".history-button");
var searchBtn = document.querySelector(".submit");
var startOverBtn = document.querySelector(".start-over-btn");

//pulls in local storage data from the previous save
historyBtn.innerHTML = storedGenre + ", " + storedDecade + ", " + storedLengthText + " Length Movie";
// historyBtn.addEventListener("click", recallSearch);

function startOver() {
  return window.location.assign("./index.html");
}

startOverBtn.addEventListener("click", startOver);

//changes the local storage values when user selects new filters from the aside menu and appends the new search button underneath
function newSearch() {

  storedGenreCode = asideGenre.value;
  var storedGenreTextKey = "Genre Text";
  var genreText = asideGenre.options[asideGenre.selectedIndex].text;
  localStorage.setItem(storedGenreTextKey, genreText);

  var storedGenreCodeKey = "Stored Genre Code";
  localStorage.setItem(storedGenreCodeKey, storedGenreCode);

  storedGenreCode = localStorage.getItem("Stored Genre Code");

  function randomYear(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var releaseYear;
  storedDecade = asideDecade.value;

  if (asideDecade.value == "1950s") {
    releaseYear = randomYear(1950, 1959);
  }
  if (asideDecade.value == "1960s") {
    releaseYear = randomYear(1960, 1969);
  }
  if (asideDecade.value == "1970s") {
    releaseYear = randomYear(1970, 1979);
  }
  if (asideDecade.value == "1980s") {
    releaseYear = randomYear(1980, 1989);
  }
  if (asideDecade.value == "1990s") {
    releaseYear = randomYear(1990, 1999);
  }
  if (asideDecade.value == "2000s") {
    releaseYear = randomYear(2000, 2009);
  }
  if (asideDecade.value == "2010s") {
    releaseYear = randomYear(2010, 2019);
  }
  if (asideDecade.value == "2020s") {
    releaseYear = randomYear(2020, 2023);
  }

  var storedDecadeKey = "Decade Selected";
  localStorage.setItem(storedDecadeKey, storedDecade);

  var storedRandomYearKey = "Random Year";
  localStorage.setItem(storedRandomYearKey, releaseYear);

  storedYear = localStorage.getItem("Random Year");

  var lengthText;

  if(asideLength.value == "90") {
    lengthText = "Short";
  }
  if(asideLength.value == "120") {
    lengthText = "Average";
  }
  if(asideLength.value == "150") {
    lengthText = "Long";
  }

  var storedLengthTextKey = "Stored Length Text";
  localStorage.setItem(storedLengthTextKey, lengthText);
  
  storedLength = asideLength.value;

  var lengthKey = "Stored Length"
  localStorage.setItem(lengthKey, storedLength); 

  storedLength = localStorage.getItem("Stored Length");

  console.log(storedYear);
  console.log(storedGenreCode);
  console.log(storedLength);

  var API_KEY = "701ebb9db6b0f6cd175ada217a8261bb";

  var API_URL = "https://api.themoviedb.org/3/discover/movie";

  var discoverURL = `${API_URL}?api_key=${API_KEY}&top_rated&primary_release_year=${storedYear}&with_genres=${storedGenreCode}&with_runtime.gte=${storedLength}&include_adult=false&sort_by=popularity.desc&original_language=en-US&watch_region=north%20america&page=1`;
  
    fetch(discoverURL)
    .then(function (response) {
      return response.json()
       })
       .then(function (data) {
         console.log(data);

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
          });
  var savedSearchBtn = document.createElement("button");
  savedSearchBtn.textContent = genreText + ", " + storedDecade + ", " + lengthText + " Length Movie";
  savedSearchBtn.setAttribute("class", "history-button");
  aside.append(savedSearchBtn);
};

searchBtn.addEventListener("click", newSearch);

//The following functions change the filter selections based on what the user chose from the homescreen menus.

function setFilterGenre() {
  if(storedGenre == "Action") {
    var genre = document.getElementById("28");
    genre.setAttribute("selected", "selected");
  }
  if(storedGenre == "Adventure") {
    var genre = document.getElementById("12");
    genre.setAttribute("selected", "selected");
  }
  if(storedGenre == "Animation") {
    var genre = document.getElementById("16");
    genre.setAttribute("selected", "selected");
  }
  if(storedGenre == "Comedy") {
    var genre = document.getElementById("35");
    genre.setAttribute("selected", "selected");
  }
  if(storedGenre == "Crime") {
    var genre = document.getElementById("80");
    genre.setAttribute("selected", "selected");
  }
  if(storedGenre == "Documentary") {
    var genre = document.getElementById("99");
    genre.setAttribute("selected", "selected");
  }
  if(storedGenre == "Drama") {
    var genre = document.getElementById("18");
    genre.setAttribute("selected", "selected");
  }
  if(storedGenre == "Family-Friendly") {
    var genre = document.getElementById("10751");
    genre.setAttribute("selected", "selected");
  }
  if(storedGenre == "Fantasy") {
    var genre = document.getElementById("14");
    genre.setAttribute("selected", "selected");
  }
  if(storedGenre == "History") {
    var genre = document.getElementById("36");
    genre.setAttribute("selected", "selected");
  }
  if(storedGenre == "Horror") {
    var genre = document.getElementById("27");
    genre.setAttribute("selected", "selected");
  }
  if(storedGenre == "Musical") {
    var genre = document.getElementById("10402");
    genre.setAttribute("selected", "selected");
  }
  if(storedGenre == "Mystery") {
    var genre = document.getElementById("9648");
    genre.setAttribute("selected", "selected");
  }
  if(storedGenre == "Romance") {
    var genre = document.getElementById("10749");
    genre.setAttribute("selected", "selected");
  }
  if(storedGenre == "Science Fiction") {
    var genre = document.getElementById("878");
    genre.setAttribute("selected", "selected");
  }
  if(storedGenre == "TV Movie") {
    var genre = document.getElementById("10770");
    genre.setAttribute("selected", "selected");
  }
  if(storedGenre == "Thriller") {
    var genre = document.getElementById("53");
    genre.setAttribute("selected", "selected");
  }
  if(storedGenre == "War") {
    var genre = document.getElementById("10752");
    genre.setAttribute("selected", "selected");
  }
  if(storedGenre == "Western") {
    var genre = document.getElementById("37");
    genre.setAttribute("selected", "selected");
  }
}

setFilterGenre();

function setFilterDecade() {
  if(storedDecade == "1950s") {
    var decade = document.getElementById("1950s");
    decade.setAttribute("selected", "selected");
  }
  if(storedDecade == "1960s") {
    var decade = document.getElementById("1960s");
    decade.setAttribute("selected", "selected");
  }
  if(storedDecade == "1970s") {
    var decade = document.getElementById("1970s");
    decade.setAttribute("selected", "selected");
  }
  if(storedDecade == "1980s") {
    var decade = document.getElementById("1980s");
    decade.setAttribute("selected", "selected");
  }
  if(storedDecade == "1990s") {
    var decade = document.getElementById("1990s");
    decade.setAttribute("selected", "selected");
  }
  if(storedDecade == "2000s") {
    var decade = document.getElementById("2000s");
    decade.setAttribute("selected", "selected");
  }
  if(storedDecade == "2010s") {
    var decade = document.getElementById("2010s");
    decade.setAttribute("selected", "selected");
  }
  if(storedDecade == "2020s") {
    var decade = document.getElementById("2020s");
    decade.setAttribute("selected", "selected");
  }
}

setFilterDecade();

function setFilterLength() {
  if(storedLength == "90") {
    asideLength.value = "90";
  }
  if(storedLength == "120") {
    asideLength.value = "120";

  }
  if(storedLength == "150") {
    asideLength.value = "150";
  }
}

setFilterLength();

//after local storage is retrieved from the user selections, the setData function pulls in the image and title to display on the results page

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

function infoRedirect() {
  var cards = document.querySelectorAll('.result-item');
  cards.forEach(function(card) {
    var index = card.getAttribute('data-index');
    card.addEventListener('click', function(){

      var storedMovieTitle = localStorage.getItem('Stored Title-' + index);
      var titleSelectKey = "Selected Title";
      localStorage.setItem(titleSelectKey, storedMovieTitle);

      var storedImgPath = localStorage.getItem("Stored Image Path-" + index);
      var imgSelectKey = "Selected Image";
      localStorage.setItem(imgSelectKey, storedImgPath);

      var storedPlot = localStorage.getItem("Stored Plot-" + index);
      var plotSelectKey = "Selected Plot"
      localStorage.setItem(plotSelectKey, storedPlot);

      toMoviePage();
    });
  }); 
}

function toMoviePage(){
  window.location.assign('./movie-page.html');
}

//Results page needs to bring up the movie page when you click a movie.
//Movie page needs to be updated with the info of the movie clicked
//There needs to be a button to go back to the results page so the user can go back to where they left off.
//Change the background of the numbers on the home page.

