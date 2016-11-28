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

var clear_input = function() {
	console.log("clear_input test");
	
	document.getElementsByName('convert_this')[0].value = "";
}

var convert_temperature = function () {
	console.log("convert_temperature test");

	// get temperature from text input
	var temp_to_convert = document.getElementsByName('convert_this')[0].value;

	console.log(temp_to_convert)

	// check radio button

	// do conversion of radio button

	// appendChild to the dom with the answer
}

// clear_input()