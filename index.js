var display = document.getElementById("result");

function getText(value){
    String(value)
    display.textContent += value;
}
function calculate(){

    var ques = display.textContent;
    ans = eval(ques);
    display.textContent=ans;
}
function cleared(){
    display.textContent = " " ;
}
function backspace(){
    var ans = display.textContent;
    slicedAns = ans.slice(0,-1);
    display.textContent = slicedAns;
}

