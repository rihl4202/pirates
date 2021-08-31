class Canon{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }
    display(){
        
        fill("lightgrey")
        push()
        translate(this.x,this.y)
        rotate(this.a)
        rect(-10,-20,this.w,this.h)
        pop()
        arc(this.x-30,this.y+90,140,200,PI,2*PI)
    }
}