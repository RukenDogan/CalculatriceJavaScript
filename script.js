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
    display.textContent = display.textContent === "0" ? value : display.textContent + value;
  });
});

equalsButton.addEventListener("click", () => {
  if (Expression !== "") {
    number.push(parseFloat(Expression));
  }

  if (number.length === 0) {
    display.textContent = "0";
    return;
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
    if (operator[i] === '/' && number[i + 1] === 0) {
      display.textContent = "Erreur";
      number = [];
      operator = [];
      return; 
    }
  }

  display.textContent = result;

  Expression = result.toString();
  number = [];
  operator = [];
});