$("body").on("click", ".back", function(){
  $(".content").empty();
});
$("#loginButton").on("click", function(){
  $(".loginPanel").fadeOut().empty();
  var colSearch = $("<div>").addClass("col-md-6 btnDiv")
  var colNewPatient = $("<div id='newPatient'>").addClass("col-md-6 btnDiv")
  var colViewAll = $("<div>").addClass("col-md-6 btnDiv")
  var colLogOut = $("<div>").addClass("col-md-6 btnDiv")
  var colBackButton = $("<div>").addClass("col-md-6 back").hide();
  var searchButton = $("<button>").addClass("btn btn-info btn-lg btn-block").append("search by patient").hide().fadeIn(2700);
  var newPatientButton = $("<button>").addClass("btn btn-info btn-lg btn-block").append("new patient").hide().fadeIn(3000);
  var viewAllButton = $("<button>").addClass("btn btn-info btn-lg btn-block").append("view all clients").hide().fadeIn(3300);
  var logOutButton = $("<button id='logout'>").addClass("btn btn-info btn-lg btn-block").append("logout").hide().fadeIn(3500);
  var backButton = $("<button>").addClass("btn btn-alert btn-lg btn-block").append("<span class='glyphicon glyphicon-arrow-left'></span>BACK");

  $(colSearch).append(searchButton);
  $(colNewPatient).append(newPatientButton);
  $(colViewAll).append(viewAllButton);
  $(colLogOut).append(logOutButton);
  $(colBackButton).append(backButton);

  $('.menu').append(colBackButton)
  .append(colNewPatient)
  .append(colSearch)
  .append(colViewAll)
  .append(colLogOut);
});
$("body").on("click", "#logout", function(){
  location.reload();
});

$("body").on("click", ".btnDiv", function(e){
   e.preventDefault()
  $(".btnDiv").not(this).hide();
  $(".back").fadeIn(1000);
});

$("body").on("click", ".back", function(e){
   e.preventDefault()
  $(this).hide();
  $(".btnDiv").show(); 
  $(".btnDiv").prop('disabled',false);
});
$("body").on("click", "#newPatient", function(e){
  e.preventDefault()
  $("#newPatient").prop('disabled',true);
  $(".content").append('<div class="form-group">\
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
      <button type="submit" id="create" class="btn btn-lg btn-default">Create New Patient</button>\
    </div>\
  </div>') 
});
