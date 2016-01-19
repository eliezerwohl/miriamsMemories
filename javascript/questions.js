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
  $('.targetContent').empty()
  for (var i = 0; i < questions.length; i++) {
    questionCreate(questions[i], [i]);
  }
  function questionCreate(data, number){
  var building = '<div class="form-group"> <label for="clientQuestion' + number + '" class="col-sm-12 control-label">' + data +'</label>\
    <input type="text" class="form-control" id="clientQuestion' + number + '" placeholder="">\
    </div>';
  $(".targetContent").append(building);
  }
 $(".targetContent").append('<button id="save">save</button>');
});

$("body").on("click", "#save", function(e){
  // gets the value of all the input fields for the questions
  e.preventDefault()
  var input = $("input").length;
  for (var i = 0; i < input; i++) {
    var clientQuestion = $("#clientQuestion" + [i]).val();
    console.log(clientQuestion);
  };
});