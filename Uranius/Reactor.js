Reactor_Heat = 100;
Reactor_Power = 100;

document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat;

while(Reactor_Heat > 0){
Reactor_Power++;
Reactor_Heat = Reactor_Heat - 1;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat;
}
function addheat(x){
heat = heat + x

}
