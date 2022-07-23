const DEL = document.getElementById('del');
const eliminar = document.getElementById('eliminar');
let elii;

let empty = [,];
const delate = () => {
	document.getElementById('operation').innerText = '';
	// document.getElementById('total').innerText = 'Total';
};


const operation = a => {
	elii = a;
	empty += a;
	return document.getElementById('operation').innerText += a
};

let total = () => {
try {
	document.getElementById('total').innerText = 
	eval(document.getElementById('operation').innerText);

	delate();

} catch (err) {
	document.getElementById('total').innerText = 'ERROR';
}}
const change = e => {
	e.value += operation.value;

}

const eli = () => {
	let some = document.getElementById('operation');
	let some2 = some.innerText.substring(0, some.innerText.length - 1);
	some.innerText = some2;
}