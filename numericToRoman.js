
//create array of number-roman numeric conversion
var conversionChart = [[1,4,5,9,10, 40, 50, 90, 100,
	400, 500, 900, 1000],['I', 'IV', 'V', 'IX', 'X',
	'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']];
var maxVal = 50000;

function enterListener(event) {
    if(event.which==13){
        document.getElementById("goRomanButton").click();
    }
}

function setPage() {
	//set directions to the chosen maximum value of input
	var directions = document.getElementById("directions");
	directions.innerHTML = directions.innerHTML + maxVal;

	//create background
	var text ='';
	for (var i=0; i<1000; i++) {
		text+= 'IV CMXCIX XVII CCX LXXVIII III LVI I XXIII';
	}
	document.getElementById('backgroundRomanNumerals').innerHTML=text;
}

function getRomanNumeric() {
	
	//ask user to input number
	var number = document.getElementById("number").value;

	//check input
	if (isNaN(number)) {
		alert('Please enter a valid number');
		return;
	} else if (number<0.5 || number >= (maxVal+0.5)) {
		alert('Please enter a value between 1 and '+maxVal);
		return;
	} else if (number != Math.round(number)) {
		alert('Note: '+number+' will be rounded to '+Math.round(number));
		number=Math.round(number);
	}

	//initiate roman numeric
	var romanNum = '';

	//iterate untill number is reduced to zero
	while (number>0) {
		//find biggest number in convertion chart that is smaller 
		//or equal to number
		for (var i = 12; i>=0; i--) {
			if (conversionChart[0][i] <= number) {
				break;
			}
		}
		romanNum+=conversionChart[1][i];
		number-=conversionChart[0][i];
	}


	//output roman numeric value
	document.getElementById("answer").value=romanNum;

}