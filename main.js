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

const firstNumber = document.querySelector('.first-number');
const secondNumber = document.querySelector('.second-number');
const operator = document.querySelector('.operator');
