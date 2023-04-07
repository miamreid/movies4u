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

var previousBtn2 = document.querySelector("#previousBtn2");
var previousBtn3 = document.querySelector("#previousBtn3");
var previousBtn4 = document.querySelector("#previousBtn4");

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
  prompt1.classList.add("hidden");
  prompt2.classList.remove("hidden");
  prompt3.classList.add("hidden");
}

genreBtn.addEventListener("click", saveUserGenre);

function goToPrompt1() {
  prompt1.classList.remove("hidden");
  prompt2.classList.add("hidden");
}
previousBtn2.addEventListener("click", goToPrompt1);

//Translates user decade selection to a random year within decade and saves it within storage
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

  var storedDecadeKey = "Decade Selected";
  var decadeSelection = decadeDiv.options[decadeDiv.selectedIndex].text;
  localStorage.setItem(storedDecadeKey, decadeSelection);
  var storedRandomYearKey = "Random Year";
  localStorage.setItem(storedRandomYearKey, releaseYear);
  console.log("Decade: " + userDecade + ", Random Year: " + releaseYear);
  prompt2.classList.add("hidden");
  prompt3.classList.remove("hidden");
};

decadeBtn.addEventListener("click", saveUserDecade);

function goToPrompt2() {
  prompt1.classList.add("hidden");
  prompt3.classList.add("hidden");
  prompt2.classList.remove("hidden");
}

previousBtn3.addEventListener("click", goToPrompt2);

function moviedbAPI(){
  var API_URL = "https://api.themoviedb.org/3/discover/movie";
  
  // Construct the API URL with the filter parameters
  lengthTime = userLength;

  var discoverURL = `${API_URL}?api_key=${API_KEY}&top_rated&primary_release_year=${releaseYear}&with_genres=${genre}&with_runtime.gte=${lengthTime}&include_adult=true&append_to_response=genre&sort_by=popularity.desc&language=en-US&page=1`;

  // Fetch the data from the API
  fetch(discoverURL)
    .then(function(response){
      return response.json()
    })
    .then(function(data) {
      console.log(data);

      var storeData = "DiscoverUrl";
      window.localStorage.setItem(storeData, JSON.stringify(data));

      for (var i = 0; i < 19; i++){
        var result = document.getElementById("img-" + [i]);
        result.src = "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;
        var title = document.getElementById("title-" + [i]);
        title.innerHTML = data.results[i].title;
        var storedMovieId = "MovieID-" + [i];
        var movieId = data.results[i].id;
        localStorage.setItem (storedMovieId, movieId);
      }
/*
      var storeMovieId1 = "MovieID-1";
      var movieId1 = data.results[0].id;
      localStorage.setItem(storeMovieId1, movieId1);

     
      var result1 = document.getElementById("img-1");
      result1.src = "https://image.tmdb.org/t/p/w500" + data.results[0].poster_path;
      var title1=document.getElementById("title-1");
      var result2 = document.getElementById("img-2");
      result2.src = "https://image.tmdb.org/t/p/w500" + data.results[1].poster_path;
      var result3 = document.getElementById("img-3");
      result3.src = "https://image.tmdb.org/t/p/w500" + data.results[2].poster_path;
      var result4 = document.getElementById("img-4");
      result4.src = "https://image.tmdb.org/t/p/w500" + data.results[3].poster_path;
      var result5 = document.getElementById("img-5");
      result5.src = "https://image.tmdb.org/t/p/w500" + data.results[4].poster_path;
      var result6 = document.getElementById("img-6");
      result6.src = "https://image.tmdb.org/t/p/w500" + data.results[5].poster_path;
      var result7 = document.getElementById("img-7");
      result7.src = "https://image.tmdb.org/t/p/w500" + data.results[6].poster_path;
      var result8 = document.getElementById("img-8");
      result8.src = "https://image.tmdb.org/t/p/w500" + data.results[7].poster_path;
      var result9 = document.getElementById("img-9");
      result9.src = "https://image.tmdb.org/t/p/w500" + data.results[8].poster_path;
      var result10 = document.getElementById("img-10");
      result10.src = "https://image.tmdb.org/t/p/w500" + data.results[9].poster_path;
      var result11 = document.getElementById("img-11");
      result11.src = "https://image.tmdb.org/t/p/w500" + data.results[10].poster_path;
      var result11 = document.getElementById("img-12");
      result11.src = "https://image.tmdb.org/t/p/w500" + data.results[11].poster_path;
      var result13 = document.getElementById("img-13");
      result13.src = "https://image.tmdb.org/t/p/w500" + data.results[12].poster_path;
      var result14 = document.getElementById("img-14");
      result14.src = "https://image.tmdb.org/t/p/w500" + data.results[13].poster_path;
      var result15 = document.getElementById("img-15");
      result15.src = "https://image.tmdb.org/t/p/w500" + data.results[14].poster_path;
      var result16 = document.getElementById("img-16");
      result16.src = "https://image.tmdb.org/t/p/w500" + data.results[15].poster_path;
      var result17 = document.getElementById("img-17");
      result17.src = "https://image.tmdb.org/t/p/w500" + data.results[16].poster_path;
      var result18 = document.getElementById("img-18");
      result18.src = "https://image.tmdb.org/t/p/w500" + data.results[17].poster_path;
      var result19 = document.getElementById("img-19");
      result19.src = "https://image.tmdb.org/t/p/w500" + data.results[18].poster_path;
      var result20 = document.getElementById("img-20");
      result20.src = "https://image.tmdb.org/t/p/w500" + data.results[19].poster_path;
      */
      
  })
  return window.location.assign = "./results.html";
}


submitBtn.addEventListener("click", moviedbAPI);

//Get Stored Data
var storedGenreCode = localStorage.getItem("Stored Genre Code");
var storedGenreText = localStorage.getItem("Genre Text");
var storedDecadeSelection = localStorage.getItem("Decade Selected");
var storedRandomYear = localStorage.getItem("Random Year");






/*
  result1 = data.results[0].title;
  console.log(result1);
  img1.src = "https://image.tmdb.org/t/p/w500" + data.results[0].poster_path;

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
