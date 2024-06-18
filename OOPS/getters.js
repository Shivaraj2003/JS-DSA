class Square{
    constructor(width){
        this.width = width;
    }

    get Area(){
     return this.width*this.width;
    }

    set Area(area)
    {
        this.width = Math.sqrt(area);
    }
}

let square1 = new Square(4);
square1.Area = 25;
console.log(square1.Area);