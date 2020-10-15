const canvas = document.getElementById("particle-screen");
const ctx = canvas.getContext("2d");
const PARTICLE_COLOR = "#C7E7F3";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = {
    x: null,
    y: null,
    radius: (canvas.height/80) * (canvas.width/80) //raza cercului care inconjoara cursorul va fi d.p. cu dimensiunea canvasului
};


//un event listener pentru a afla pozitia cursorului in canvas
window.addEventListener("mousemove", event => {
    mouse.x = event.x;
    mouse.y = event.y;
})

let particles;

//va genera particule de dimensiuni random
function createParticles(){
    particles = [];
    let numberOfParticles = (canvas.height * canvas.width) / 9000; //numarul de particule va fi d.p. cu dimensiunea canvasului
    for(let i = 0; i < numberOfParticles; i++){
        let size = (Math.random() * 5) + 1;
        // punctele x si y vor fi random intre 0 si dimensiunea canvasului, 
        // iar dimensiunea unei particule va fi buffer area pentru a ne asigura ca nu se spawneaza in afara canvasului
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        // directionX si directionY reprezinta viteza de miscare pe axele respective, care va fi generata random intre -2.5 si 2.5
        let directionX = (Math.random() * 5) - 2.5;
        let directionY = (Math.random() * 5) - 2.5;
        let color = PARTICLE_COLOR;

        particles.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

function gameLoop(){
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for(let i=0; i < particles.length; i++){
        particles[i].update();
    }

    ctx.font = "30px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText("IT-LABS", canvas.width/2-50, canvas.height/2);

    connectParticles();
    requestAnimationFrame(gameLoop);
}

// verifica daca particulele sunt suficient de apropriate pentru a desena o linie de legatura intre ele
function connectParticles(){
    for(let a=0; a<particles.length; a++){
        for(let b=a; b<particles.length; b++){
            let distance = ((particles[a].x - particles[b].x)
            * (particles[a].x - particles[b].x)
            + (particles[a].y - particles[b].y) * 
            (particles[a].y - particles[b].y));

            if(distance < (canvas.width/7) * (canvas.height/7)){
                ctx.strokeStyle = "rgba(199, 231, 243, 1)";
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }
    }
}

window.addEventListener("resize", () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    mouse.radius = ((canvas.height / 80) * (canvas.height / 80));
    createParticles();
})

window.addEventListener("mouseout", () => {
    mouse.x = undefined;
    mouse.y = undefined;
})

createParticles();
gameLoop();