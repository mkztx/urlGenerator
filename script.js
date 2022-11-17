const inputs = document.querySelector('.inputs');
const outputs = document.querySelector('.outputs');

let numberOfInputs = 30;
function createInputs(number) {
	for (let i = 0; i < numberOfInputs; i++) {
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

createInputs(numberOfInputs);
function output() {
	const outputBox = document.querySelectorAll('.Text');
	outputBox.forEach((box) => {
		const input = document.querySelector(`.i${box.classList[2]}`);
		let lastText = input.value;
		const url = document.querySelector('.baseUrl');
		let baseUrl = url.value;
		const text = document.querySelector('.firstText');
		let textBefore = text.value;
		box.innerText = `${textBefore} ${baseUrl}/${lastText}`;
	});
}
