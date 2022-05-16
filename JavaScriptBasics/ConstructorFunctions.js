//Used to create objects
//Name: Pascal Notation


function CreateCircle(radius){
    
        this.radius=radius;
        this.draw=function(){
            console.log("drawing",radius);
        }

    
}

const c1=new CreateCircle(7);
c1.draw();