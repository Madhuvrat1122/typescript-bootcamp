// ***** Module 1: Introduction to TypeScript *******
// function display(name: string) : string {
//     return `Hello ${name}`;
// }

// const result: string = display("alok");
// console.log(result);


// Variables
let a : number = 10;
let b : string = "alok";
let c : boolean = true;
let d : number[] = [1,2,3];
// tuple
let e : [string, number] = ['alok',10];

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

// function
// explicit return type
function add(a: number, b: number):number {
    return a+b;
}
// inferred type
function pow(a: number, b: number) {
    return a*b;
}

let res1:number = add(2,3);
let res2:number = pow(2,3);

// console.log(res1)
// console.log(res2)

// interface
interface person {
    name: string,
    age: number,
    address?: string
};

let p1:person = {
    name: "alok",
    age: 12,
    address: "Jaipur"
}
// console.log(p1);

// classes
class Animal {
    private name:string;
    constructor(name:string){
        this.name = name;
    }
    makesound():string {
        return `some generic sound of ${this.name}`;
    }
    getName():string {
        return `This is ${this.name}`;
    }
}
// inheritance
class Dog extends Animal {
    constructor(name: string){
        super(name);
    }
    makesound():string {
        return `woof woof`;
    }
}

// let obj1 = new Animal("Dog");
// console.log(obj1.makesound());

let obj2 = new Dog("Dog");
// console.log(obj2.makesound());
// console.log(obj2.getName());

/* Challenge Exercise: Combining Concepts
Create a class Rectangle with properties length and width.
Add a method calculateArea to the Rectangle class.
Create an array of Rectangle objects with different dimensions.
Calculate and print the area of each rectangle. */
class Rectangle {
    private length: number;
    private width: number;
    constructor(length:number, width:number){
        this.length = length;
        this.width = width;
    }
    calculateArea(){
        return this.length*this.width;
    }
}

let Rectangles:Rectangle[] = [new Rectangle(10,20), new Rectangle(20, 30), new Rectangle(40,50)];
Rectangles.forEach((rectangle, index) => {
    console.log(`Rectangle No. ${index+1} :- ${rectangle.calculateArea()} :`);
})