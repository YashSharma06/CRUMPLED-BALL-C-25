class PaperBall {
    constructor(x,y) {
        var ball_options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,   
        }
        this.body = Bodies.circle( x, y, 10, ball_options);
        this.radius = 10;
        this.image = loadImage("sprites/paper.png");
        World.add(world,this.body); 
    }
    display(){
        
        var pos = this.body.position;
        push ();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 70, 70);
        pop ();
    }
}