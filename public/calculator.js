const buttons = document.querySelectorAll(".button");
const operations = document.querySelectorAll(".op");
const numbers = document.querySelectorAll(".num");
const answer = document.querySelector(".answer");
const equals = document.querySelector(".equals");
let state = {
  X: 0,
  Y: 0,
  mode: "result",
  equalsMode: false,
  opMode: false,
  op: "+"
};

function executeOp(num1, num2) {
  console.log("Inside executeOp");
  if (state.op === "+") {
    return num1 + num2;
  } else if (state.op === "-") {
    return num1 - num2;
  } else if (state.op === "÷") {
    return num1 / num2;
  } else if (state.op === "×") {
    return num1 * num2;
  }
}

equals.addEventListener("mousedown", function() {
  equals.style.backgroundColor = "#0078d7";
});

equals.addEventListener("mouseup", function() {
  equals.style.backgroundColor = "#0875c9";
});

equals.addEventListener("mouseleave", function() {
  equals.style.backgroundColor = "#34658a";
});

equals.addEventListener("mouseover", function() {
  equals.style.backgroundColor = "#0875c9";
});

buttons.forEach(function(button) {
  button.addEventListener("mousedown", function() {
    button.style.backgroundColor = "#8a8b8d";
  });

  button.addEventListener("mouseup", function() {
    button.style.backgroundColor = "#767676";
  });

  button.addEventListener("mouseleave", function() {
    button.style.backgroundColor = "black";
  });

  button.addEventListener("mouseover", function() {
    button.style.backgroundColor = "#767676";
  });
});

operations.forEach(function(operation) {
  operation.addEventListener("mousedown", function() {
    operation.style.backgroundColor = "#8a8b8d";
  });

  operation.addEventListener("mouseup", function() {
    operation.style.backgroundColor = "#767676";
  });

  operation.addEventListener("mouseleave", function() {
    operation.style.backgroundColor = "#333333";
  });

  operation.addEventListener("mouseover", function() {
    operation.style.backgroundColor = "#767676";
  });

  operation.addEventListener("click", function() {
    if (!state.opMode) {
      if (state.equalsMode) {
        state.Y = parseInt(answer.innerText);
      } else if (!state.equalsMode) {
        state.Y = parseInt(answer.innerText);
        let result = executeOp(state.X, state.Y);
        state.Y = result;
      }
      state.op = operation.innerText;
      state.X = state.Y;
      answer.innerText = String(state.Y);
      state.mode = "result";
      state.equalsMode = false;
    } else if (state.opMode) {
      // do nothing
      state.op = operation.innerText;
    }
    state.opMode = true;
  });
});

numbers.forEach(function(number) {
  number.addEventListener("click", function() {
    if (state.mode === "result") {
      answer.innerText = number.innerText;
      state.mode = "enter";
    } else {
      if (answer.innerText === "0") {
        answer.innerText = number.innerText;
      } else {
        answer.innerText = answer.innerText + number.innerText;
      }
    }
    state.opMode = false;
  });
});

equals.addEventListener("click", function() {
  if (!state.equalsMode) {
    state.Y = parseInt(answer.innerText);
    let result = executeOp(state.X, state.Y);
    state.X = state.Y;
    state.Y = result;
    answer.innerText = String(state.Y);
    state.mode = "result";
    state.equalsMode = true;

    console.log(state);
  } else if (state.equalsMode) {
    let result = executeOp(state.Y, state.X);
    state.Y = result;
    answer.innerText = String(state.Y);
    state.mode = "result";
    state.equalsMode = true;

    console.log(state);
  }
  state.opMode = false;
});

document.querySelector(".clear").addEventListener("click", function() {
  state.X = 0;
  state.Y = 0;
  state.mode = "result";
  equalsMode = false;
  op = "+";
  answer.innerText = "0";
});
