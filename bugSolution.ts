function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string[] {
  return persons.map(person => greeter(person));
}

let user = ["Alice", "Bob", "Charlie"];
console.log(greeterArray(user)); // Output: ['Hello, Alice', 'Hello, Bob', 'Hello, Charlie']