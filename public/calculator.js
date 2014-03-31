// window.onload = (function(){
//   alert("Works!");
// });
$(document).ready(function(){
  event.preventDefault();
  $(':submit').click(function(){
    $('div#results').empty();
    var size = document.getElementById("size").value;
    var name = document.getElementById("name").value;

    var lighting = false;
    var hvac = false;
    var env = false;
    var lightingLength = $('input#lighting:checked').length;
    var hvacLength = $('input#hvac:checked').length;
    var envLength = $('input#env:checked').length;

    var rateLighting = 0.60;
    var rateHvac = 0.60;
    var rateEnv = 0.60;

    var benefitLighting = 0;
    var benefitHvac = 0;
    var benefitEnv = 0;

    // Checks the user entered a building size:
    if(size =="") {
      alert("Please enter a building size");
      return;
    //Checks the user entered a building size greater than or equal to 100,000 sqft: 
    } else if(parseInt(size) < 100000) {
        alert("Building size must be larger than 100,000 sqft");
        return;
    //Checks the user entered a name: 
    } else if(name.length == 0) {
        alert("Please eneter your name");
        return;     
    } else {
        var size = parseInt(size);
    };

// Checks if the lighting checkbox is selected:
    // alert("('input#lighting:checked').length is:  " +  lightingLength);
    if (lightingLength > 0) {
      lighting = true;
      benefitLighting = size * rateLighting;
    };
// Checks if the HVAC checkbox is selected:
    // alert("('input#hvac:checked').length is:  " +  hvacLength);
    if (hvacLength > 0) {
      hvac = true;
      benefitHvac = size * rateHvac;
    };
// Checks if the envelope checkbox is selected:
    // alert("('input#env:checked').length is:  " +  envLength);
    if(envLength > 0) {
      env = true;
      benefitEnv = size * rateEnv;
    };

    if(lighting == false && hvac == false && env == false) {
      alert("You must select at least one buidling efficiency to qualify");
    } else {
    var totalBenefits = (benefitLighting + benefitHvac + benefitEnv);
    $('div#results').show().append('<strong>Your total potential tax beenfit: $ </strong>' + totalBenefits);
    };
  });
});
