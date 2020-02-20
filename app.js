const buttons = document.querySelectorAll(".button");
const operations = document.querySelectorAll(".op");
const numbers = document.querySelectorAll(".num");
const answer = document.querySelector(".answer");
let next_op = "";
let arg1 = "";

buttons.forEach(function(button) {
  button.addEventListener("mousedown", function() {
    button.style.backgroundColor = "#aaaaaa";
  });

  button.addEventListener("mouseup", function() {
    button.style.backgroundColor = "lightgray";
  });

  button.addEventListener("mouseleave", function() {
    button.style.backgroundColor = "#d8d9db";
  });

  button.addEventListener("mouseover", function() {
    button.style.backgroundColor = "lightgray";
  });
});

operations.forEach(function(operation) {
  operation.addEventListener("mousedown", function() {
    operation.style.backgroundColor = "orange";
  });

  operation.addEventListener("mouseup", function() {
    operation.style.backgroundColor = "lightsalmon";
  });

  operation.addEventListener("mouseleave", function() {
    operation.style.backgroundColor = "#df974c";
  });

  operation.addEventListener("mouseover", function() {
    operation.style.backgroundColor = "lightsalmon";
  });

  operation.addEventListener("click", function() {
    if (arg1 === "") {
      arg1 = answer.innerText;
      answer.innerText = "0";
      next_op = operation.innerText;
    } else if (next_op === "+") {
      let result = Number(arg1) + Number(answer.innerText);
      answer.innerText = String(result);
      arg1 = String(result);
      next_op = operation.innerText;
    } else if (next_op === "-") {
      let result = Number(arg1) - Number(answer.innerText);
      answer.innerText = String(result);
      arg1 = String(result);
      next_op = operation.innerText;
    } else if (next_op === "×") {
      console.log("times");
      let result = Number(arg1) * Number(answer.innerText);
      answer.innerText = String(result);
      arg1 = String(result);
      next_op = operation.innerText;
    } else if (next_op === "÷") {
      console.log("divide");
      if (answer.innerText !== "0") {
        let result = Number(arg1) / Number(answer.innerText);
        answer.innerText = String(result);
        arg1 = String(result);
        next_op = operation.innerText;
      } else {
        console.log("Nice try! You can not divide by zero.");
      }
    }
  });
});

numbers.forEach(function(number) {
  number.addEventListener("click", function() {
    if (answer.innerText === "0") {
      answer.innerText = number.innerText;
    } else {
      answer.innerText = answer.innerText + number.innerText;
    }
  });
});

document.querySelector(".clear").addEventListener("click", function() {
  arg1 = "";
  answer.innerText = 0;
});
