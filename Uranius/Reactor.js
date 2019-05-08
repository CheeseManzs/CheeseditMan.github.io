var Reactor_Heat = 5000;
var Reactor_Power = 0;

document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat;

convert = function convert(){

Reactor_Power++;
Reactor_Heat = Reactor_Heat - 1;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat;
console.log(Reactor_Power)
}
function addheat(x){
heat = heat + x

}

