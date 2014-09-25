
//create array of number-roman numeric conversion
var conversionChart = [[1,4,5,9,10, 40, 50, 90, 100,
	400, 500, 900, 1000],['I', 'IV', 'V', 'IX', 'X',
	'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']];

function enterListener(event) {
    if(event.which==13){
        document.getElementById("goRomanButton").click();
    }
}

function getRomanNumeric() {
	
	//ask user to input number
	var number = document.getElementById("number").value;

	//check input
	if (isNaN(number)) {
		alert('Please enter a valid number');
		return;
	} else if (number<0.5 || number >= 1000.5) {
		alert('Please enter a value between 1 and 1000');
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