$(document).ready(function() {
  $("#votingForm").submit(function(event) {

    event.preventDefault();

    var ageInput = parseInt($("input#age").val());

    if (ageInput >= 18) {
      $(".ofAge").show();
      $(".underAge").remove();

    } else {
      $(".underAge").show();
      $("ofAge").remove();

    } 

    // $("button").hide();


  });
});
