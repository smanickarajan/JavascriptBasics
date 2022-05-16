class Animal{
    constructor(name){
        this.name=name;
    }

    eats(){
        console.log(this.name+' eats food');
    }
}

class Alligator extends Animal{
    eats(){
        console.log(this.name+'eats fishes')
    }
}

let animal= new Animal('Dog');
animal.eats();

let animal1= new Alligator('Murphy');
animal1.eats();