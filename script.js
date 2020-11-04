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

        var pRating = $("<p>").text("Rating: " + rating);

        movieDiv.append(pRating);

        var released = response.Released;

        var pReleased = $("<p>").text("Released: " + released);

        movieDiv.append(pReleased);

        var plot = response.Plot;

        var pPlot = $("<p>").text("Plot: " + plot);

        movieDiv.append(pPlot);

        var imgURL = response.Poster;

        var image = $("<img>").attr("src", imgURL);

        movieDiv.append(image);

        $("#movies-view").prepend(movieDiv);
    });
}

//this function renders movie buttons
function renderButtons() {
    $("#buttons-view").empty();

    for(var i = 0; i < movies.length; i++){
        var movieBtn = $("<button>");

        movieBtn.addClass("movie-btn");

        movieBtn.attr("data-name", movies[i]);

        movieBtn.text(movies[i]);

        $("#buttons-view").append(movieBtn);
    }
}

//this function is the on click for movoe buttons
$("#add-movie").on("click", function(event){
    event.preventDefault();

    var movie = $("#movie-input").val().trim();

    movies.push(movie);

    renderButtons();
})

$(document).on("click", ".movie-btn", displayMovieInfo);

renderButtons();