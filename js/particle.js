function Particle() {

    this.centre = createVector(random(width), random(height));
    this.radius = random(30);
    this.angle = random(360);
    this.position = createVector(this.centre.x + this.radius*cos(this.angle), this.centre.y + this.radius*sin(this.angle));
    
    this.size = 1;
    this.escaped = false;


    this.move = function() {
	if (this.angle > 720 && random() < 0.01) {
	    this.escape();
	}
	if (!this.escaped) {
	    this.angle += 1;
	    this.position = createVector(this.centre.x + this.radius*cos(this.angle), this.centre.y + this.radius*sin(this.angle));
	} else {
	    this.dir = createVector(-sin(this.angle), cos(this.angle));
	    this.position.add(this.dir);
	    if (this.gone()) {
		this.reset();
	    }
	}
    }

    this.show = function() {
	noStroke();
	fill(255);
	circle(this.position.x, this.position.y, this.size);
    }

    this.escape = function() {
	this.escaped = true;
    }

    this.gone = function() {
	if (this.position.x < 0 || this.position.y < 0 || this.position.x > width || this.position.y > height) {
	    return true;
	}
	return false;
    }

    this.reset = function() {
	this.centre = createVector(random(width), random(height));
	this.radius = random(30);
	this.angle = random(360);
	this.escaped = false;
    }

}
