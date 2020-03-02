const buttons = document.querySelectorAll(".button");
const operations = document.querySelectorAll(".op");
const numbers = document.querySelectorAll(".num");
const answer = document.querySelector(".answer");
const equals = document.querySelector(".equals");
let next_op = "";
let arg1 = "";
let state = {
  X: 0,
  Y: 0,
  mode: "result",
  equalsMode: false,
  op: "+"
};

function executeOp() {
  console.log("Inside executeOp");
  if (state.op === "+") {
    return state.X + state.Y;
  } else if (state.op === "-") {
    return state.X - state.Y;
  } else if (state.op === "÷") {
    return state.X / state.Y;
  } else if (state.op === "×") {
    return state.X * state.Y;
  }
}

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
    state.Y = parseInt(answer.innerText);
    let result = executeOp();
    state.op = operation.innerText;
    state.Y = result;
    state.X = state.Y;
    answer.innerText = String(state.Y);
    state.mode = "result";
    state.equalsMode = false;
    console.log(state);
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
  });
});

equals.addEventListener("click", function() {
  if (!state.equalsMode) {
    console.log("executeOp");
    state.Y = parseInt(answer.innerText);
    let result = executeOp();
    state.X = state.Y;
    state.Y = result;
    answer.innerText = String(state.Y);
    state.mode = "result";
    state.equalsMode = true;
  } else if (state.equalsMode) {
    console.log("Equals Mode");
    let result = executeOp();
    state.Y = result;
    answer.innerText = String(state.Y);
    state.mode = "result";
    state.equalsMode = true;
  }
});

document.querySelector(".clear").addEventListener("click", function() {
  state.X = 0;
  state.Y = 0;
  state.mode = "result";
  equalsMode = false;
  op = "+";
  answer.innerText = "0";
});
