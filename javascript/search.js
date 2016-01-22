$("body").on("click", "#searchPatient", function(){
  var searchQuestion = ["First Name",
  "Last Name",
  "Phone Number"]

  for (var i = 0; i < searchQuestion.length; i++) {
    questionCreate(searchQuestion [i], [i]);
  }
  function questionCreate(data, number){
  var building = '<div class="form-group"> <label for="clientQuestion' + number + '" class="col-sm-12 control-label">' + data +'</label>\
    <input type="text" class="form-control patientQuestionInput" id="clientQuestion' + number + '" placeholder="">\
    </div>';
  $(".content").append(building);
  }
  $(".content").append('<span class="glyphicon glyphicon-search"></span>')
});

// div class="input-group">
//   <div class="input-group-btn">
//     <!-- Buttons -->
//   </div>
//   <input type="text" class="form-control" aria-label="...">
// </div>
