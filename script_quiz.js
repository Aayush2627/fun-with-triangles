const form=document.querySelector(".form");
const button=document.querySelector(".check");
const output=document.querySelector(".output");
const correctAnswer=["Equilateral Triangle","Right Triangle","180°","3","Acute angles","80°","3,4,5","6"]


function clickHandler(){
    let score =0;
    let index=0;
    const formResults= new FormData(form);
    for(let value of formResults.values()){
        console.log(value);
        if(value===correctAnswer[index]){
            score++;
        }index++;
    } 
    console.log(formResults.value);
    output.innerText="Your final score is "+ score;
}
button.addEventListener("click", clickHandler);