let canvas = document.getElementById('confetti');

let canvas.height = screen.height;
let canvas.width = screen.width;
let ctx = canvas.getContext('2D');

let pieces = [];
let max_pieces = 250;

let LastUpdateTime = Date.now();





function GetRandomColor(){
    let colors = ['red','blue','green','yellow'];
    return colors[Math.floor(Math.random()*colors.length)];
}

function Update(){
    now = Date.now();
    dt = now - LastUpdateTime;

    for (let i = pieces.length -1; i>0; i--){
        p = pieces[i];

        if (p.y > screen.width)
            {
                pieces.splice(i,1);
                continue;
            }

        p.y += p.gravity*dt;
        p.rotation += p.rotationspeed*dt;

        }

    LastUpdateTime = now;
    setTimeout(update,1);

}

function Draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(function(p){
        ctx.save();

        ctx.fillStyle = p.color;
        ctx.translate(p.x-(p.size/2),p.y-(p.size/2));
        ctx.rotate(p.rotation);
        ctx.fillRect(-p.size/2,-p.size/2,p.size,p.size);

        ctx.restore();

    });
    RequestAnimationFrame(Draw);
}


function Piece(x,y){

    this.x = x;
    this.y = y;
    this.size = (Math.random()*.5 +.75)*15;
    this.gravity = (Math.random()*.5 +.75)*.01;
    this.rotation = (Math.PI * 2) * Math.random();
    this.rotationspeed = (Math.PI * 2) * Math.random() * .001;
    this.color = GetRandomColor();

}

function Square(Piece){
    this.size =
}

function TicTac(Piece){
    this.size =
    }

function FillWithPieces(){
    while (pieces.length < max_pieces) {pieces.push(Pieces(Math.random()*screen.width,Math.random()*screen.height))};
}


function BigBoom() {

    FillWithPieces();

    while pieces.length>0{
        update();
        draw();
    }
}


boomBody = document.getElementById('body');

boomBody.addEventListener("click", function(event){
    event.preventDefault();
    BigBoom();
});
