class CryproCurrencyApi {
  constructor(readonly coin: string) {
    this.coin = coin;
  }

  getValue() {
    console.log("Api calling ...");

    switch (this.coin) {
      case "Bitcoin":
        return "$1000";
      case "Ethereum":
        return "$200";
      case "Riple":
        return "$5";
      case "Doge":
        return "$200";
    }
  }
}

class CryproCurrencyProxy {
  private catch: any;
  constructor() {
    this.catch = {};
  }

  getValue(coin: string) {
    if (this.catch[coin]) {
      return this.catch[coin];
    }

    this.catch[coin] = new CryproCurrencyApi(coin).getValue();
    return this.catch[coin];
  }
}

const api = new CryproCurrencyProxy();

console.log(api.getValue("Bitcoin"));
console.log(api.getValue("Bitcoin"));
console.log(api.getValue("Ethereum"));
console.log(api.getValue("Riple"));
console.log(api.getValue("Doge"));
console.log(api.getValue("Riple"));

/**
 * 
 * result :
    Api calling ...
    $1000
    $1000
    Api calling ...
    $200
    Api calling ...
    $5
    Api calling ...
    $200
    $5
 */
