Reactor_Heat = 0;
Reactor_Power = 5000;

document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat;

while(Reactor_Heat > 0){
setTimeout(convert(), 1000)
}
function convert(){
Reactor_Power++;
Reactor_Heat = Reactor_Heat - 1;
document.getElementById("Status").innerHTML = 'Power:'+ Reactor_Power;
document.getElementById("Status-Heat").innerHTML = 'Heat: '+ Reactor_Heat;
}
function addheat(x){
heat = heat + x

}
