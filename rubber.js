class Rubber {
    constructor(x, y, width, height){
        var options = {
            'density':1,
            'friction':5,
            ' restitution':.3
        }
        this.body = Bodies.ellipse(x,y, width, height, )
        this.width = 50
        this.height = 50

        World.add(world, this.body)
    }
    display(){
        var pos =this.body.position
        pos.x=mouseX
        pos.y=mouseY
        var angle = this.body.angle
        push();
        translate(pos.x, pos.y)
        rotate(angle)
        ellipseMode(RADIUS)
        strokeWeight(4)
        stroke("black")
        fill("blue")
        ellipse(0,0, this.width, this.height)
        pop()
    }
 

}
