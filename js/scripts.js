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
  for (var i = 0; i < this.toppings.length; i++) {
      sum += this.toppings[i];
  }
  return price = ((sum + this.size) * (this.quantity))
}

function reset() {
  location.reload();

}


//user interface logic =================================
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var myToppings = [];
    var mySize = parseInt($(".size").val());
    var myQuantity = parseInt($("#quantity").val());

    $("input:checkbox:checked").each(function(){
      var myChoices = $(this).val();
      myToppings.push(parseInt(myChoices));
    });

    var myPizza = new Pizza(myToppings, mySize, myQuantity);

    $('#cost').text("The price of your pizza is: "  +  "$ " + myPizza.calcCost());
    $('.result').show();
  });
});
