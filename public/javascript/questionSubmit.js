// function questionSubmit(){
// 	// debugger
// 	//    var answer = $("#answer").val(e)
// 	// if (answer = "d" ){
// 	// 	 e.preventDefault();

// 	// }
// 	// else{
// 	// 	console.log("hit it")
// 	// }
//     var name =$(".question").text()
//         $("#question").val(name);
//  //   console.log(answer)

// }

$( "#qa" ).submit(function( event ) {
	var answer = $("#answer").val()
  if (answer.length  > 1 ) {
    var name =$(".question").text()
    $("#question").val(name);
    return;
  }
  $("#warning").show()
  event.preventDefault();
})