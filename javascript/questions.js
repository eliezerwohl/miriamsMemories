var questions = ["what is your number",
  "what is your favorite color?",
  "what is the air speed velocity of an unamnned swallow with an egg in its mouth",
  "here's some more questions",
  "do you really want to hurt me",
  "do you really want to make me cry",
  "Ipsum pipsum liddy liddy bibsum"
]

$("body").on("click", "#create", function(e){
  e.preventDefault()
  var input = $("input").length;
  for (var i = 0; i < input; i++) {
    var clientQuestion = $("#newClient" + [i]).val();
    console.log(clientQuestion);
  }
  $('.content').empty()
  for (var i = 0; i < questions.length; i++) {
    questionCreate(questions[i], [i]);
  }
  function questionCreate(data, number){
  var building = '<div class="form-group"> <label for="clientQuestion' + number + '" class="col-sm-12 control-label">' + data +'</label>\
    <input type="text" class="form-control" id="clientQuestion' + number + '" placeholder="">\
    </div>';
  $(".content").append(building);
  }
  $(".content").append('<button type="submit" id="save" class="col-lg-3 col-xs-12 btn btn-lg btn-primary"><span class="glyphicon glyphicon-floppy-save"> </span>Save</button>');
});

$("body").on("click", "#save", function(e){
  // gets the value of all the input fields for the questions
  e.preventDefault()
  var input = $("input").length;
  for (var i = 0; i < input; i++) {
    var clientQuestion = $("#clientQuestion" + [i]).val();
    console.log(clientQuestion);
  };
  $(".content").empty();
  $("#newPatient").fadeTo(1000, 1.0).prop('disabled', true);
  $(".btnDiv").prop('disabled', false);
  $(".content").append('<div class="jumbotron">\
  <div class="container">\
   <h3>Save sucessfull.  To create a new patient file, click the "New Patient" button above.  Otherwise, click the "Back" button</h3>\
  </div>\
</div>')
});