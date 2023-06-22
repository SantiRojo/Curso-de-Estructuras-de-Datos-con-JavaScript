// Creando un array
const array = ['Diego', 'Karen', 'Oscar'];

// Creando un array utilizando una clase
class MyArray {
  constructor() {
    this.lenght = 0;
    this.data = {}
  }

  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.lenght] = item;
    this.lenght++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.lenght - 1];
    delete this.data[this.lenght - 1]
    this.lenght--;
    return lastItem;
  }
  myDelete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }
  shiftIndex(index) {
    for (let i = index; i < this.lenght - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.lenght - 1];
    this.lenght--;
  }
}

const myArray = new MyArray();

console.log(myArray)

myArray.push('José');

myArray.push('Adriana');

myArray.push('Oscar');

console.log(myArray);

console.log(myArray.get(1));

myArray.pop();

console.log(myArray);

myArray.myDelete(1);

console.log(myArray);