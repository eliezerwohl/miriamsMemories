$("#signup").on("click", function(e){
    e.preventDefault()
  $(".modalTitle, .modalBody, .modalFooter").empty()
  $(".modal").modal()
  $(".modalTitle").append("Sign Up")
  var questions = ["First name",
  "Last name",
  "Email Address",
  "Phone Number",
  ]
  for (var i = 0; i < questions.length; i++) {
    questionCreate(questions[i], [i]);
  }
  function questionCreate(data, number){
  var building = '<div class="form-group"> <label for="signupData' + number + '" class="col-sm-12 control-label">' + data +'</label>\
    <input type="text" class="form-control signUpInput" id="signupData' + number + '" placeholder="">\
    </div>';
  $(".modalBody").append(building);
  }
   $(".modalFooter").append('<button type="submit" id="saveSignIn" class="col-lg-3 col-xs-12 btn btn-lg btn-primary"><span class="glyphicon glyphicon-ok"> </span>Sign Up</button>')
   .append('<button type="submit" id="endModal" data-dismiss="modal" class="col-lg-3 col-xs-12 btn btn-lg btn-default pull-right"><span class="glyphicon glyphicon-arrow-left"> </span>BACK</button>');
});
$("body").on("click", "#saveSignIn", function(e){
  // gets the value of all the input fields for the questions
  e.preventDefault()
  var input = $(".signUpInput").length;
  for (var i = 0; i < input; i++) {
    var signinData = $("#signupData" + [i]).val();
    console.log(signinData);
  };
  // $(".modal").modal('hide');
  $(".modalTitle, .modalBody, .modalFooter").empty()
  $(".modalTitle").append("Success!")
  $(".modalBody").append('<div class="jumbotron">\
    <h4>Your account has been successfully created!</h4> <h5>If you would like to link your account to an existing group, click the "Join Group" button. </h5> <h5> If you would like to create a new group, click the "New Group" button.  </h5><h5> Otherwise, click the "Back To Login" button.</h5>\
    </div>')
  $(".modalFooter")
  .append('<button type="submit" id="joinGroup" class="col-lg-5 col-xs-12 btn btn-lg btn-primary"><span class="glyphicon glyphicon-user"> </span>Join Group</button>')
  .append('<button type="submit" id="createGroup" class="col-lg-5 pull-right col-xs-12 btn btn-lg btn-info"><span class="glyphicon glyphicon-book"> </span>Create Group</button>')
  .append('<button type="submit" data-dismiss="modal" id="backToLogin" class="col-lg-12 col-xs-12 btn btn-lg btn-default"><span class="glyphicon glyphicon-arrow-left"> </span>RETURN TO LOGIN</button>')
});

$("body").on("click", "#joinGroup, #createGroup", function(){
$(".modalTitle, .modalBody, .modalFooter").empty()
$(".modalTitle").append("Feature Coming Soon");
// this is whre the join group inputs will go.  first need to get back end up and running before figuring out how to share data between multiple users
  // $(".modalBody").append('<div class="form-group"> <label for="groupId" class="col-sm-12 control-label">Group ID</label>\
  //  <input type="text" class="form-control signUpInput" id="groupId" placeholder="">\
  //   </div>\
  //   <div class="form-group"> <label for="groupPassword class="col-sm-12 control-label">Group Password</label>\
  //   <input type="text" class="form-control signUpInput" id="signupData" placeholder="">\
  //   </div>')
$(".modalFooter").append('<button type="submit" data-dismiss="modal" id="joinGroupPageButton" class="col-xs-12 btn btn-lg btn-primary"><span class="glyphicon glyphicon-user"> </span>Back To Login</button>');
});
