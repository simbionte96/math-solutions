//Function to calculate the average of a set
function calculateAverage(list) {
	//This is a impretive form
	//let listSum = 0;
	//for (let i = 0; i < list.length; i++) {
	//listSum = listSum + list[i];
	//}

	//This is the declarative form. This form goes more to detail.
	const listSum = list.reduce(
		function (total, currentValue) {
			return total + currentValue
		}, 
	0);
	
	const listAverage = listSum / list.length;

	return listAverage;
}

function calculateAverageFromUser() {
	const list1Input = document.getElementById("input-list-1");
	const list1Value = list1Input.value;
	const list1 = list1Value.split(",").map(function(item) {return Number(item)});
	const finalCalculate = calculateAverage(list1);

	const resultAverage = document.getElementById("result-1");
	resultAverage.innerText = "El promedio de tu set de datos es: " + finalCalculate;
}



//Function to calculate the median of a set
function calculateMedianFromUser() {
	const list2Input = document.getElementById("input-list-2");
	const list2Value = list2Input.value;
	const list2 = list2Value.split(",").map(function(item) {return Number(item)});
	const sortedList2 = list2.sort(
		function(a, b) {
			return(a - b)
		}
	);

	const halfOfList2 = parseInt(sortedList2.length / 2);

	let median;

	function itIsPair(number) {
		if (number % 2 == 0) {
			return true;
		} else {
			return false;
		}
	}
	
	if (itIsPair(list2.length)) {
		const element1 = list2[halfOfList2 - 1];
		const element2 = list2[halfOfList2];
		median = calculateAverage([element1, element2]);
	} else {
		median = list2[halfOfList2];
	}
	
	const resultMedian = document.getElementById("result-2");
	resultMedian.innerText = "La mediana de tu set es: " + median;
}


//Function to calculate the mode of a set
function calculateModeFromUser() {
	const list3Input = document.getElementById("input-list-3");
	const list3Value = list3Input.value;
	const list3 = list3Value.split(",");
	const countList3 = {};

	list3.map(
		function(currentValue) {
			if ( countList3[currentValue] ) {
				countList3[currentValue] += 1;
			} else {
				countList3[currentValue] = 1;
			}
		}
	);

	//Object.entries returns an array of arrays
	const arrayList3 = Object.entries(countList3).sort(
		(a, b) => {a[1] - b[1]}
	);

	const mode = arrayList3[arrayList3.length-1];
	const resultMode = document.getElementById("result-3");
	resultMode.innerText = "La moda de tu set es: " + parseInt(mode);
}
