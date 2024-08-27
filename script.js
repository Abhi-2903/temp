let temperature = document.getElementById('temperature');
let Ctof = document.getElementById('CtoF');
let FtoC = document.getElementById('FtoC');
let result = document.getElementById('result');
let submit = document.getElementById('converttemp');
function convert(){
if(Ctof.checked){
    result.textContent = ((temperature.value * 9/5) + 32)+"°F";
}
else if(FtoC.checked){
    result.textContent = ((temperature.value - 32) * 5/9)+"°C";
}
else{
    result.textContent = "Please select a conversion type";
}
}