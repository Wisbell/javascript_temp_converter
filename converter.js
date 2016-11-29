

var converted_temperature;

// Event Listener Help
// http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeypress_addeventlistener
// https://dzone.com/articles/back-basics-%E2%80%93-using-keyboard

var input_text_field = document.getElementById("convert_field");
input_text_field.addEventListener("keypress", enter_key_listener);


var convert_button = document.getElementById("convert_button");
convert_button.addEventListener("click", convert_button_listener);


var convert_button = document.getElementById("clear_button");
convert_button.addEventListener("click", clear_button_listener);


function convert_button_listener(){
	convert_temperature();
}

function clear_button_listener(){
	clear_input();
}

function enter_key_listener(e){
	if(e.keyCode == 13){
		convert_temperature();
	}
}

/* This does not work */
// var enter_key_listener = function (e) {
// 	if(e.keyCode == 13){
// 		convert_temperature();
// 	}
// }

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

	if (converted_temperature > 90) {
		document.getElementById("final_temp").style.color = "red";
	}

	else if (converted_temperature < 32) {
		document.getElementById("final_temp").style.color = "blue";
	}

	else {
		document.getElementById("final_temp").style.color = "green";
	}

}


var convert_to_celsius = function (temp_to_convert) {
	console.log("convert_to_celsius test");
	
	converted_temperature = (temp_to_convert - 32) * (5/9);
	console.log(converted_temperature);
	//document.getElementById("final_temp").style.color = "green";
	document.getElementById("final_temp").innerHTML = converted_temperature.toFixed(1);

	if (converted_temperature > 32) {
		document.getElementById("final_temp").style.color = "red";
	}

	else if (converted_temperature < 0) {
		document.getElementById("final_temp").style.color = "blue";
	}

	else {
		document.getElementById("final_temp").style.color = "green";
	}
	
}