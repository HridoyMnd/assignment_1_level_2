### Title:
#### Essential TypeScript Concepts Every Developer Should Know

### Introduction:
##### TypeScript is a powerful superset of JavaScript that adds static typing to your code. This helps catch errors early, improve code quality, and provide better tooling support like autocompletion and refactoring.In this blog post, we’ll walk through some of the most important and commonly used TypeScript features that help make your code more reliable and maintainable.
 ##### Today We'll cover:
  * #### Differences between interfaces and types with example
  * #### Keyof keyword with example
  * #### Enums keyword with example
  * #### Inference keyword with example
  * #### Differences between union and intersection with example

### Interface and types:
In typescript Interface and type both are used to define the structure of objects.
However, they have some common different 

### Interface
    ➤ It can only be used to define the structure of an object  
    ➤ It supports declaration merging which means that, if you declare multiple interface with the same name the compiler will merge them into a single interface  
    ➤ It can extend other interfaces using the extends keyword  

### Example:
 // Interface example
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "John Doe",
  age: 30,
};  

### types
      ➤ It can be used to create type aliases which are essentially new names for existing types  
      ➤ It does not support declaration merging 
      ➤ It can be used to define the structure of an object, primitive types, union types and tuple types.

### Example: 
// Type example
type Point = {
  x: number;
  y: number;
};

const point: Point = {
  x: 10,
  y: 20,
};  
