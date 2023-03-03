const angle1 = document.querySelector("#angle1");
const angle2 = document.querySelector("#angle2");
const angle3 = document.querySelector("#angle3");
const check = document.querySelector(".check");
const output = document.querySelector(".output");

function checkButton() {
  var sum = Number(angle1.value) + Number(angle2.value) + Number(angle3.value);
  if (angle1.value && angle2.value && angle3.value) {
    if (sum === 180) {
      output.innerText = "Yess it is a triangle!";
    } else {
      output.innerText = "It is not a triangle!";
    }
  } else {
    output.innerText = "Please enter all values first!";
  }
}
check.addEventListener("click", checkButton);
