// Module 3: Event-Driven TypeScript
// Event Driven Architecture
// 1. Event Emitter
class MyEventEmiiter {
    listners: { [event: string] : Function[] } = {};
    // subscribe the events
    on(event: string, listner: Function) {
        if(!this.listners[event]){
            this.listners[event] = [];
        }
        this.listners[event].push(listner);
    }
    // emit the event
    emit(event: string, ...args: any[]){
        if(this.listners[event]){
            this.listners[event].forEach(listner => listner(args));
        }
    }
}

const myEmitter = new MyEventEmiiter();
myEmitter.on('message', (msg: string) => {
    console.log(`Hello ${msg}`);
})
myEmitter.on('login', (msg: string) => {
    console.log(`login req ${msg}`);
})
// myEmitter.emit('message', 'Madhuvrat Gupta');

// 2. Strongly Typed Events
interface MessageEvent {
    sender: string,
    message: string
}
class TypedEventEmitter  {
    listners: { [event: string] : Function[] } = {};
    // subscribe the events
    on<T>(event: string, listener: (data: T) => void): void {
        if(!this.listners[event]){
            this.listners[event] = [];
        }
        this.listners[event].push(listener);
    }
    // emit the event
    emit<T>(event: string, data: T):void {
        if(this.listners[event]){
            this.listners[event].forEach(listner => listner(data));
        }
    }
}

const myEmitter1 = new TypedEventEmitter();
myEmitter1.on<MessageEvent>('message', (data: MessageEvent) => {
    console.log(`Received message from ${data.sender}: ${data.message}`);
});
// myEmitter1.emit('message', {sender: 'Alok', message: "Welcome!!"})

//*************Assignments ***************/
// Exercise 1: Custom Event Emitter
// Create a custom EventEmitter class that supports subscribing to events and emitting them. 
// The class should have methods on(eventName: string, listener: Function) to subscribe to events 
// and emit(eventName: string, ...args: any[]) to emit events with optional arguments.
class CustomEventEmitter {
    listeners: { [event: string] : Function[]} = {};
    on(event: string, listener: Function) {
        if(!this.listeners[event]){
            this.listeners[event] = [];
        }
        this.listeners[event].push(listener);
    }
    emit(event: string, ...args: any[]){
        if(this.listeners[event]){
            this.listeners[event].forEach(listner => listner(args));
        }
    }
}

const customEvent = new CustomEventEmitter();
customEvent.on('message', (data) => {
    console.log(`Hello ${data}`);
})
// customEvent.emit('message', 'Madhuvrat Gupta!!!');

// Exercise 2: Typed Event Emitter
// Extend the custom EventEmitter class from Exercise 1 to support strongly typed events. 
// Introduce a mechanism that associates each event with a specific type, 
// ensuring that listeners and emitters are working with the correct event types.
interface customEventType {
    senderName: string,
    messageBody: string
}
class CustomTypedEventEmitter {
    listeners: { [event: string] : Function[]} = {};
    on<T>(event: string, listener: (data: T) => void): void {
        if(!this.listeners[event]){
            this.listeners[event] = [];
        }
        this.listeners[event].push(listener);
    }
    emit<T>(event: string, data: T): void{
        if(this.listeners[event]){
            this.listeners[event].forEach(listner => listner(data));
        }
    }
}

const customTypedEvent = new CustomTypedEventEmitter();
customTypedEvent.on<customEventType>('message', (data: customEventType) => {
    console.log(`Hello ${data.senderName}: ${data.messageBody}`);
})
// customTypedEvent.emit<customEventType>('message', { senderName: "Madhuvrat", messageBody: "How are you ?"});

// Exercise 3: Event Handling in a Class
// Create a class that represents a Button. This class should have a method onClick(callback: () => void) to subscribe to click events. 
// Implement the EventEmitter pattern to notify subscribers when the button is clicked.
class Button {
    clickListners: Function[] = [];
    onClick(callback: () => void): void {
        this.clickListners.push(callback)
    }
    click(){
        console.log('Button Clicked!!!');
        this.clickListners.forEach(listner => listner());
    }
}

const btn = new Button();
btn.onClick(() => {
    console.log("Click event handled in subscriber 1.");
})
btn.onClick(() => {
    console.log("Click event handled in subscriber 2.");
})
// btn.click();

// Exercise 4: Asynchronous Event Handling
// Modify the EventEmitter class to support asynchronous event handling. 
// Introduce a method like onAsync(eventName: string, asyncListener: Function) and update the emit method to handle asynchronous listeners.
// class AsyncEventEmitter {
//     private listeners: { [event: string]: Function[] } = {};

//     onAsync(event: string, asyncListener: Function): void {
//         if (!this.listeners[event]) {
//             this.listeners[event] = [];
//         }
//         this.listeners[event].push(asyncListener);
//     }

//     async emitAsync(event: string, ...args: any[]): Promise<void> {
//         if (this.listeners[event]) {
//             await Promise.all(this.listeners[event].map((listener) => listener(...args)));
//         }
//     }
// }

// // Example usage
// const asyncEmitter = new AsyncEventEmitter();

// // Subscribe to an asynchronous event
// asyncEmitter.onAsync('asyncMessage', async () => {
//     console.log("Async event handled in subscriber 1.");
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     console.log("Async operation completed in subscriber 1.");
// });

// asyncEmitter.onAsync('asyncMessage', async () => {
//     console.log("Async event handled in subscriber 2.");
//     await new Promise(resolve => setTimeout(resolve, 500));
//     console.log("Async operation completed in subscriber 2.");
// });

// // Emit an asynchronous event
// asyncEmitter.emitAsync('asyncMessage');

// Exercise 5: Extend Existing Class with Events
// Extend an existing class, such as a Person class, to support events. 
// Introduce events like birthday or nameChanged and allow other parts of the application to subscribe to and react to these events.
class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        if (this._name !== newName) {
            const oldName = this._name;
            this._name = newName;
            this.emit('nameChanged', { oldName, newName });
        }
    }

    get age(): number {
        return this._age;
    }

    set age(newAge: number) {
        if (this._age !== newAge) {
            const oldAge = this._age;
            this._age = newAge;
            this.emit('birthday', { oldAge, newAge });
        }
    }

    // Event handling
    private listeners: { [event: string]: Function[] } = {};

    on(event: string, listener: Function): void {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(listener);
    }

    emit(event: string, data: any): void {
        if (this.listeners[event]) {
            this.listeners[event].forEach((listener) => listener(data));
        }
    }
}

// Example usage
const person = new Person("Alice", 25);

// Subscribe to events
person.on('nameChanged', (data: { oldName: string, newName: string }) => {
    console.log(`Name changed from ${data.oldName} to ${data.newName}`);
});

person.on('birthday', (data: { oldAge: number, newAge: number }) => {
    console.log(`Happy Birthday! Age changed from ${data.oldAge} to ${data.newAge}`);
});

// Modify properties to trigger events
person.name = "Alicia";
person.age = 26;
