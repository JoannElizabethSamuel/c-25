class Bird extends BaseClass{
    constructor(x, y) {

      super(x,y , 50,50) // super() ---> calls the the constructor of the immediate parent
      
      this.image = loadImage("sprites/bird.png");
      
    };
    display(){

      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();

      
    };
  };
  