function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  //this.price = price;
}

function Price(matinee, evening) {
  this.matinee = matinee;
  this.evening = evening;
}

Ticket.prototype.movieReceipt = function() {
  return this.movie + ", " + this.time;
}

Price.prototype.moviePrice = function () {
  return
}


//user
$(document).ready(function() {
  $("form#inputs").submit(function(event){
    event.preventDefault();

    var selectMovie = $("select#movie").val();
    var selectTime = $("select#time").val();
    var selectAge = $("select#age").val();

    var newTicket = new Ticket(selectMovie, selectTime, selectAge);

    var priceMatinee = "5";
    var priceKid = "6";
    var priceSenior = "7";
    var priceEvening = "10";

    if (selectAge === "Senior") {
      $("#movie-info").show().append("<p>" + newTicket.movieReceipt() + ", " + " $" + priceSenior + ".");
    } else if (selectAge === "Adult" && selectTime === "Evening") {
      $("#movie-info").show().append("<p>" + newTicket.movieReceipt() + ", " + " $" + priceEvening + ".");
    } else if (selectAge === "Adult" && selectTime === "Matinee") {
      $("#movie-info").show().append("<p>" + newTicket.movieReceipt() + ", " + " $" + priceMatinee + ".");
    } else if (selectAge === "Kid") {
      $("#movie-info").show().append("<p>" + newTicket.movieReceipt() + ", " + " $" + priceKid + ".");
    }
    //$("#movie-info").show().append("<p>" + newTicket.movieReceipt() + " for" + " $" + priceMatinee + ".");


    //"</p>" + "<button type='click' class='btn btn-info' id='price'>" + "Show Me My Price" + "</button>");

  });
});
