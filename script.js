//todo: 
// - configure AJAX 
// - process JSON on page to lay out jokes correctly
// - make prettier?

//global var of our data set from the API
var QUESTION_SET = {}; 

//document ready sets up our on click actions
function one() {
  run(false)
}

function ten() {
  run(true)
}

//go get the data from the API
function run(num) {
    $("#output").empty();

    //configure your ajax call
    $.ajax({});
}

// process the response from the API
function process(data) {

}

