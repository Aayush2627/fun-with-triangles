const base = document.querySelector("#base");
const height = document.querySelector("#height");
const check = document.querySelector(".check");
const output = document.querySelector(".output");

function clickHandler(){
    let result=Math.sqrt(base.value*base.value + height.value*height.value)
    let final = result.toFixed(2);
    output.innerText= "Length of Hypotenuse is :"+final; 
}
check.addEventListener("click", clickHandler);