
const handleClick=(val)=>{
    document.querySelector(".input-placeholder").innerHTML+=val.trim();
}
const handleOp=(op)=>{
  
    document.querySelector(".input-placeholder").innerHTML+=op.trim();
  
}
const handleEval=(expression)=>{
    
   try{
    const exp=eval(expression);
        if(exp==undefined)throw new Exception();
        if(exp=="Infinity")throw new Exception();
        document.querySelector(".input-placeholder").innerHTML=`${eval(expression)}`;
    
   }
   catch(e){
    alert("enter valid arguments");
    
   }
    
    
    

}

const handleClear=()=>{
    document.querySelector(".input-placeholder").innerHTML="";
}
document.querySelectorAll(".number-element").forEach((button)=>{
    button.addEventListener("click",()=>handleClick(button.innerHTML));
})
document.querySelectorAll(".op-element").forEach((button)=>{
    button.addEventListener("click",()=>handleOp(button.innerHTML));
})
document.querySelectorAll("#clear").forEach((button)=>{
    button.addEventListener("click",()=>handleClear());
})
document.querySelectorAll(".equal-element").forEach((button)=>{
    
    button.addEventListener("click",()=>handleEval(document.querySelector(".input-placeholder").innerHTML));
})