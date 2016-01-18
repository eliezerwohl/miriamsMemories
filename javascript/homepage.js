
$("#loginButton").on("click", function(){
  $(".loginPanel").fadeOut();

var col1 = $("<div>").addClass("col-md-6 btnDiv")
var col2 = $("<div>").addClass("col-md-6 btnDiv")
var col3 = $("<div>").addClass("col-md-6 btnDiv")
var col4 = $("<div>").addClass("col-md-6 btnDiv")
var col5 = $("<div>").addClass("col-md-6 back").hide();

  var searchButton = $("<button>").addClass("btn btn-info btn-lg btn-block").append("search by patient").hide().fadeIn(2700);
  var newPatientButton = $("<button>").addClass("btn btn-info btn-lg btn-block").append("new patient").hide().fadeIn(3000);
  var viewAllButton = $("<button>").addClass("btn btn-info btn-lg btn-block").append("view all clients").hide().fadeIn(3300);
  var logOutButton = $("<button>").addClass("btn btn-info btn-lg btn-block").append("logout").hide().fadeIn(3500);
  var backButton = $("<button>").addClass("btn btn-alert btn-lg btn-block").append("<span class='glyphicon glyphicon-arrow-left'></span>BACK");

  $(col1).append(searchButton);
  $(col2).append(newPatientButton);
  $(col3).append(viewAllButton);
  $(col4).append(logOutButton);
  $(col5).append(backButton);

  $('.target').append(col5)
  .append(col1)
  .append(col2)
  .append(col3)
  .append(col4);
});

$("body").on("click", ".btnDiv", function(){
  $(".btnDiv").not(this).hide();
  $(".back").fadeIn(1000)
});

$("body").on("click", ".back", function(){
  $(this).hide()
  $(".btnDiv").show(); 
});
