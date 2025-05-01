const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

let Expression = "";

let number = [];
let operator = [];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      Expression = "";
      number = [];
      operator = [];

      display.textContent = "0";
      return;
    }

    if (["+", "-", "*", "/"].includes(value)) {
      if (Expression !== "") {
        number.push(parseFloat(Expression));
        Expression = "";
      }
      operator.push(value);
      display.textContent += value;
      return;
    }

    Expression += value;
    display.textContent = Expression;
  });
});

equalsButton.addEventListener("click", () => {
  if (Expression !== "") {
    number.push(parseFloat(Expression));
  }

  let result = number[0]; 


  for (let i = 0; i < operator.length; i++) {
    if (operator[i] === "+") {
      result += number[i + 1];
    } else if (operator[i] === "-") {
      result -= number[i + 1];
    } else if (operator[i] === "*") {
      result *= number[i + 1];
    } else if (operator[i] === "/") {
      result /= number[i + 1];
    }
  }

  display.textContent = result;

  Expression = result.toString();
  number = [];
  operator = [];
});