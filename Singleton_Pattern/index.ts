interface State {
  name?: string;
  age?: number;
}

class Process implements State {
  constructor() {}
}

const Singleton = (function () {
  let instance: any;

  function createInstance() {
    return new Process();
  }

  return {
    getinstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

let processManager1 = Singleton.getinstance();
let processManager2 = Singleton.getinstance();

console.log(processManager1 == processManager2); // return true
