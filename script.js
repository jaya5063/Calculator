
const display = document.getElementById("display")

function showNums(input){
    display.value += input;
}

function allClear(){
    display.value = " ";
}
function clear(){
    display.value = display.value.slice(0,-1);
}
function ans(){
    display.value = eval(display.value)
}