var Reactor_Heat = 5000;
var Reactor_Power = 0;
var Money = 100;
var Power_Cells = 1;

document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat;

convert = function convert(){

Reactor_Power = Reactor_Power*Power_Cells;
Reactor_Heat = Reactor_Heat - 1;
document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat;
  
console.log(Reactor_Power)
}
sell = function sell(){
Money = Reactor_Power
Reactor_Power = 0
document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat;
}
buycell = function cell(){
if(Money > 50){
Money = Money - 50
Power_Cells++
}
document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat;
}
function addheat(x){
heat = heat + x

}

