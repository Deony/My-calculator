var buttonNumber = document.getElementById("numbers"),
	buttonOperation = document.getElementById("operations"),
	// buttonOperation = document.querySelector("button.oper"),	
	displayField = document.getElementById("display"),
	buttonGetResult = document.getElementById("getResult"),
	buttonReset = document.getElementById("reset"),
	calculatorObject = {operator: calculation, result: '', newIndex: 1};


//Reset Button and Numbers
buttonNumber.addEventListener('click', getNumber, false);


function getNumber(element) {
	calculatorObject['num' + calculatorObject.newIndex] = Number(element.target.value);
	console.log(calculatorObject);
	console.log(typeof calculatorObject['num' + calculatorObject.newIndex]);
	display.call(calculatorObject, calculatorObject['num' + calculatorObject.newIndex]);
	buttonOperation.addEventListener('click', getOperator, false);
	buttonReset.addEventListener('click', resetResult, false);
	buttonGetResult.addEventListener('click', calculation, false);
}


function getOperator(op){
	calculatorObject.operator = op.target.value;
	console.log(calculatorObject)
	display.call(calculatorObject, calculatorObject.operator);
	calculatorObject.newIndex++;
}


function calculation() {
	var operator = calculatorObject.operator,
		j,
		result = Number(calculatorObject['num' + 1]);	

	if(operator == '+') {
		function sum() {			
			for (j = 2; j <= calculatorObject.newIndex; j += 1) {
				result += Number(calculatorObject['num' + j]);
			}
		return result;
		}

		calculatorObject.result = sum(); 
	}
	else if	(operator == '-') {
		function subtraction() {			
			for (j = 2; j <= calculatorObject.newIndex; j += 1) {
				result -= Number(calculatorObject['num' + j]);
			}
		return result;
		}
		
		calculatorObject.result = subtraction(); 
	}

	else if (operator == '*') {
		function multiplication() {			
			for (j = 2; j <= calculatorObject.newIndex; j += 1) {
				result *= Number(calculatorObject['num' + j]);
			}
		return result;
		}
		
		calculatorObject.result = multiplication(); 
	}

	else if (operator == '/') {
		function division() {			
			for (j = 2; j <= calculatorObject.newIndex; j += 1) {
				result /= Number(calculatorObject['num' + j]);
			}
		return result;
		}
		
		calculatorObject.result = division(); 
	}

	buttonOperation.removeEventListener('click', getOperator, false);
	buttonNumber.removeEventListener('click', getNumber, false);
	display.call(calculatorObject, calculatorObject.result);
	console.log('Result = '+calculatorObject.result);	
}


function resetResult() {
	var j;
	for (j = 1; j <= calculatorObject.newIndex; j += 1) {
		calculatorObject['num' + j] = 0;
	}
	calculatorObject.newIndex = 0;
	buttonOperation.addEventListener('click', getOperator, false);
	buttonNumber.addEventListener('click', getNumber, false);
}


function display(res) {
	displayField.innerText = res;
}