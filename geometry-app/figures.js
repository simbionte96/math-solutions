//Code of square
function squarePerimeter(side) {
	return side * 4;
}


function squareArea(side) {
	return side * side;
}


//Code of triangle
function trianglePerimeter(side1, side2, base) {
	return side1 + side2 + base;
}


function triangleArea(base, height) {
	return (base * height) / 2;
}


//Code od circle
function circleDiameter(radius) {
	return radius * 2;
}


//PI
const PI = Math.PI;

function circleCircumference(radius) {
	const diameter = circleDiameter(radius);
	return diameter * PI;
}


function circleArea(radius) {
	return (radius * radius) * PI;
}


// Conection with html
// Functions for the square
function calculateSquarePerimeter() {
	const input = document.getElementById("square-side");
	const value = input.value;

	const perimeter = squarePerimeter(value);
	alert(perimeter);
}


function calculateSquareArea() {
	const input = document.getElementById("square-side");
	const value = input.value;

	const area = squareArea(value);
	alert(area);
}


//Functions for the triangle
function calculateTrianglePerimeter() {
	const side1 = document.getElementById("triangle-side-1");
	const valueOfSide1 = Number(side1.value);
	const side2 = document.getElementById("triangle-side-2");
	const valueOfSide2 = Number(side2.value);
	const base = document.getElementById("triangle-base");
	const valueOfBase = Number(base.value);

	const perimeter = trianglePerimeter(valueOfSide1, valueOfSide2, valueOfBase);
	alert(perimeter);
}


function calculateTriangleArea() {
	const base = document.getElementById("triangle-base");
	const valueOfBase = Number(base.value);
	const height = document.getElementById("triangle-height");
	const valueOfHeight = Number(height.value);
	
	const area = triangleArea(valueOfHeight, valueOfBase);
	alert(area);
}


//Functions for the circle
function calculateCircleCircumference() {
	const radius = document.getElementById("circle-radius");
	const valueOfRadius = Number(radius.value);

	const circumference = circleCircumference(valueOfRadius);
	alert(circumference);
}


function calculateCircleArea() {
	const radius = document.getElementById("circle-radius");
	const valueOfRadius = Number(radius.value);

	const area = circleArea(valueOfRadius);
	alert(area);
}
