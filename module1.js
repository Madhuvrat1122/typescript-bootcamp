// ***** Module 1: Introduction to TypeScript *******
// function display(name: string) : string {
//     return `Hello ${name}`;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// const result: string = display("alok");
// console.log(result);
// Variables
var a = 10;
var b = "alok";
var c = true;
var d = [1, 2, 3];
// tuple
var e = ['alok', 10];
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// function
// explicit return type
function add(a, b) {
    return a + b;
}
// inferred type
function pow(a, b) {
    return a * b;
}
var res1 = add(2, 3);
var res2 = pow(2, 3);
;
var p1 = {
    name: "alok",
    age: 12,
    address: "Jaipur"
};
// console.log(p1);
// classes
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makesound = function () {
        return "some generic sound of ".concat(this.name);
    };
    Animal.prototype.getName = function () {
        return "This is ".concat(this.name);
    };
    return Animal;
}());
// inheritance
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.makesound = function () {
        return "woof woof";
    };
    return Dog;
}(Animal));
// let obj1 = new Animal("Dog");
// console.log(obj1.makesound());
var obj2 = new Dog("Dog");
// console.log(obj2.makesound());
// console.log(obj2.getName());
/* Challenge Exercise: Combining Concepts
Create a class Rectangle with properties length and width.
Add a method calculateArea to the Rectangle class.
Create an array of Rectangle objects with different dimensions.
Calculate and print the area of each rectangle. */
var Rectangle = /** @class */ (function () {
    function Rectangle(length, width) {
        this.length = length;
        this.width = width;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.length * this.width;
    };
    return Rectangle;
}());
var Rectangles = [new Rectangle(10, 20), new Rectangle(20, 30), new Rectangle(40, 50)];
Rectangles.forEach(function (rectangle, index) {
    console.log("Rectangle No. ".concat(index + 1, " :- ").concat(rectangle.calculateArea(), " :"));
});
