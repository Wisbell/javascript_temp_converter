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

var input_text_field = document.getElementById("convert_field");
console.log(input_text_field);
input_text_field.addEventListener("keypress", enter_key_listener);

var converted_temperature;

// var enter_key_listener = function (e) {
// 	if(e.keyCode == 13){
// 		convert_temperature();
// 	}
// }

function enter_key_listener(e){
	if(e.keyCode == 13){
		convert_temperature();
	}
}

var clear_input = function() {
	//console.log("clear_input test");
	
	// Grabs element with name 'convert_this' and puts it in an array which contains one item
	document.getElementsByName('convert_this')[0].value = "";

	document.getElementById("final_temp").innerHTML = '';
}

var convert_temperature = function () {
	//console.log("convert_temperature test");

	// gets value of the selected radio input - "fareinheit" or "celsius"
	var radio_value = document.querySelector('input[name="temp"]:checked').value;

	
	// 0 is fareinheit -  1 is celsius - To check to see if conversion is necessary
	var temp_type = document.getElementById("temp_type").selectedIndex;


	// gets temperature from text input field
	var temp_to_convert = document.getElementsByName('convert_this')[0].value;



	// Check to see if a conversion is already in the requested format
	var conversion_needed = check_if_conversion_needed();

	
	console.log(radio_value);

	if(conversion_needed) {
		if(radio_value === "fahrenheit") {
			console.log("Convert temp to fahrenheit");
			convert_to_fahrenheit(temp_to_convert);
		}

		else {
			console.log("Convert temp to Celcius")
			convert_to_celsius(temp_to_convert);
		}
	}
	
}

var check_if_conversion_needed = function(){

	console.log("check_if_conversion_needed - called")
	// gets value of the selected radio input - "fareinheit" or "celsius"
	var radio_value = document.querySelector('input[name="temp"]:checked').value;
	var temp_type = document.getElementById("temp_type").selectedIndex;

	if(radio_value === "fahrenheit" && temp_type === 0) {
		console.log("Temperature is already in fareinheit");
		document.getElementById("final_temp").textContent = "Temperature is already in fareinheit!";
		return false;
		
	}

	if(radio_value === "celsius" && temp_type === 1) {
		console.log("Temperature is already in celsius");
		document.getElementById("final_temp").textContent = "Temperature is already in celsius!";
		return false;
		
	}

	return true;

}


var convert_to_fahrenheit = function (temp_to_convert) {
	console.log("convert_to_fahrenheit test");
	
	converted_temperature = (temp_to_convert * (9/5)) + 32;
	console.log(converted_temperature);
	document.getElementById("final_temp").innerHTML = converted_temperature.toFixed(1);
}


var convert_to_celsius = function (temp_to_convert) {
	console.log("convert_to_celsius test");
	
	converted_temperature = (temp_to_convert - 32) * (5/9);
	console.log(converted_temperature);
	document.getElementById("final_temp").innerHTML = converted_temperature.toFixed(1);
	
}
