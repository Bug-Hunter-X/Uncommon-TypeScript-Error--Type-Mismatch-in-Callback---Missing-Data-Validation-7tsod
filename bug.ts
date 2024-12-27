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

// Uncommon error case: Type mismatch in callback function

interface Person {
    name: string;
    age: number;
}

const people: Person[] = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 }
];

//Incorrect callback
people.forEach(person => {
    console.log(person.name.toUpperCase());
    // Uncommon error: missing age check before accessing age
    console.log(person.age);
    if (person.age < 0) {
        console.log('Age cannot be negative');
    }
});