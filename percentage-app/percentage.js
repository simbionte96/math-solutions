function calculatePercentageToPay(value, discount) {
	const percentageToPay = 100 - discount;
	const finalValue = (value * percentageToPay) / 100;

	return finalValue;
}


//Conection with html
function calculate() {
	const inputValue = document.getElementById("input-value");
	const value = inputValue.value;
	const inputDiscount = document.getElementById("input-discount");
	const discount = inputDiscount.value;
	const finalCalculate = calculatePercentageToPay(value, discount);

	const result = document.getElementById("result");
	result.innerText = "El valor con el descuento es: " + finalCalculate;
}
