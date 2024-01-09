// Generics
// Generics Function
function swap<T>(arr: T[], index1: number, index2: number){
    const temp:T = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

// number type
let arr:number[] = [1,2,3];
swap(arr, 0, 2)

// string type
let arr1:string[] = ['a','b','c','d'];
swap(arr1, 0 ,2);
// console.log(arr1);

//Generics Classes
//stack class
class stack<T> {
    private items:T[] = [];
    push(item:T):void{
        this.items.push(item);
    }
    pop():T|undefined {
        return this.items.pop();
    }
}
// Number Type Stack
let stack1 = new stack<number>();
stack1.push(1);
stack1.push(2);
// console.log(stack1.pop());
// string type stack
let stack2 = new stack<string>();
stack2.push('a');
stack2.push('b');
// console.log(stack2.pop());


// Advance Type
// union
let variable: number|string;
// variable = 10;
variable = 'alok'
// console.log(variable)
//intersection
type car = {
    name:string;
    brand:string;
}
type electricity = car & {
    batterybackup: number;
}
const obj1:electricity = {
    name : "alto",
    brand : "maruti",
    batterybackup : 12
}
// console.log(obj1)

// revisit
// Decorators
// conditional type - start from here