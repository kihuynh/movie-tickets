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


Ticket.prototype.movieReceipt = function() {
  return this.movie + ", " + this.time + ", " + this.age + ", $" + this.price;
}

//user
$(document).ready(function() {
  $("form#inputs").submit(function(event){
    event.preventDefault();

    var selectMovie = $("select#movie").val();
    var selectTime = $("select#time").val();
    var selectAge = $("select#age").val();

    var newTicket = new Ticket(selectMovie, selectTime, selectAge);

    $(".ticketPrice").text(newTicket.movieReceipt());
  });
});
