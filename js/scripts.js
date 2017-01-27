//business logic =========================
var allMovies = [];

function Pizza(toppings, size, quantity) {
  this.toppings = toppings;
  this.size = size;
  this.quantity = quantity;
}

var price;
Pizza.prototype.calcCost = function() {
  var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

// var fullMovie = function(movieId) {
//   var i = movieId - 1;
//   return  (allMovies[i].movieName + ' ' + allMovies[i].rating + ' ' + allMovies[i].runtime + ' ' + allMovies[i].info);
// }


//user interface logic =================================
$(function() {
  $('form').submit(function() {
    event.preventDefault();

    var myToppings = [];
    var mySize = parseInt($(".size").val());
    var myQuantity = parseInt($("#quantity").val());

    $("input:checkbox:checked").each(function(){
      var myChoices = $(this).val();
      myToppings.push(myChoices);
    });

    var myPizza = new Pizza(myToppings, mySize, myQuantity);

    $('#cost').text("The price of your pizza is: "  +  "$ " + myPizza.calcCost());
    // $('#cost').text("The price of your pizza is: "  +  "$ " + myPizza.calcCost());
    // $('.cost').show();
  });
});
