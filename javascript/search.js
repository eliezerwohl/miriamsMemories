$("body").on("click", "#searchPatient", function(){
  var searchQuestion = ["First Name",
  "Last Name"]

  for (var i = 0; i < searchQuestion.length; i++) {
    questionCreate(searchQuestion [i], [i]);
  }
  function questionCreate(data, number){
  var building = '<div class="form-group"> <label for="clientQuestion' + number + '" class="col-sm-12 control-label">' + data +'</label>\
    <input type="text" class="form-control patientQuestionInput" id="clientQuestion' + number + '" placeholder="">\
    </div>';
  $(".content").append(building);
  }
  $(".content").append('<button type="submit" id="clientSearchButton" class="col-lg-3 col-xs-12 btn btn-lg btn-primary"><span class="glyphicon glyphicon-search">SEARCH</span></button>')
  // $(".content").append('<button type="submit" id="create" class="col-lg-3 col-xs-12 btn btn-lg btn-primary"><span class="glyphicon glyphicon-search"> </span>Search</button>') 
});

// div class="input-group">
//   <div class="input-group-btn">
//     <!-- Buttons -->
//   </div>
//   <input type="text" class="form-control" aria-label="...">
// </div>
