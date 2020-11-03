//list of movies to be displayed automatically
var movies = ["The Godfather", "The Dark Knight Rises", "Fight Club", "Catch Me If You Can"];

//this function renders the html
function displayMovieInfo() {
    var movie = $(this).attr("data-name");
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var movieDiv = $("<div class='movie'>");

        var rating = response.Rated;
    });
}