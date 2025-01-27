# Type 'string[]' is not assignable to type 'string'
This repository demonstrates a common TypeScript error: assigning an array of strings to a parameter expecting a single string.

## Bug
The `greeter` function expects a single string, but the code attempts to pass an array of strings.

## Solution
The solution involves either modifying the `greeter` function to accept an array or iterating over the array and calling `greeter` for each element.