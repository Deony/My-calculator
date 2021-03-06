var buttonNumber = document.getElementById("numbers"),
	buttonOperation = document.getElementById("operations"),
	// buttonOperation = document.querySelectorAll("button.oper"),
	displayField = document.getElementById("display"),
	buttonGetResult = document.getElementById("getResult"),
	buttonReset = document.getElementById("reset"),
	calculatorObject = {operator: getOperator, result: '', quantity: 1},
	calc = {
		'+': function() {
			return Number(calculatorObject['num1']) + Number(calculatorObject['num2']);
		},

		'-': function() {
			return Number(calculatorObject['num1']) - Number(calculatorObject['num2']);
		},
		
		'*': function() {
				return Number(calculatorObject['num1']) * Number(calculatorObject['num2']);
			},

		'/': function() {
			return Number(calculatorObject['num1']) / Number(calculatorObject['num2']);
		}
	};
	calculatorObject.prototype = calc;

// window.addEventListener('keyup', getNumber, false) ||
buttonNumber.addEventListener('click', getNumber, false)


function getNumber(element) {
	if (calculatorObject['num' + calculatorObject.quantity] === undefined || calculatorObject['num' + calculatorObject.quantity] === 0) {
		calculatorObject['num' + calculatorObject.quantity];
		calculatorObject['num' + calculatorObject.quantity] = element.target.value;
	}
	else {
		calculatorObject['num' + calculatorObject.quantity] += element.target.value;
	}

// var aa=element.keyCode;
// console.log(aa);
// var vv=document.querySelector(`button[data-key="${aa}"]`);

	console.log(calculatorObject);
	display.call(calculatorObject, calculatorObject['num' + calculatorObject.quantity]);
	buttonOperation.addEventListener('click', getOperator, false);
	buttonReset.addEventListener('click', resetResult, false);

	if (calculatorObject.quantity === 2) {
		calculation.call(calculatorObject);
	}	
}


function getOperator(op){	

	//Makes calculation if there are two numbers. The result of calculation will be placed on the first place for the subsequent calculations
	if(calculatorObject.quantity === 2) {
		calculatorObject.quantity = 1;
		calculatorObject['num1'] = calculatorObject.result;
		calculatorObject['num2'] = 0;
	}

	calculatorObject.operator = op.target.value;
	console.log(calculatorObject.operator);
	display.call(calculatorObject, chooseOperator());
	++calculatorObject.quantity;

	function chooseOperator(){
		return (calculatorObject.operator === '=') ? calculatorObject.result :
				(calculatorObject.operator === 'C') ? (calculatorObject.result = 0) :
				calculatorObject.operator; 
	};
}


function calculation() {
	this.result = calc[this.operator]();
	console.log('Current result = '+this.result);
}

//Reset all values that were entered
function resetResult() {
	calculatorObject['num1'] = 0;
	calculatorObject['num2'] = 0;
	calculatorObject.result = 0;
	calculatorObject.quantity = 0;
	buttonOperation.addEventListener('click', getOperator, false);
	buttonNumber.addEventListener('click', getNumber, false);
}

//Display the manipulations of the calculator on the Field
function display(res) {
	displayField.value = res;
}