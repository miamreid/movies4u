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
var submitBtn = document.querySelector(".submit"); //submit button on card4, redirects to the results page after local storage is saved with results
var genreBtn = document.querySelector("#genreButton"); //saves user genre selection to the fetch request and local storage
var genreDiv = document.getElementById("user-genre"); //holds the genre input options and values
var releaseYear; //declared in the math function to pull a random year from decade chosen by user
var lengthText; //translates user's length selection to text
var lengthTime; //declared in the fetch request. translates the integer value from the user length selection
var decadeBtn = document.querySelector("#decadeButton"); //saves the user decade selection to local storage and initiates math function to choose a random year that gets pulled into the api fetch request
var lengthBtn = document.getElementById("lengthButton"); //saves the user's length selection (short == 90, average == 120, long == 150)

var API_KEY = "701ebb9db6b0f6cd175ada217a8261bb";
var decadeDiv = document.getElementById("user-decade"); //holds the decade input options and values

var previousBtn2 = document.querySelector("#previousBtn2"); //previous button selections that trigger form cards switching
var previousBtn3 = document.querySelector("#previousBtn3");
var previousBtn4 = document.querySelector("#previousBtn4");

var progressBar = document.querySelectorAll("ul > li");
console.log(progressBar[0]);


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
  progressBar[0].classList.remove('active');
  progressBar[1].classList.add('active');
  progressBar[3].classList.remove('active');
  progressBar[2].classList.remove('active');
  prompt1.classList.add("hidden");
  prompt2.classList.remove("hidden");
  prompt3.classList.add("hidden");
  prompt4.classList.add("hidden");
}
genreBtn.addEventListener("click", saveUserGenre);

function goToPrompt1() {
  progressBar[0].classList.add('active');
  progressBar[1].classList.remove('active');
  progressBar[2].classList.remove('active');
  progressBar[3].classList.remove('active');
  prompt1.classList.remove("hidden");
  prompt2.classList.add("hidden");
  prompt4.classList.add("hidden");
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
  progressBar[0].classList.remove('active');
  progressBar[1].classList.remove('active');
  progressBar[2].classList.add('active');
  progressBar[3].classList.remove('active');
  prompt2.classList.add("hidden");
  prompt3.classList.remove("hidden");
};

  decadeBtn.addEventListener("click", saveUserDecade);

function goToPrompt2() {
  progressBar[0].classList.remove('active');
  progressBar[1].classList.add('active');
  progressBar[2].classList.remove('active');
  progressBar[3].classList.remove('active');
  prompt1.classList.add("hidden");
  prompt3.classList.add("hidden");
  prompt2.classList.remove("hidden");
}

previousBtn3.addEventListener("click", goToPrompt2);

function saveUserLength() {
  var userLength = document.getElementById("user-length").value;
  console.log(userLength);

  if(userLength == "90") {
    lengthText = "Short";
  }
  if(userLength == "120") {
    lengthText = "Average";
  }
  if(userLength == "150") {
    lengthText = "Long";
  }
  console.log(lengthText);

  var storedLengthTextKey = "Stored Length Text";
  localStorage.setItem(storedLengthTextKey, lengthText);
  lengthTime = userLength;
  var lengthKey = "Stored Length";
  localStorage.setItem(lengthKey, lengthTime);

  progressBar[0].classList.remove('active');
  progressBar[1].classList.remove('active');
  progressBar[2].classList.remove('active');
  progressBar[3].classList.add('active');
  prompt3.classList.add("hidden");
  prompt4.classList.remove("hidden");
};

function goToPrompt3() {
  progressBar[0].classList.remove('active');
  progressBar[1].classList.remove('active');
  progressBar[3].classList.add('active');
  progressBar[2].classList.remove('active');
  prompt1.classList.add("hidden");
  prompt2.classList.add("hidden");
  prompt3.classList.remove("hidden");
  prompt4.classList.add("hidden");
}

previousBtn4.addEventListener("click", goToPrompt1);

function moviedbAPI() {
  var storedGenre = localStorage.getItem("Genre Text");
  var storedDecade = localStorage.getItem("Decade Selected");

  var resultsGenre = document.querySelector(".genre");
  var resultsDecade = document.querySelector(".decade");
  var resultsDuration = document.querySelector(".duration");

  resultsGenre.innerHTML = "Genre: " + storedGenre;
  resultsDecade.innerHTML = "Decade: " + storedDecade;
  resultsDuration.innerHTML = "Duration: " + lengthText;

  var API_URL = "https://api.themoviedb.org/3/discover/movie";

  // Construct the API URL with the filter parameters

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
      
      //assigns the image, title, and plot to local storage for each item in the data array
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

lengthBtn.addEventListener("click", saveUserLength);
lengthBtn.addEventListener("click", moviedbAPI);

function redirect() {
  return window.location.assign("./results.html");
}

submitBtn.addEventListener("click", redirect);
