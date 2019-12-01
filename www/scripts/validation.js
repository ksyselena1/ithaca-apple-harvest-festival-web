$(document).ready(function () {

    $("#interestform").on("submit", function() {
      var formValid = true;

      //Name
      if( $("#name").prop("validity").valid ) {
        $("#nameerror").addClass("hidden");
      } else {
        $("#nameerror").removeClass("hidden");
        $("#errorgeneral").removeClass("hidden");
        formValid = false;
      }

      //Age - desktop
      if( $("#age").prop("validity").valid ) {
        $("#ageerror").addClass("hidden");
      } else {
        $("#ageerror").removeClass("hidden");
        $("#errorgeneral").removeClass("hidden");
        formValid = false;
      }

      //Age - mobile
      if( $("#age").prop("validity").valid ) {
        $("#ageerror2").addClass("hidden");
      } else {
        $("#ageerror2").removeClass("hidden");
        $("#errorgeneral").removeClass("hidden");
        formValid = false;
      }

      //Gender
        if ( $("input[name='gender']").prop("validity").valid ) {
        $("#gendererror").addClass("hidden");
      } else {
        $("#gendererror").removeClass("hidden");
        $("#errorgeneral").removeClass("hidden");
        formValid = false;
      }

      //Expected number of people going - desktop
      if( $("#numPeople").prop("validity").valid ) {
        $("#numPeopleerror").addClass("hidden");
      } else {
        $("#numPeopleerror").removeClass("hidden");
        $("#errorgeneral").removeClass("hidden");
        formValid = false;
      }

      //Expected number of people going - mobile
      if( $("#numPeople").prop("validity").valid ) {
        $("#numPeopleerror2").addClass("hidden");
      } else {
        $("#numPeopleerror2").removeClass("hidden");
        $("#errorgeneral").removeClass("hidden");
        formValid = false;
      }

      //How did you hear
      if( $("#hear").prop("validity").valid ) {
        $("#hearerror").addClass("hidden");
        console.log("reached hear");
      } else {
        $("#hearerror").removeClass("hidden");
        $("#errorgeneral").removeClass("hidden");
        formValid = false;
      }

      //Expected Date
      if ( $("#date1").is(':checked') || $("#date2").is(':checked') || $("#date3").is(':checked')|| $("#date4").is(':checked')) {
      $("#dateerror").addClass("hidden");
      } else {
      $("#dateerror").removeClass("hidden");
      $("#errorgeneral").removeClass("hidden");
      formValid = false;
      }

      // Activity
      if ( $("#plan1").is(':checked') || $("#plan2").is(':checked') || $("#plan3").is(':checked')|| $("#plan4").is(':checked')|| $("#plan5").is(':checked')|| $("#plan6").is(':checked')) {
      $("#planserror").addClass("hidden");
      } else {
      $("#planserror").removeClass("hidden");
      $("#errorgeneral").removeClass("hidden");
      formValid = false;
      }

      return formValid;
    });

});
