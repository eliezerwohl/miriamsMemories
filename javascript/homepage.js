$("body").on("click", ".back", function(){
  $(".targetContent").empty();
});
$("#loginButton").on("click", function(){
  $(".loginPanel").fadeOut();
var col1 = $("<div>").addClass("col-md-6 btnDiv")
var col2 = $("<div>").addClass("col-md-6 btnDiv")
var col3 = $("<div>").addClass("col-md-6 btnDiv")
var col4 = $("<div>").addClass("col-md-6 btnDiv")
var col5 = $("<div>").addClass("col-md-6 back").hide();

  var searchButton = $("<button>").addClass("btn btn-info btn-lg btn-block").append("search by patient").hide().fadeIn(2700);
  var newPatientButton = $("<button id='newPatient'>").addClass("btn btn-info btn-lg btn-block").append("new patient").hide().fadeIn(3000);
  var viewAllButton = $("<button>").addClass("btn btn-info btn-lg btn-block").append("view all clients").hide().fadeIn(3300);
  var logOutButton = $("<button id='logout'>").addClass("btn btn-info btn-lg btn-block").append("logout").hide().fadeIn(3500);
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
$("body").on("click", "#logout", function(){
location.reload();
});
$("body").on("click", ".btnDiv", function(){
  $(".btnDiv").not(this).hide();
  $(".back").fadeIn(1000);
});

$("body").on("click", ".back", function(){
  $(this).hide();
  $(".btnDiv").show(); 
});
$("body").on("click", "#newPatient", function(){
  $(".targetContent").append(' <div class="form-group">\
    <label for="inputEmail3" class="col-sm-3 control-label">First Name</label>\
    <div class="col-sm-9">\
      <input type="text" class="form-control" id="inputEmail3" placeholder="">\
    </div>\
  </div>\
  <div class="form-group">\
    <label for="inputPassword3" class="col-sm-3 control-label">Last Name</label>\
    <div class="col-sm-9">\
      <input type="text" class="form-control" id="inputPassword3" placeholder="">\
    </div>\
  </div>\
  <div class="form-group">\
    <label for="inputPassword3" class="col-sm-3 control-label">Address</label>\
    <div class="col-sm-9">\
      <input type="text" class="form-control" id="inputPassword3" placeholder="">\
    </div>\
  </div>\
  <div class="form-group">\
    <label for="inputPassword3" class="col-sm-3 control-label">Birthdate</label>\
    <div class="col-sm-9">\
      <input type="text" class="form-control" id="inputPassword3" placeholder="">\
    </div>\
  </div>\
  <div class="form-group">\
    <label for="inputPassword3" class="col-sm-3 control-label">Phone Number</label>\
    <div class="col-sm-9">\
      <input type="text" class="form-control" id="inputPassword3" placeholder="">\
    </div>\
  </div>\
  <div class="form-group">\
    <label for="inputPassword3" class="col-sm-3 control-label">Emergency Contact</label>\
    <div class="col-sm-9">\
      <input type="text" class="form-control" id="inputPassword3" placeholder="">\
    </div>\
  </div>\
  <div class="form-group">\
    <div class="col-sm-10">\
      <button type="submit" class="btn btn-lg btn-default">Create New Patient</button>\
    </div>\
  </div>')
});
