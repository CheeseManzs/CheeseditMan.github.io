Reactor_Heat = 100;
Reactor_Power = 100;

document.getElementById("demo").innerHTML = Reactor_Power;

while(Reactor_Heat > 0){
Reactor_Power++;
Reactor_Heat = Reactor_Heat - 1;
}
