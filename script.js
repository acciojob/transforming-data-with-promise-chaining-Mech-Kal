// Get elements
const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

// Utility function to create delayed promises
function delayOperation(value, operation, delayTime, message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = operation(value);
      output.innerText = `${message}: ${result}`;
      resolve(result);
    }, delayTime);
  });
}

// Event listener for button click
button.addEventListener("click", () => {
  const num = Number(input.value);
  if (isNaN(num)) {
    output.innerText = "Please enter a valid number!";
    return;
  }

  output.innerText = ""; // clear previous results

  // Chain of promises
  new Promise((resolve) => {
    setTimeout(() => {
      output.innerText = `Result: ${num}`;
      resolve(num);
    }, 2000);
  })
    .then((res) => delayOperation(res, (n) => n * 2, 2000, "Result"))
    .then((res) => delayOperation(res, (n) => n - 3, 1000, "Result"))
    .then((res) => delayOperation(res, (n) => n / 2, 1000, "Result"))
    .then((res) => delayOperation(res, (n) => n + 10, 1000, "Final Result"));
});
