var buttonNumber = document.getElementById("numbers"),
	buttonOperation = document.getElementById("operations"),
	// buttonOperation = document.querySelector("button.oper"),	
	displayField = document.getElementById("display"),
	buttonGetResult = document.getElementById("getResult"),
	buttonReset = document.getElementById("reset"),
	calculatorObject = {operator: getOperator, result: '', quantity: 1};


buttonNumber.addEventListener('click', getNumber, false);


function getNumber(element) {
	if (calculatorObject['num' + calculatorObject.quantity] === undefined) {
		calculatorObject['num' + calculatorObject.quantity];
		calculatorObject['num' + calculatorObject.quantity] = element.target.value;
	}
	else {
		calculatorObject['num' + calculatorObject.quantity] += element.target.value;
	}

	console.log(calculatorObject);
	display.call(calculatorObject, calculatorObject['num' + calculatorObject.quantity]);
	buttonOperation.addEventListener('click', getOperator, false);
	buttonReset.addEventListener('click', resetResult, false);
	calculation.call(calculatorObject);	
}


function getOperator(op){

	//Makes calculation if there are two numbers. The result of calculation will be placed on the first place for the subsequent calculations
	if(calculatorObject.quantity === 2) {
		calculatorObject.quantity = 1;
		calculatorObject['num' + calculatorObject.quantity] = calculatorObject.result;
		calculatorObject['num2'] = '';
	}

	calculatorObject.operator = op.target.value;
	display.call(calculatorObject, chooseOperator());
	++calculatorObject.quantity;

	function chooseOperator(){
		return (calculatorObject.operator === '=') ? calculatorObject.result : calculatorObject.operator; 
	};
}


function calculation() {
	var operator = calculatorObject.operator,
		j,
		result = Number(calculatorObject['num' + 1]);	

	if(operator == '+') {
		function sum() {
			return Number(calculatorObject['num1']) + Number(calculatorObject['num2']);
		}

		calculatorObject.result = sum(); 
	}
	else if	(operator == '-') {
		function subtraction() {
			return Number(calculatorObject['num1']) - Number(calculatorObject['num2']);
		}
		
		calculatorObject.result = subtraction(); 
	}

	else if (operator == '*') {
		function multiplication() {
				return Number(calculatorObject['num1']) * Number(calculatorObject['num2']);
			}

		calculatorObject.result = multiplication(); 
	}

	else if (operator == '/') {
		function division() {
			return Number(calculatorObject['num1']) / Number(calculatorObject['num2']);
		}
		
		calculatorObject.result = division(); 
	}

	console.log('Current result = '+calculatorObject.result);	
}

//Reset all values that were entered
function resetResult() {
	calculatorObject['num1'] = '';
	calculatorObject['num2'] = '';
	calculatorObject.quantity = 0;
	buttonOperation.addEventListener('click', getOperator, false);
	buttonNumber.addEventListener('click', getNumber, false);
}

//Display the manipulations of the calculator on the Field
function display(res) {
	displayField.innerText = res;
}