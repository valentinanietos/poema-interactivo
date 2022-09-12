// "Sigue a tu corazóm, el siempre conoce el camino"

let x1 = 1339;
let x2 = 1368;
let y = 265;
let y1 = -925;
let fondo = 0;


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    fondo = (248, 188, 211);
    
}

function draw (){

    //cuadrado fondo
    background(0);
    fill(fondo);
    rect(0, 0, windowWidth, windowHeight);
    //corazones
    //1
    push();
    noStroke();
    fill(235, 23, 12);
    ellipse(x1, y, 40, 40); 
    ellipse(x2, y, 40, 40);

    

    fill(235, 23, 12);
    translate(300, 100);
    rotate(40);
    rect(-590, -925, 40, 45);
    pop();

    

    //circulo mouse relleno
    push();
    fill(239, 34, 20, 200);
    noStroke();
    ellipse(mouseX, mouseY, 25, 25);
    pop();
      

    //circulo mouse
    noFill();
    stroke(248, 188, 211);//color rosita lindo
    strokeWeight(5);
    ellipse(mouseX, mouseY, 70, 70);


    if (mouseX < 50 && mouseY < 50) {
        cursor(CROSS);
        }
     
        else if (mouseX > 50 && mouseY > 50) {
         cursor('grab');
        }



   //laberinto
   //contorno
   stroke(255);
   strokeWeight(3);
   line(10, 640, 10, 20); //izq vertical 1
   line(10, 800, 10, 730); //izq vertical 2
   
   line(1300, 207, 1300, 20); //der vertical 1
   line(1300, 620, 1300, 320); //der vertical 2
   line(1300, 800, 1300, 620); //der vertical 3
   
   line(10, 20, 1300, 20); //arriba horizontal
   line(10, 800, 1300, 800); //abajo horizontal

   
   //interior
   //lineas horizontales y verticales
   //fila 1
   stroke(255);
   strokeWeight(3);
   line(230, 110, 120, 110); //hor
   line(10, 200, 230, 200); //hor
   line(230, 200, 230, 110); //ver
   line(10, 360, 120, 360); //hor
   line(120, 360, 120, 280); //ver
   line(10, 620, 120, 620); //hor

   //fila 2
   stroke(255);
   strokeWeight(3);
   line(350, 200, 350, 110); //ver
   line(460, 110, 350, 110); //hor
   line(460, 200, 350, 200); //hor
   line(460, 280, 460, 200); //ver
   line(10, 200, 230, 200); //hor
   line(460, 280, 230, 280); //hor
   line(230, 360, 230, 280); //ver
   line(230, 360, 350, 360); //hor
   line(350, 440, 350, 360); //ver
   line(350, 440, 120, 440); //hor
   line(120, 530, 120, 440); //ver
   line(350, 520, 120, 520); //hor
   line(350, 700, 350, 520); //ver
   line(350, 700, 120, 700); //hor
   line(230, 620, 230, 550); //ver

   //fila 3
   stroke(255);
   strokeWeight(3);
   line(460, 620, 350, 620); //hor
   line(460, 550, 460, 360); //ver.
   line(460, 800, 460, 620); //ver
   line(570, 360, 460, 360); //hor
   line(690, 550, 460, 550); //hor.
   line(570, 700, 570, 550); //ver.
   line(570, 410, 570, 490); //ver
   line(570, 20, 570, 280); //ver
   line(690, 280, 570, 280); //hor
   line(1000, 700, 570, 700); //hor
   line(690, 410, 570, 410); //hor
   line(690, 490, 570, 490); //hor

   //fila 4
   stroke(255);
   strokeWeight(3);
   line(690, 360, 690, 410); //ver
   line(690, 20, 690, 110); //ver
   line(1150, 110, 690, 110); //hor
   line(1300, 210, 690, 210); //hor
   line(1300, 320, 930, 320); //hor
   line(690, 360, 810, 360); //hor
   line(810, 210, 810, 440); //ver
   line(930, 320, 930, 440); //ver
   line(1050, 400, 1050, 550); //ver 
   line(1180, 400, 1180, 550); //ver 
   line(1300, 550, 810, 550); //hor
   line(810, 550, 810, 630); //ver
   line(1300, 620, 1000, 620); //hor
   line(1300, 700, 1200, 700); //hor
   line(1200, 700, 1200, 750); //ver
   line(700, 630, 810, 630); //hor

  
   if (dist (mouseX, mouseY, x1, y) < 100){
    fondo = color (248, 188, 211);
   }
   else{
    fondo = color (0);
   }
}