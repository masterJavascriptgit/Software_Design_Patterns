class Observer {
  private observers: Function[];

  constructor() {
    this.observers = []; // List of functions
  }

  subscribe(fn: Function) {
    this.observers.push(fn);
  }

  unSubscribe(fn: Function) {
    this.observers = this.observers.filter((f) => f != fn);
  }

  fire() {
    this.observers.forEach((observer) => observer());
  }
}

const event1 = () => console.log("subscribe 1");
const event2 = () => console.log("subscribe 2");
const event3 = () => console.log("subscribe 3");

const observer = new Observer();

observer.subscribe(event1);
observer.subscribe(event2);
observer.subscribe(event3);

observer.unSubscribe(event2);

observer.fire();

// result -> .subscribe 1 ,  .subscribe 3
