function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;

  var price = 10;

  if (seniorDiscount(age) === true) {
    price = price-1.5;
  }


  this.price = price;
};

function seniorDiscount(age) {
  if (age === "Senior") {
    return true;
  } else {
    return false;
  }
}
// Ticket.prototype.movieReceipt = function() {
//   return this.movie + ", " + this.time + ", " + this.age;
// }


//user
$(document).ready(function() {
  $("form#inputs").submit(function(event){
    event.preventDefault();

    var selectMovie = $("select#movie").val();
    var selectTime = $("select#time").val();
    var selectAge = $("select#age").val();

    var newTicket = new Ticket(selectMovie, selectTime, selectAge);
    console.log(newTicket);
    // var priceMatinee = "5";
    // var priceKid = "6";
    // var priceSenior = "7";
    // var priceEvening = "10";
    //
    // if (selectAge === "Senior") {
    //   $("#movie-info").show().append("<p>" + newTicket.movieReceipt() + "</br>" + "Price = " + " $" + priceSenior);
    // } else if (selectAge === "Adult" && selectTime === "Evening") {
    //   $("#movie-info").show().append("<p>" + newTicket.movieReceipt() + "</br>" + "Price = " + " $" + priceEvening);
    // } else if (selectAge === "Adult" && selectTime === "Matinee") {
    //   $("#movie-info").show().append("<p>" + newTicket.movieReceipt() + "</br>" + "Price = " + " $" + priceMatinee);
    // } else if (selectAge === "Kid") {
    //   $("#movie-info").show().append("<p>" + newTicket.movieReceipt() + "</br>" + "Price = " + " $" + priceKid);
    // }
  });
});
