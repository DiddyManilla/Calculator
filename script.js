$(document).ready(function() {
	function evaluate(formula) {
		formula = formula.split(" ");
		for (let i = 0; i < formula.length;) {
			let term = formula[i];
			switch(term) {
				case "^":
					formula.splice(i - 1, 3, Math.pow(Number(formula[i - 1]), Number(formula[i + 1])));
					break;
				default:
					i++;
			}
		}
		for (let i = 0; i < formula.length;) {
			let term = formula[i];
			switch(term) {
				case "*":
					formula.splice(i - 1, 3, Number(formula[i - 1]) * Number(formula[i + 1]));
					break;
				case "/":
					formula.splice(i - 1, 3, Number(formula[i - 1]) / Number(formula[i + 1]));
					break;
				default:
					i++;
			}
		}
		for (let i = 0; i < formula.length;) {
			let term = formula[i];
			switch(term) {
				case "+":
					formula.splice(i - 1, 3, Number(formula[i - 1]) + Number(formula[i + 1]));
					break;
				case "-":
					formula.splice(i - 1, 3, Number(formula[i - 1]) - Number(formula[i + 1]));
					break;
				default:
					i++;
			}
		}
		return Number(formula[0]);
	};
	$("#calc").on("click", function() {
		let result = evaluate($("#formula").val());
		if (result !== NaN) {
			$("#result").text(result);
		} else {
			$("#result").text("Oops, looks like we weren't able to evaluate your expression. Make sure you use a single space between two terms.");
		}
	});
});