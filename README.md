# Firebase Data Type Mismatch Error

This repository demonstrates a common error when using the Firebase SDK: receiving data in an unexpected format.  The `bug.js` file shows code that will throw an error if the `myString` field in the Firebase document is not a string.  The `bugSolution.js` demonstrates how to safely handle potential data type mismatches.

## Setup

1.  Clone this repository.
2.  Install Firebase:
```bash
npm install firebase
```
3.  Configure your Firebase project and replace placeholder values in the code.

## How to reproduce
Run `bug.js` . It will throw an error if 'myString' field is not a string in the firebase document. 

## Solution
The `bugSolution.js` file shows how to use type checking to avoid the error, and handle cases where the data is not in the expected format.