class Ground {
    constructor(x,y,width) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,40,options);
      this.width = width;
      this.image = loadImage("sprites/mainground.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(CENTER);
      image(this.image,pos.x, pos.y, this.width,40);
      pop();
    }
  };
