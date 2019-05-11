// Reactor Variables
var Reactor_Heat = 5000;
var Reactor_Power = 0;
var Money = 100;
var Power_Cells = 1;
var Reactor_Towers = 0;



document.getElementById("Money").innerHTML = 'Money: $'+ Math.round(Money);
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
document.getElementById("Price").innerHTML = 'Price for next cell: $'+ 50*Power_Cells;
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
setInterval(function(){autoconvert()}, 100);
convert = function convert(){

Reactor_Power = Reactor_Power + (1*Power_Cells);
Reactor_Heat = Reactor_Heat + Math.round(Power_Cells/2);
Power_Cells = Power_Cells + (Reactor_Towers*20)
// Overheat:
if(Reactor_Heat > Power_Cells*100){
Money = Money/2
}
document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
document.getElementById("Price").innerHTML = 'Price for next cell: $'+ 50*Power_Cells;
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
  
console.log(Reactor_Power)
}
//Auto Convert

autoconvert = function autoconvert(){

Reactor_Power = Reactor_Power + (1*Power_Cells);
Reactor_Heat = Reactor_Heat + Math.round(Power_Cells/2);
// Overheat:
if(Reactor_Heat > Power_Cells*100){
sell()

}
document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
document.getElementById("Price").innerHTML = 'Price for next cell: $'+ 50*Power_Cells;
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
  
console.log(Reactor_Power)
}


sell = function sell(){
Money = Money + Reactor_Power
Reactor_Power = 0
Reactor_Heat = Math.round(Reactor_Heat/2)
document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
document.getElementById("Price").innerHTML = 'Price for next cell: $'+ 50*Power_Cells;
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
}
cell = function cell(){

if(Money >= 50*Power_Cells){
  Money = Money - 50*Power_Cells;
  Power_Cells = Power_Cells + 1;
}
tower = function tower(){
  if(Power_Cells > 14){
    Reactor_Towers = Reactor_Towers + 1;
    Power_Cells = Power_Cells - 15;
  }
document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
document.getElementById("Price").innerHTML = 'Price for next cell: $'+ 50*Power_Cells;
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;

}

function addheat(x){
heat = heat + x

}


