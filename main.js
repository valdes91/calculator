function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

function operate() {
	const num1 = Number(firstNumber);
	const num2 = Number(secondNumber);
	let answer;
	switch (selectedOperator) {
		case '+':
			answer = add(num1, num2);
			break;
		case '-':
			answer = subtract(num1, num2);
			break;
		case 'X':
			answer = multiply(num1, num2);
			break;
		case '/':
			answer = divide(num1, num2);
			break;
	}
	return answer;
}

function appendNumber(e) {
	const newNumber = e.target.textContent;
	const shouldAddNumber = checkZero(newNumber);

	if (shouldAddNumber) {
		appendValue(newNumber);
		updateDisplay();
	}
}

function checkZero(newNumber) {
	if (bottomDisplay.textContent === '0' && newNumber === '0') return false;
	if (bottomDisplay.textContent === '0') {
		bottomDisplay.textContent = '';
		if (operatorSet) {
			secondNumber = '';
		} else {
			firstNumber = '';
		}
	}
	return true;
}

function updateDisplay() {
	if (operatorSet) {
		bottomDisplay.textContent = secondNumber;
	} else {
		bottomDisplay.textContent = firstNumber;
	}
}

function reset() {}

function clearAll() {
	operatorSet = false;
	decimalSet = false;
	selectedOperator = '';
	bottomDisplay.textContent = '0';
	firstNumber = bottomDisplay.textContent;
	secondNumber = '';
	topDisplay.innerHTML = '<br />';
}

function deleteLastDigit() {
	if (bottomDisplay.textContent.length <= 1) {
		bottomDisplay.textContent = '0';
		return;
	}
	let newNum = bottomDisplay.textContent.slice(0, -1);
	let deletedValue = bottomDisplay.textContent.slice(-1);
	if (deletedValue === '.') decimalSet = false;
	bottomDisplay.textContent = newNum;
	if (operatorSet) {
		secondNumber = newNum;
	} else {
		firstNumber = newNum;
	}
}

function processDecimal(e) {
	if (decimalSet) return;

	const decimalPoint = e.target.textContent;
	appendValue(decimalPoint);
	updateDisplay();
	decimalSet = true;
}

function appendValue(value) {
	if (operatorSet) {
		secondNumber = (secondNumber || '') + value;
	} else {
		firstNumber = (firstNumber || '') + value;
	}
}

function shouldOperate() {
	return firstNumber !== null && secondNumber !== null && operatorSet;
}

function assignOperator(e) {
	operatorSet = true;
	//check if its an ongoing calculation or if this is the first operation the user has selected
	if (shouldOperate()) {
		console.log('an operation should be performed because both numbers are set');
		const answer = operate();
		console.log(`${firstNumber} ${selectedOperator} ${secondNumber} = ${answer}`);
	} else {
		console.log('no calculation possible!');
		decimalSet = false;
	}
	selectedOperator = e.target.textContent;
	topDisplay.textContent = `${firstNumber} ${selectedOperator} ${secondNumber || ''}`;
	console.log(`the operator that was selected is: ${selectedOperator}`);
}

function endCalculation() {
	if (shouldOperate()) {
		const answer = operate();
		topDisplay.textContent = `${firstNumber} ${selectedOperator} ${secondNumber} =`;
		firstNumber = answer;
		secondNumber = null;
		operatorSet = false;
		updateDisplay();
	}
}

const topDisplay = document.querySelector('.top');
const bottomDisplay = document.querySelector('.bottom');
let firstNumber = bottomDisplay.textContent;
let secondNumber = null;
let selectedOperator = null;
let operatorSet = false;
let decimalSet = false;

const numberBtns = document.querySelectorAll('.num');
const operatorBtns = document.querySelectorAll('.op');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');
const decimalBtn = document.querySelector('.decimal');
const equalsBtn = document.querySelector('.done');

numberBtns.forEach((btn) => {
	btn.addEventListener('click', appendNumber);
});

operatorBtns.forEach((btn) => {
	btn.addEventListener('click', assignOperator);
});

clearBtn.addEventListener('click', clearAll);
deleteBtn.addEventListener('click', deleteLastDigit);
decimalBtn.addEventListener('click', processDecimal);
equalsBtn.addEventListener('click', endCalculation);
