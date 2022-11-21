const inputs = document.querySelector('.inputs');
const outputs = document.querySelector('.outputs');
let mode = '';

let numberOfInputs = 30;
let created = 0;
function createInputs(number) {
	if (created == 0) {
		created = 1;
		for (let i = 0; i < number; i++) {
			const inputBox = document.createElement('div');
			inputBox.classList.add('Box');
			const input = document.createElement('input');
			input.classList.add('input2', `i${i}`);
			input.setAttribute('Value', 'last Text');
			inputBox.appendChild(input);
			inputs.appendChild(inputBox);
			const outputBox = document.createElement('div');
			outputBox.classList.add('Box', 'Text', `${i}`);
			outputBox.innerText = 'Text';
			outputs.appendChild(outputBox);
		}
	}
}
const arrayOfOutput = [];
// createInputs(numberOfInputs);
function output() {
	if (mode == 'singleMode') {
		const outputBox = document.querySelectorAll('.Text');
		outputBox.forEach((box) => {
			const input = document.querySelector(`.i${box.classList[2]}`);
			let lastText = input.value;
			const url = document.querySelector('.baseUrl');
			let baseUrl = url.value;
			const text = document.querySelector('.firstText');
			let textBefore = text.value;
			box.innerText = `${textBefore} ${lastText} ${baseUrl}`;
			arrayOfOutput.push(`${textBefore} ${lastText} ${baseUrl}`);
		});
	} else if (mode == 'massMode') {
		//creating output box
		const outputBox = document.createElement('div');
		const outputText = document.createElement('p');
		const massTextValue = document.querySelector('.massInput').value;
		let output = massTextValue
			.split('\n')
			.join(',')
			.split('.')
			.join(',')
			.split(',');
		for (x in output) {
			const url = document.querySelector('.baseUrl');
			let baseUrl = url.value;
			const text = document.querySelector('.firstText');
			let textBefore = text.value;
			let lastText = output[x];
			arrayOfOutput.push(`${textBefore} ${lastText} ${baseUrl}`);
		}
		let convertedOutput = arrayOfOutput.join('\n');
		outputText.innerText = `${convertedOutput}`;
		outputBox.appendChild(outputText);
		outputs.appendChild(outputBox);
	}
}
function copy() {
	if (mode == 'singleMode') {
		let outputText = arrayOfOutput.join('\n');
		window.alert(outputText);
	} else if (mode == 'massMode') {
		let convertedOutput = arrayOfOutput.join('\n');
		window.alert(convertedOutput);
	}
}
function createSingleMode() {
	mode = 'singleMode';
	const number = document.querySelector('.numberOfInputs');
	createInputs(number.value);
}
function massMode() {
	mode = 'massMode';
	//creating input box
	const inputBox = document.createElement('div');
	const input = document.createElement('textarea');
	const instruction = document.createElement('p');
	instruction.innerText = 'Insert all of yours last texts';
	inputBox.appendChild(instruction);
	input.classList.add('massInput');
	input.setAttribute('type', 'text');
	inputBox.appendChild(input);
	inputBox.classList.add('massInputBox');
	inputs.appendChild(inputBox);
}

function closing() {
	const instruction = document.querySelector('.instruction');
	instruction.style.display = 'none';
}
function showInfo() {
	const instruction = document.querySelector('.instruction');
	instruction.style.display = 'flex';
}
