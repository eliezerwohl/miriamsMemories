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
  $(".modal").modal('hide');
});
