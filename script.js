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

var submitBtn = document.querySelector(".submit");

var genreBtn = document.querySelector("#genreButton");

var genre;

var releaseYear;

var decadeBtn = document.querySelector("#decadeButton");
    

var userLength = document.getElementById("user-length").value;

var API_KEY = "701ebb9db6b0f6cd175ada217a8261bb";


function saveUserGenre() {
  var userGenre = document.getElementById("user-genre").value;
  genre = userGenre;
  console.log(userGenre);
}

genreBtn.addEventListener("click", saveUserGenre);

function saveUserDecade() {
  var userDecade = document.getElementById("user-decade").value;
  if(userDecade = "1950s") {
    releaseYear = 1950 || 1951 || 1952 || 1953 || 1954 || 1955 || 1956 || 1957 || 1958 || 1959
  }
  if(userDecade = "1960s") {
    releaseYear = 1960 || 1961 || 1962 || 1963 || 1964 || 1965 || 1966 || 1967 || 1968 || 1969
  }
  if(userDecade = "1970s") {
    releaseYear = 1970 || 1971 || 1972 || 1973 || 1974 || 1975 || 1976 || 1977 || 1978 || 1979
  }
  if(userDecade = "1980s") {
    releaseYear = 1980 || 1981 || 1982 || 1983 || 1984 || 1985 || 1986 || 1987 || 1988 || 1989
  }
  if(userDecade = "1990s") {
    releaseYear = 1990 || 1991 || 1992 || 1993 || 1994 || 1995 || 1996 || 1997 || 1998 || 1999
  }
  if(userDecade = "2000s") {
    releaseYear = 2000 || 2001 || 2002 || 2003 || 2004 || 2005 || 2006 || 2007 || 2008 || 2009
  }
  if(userDecade = "2010s") {
    releaseYear = 2010 || 2011 || 2012 || 2013 || 2014 || 2015 || 2016 || 2017 || 2018 || 2019
  }
  if(userDecade = "2020s") {
    releaseYear = 2020 || 2021 || 2022 || 2023 || 2024 || 2025 || 2026 || 2027 || 2028 || 2029
  }
}

decadeBtn.addEventListener("click", saveUserDecade);

function moviedbAPI(){
  var API_URL = "https://api.themoviedb.org/3/discover/movie";
  
  // Get the filter inputs
  var releaseYear = 2001 || 2002 || 2003 || 2004;
  var lengthTime = userLength;
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

submitBtn.addEventListener("click", moviedbAPI);


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