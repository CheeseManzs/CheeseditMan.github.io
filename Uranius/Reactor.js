var Reactor_Heat = 5000;
var Reactor_Power = 0;
var Money = 100;
var Power_Cells = 1;

document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells + ' ($'+50*Power_cells+' for next order)';
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';

convert = function convert(){

Reactor_Power = Reactor_Power + (1*Power_Cells);
Reactor_Heat = Reactor_Heat + Math.round(1/Power_Cells);
document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells + ' ($'+50*Power_cells+' for next order)';
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
  
console.log(Reactor_Power)
}
sell = function sell(){
Money = Money + Reactor_Power
Reactor_Power = 0
Reactor_Heat = Math.round(Reactor_Heat/2)
document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells + ' ($'+50*Power_cells+' for next order)';
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
}
cell = function cell(){

if(Money >= 50*Power_Cells){
  Money = Money - 50;
  Power_Cells = Power_Cells + 1;
}
document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells + ' ($'+50*Power_cells+' for next order)';
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';

}

function addheat(x){
heat = heat + x

}

