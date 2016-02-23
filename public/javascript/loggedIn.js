loggedIn()


// $("body").on("click", ".back", function(){
//   $(".btnDiv ").fadeTo("1000", 1.0);
//   $(".content").empty();
// });
function loggedIn(){
  // var colSearch = $("<div id='searchPatient'>").addClass("col-md-6 btnDiv")
  // var colNewPatient = $("<div id='newPatient'>").addClass("col-md-6 btnDiv")
  // var colViewAll = $("<div>").addClass("col-md-6 btnDiv")
  // var colLogOut = $("<div id='logout'>").addClass("col-md-6 btnDiv")
  // var colBackButton = $("<div>").addClass("col-md-6 back").hide();

  $("#newPatient").fadeIn(1000);
  $("#searchPatient").fadeIn(1500);
  $("#viewAll").fadeIn(2000);
  $("#logOut").fadeIn(2500);
  
  // $(colSearch).append(searchButton);
  // $(colNewPatient).append(newPatientButton);
  // $(colViewAll).append(viewAllButton);
  // $(colLogOut).append(logOutButton);
  // $(colBackButton).append(backButton);

  // $('.menu').append(colBackButton)
  // .append(colNewPatient)
  // .append(colSearch)
  // .append(colViewAll)
  // .append(colLogOut);
}


// $("body").on("click", "#logout", function(){
//   location.reload();
// });

// $("body").on("click", ".btnDiv", function(e){
//    e.preventDefault()
//   $(".btnDiv").not(this).hide();
//   $(this).fadeTo(1000, 0.5);
//   $(this).prop('disabled',true);
//   $(".back").fadeIn(1000);
// });

// $("body").on("click", ".back", function(e){
//    e.preventDefault();
//   $(this).hide();
//   $(".btnDiv").show(); 
//   $(".btnDiv").prop('disabled',false);
// });


// $("body").on("click", "#newPatient", function(e){
//   e.preventDefault();
//   $(".content").empty();
//   // $("#newPatient").prop('disabled',true);
//   var questions = ["First Name",
//   "Last Name",
//   "Address",
//   "Birthdate",
//   "Phone Number",
//   "Emergency Contact Name",
//   "Emergency Contact Phone Number"
// ]
//   for (var i = 0; i < questions.length; i++) {
//     questionCreate(questions[i], [i]);
//   }
//   function questionCreate(data, number){
//   var building = '<div class="form-group"> <label for="newClient' + number + '" class="col-sm-12 control-label">' + data +'</label>\
//     <input type="text" class="form-control newPatientDetails" id="newClient' + number + '" placeholder="">\
//     </div>';
//   $(".content").append(building);
//   }
//   $(".content").append('<button type="submit" id="create" class="col-lg-3 col-xs-12 btn btn-lg btn-primary"><span class="glyphicon glyphicon-ok"> </span>Create New Patient</button>'); 
// });