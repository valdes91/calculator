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

function operate(num1, num2, operator) {
	let answer;
	switch (operator) {
		case '+':
			answer = add(num1, num2);
			break;
		case '-':
			answer = subtract(num1, num2);
			break;
		case '*':
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
	console.log('number button was clicked');
	if (operatorSet) {
		secondNumber += newNumber;
	} else {
		firstNumber += newNumber;
	}
	updateDisplay();
}

function updateDisplay() {
	if (operatorSet) {
		bottomDisplay.textContent = secondNumber;
	} else {
		bottomDisplay.textContent = firstNumber;
	}
}

function clearAll() {
	operatorSet = false;
	selectedOperator = '';
	bottomDisplay.textContent = '0';
	firstNumber = bottomDisplay.textContent;
	secondNumber = '';
	topDisplay.innerHTML = '<br />';
}

const topDisplay = document.querySelector('.top');
const bottomDisplay = document.querySelector('.bottom');
let firstNumber = bottomDisplay.textContent;
let secondNumber;
let selectedOperator;
let operatorSet = false;

const numberBtns = document.querySelectorAll('.num');
const operatorBtns = document.querySelectorAll('.op');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');
const decimalBtn = document.querySelector('decimal');
const equalsBtn = document.querySelector('.done');

numberBtns.forEach((btn) => {
	btn.addEventListener('click', appendNumber);
});

clearBtn.addEventListener('click', clearAll);
