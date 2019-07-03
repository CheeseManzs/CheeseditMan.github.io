class Raiser{
PVector pos = new PVector(0, 0);
float changed;
void create(float x, float y, float v){
pos.x = x;
pos.y = y;
changed = v;
fill(200);
rect(pos.x, pos.y, 200, 150);
fill(255);
rect(pos.x, pos.y + 150, 200, 50);
textSize(45);
fill(0);
text(v, pos.x, pos.y + 150 + 45);
fill(200);
rect(pos.x, pos.y + 200, 200, 150);


if (mousePressed && (mouseButton == LEFT)) {
    changed += 1;
}






}
}
