# Uncommon TypeScript Error: Type Mismatch and Missing Data Validation

This repository demonstrates two types of errors in TypeScript:

1. **Type Mismatch in Callback Functions:** The example shows a common error when using callback functions with array methods. The code doesn't explicitly handle the possibility of null or undefined values that could result in runtime errors.
2. **Missing Data Validation:** The example demonstrates how easy it is to miss data validation when working with arrays. The code doesn't check for inconsistencies in data such as negative age values.

## How to Reproduce

1. Clone the repository.
2. Navigate to the repository's directory.
3. Compile the TypeScript code using `tsc bug.ts`.
4. Run the JavaScript code using `node bug.js`.

## Solution

The `bugSolution.ts` file provides a corrected version of the code, addressing the type mismatch and adding data validation.