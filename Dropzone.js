class Dropzone{
    constructor(x,y,width,height){
        var options={
        }
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
    }

    display(){
      push();
      fill("red");
      rectMode(CENTER);
      var pos=this.body.position;
      rect(pos.x,pos.y,this.width,this.height);
      pop();
    }
}