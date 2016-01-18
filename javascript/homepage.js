$("#loginButton").on("click", function(){
  $(".loginPanel").fadeOut();


  // need a search by client
  // new client
  // view all clients
  // logout
  var searchButton = $("<button>").addClass("btn btn-info btn-lg col-xs-12 col-md-6").append("search by patient").hide().fadeIn(3000);
  var newPatientButton = $("<button>").addClass("btn btn-info btn-lg col-xs-12 col-md-6").append("new patient").hide().fadeIn(3500);
  var viewAllButton = $("<button>").addClass("btn btn-info btn-lg col-xs-12 col-md-6").append("view all clients").hide().fadeIn(4000);
  var logOutButton = $("<button>").addClass("btn btn-info btn-lg col-xs-12 col-md-6").append("logout").hide().fadeIn(4500);
  $('.target').append(searchButton)
  .append(newPatientButton)
  .append(viewAllButton)
  .append(logOutButton);
});