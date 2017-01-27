//Business Logic =========================

function Pizza(toppings, size, quantity) {
  this.toppings = toppings;
  this.size = size;
  this.quantity = quantity;
}

var price;
Pizza.prototype.calcCost = function() {
  return price = ((this.toppings.length + this.size) * (this.quantity))
  }

function reset() {
  location.reload();
}


//User Interface Logic =================================
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var myToppings = [];
    var mySize = parseInt($(".size").val());
    var myQuantity = parseInt($("#quantity").val());

    $("input:checkbox:checked").each(function(){
      var myChoices = $(this).val();
      myToppings.push(myChoices);
    });

    var myPizza = new Pizza(myToppings, mySize, myQuantity);
    console.log(myPizza);
    $('#cost').text("The price of your pizza is: "  +  "$ " + myPizza.calcCost());
    $('.result').show();
  });
});
