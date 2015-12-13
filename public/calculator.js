// window.onload = (function(){
//   alert("Works!");
// });

$(document).ready(function(){
  // alert("Works!");

    event.preventDefault();
    $('#user-results').hide();

    $(':submit').click(function(){
        $('#user-results').show(); 
        $('div#benefit-result').empty();
        $('div#size-result').empty();

        var size = document.getElementById("building-size").value;
        var name = document.getElementById("name").value;

        // DEFAULT VALUES
        // var lighting = false;
        // var hvac = false;
        // var env = false;

        var benefitLighting = 0;
        var benefitHvac = 0;
        var benefitEnv = 0;

        // CHECK IF USER SELECTED ANY OF THE EFFICIENCY SYSTEMS
        var lighting = $('input#lighting:checked').length;
        var hvac = $('input#hvac:checked').length;
        var env = $('input#env:checked').length;

        var rateLighting = 0.60;
        var rateHvac = 0.60;
        var rateEnv = 0.60;
        
        // VALIDATE BUILDING SIZE
        if(size =="") {
          alert("Please enter a building size");
          return;
        //Checks the user entered a building size greater than or equal to 100,000 sqft: 
        } else if(parseInt(size) < 100000) {
            alert("Building size must be larger than 100,000 sqft");
            return;
        //Checks the user entered a name: 
        // } else if(name.length == 0) {
            // alert("Please eneter your name");
            // return;     
        };

        var size = parseInt(size);

        // CALCULATE LIGHTING TAX BENEFIT
        // alert("('input#lighting:checked').length is:  " +  lighting);
          benefitLighting = size * rateLighting * lighting;
        // CALCULATE HVAC TAX BENEFIT
        // alert("('input#hvac:checked').length is:  " +  hvac);
          benefitHvac = size * rateHvac * hvac;
        
        // CALCULATE HVAC ENVELOPE BENEFIT
        // alert("('input#env:checked').length is:  " +  env);
          benefitEnv = size * rateEnv * env;

        var totalBenefits = (benefitLighting + benefitHvac + benefitEnv);


        if(lighting == false && hvac == false && env == false) {
          alert("You must select at least one buidling efficiency to qualify");
        } else {
        // DISPLAY RESULTS
        $('div#size-result').append('<strong>' +  size + ' </strong>');
        $('div#benefit-result').append('<strong>$' + totalBenefits + ' </strong>');
        };

    });
});
