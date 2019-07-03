class Ball{



float Density, Mass, Hardness;
color col = color(255, 125, 255);
float[] prevlocx = new float[0];
float[] prevlocy = new float[0];
Ball(float a, float b, float x, color c, float h){
Density = a;
Mass = b;
pos.x = x;
col = c;
Hardness = h;
Volume = Mass/Density;
}
float Volume = Density*Mass;

PVector pos = new PVector(100, 0);
PVector vel = new PVector(0, 0);

void sim(){
for(int i = 0; i < prevlocx.length; i++){
if(lines == true){
rect(prevlocx[i], prevlocy[i], 2, 2);
noStroke();
}
}
ellipse(pos.x, pos.y, Volume*10, Volume*10);
fill(col);
vel.y += (Mass*(gravity/9.89))/(Airdensity*5);
vel.x += (wind*(Airdensity/5))/Mass;
pos.x += vel.x;
pos.y += vel.y - vel.y/10;

if(pos.y + Volume*5 > height - buffer){
pos.y -= vel.y;
vel.y = -abs(vel.y/Hardness)*0.95;
Bounce.amp(vel.y/18/Hardness);
if(mute == false){

}
}
if(pos.x + Volume*5 > width - buffer){
pos.x -= vel.x;
vel.x = -abs(vel.x)*0.9;
Bounce.amp(vel.x/18);
if(mute == false){
Bounce.play();
}
}
if(pos.x - Volume*5 < 0 + buffer){
pos.x -= vel.x;
vel.x = abs(vel.x)*0.9;
Bounce.amp(vel.x/18);
println(vel.x/18);
if(mute == false){
Bounce.play();
}
}

if(pos.y + Volume > height + 100){
pos.y = 0;
vel.y = 0;

}
prevlocx = append(prevlocx, pos.x);
prevlocy = append(prevlocy, pos.y);

}




void collision(Ball Ball){

if(dist(pos.x, pos.y, Ball.pos.x, Ball.pos.y) < 0){

  pos.x -= -abs(vel.x);
  vel.x *= -1;
  pos.y -= vel.y;
  vel.y *= -1;
  Ball.pos.x -= -abs(Ball.vel.x);
  Ball.vel.x *= -1 ;
 Ball.pos.y -= -abs(Ball.vel.y);
  Ball.vel.y *= -1; 
  

}
}

}
