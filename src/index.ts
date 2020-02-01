interface Person {
  name: string;
  age: number;
}

const john: Person = { age: 45, name: 'John' };

// eslint-disable-next-line no-console
console.log(`${john.name} is ${john.age} years old.`);
