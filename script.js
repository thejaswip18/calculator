let display=document.querySelector(".display");
let buttons=document.querySelectorAll("button");

buttons.forEach((value)=>{
    value.onclick=()=>{
        if(value.id==="clear"){
            display.innerText="";
        }
        else if(value.id==="backspace"){
            let string=display.innerText.toString();
            display.innerText=string.substr(0,string.length-1);
        }
        else if(display.innerText!=="" && value.id=="equal"){
            display.innerText=eval(display.innerText);
        }
        else if(display.innerText=="" && value.id=="equal"){
            display.innerText="please Enter Values";
            setTimeout(()=>(display.innerText=""),2000);
        }
        else{
            display.innerText+=value.id;
        }
    }
})