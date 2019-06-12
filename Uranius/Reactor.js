// Reactor Variables
var Research = 1;
var Reactor_Heat = 5000;
var Reactor_Power = 0;
var Money = 100;
var Power_Cells = 1;
var Reactor_Towers = 0;
var Reactor_Clusters = 0;
var Employees = 1;
var SleepingHalls = 1;
var Uranium = 0;
var Plutonium = 0;
var Plans = 1;



document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
document.getElementById("Price").innerHTML = 'Price for next cell: $'+ (Power_Cells*((45/100)*100));
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
document.getElementById("Hires").innerHTML = 'Employees: '+ Employees;
document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
document.getElementById("Plan").innerHTML = 'Reactor Plans: '+ Plans;
setInterval(function(){autoconvert()}, 100);
convert = function convert(){

Reactor_Power = (Reactor_Power + (1*Power_Cells))+((Employees+1)*10);
Reactor_Heat = Reactor_Heat + Math.round(Power_Cells/2);
Power_Cells = Power_Cells + Math.floor((Reactor_Towers*1.5))
Reactor_Towers = Reactor_Towers + (Reactor_Clusters*100)
// Overheat:
if(Reactor_Heat > Power_Cells*100){
Money = Money/2
}
document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
document.getElementById("Price").innerHTML = 'Price for next cell: $'+ (Power_Cells*((45/100)*100));
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
  document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
  document.getElementById("Hires").innerHTML = 'Employees: '+ Employees;
  document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
  
console.log(Reactor_Power)
}
//Auto Convert

autoconvert = function autoconvert(){

Reactor_Power = Reactor_Power + (1*Power_Cells);
Reactor_Heat = Reactor_Heat + Math.round((Power_Cells/2)/SleepingHalls);
cluster();
Money = Money - (Math.round(Employees*(Power_Cells/3))/SleepingHalls);
if(Money < 1){
 Employees = 0 
}
// Overheat:
if(Reactor_Heat > Power_Cells*100){
sell()

}
document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
document.getElementById("Price").innerHTML = 'Price for next cell: $'+ (Power_Cells*((45/100)*100));
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
document.getElementById("Research").innerHTML = 'Research: '+ Research;
  document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
  document.getElementById("Hires").innerHTML = 'Employees: '+ Employees;
  document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
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
document.getElementById("Price").innerHTML = 'Price for next cell: $'+ (Power_Cells*((45/100)*100));
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
  document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
  document.getElementById("Hires").innerHTML = 'Employees: '+ Employees;
  document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
}
cell = function cell(){

if(Money >= (Power_Cells*((45/100)*100))){
  Money = Money - (Power_Cells*((45/100)*100));
  Power_Cells = Power_Cells + 1;
}
document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
document.getElementById("Price").innerHTML = 'Price for next cell: $'+ (Power_Cells*((45/100)*100));
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
  document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
  document.getElementById("Hires").innerHTML = 'Employees: '+ Employees;
  document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
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
document.getElementById("Price").innerHTML = 'Price for next cell: $'+ (Power_Cells*((45/100)*100));
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
  document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
  document.getElementById("Hires").innerHTML = 'Employees: '+ Employees;
  document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;

}

cluster = function cluster(){
  if(Reactor_Towers > 99){
  Reactor_Clusters = Reactor_Clusters + 1*Plans
  Reactor_Towers = Reactor_Towers - 100
  
  
  }
document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
document.getElementById("Price").innerHTML = 'Price for next cell: $'+ (Power_Cells*((45/100)*100));
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
  document.getElementById("Hires").innerHTML = 'Employees: '+ Employees;
  document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
}
function addheat(x){
heat = heat + x

}
function employee(){
 Employees = Employees + 1 
  document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
document.getElementById("Price").innerHTML = 'Price for next cell: $'+ (Power_Cells*((45/100)*100));
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
  document.getElementById("Hires").innerHTML = 'Employees: '+ Employees;
  document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
}
function hall(){
  if (Money > 1999) {
    SleepingHalls = SleepingHalls + 1
    Money = Money - 10000
  }
  document.getElementById("Money").innerHTML = 'Money: $'+ Money;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
document.getElementById("Price").innerHTML = 'Price for next cell: $'+ (Power_Cells*((45/100)*100));
document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
  document.getElementById("Hires").innerHTML = 'Employees: '+ Employees;
  document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
}


function plutonium(){

  if (Uranium > 19 && Research > 100){
    Plutonium = Plutonium + 1
    Uranium = Uranium - 20
    document.getElementById("uran").innerHTML = 'Uranium: '+ Uranium;
    document.getElementById("pluto").innerHTML = 'Thorium: '+ Plutonium;
}
  
  document.getElementById("Money").innerHTML = 'Money: $'+ Money;
  document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
  document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
  document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
  document.getElementById("Price").innerHTML = 'Price for next cell: $'+ (Power_Cells*((45/100)*100));
  document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
  document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
    document.getElementById("Hires").innerHTML = 'Employees: '+ Employees;
    document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
}

function uranium(){

  if (Reactor_Clusters > 9999 && Research > 10){
    Uranium = Uranium + 1
    Reactor_Clusters = Reactor_Clusters - 10000
    document.getElementById("uran").innerHTML = 'Uranium: '+ Uranium;
  }
  document.getElementById("Money").innerHTML = 'Money: $'+ Money;
  document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
  document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
  document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
  document.getElementById("Price").innerHTML = 'Price for next cell: $'+ (Power_Cells*((45/100)*100));
  document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
  document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
    document.getElementById("Hires").innerHTML = 'Employees: '+ Employees;
    document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;
    

}

function Research(){



  Research += 1;
  Money -= 300000;



  document.getElementById("Money").innerHTML = 'Money: $'+ Money;
  document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
  document.getElementById("Status-Cell").innerHTML = 'Power Cells:'+ Power_Cells;
  document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat/10 + ' C';
  document.getElementById("Price").innerHTML = 'Price for next cell: $'+ (Power_Cells*((45/100)*100));
  document.getElementById("Tower").innerHTML = 'Reactor Towers: '+ Reactor_Towers;
  document.getElementById("Cluster").innerHTML = 'Reactors: '+ Reactor_Clusters;
    document.getElementById("Hires").innerHTML = 'Employees: '+ Employees;
    document.getElementById("Halls").innerHTML = 'Sleeping Halls: '+ SleepingHalls;


}



