let canvas = document.getElementById('confetti');

canvas.height = screen.height;
canvas.width = screen.width;
let ctx = canvas.getContext('2d');

let pieces = [];
let max_pieces = 50;

let LastUpdateTime = Date.now();





function GetRandomColor(){
    let colors = ['#f00', '#0f0', '#00f', '#0ff', '#f0f', '#ff0'];
    return colors[Math.floor(Math.random()*colors.length)];
}

function Update(){
    now = Date.now();
    dt = now - LastUpdateTime;

    for (let i = pieces.length -1; i>= 0; i--){
        p = pieces[i];

        if (p.y > canvas.height)
            {
                pieces.splice(i,1);
                continue;
            }

        p.y += p.gravity*dt;
        p.rotation += p.rotationSpeed*dt;

        }

    while (pieces.length < max_pieces) {
        pieces.push(new Piece(Math.random() * canvas.width, -20));
    }

    LastUpdateTime = now;
    setTimeout(Update,1);

}

function Draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(function(p){
        ctx.save();

        ctx.fillStyle = p.color;
        ctx.translate(p.x+(p.size/2),p.y+(p.size/2));
        ctx.rotate(p.rotation);
        ctx.fillRect(-p.size/2,-p.size/2,p.size*3,p.size);

        ctx.restore();

    });
    requestAnimationFrame(Draw);
}


function Piece(x,y){

    this.x = x;
    this.y = y;
    this.size = (Math.random()*.5 +.75)*10;
    this.gravity = (Math.random()*.5 +.75)*.1;
    this.rotation = (Math.PI * 2) * Math.random();
    this.rotationSpeed = (Math.PI * 2) * (Math.random()-.5) * .001;
    this.color = GetRandomColor();

}

function FillWithPieces(){
    while (pieces.length < max_pieces) {pieces.push(new Piece(Math.random()*screen.width,Math.random()*screen.height))};
}




FillWithPieces();
Update();
Draw();