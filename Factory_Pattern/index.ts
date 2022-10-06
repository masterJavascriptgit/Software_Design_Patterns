class Developer<T> {
  constructor(public name: T, public type: T) {
    this.name = name;
    this.type = type;
  }
}

class Tester<T> {
  constructor(public name: T, public type: T) {
    this.name = name;
    this.type = type;
  }
}

class EmployeeFactory {
  static create = (name: string, type: string) => {
    switch (type) {
      case "Developer":
        return new Developer<string>(name, type);
      case "Tester":
        return new Tester<string>(name, type);
    }
  };
}

let list: any[] = [];

list.push(EmployeeFactory.create("John", "Developer"));
list.push(EmployeeFactory.create("Sara", "Tester"));
list.push(EmployeeFactory.create("Lara", "Developer"));
list.push(EmployeeFactory.create("Bob", "Tester"));

for (const employee of list) {
  console.log(employee);
}
