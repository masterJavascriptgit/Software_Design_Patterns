class UPS {
  public name: string;

  constructor() {
    this.name = "UPS";
  }

  calculate = (): number => {
    return 25;
  };
}

class FedEx {
  public name: string;

  constructor() {
    this.name = "FEDEX";
  }

  calculate = (): number => {
    return 30;
  };
}

// Wrapper class

class Shipping {
  public company: any;

  setStrategy = (company: any): void => {
    this.company = company;
  };

  calculate() {
    return this.company.calculate();
  }
}

const shipping = new Shipping();

shipping.setStrategy(new UPS());

console.log(`Ups strategy : ${shipping.calculate()}`);

shipping.setStrategy(new FedEx());

console.log(`FedEx strategy : ${shipping.calculate()}`);
