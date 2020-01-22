var t=[];

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(200);

	fill(255);
	textAlign(CENTER);
	text(hour(),152.6,250);
	text(":",166,250);
	textAlign(CENTER);
	text(minute(),176,250);
	text(":",186,250);
	textAlign(LEFT);
	text(second(),191.5,250);

	translate (width/2, height/2);
	rotate(PI);

	fill(255);
	rect(-100,0, 250, 48, 5);
	fill(50,100,100);
	rect(-100,0,250,(hour()/24 * 48),5);
	fill(0,0,0,0);
	fill(255);
	rect(0,0, 55, 120, 5);


	fill(255);
	rect(-50,0, 150, 120, 5);
	fill(1,1,60);
	rect(-50,0,150,(minute()/60 * 120),5);
	fill(0,0,0,0);
	fill(255);
	rect(0,0, 55, 120, 5);


	rect(0,0, 55, 120, 5)
	fill(200,25,60);
	rect(0,0,55,(second()/60 * 120),5);

}
      