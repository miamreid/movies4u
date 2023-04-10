// Local Storage Elements For Selected Movie
var selectedImg = localStorage.getItem("Selected Image");
var selectedTitle = localStorage.getItem("Selected Title");
var selectedGenre = localStorage.getItem("Genre Text");
var selectedPlot = localStorage.getItem("Selected Plot");

// Function to Display Selected Information
function selectedInfo(){
    var printImg = document.getElementById("selected-img");
    printImg.src = "https://image.tmdb.org/t/p/w500" + selectedImg;
    
    var printTitle = document.getElementById("selected-title");
    printTitle.textContent = selectedTitle;

    var printGenre = document.getElementById("genre-1");
    printGenre.textContent = selectedGenre;

    var printPlot = document.getElementById("selected-plot");
    printPlot.textContent = selectedPlot;
}

selectedInfo();

function getNYTAPI(){
  // Fetch Request for New York Times API
    var keyNYT = "oxAVFGzkee0zA6fTb7Q4lA32umzPGXjC"
    var movieUrl = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${selectedTitle}&order=by-opening-date&api-key=${keyNYT}`;
    
    fetch(movieUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

      console.log(data)
      
      // Displays Movie's MPAA Rating
      var rating = data.results[0].mpaa_rating;
      var printRating = document.getElementById("rating");
      printRating.textContent = rating;
      
      // Displays Movie Review Headline and URL Link
      var reviewHead = data.results[0].headline;
      var reviewUrl = data.results[0].link.url;
      var linkText = "Read the New York Times Review For This Movie";
      var printHead = document.getElementById("review-headline");
      printHead.textContent = reviewHead;
      var linkTag = document.getElementById("link-tag");
      linkTag.textContent = linkText;
      linkTag.setAttribute("href", reviewUrl);

      // Displays the Movie Reviewer's Name
      var reviewerName = data.results[0].byline;
      var printReviewerName = document.getElementById("byline");
      printReviewerName.textContent = "Reviewer Name: " + reviewerName;
    })
}

getNYTAPI();



