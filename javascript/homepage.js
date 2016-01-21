$("body").on("click", ".back", function(){
  $(".btnDiv  ").fadeTo("1000", 1.0);
  $(".content").empty();
});
$("#loginButton").on("click", function(){
  $(".loginPanel").fadeOut().empty();
  var colSearch = $("<div>").addClass("col-md-6 btnDiv")
  var colNewPatient = $("<div id='newPatient'>").addClass("col-md-6 btnDiv")
  var colViewAll = $("<div>").addClass("col-md-6 btnDiv")
  var colLogOut = $("<div id='logout'>").addClass("col-md-6 btnDiv")
  var colBackButton = $("<div>").addClass("col-md-6 back").hide();
  var newPatientButton = $("<button>").addClass("btn btn-info btn-lg btn-block").append("New Patient").hide().fadeIn(1000);
  var searchButton = $("<button>").addClass("btn btn-info btn-lg btn-block").append("Search By Patient").hide().fadeIn(1500);
  var viewAllButton = $("<button>").addClass("btn btn-info btn-lg btn-block").append("View All Patients").hide().fadeIn(2000);
  var logOutButton = $("<button>").addClass("btn btn-info btn-lg btn-block").append("Logout").hide().fadeIn(2500);
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
  $(this).fadeTo(1000, 0.5);
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
  $(".content").empty();
  $("#newPatient").prop('disabled',true);
  var questions = ["First Name",
  "Last Name",
  "Address",
  "Birthdate",
  "Phone Number",
  "Emergency Contact Name",
  "Emergency Contact Phone Number"
]
  for (var i = 0; i < questions.length; i++) {
    questionCreate(questions[i], [i]);
  }
  function questionCreate(data, number){
  var building = '<div class="form-group"> <label for="newClient' + number + '" class="col-sm-12 control-label">' + data +'</label>\
    <input type="text" class="form-control newPatientDetails" id="newClient' + number + '" placeholder="">\
    </div>';
  $(".content").append(building);
  }
  $(".content").append('<button type="submit" id="create" class="col-lg-3 col-xs-12 btn btn-lg btn-primary"><span class="glyphicon glyphicon-ok"> </span>Create New Patient</button>') 
});
