float Airdensity = 12;
float gravity = 9.89; //M per sec^2
float loss = 0.95;
float buffer = 10;
float wind = 1;
boolean lines = true;
boolean cyclone = false;
boolean mute = false;
float cytime = second();
Raiser AD = new Raiser();
void setup(){

size(1500, 700);
Bounce = new SoundFile(this, "bounce.wav");

balls = new Ball[num];
  for (int i = 0; i < balls.length; i++) {
    balls[i] = new Ball(random(1, 10), random(6, 20), random(100, 1200) + 200, color(random(100, 200), random(100, 200), random(100, 200)), random(1, 1.5));
  }

}


int num = 5;
Ball[] balls;



void draw(){
background(255);

 for (Ball b : balls) {

  b.sim(); 
  
 }
 if(cyclone == true){
   if(second() > cytime + 1){
   println("cyclone!!!");
   wind += wind/5;
   wind *= -1;
   cytime = second();
   }
 }
}


void mousePressed(){
  
  if (mousePressed && (mouseButton == RIGHT)) {
    for (Ball b : balls) {

  b.pos.y = 0; 
  
 }
  }
  
}

void keyReleased(){

  
  if(key == 'm'){
  
    if(mute == true){
      mute = false;
      println("mute!");
    }
    if(key == 'u'){
      if(mute == false){
        mute = true;
        println("unmute!");
      }
    }
  }

}
