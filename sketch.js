var particles = [];
const N = 10;

function setup() {
    createCanvas(700, 700);
    angleMode(DEGREES);
    for (let i = 0; i < N; i++) {
	particles.push(new Particle());
    }
    background(0);
}

function draw() {
    for (let i = 0; i < particles.length; i++) {
	particles[i].move();
	particles[i].show();
    }

}
