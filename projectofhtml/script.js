function equal(){
   
    forms.answer.value=eval(forms.answer.value);
} 
function mode(){

 
    forms.answer.value+="%";
    
}
function del(){
    
     var backspace= forms.answer.value;
     forms.answer.value=backspace.substr(0,backspace.length-1);
   document.getElementById("clear").style.color="red";
    
}
function clearall(){
   forms.answer.value='';

   


   
}

 