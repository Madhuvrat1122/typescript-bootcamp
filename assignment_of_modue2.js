//**********Assignments*******************
// Exercise 1: Generic Function
// Create a generic function called filterByType that takes an array and a type as arguments. 
// It should return a new array containing only the elements of the specified type.
//Solution[]:
function filterByType(arr, target) {
    return arr.filter(function (item) { return typeof item === target; });
}
var arr = [1, 2, 3, 'a', 'b'];
var result = filterByType(arr, 'number');
// console.log(result);
// Exercise 2: Decorator for Timing
// Create a method decorator timing that logs the execution time of a method. 
// Apply this decorator to a method of your choice in a class and test it.
//Solution[]:
// function logExecutionTime(target: any, descriptor?: any, propertyKey?: string) {
//     console.log(`Decorator For ${descriptor.name} called on :- ${new Date()}`);
// }
// class DecoratedClass {
//     constructor(){
//         console.log("Contructor created!!");
//     }
//     @logExecutionTime
//     displayHello(){
//         console.log("Hello World!!!");
//     }
// }
// const obj = new DecoratedClass();
// obj.displayHello();
// Exercise 3: Mapped Type for Optional Properties
// Create a mapped type called MakeOptional that takes an object type 
// and makes all its properties optional.
// Mapped type to make all properties optional
// type MakeOptional<T> = {
//     [K in keyof T]?: T[K];
// };
// Example usage
// interface Example {
//     name: string;
//     age: number;
//     country: string;
// }
// // Applying the mapped type
// type OptionalExample = MakeOptional<Example>;
// // Testing the mapped type
// const partialObject: OptionalExample = {
//     name: "John",
//     age: 25,
//     // country is now optional
// };
// console.log(partialObject)
// Exercise 4: Mapped Type for Required Properties
// Create a mapped type called MakeRequired that takes an object type and 
// makes all its properties required.
// type MakeRequired<T> = {
//     [K in keyof T]-?: T[K];
// };
// // Example usage
// interface Example {
//     name: string;
//     age: number;
//     country?: string;
// }
// // Applying the mapped type
// type RequiredExample = MakeRequired<Example>;
// // Testing the mapped type
// const partialObject: RequiredExample = {
//     name: "John",
//     age: 25,
//     country:"India"
// };
// Exercise 5: Conditional Type for Nullable
// Create a conditional type Nullable<T> that, given a type T, 
// returns T | null. Test it with different types.
