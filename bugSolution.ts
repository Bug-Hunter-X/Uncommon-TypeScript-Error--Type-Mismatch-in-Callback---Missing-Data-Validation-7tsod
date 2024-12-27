function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

let result = add(5, 3); // 8
result = subtract(10, 4); // 6
result = multiply(7, 2); // 14
result = divide(15, 3); // 5

interface Person {
    name: string;
    age: number;
}

const people: Person[] = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: -1 } // Added an example of an invalid age
];

people.forEach(person => {
    if(person.age >=0 ){
        console.log(person.name.toUpperCase());
        console.log(person.age);
    } else {
        console.log(`Age for ${person.name} is invalid`);
    }
});
