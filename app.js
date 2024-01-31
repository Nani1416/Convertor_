let change=document.querySelector(".change");
let decrease_button=document.querySelector(".decrease");
let reset_button=document.querySelector(".reset");
let increase_button=document.querySelector(".increase");

decrease_button.addEventListener("click",()=>{
    let value=change.innerHTML;
    let number=parseInt(value);
    number=number-1;
    change.innerHTML=number;
    
});
reset_button.addEventListener("click",()=>{
    change.innerHTML=0;
});
increase_button.addEventListener("click",()=>{
    let value=change.innerHTML;
    let number=parseInt(value);
    number=number+1;
    change.innerHTML=number;
})

