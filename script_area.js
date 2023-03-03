const sides = document.querySelectorAll("#side");
const check = document.querySelector(".check");
const output = document.querySelector(".output");
function semiParameter(a,b,c){
    const s =(a+b+c)/2;
    console.log(s);
    return s;
}
function calculateArea(s,a,b,c){
    const area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
    console.log(area);
    return area;
}
function clickHandler(){
    const value1=Number(sides[0].value)+Number(sides[1].value);
    const  
 value2=Number(sides[1].value)+Number(sides[2].value);
 const  
 value3=Number(sides[0].value)+Number(sides[2].value);
  if(value1>Number(sides[2].value) && value2>Number(sides[0].value)&& value3>Number(sides[1].value)) {
 
 const 
s=semiParameter(Number(sides[0].value),Number(sides[1].value),Number(sides[2].value))
    const area=calculateArea(s,Number(sides[0].value),Number(sides[1].value),Number(sides[2].value))
    output.innerText="The area of triangle is :"+area;
  }else{
    output.innerText="Addition of two values is smaller than one of the values, Please Enter correct values."
  }
}
check.addEventListener("click",clickHandler);