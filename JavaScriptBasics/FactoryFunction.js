// Used to Create objects
//Name in CamelCase

function createCircle(radius){
    return {
        radius,
        draw(){
            console.log("drawing")
        }

    }
}

let c1= createCircle(5);
console.log(c1.radius);
c1.draw();