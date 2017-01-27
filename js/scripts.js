//business logic =========================
var allMovies = [];

function Pizza(toppings, size, quantity) {
  this.toppings = toppings;
  this.size = size;
  this.quantity = quantity;
}

var price;
Pizza.prototype.calcCost = function() {
  if ((this.showtime === 1) || (this.showtime === 2)) {
    return price = ((8 * this.quantityC) + (8 * this.quantityS) + (8 * this.quantityA));
  } else {
    return price = ((8 * this.quantityC) + (8 * this.quantityS) + (12 * this.quantityA));
  }
}

// var fullMovie = function(movieId) {
//   var i = movieId - 1;
//   return  (allMovies[i].movieName + ' ' + allMovies[i].rating + ' ' + allMovies[i].runtime + ' ' + allMovies[i].info);
// }


//user interface logic =================================
$(function() {
  $('form').submit(function() {
    event.preventDefault();

    var myToppings = parseInt($(".checkbox").val());
    var mySize = parseInt($(".size").val());
    var myQuantity = parseInt($("#quantity").val());

    var myPizza = new Pizza(myToppings, mySize, myQuantity);

    $('#cost').text("The price of your movie is: "  +  "$ " + myPizza.calcCost());
    $('.result').show();
    $('.cost').show();
  });
});
