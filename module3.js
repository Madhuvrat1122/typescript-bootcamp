// Module 3: Event-Driven TypeScript
// Event Driven Architecture
// 1. Event Emitter
var MyEventEmiiter = /** @class */ (function () {
    function MyEventEmiiter() {
        this.listners = {};
    }
    // subscribe the events
    MyEventEmiiter.prototype.on = function (event, listner) {
        if (!this.listners[event]) {
            this.listners[event] = [];
        }
        this.listners[event].push(listner);
    };
    // emit the event
    MyEventEmiiter.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.listners[event]) {
            this.listners[event].forEach(function (listner) { return listner(args); });
        }
    };
    return MyEventEmiiter;
}());
var myEmitter = new MyEventEmiiter();
myEmitter.on('message', function (msg) {
    console.log("Hello ".concat(msg));
});
myEmitter.on('login', function (msg) {
    console.log("login req ".concat(msg));
});
var TypedEventEmitter = /** @class */ (function () {
    function TypedEventEmitter() {
        this.listners = {};
    }
    // subscribe the events
    TypedEventEmitter.prototype.on = function (event, listener) {
        if (!this.listners[event]) {
            this.listners[event] = [];
        }
        this.listners[event].push(listener);
    };
    // emit the event
    TypedEventEmitter.prototype.emit = function (event, data) {
        if (this.listners[event]) {
            this.listners[event].forEach(function (listner) { return listner(data); });
        }
    };
    return TypedEventEmitter;
}());
var myEmitter1 = new TypedEventEmitter();
myEmitter1.on('message', function (data) {
    console.log("Received message from ".concat(data.sender, ": ").concat(data.message));
});
// myEmitter1.emit('message', {sender: 'Alok', message: "Welcome!!"})
//*************Assignments ***************/
// Exercise 1: Custom Event Emitter
// Create a custom EventEmitter class that supports subscribing to events and emitting them. 
// The class should have methods on(eventName: string, listener: Function) to subscribe to events 
// and emit(eventName: string, ...args: any[]) to emit events with optional arguments.
var CustomEventEmitter = /** @class */ (function () {
    function CustomEventEmitter() {
        this.listeners = {};
    }
    CustomEventEmitter.prototype.on = function (event, listener) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(listener);
    };
    CustomEventEmitter.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.listeners[event]) {
            this.listeners[event].forEach(function (listner) { return listner(args); });
        }
    };
    return CustomEventEmitter;
}());
var customEvent = new CustomEventEmitter();
customEvent.on('message', function (data) {
    console.log("Hello ".concat(data));
});
var CustomTypedEventEmitter = /** @class */ (function () {
    function CustomTypedEventEmitter() {
        this.listeners = {};
    }
    CustomTypedEventEmitter.prototype.on = function (event, listener) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(listener);
    };
    CustomTypedEventEmitter.prototype.emit = function (event, data) {
        if (this.listeners[event]) {
            this.listeners[event].forEach(function (listner) { return listner(data); });
        }
    };
    return CustomTypedEventEmitter;
}());
var customTypedEvent = new CustomTypedEventEmitter();
customTypedEvent.on('message', function (data) {
    console.log("Hello ".concat(data.senderName, ": ").concat(data.messageBody));
});
// customTypedEvent.emit<customEventType>('message', { senderName: "Madhuvrat", messageBody: "How are you ?"});
// Exercise 3: Event Handling in a Class
// Create a class that represents a Button. This class should have a method onClick(callback: () => void) to subscribe to click events. 
// Implement the EventEmitter pattern to notify subscribers when the button is clicked.
var Button = /** @class */ (function () {
    function Button() {
        this.clickListners = [];
    }
    Button.prototype.onClick = function (callback) {
        this.clickListners.push(callback);
    };
    Button.prototype.click = function () {
        console.log('Button Clicked!!!');
        this.clickListners.forEach(function (listner) { return listner(); });
    };
    return Button;
}());
var btn = new Button();
btn.onClick(function () {
    console.log("Click event handled in subscriber 1.");
});
btn.onClick(function () {
    console.log("Click event handled in subscriber 2.");
});
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
var Person = /** @class */ (function () {
    function Person(name, age) {
        // Event handling
        this.listeners = {};
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            if (this._name !== newName) {
                var oldName = this._name;
                this._name = newName;
                this.emit('nameChanged', { oldName: oldName, newName: newName });
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (newAge) {
            if (this._age !== newAge) {
                var oldAge = this._age;
                this._age = newAge;
                this.emit('birthday', { oldAge: oldAge, newAge: newAge });
            }
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.on = function (event, listener) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(listener);
    };
    Person.prototype.emit = function (event, data) {
        if (this.listeners[event]) {
            this.listeners[event].forEach(function (listener) { return listener(data); });
        }
    };
    return Person;
}());
// Example usage
var person = new Person("Alice", 25);
// Subscribe to events
person.on('nameChanged', function (data) {
    console.log("Name changed from ".concat(data.oldName, " to ").concat(data.newName));
});
person.on('birthday', function (data) {
    console.log("Happy Birthday! Age changed from ".concat(data.oldAge, " to ").concat(data.newAge));
});
// Modify properties to trigger events
person.name = "Alicia";
person.age = 26;
