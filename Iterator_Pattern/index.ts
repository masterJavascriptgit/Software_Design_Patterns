class _Iterator {
  public index: number;

  constructor(public items: any) {
    this.index = 0;
    this.items = items;
  }

  next() {
    return this.items[this.index++];
  }

  hasNext(): boolean {
    return this.index < this.items.length;
  }
}

const items: any = ["Sara", 20, false, 5.5, "ts"];

const iterator = new _Iterator(items);

while (iterator.hasNext()) {
  console.log(iterator.next());
}
