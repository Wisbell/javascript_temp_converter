/* Write a program that will convert a temperature from 
fahrenheit to celsius, or from celsius to fahrenheit. */

/* In the HTML, have one input field where someone can enter in a 
temperature.*/

/* Create a radio button group where Celsius or Fahrenheit can be
 selected as the scale that the number should be converted to. */

/*Create a block level element that will hold the text of 
the converted temperature.*/

/*Create a button that, when clicked, displays the converted 
temperature.*/

/*Create another button that, when clicked, clears any text 
in the input field.*/

/*Add an event handler to the input field that checks if the 
user pressed the enter key, and if that happens, perform
 the conversion.*/

/*If the temperature is greater than 90F/32C the color of 
the converted temperature should be red.*/

/*If the temperature is less than 32F/0C the color of the 
converted temperature should be blue.*/

/*For any other temperature, the color should be green.
*/

var converted_temperature

var clear_input = function() {
	//console.log("clear_input test");
	
	// Grabs element with name 'convert_this' and puts it in an array which contains one item
	document.getElementsByName('convert_this')[0].value = "";
}

var convert_temperature = function () {
	//console.log("convert_temperature test");

	
	// 0 is fareinheit -  1 is celsius - To check to see if conversion is necessary
	var temp_type = document.getElementById("temp_type").selectedIndex;


	// gets temperature from text input field
	var temp_to_convert = document.getElementsByName('convert_this')[0].value;


	// Check to see if the input is already in the requested format
	console.log(check_if_conversion_needed() + "is false");

	if(check_if_conversion_needed()){
		console.log(check_if_conversion_needed() + "is false");
		return false;
	};

	console.log("This shouldnt run")






	// Calculate Celsius to fareinheit

	convert_to_fareinheit(temp_to_convert);

	// appendChild to the dom with the answer

	var temperature_output = converted_temperature + "&deg;";

	document.getElementById("final_temp").innerHTML = temperature_output;
	//document.getElementById("final_temp").createTextNode("")



	
}

var check_if_conversion_needed = function(){

	// gets value of the selected radio input - "fareinheit" or "celsius"
	var radio_value = document.querySelector('input[name="temp"]:checked').value;

	if(radio_value === "fahrenheit") {
		if (temp_type === 0) {}
			console.log("Temperature is already in fareinheit");
			return false;
	}
}


var convert_to_fareinheit = function (temp_to_convert) {
	console.log("convert_to_fareinheit test");
	converted_temperature = round((temp_to_convert * (9/5)) + 32);
	console.log(converted_temperature);
}

var convert_to_celsius = function () {
	
}


// http://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-in-javascript
function round(x, digits){
  return parseFloat(x.toFixed(digits))

    /*
    round(1.222,  2) ;
 	// 1.22
    round(1.222, 10) ;
 	// 1.222
 	*/
}
