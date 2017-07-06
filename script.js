
alert ("Welcome back to the Temperature Converter!")

var userTemp = prompt('What is your temperature?')
var userDegree = prompt('What degree scale...Fahrenheit or Celsius?')


function convertTemp(userTemp,userDegree){


  if (userDegree === "Celsius") {
        console.log ((userTemp + "\u00B0" + "C" + "  " + (userTemp * 9/5 + 32).toFixed(1)) + "\u00B0" + "F");
  }   else if (userDegree === "Fahrenheit") {
        console.log ((userTemp + "\u00B0" + "F" + " " + (userTemp-32)*(5/9)) + "\u00B0" + "C");
  }   else {
        console.log ("Select again please.");
  }

  }
convertTemp(userTemp,userDegree); 
