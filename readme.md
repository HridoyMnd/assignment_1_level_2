### Title:
#### Essential TypeScript Concepts Every Developer Should Know

### Introduction:
 TypeScript is a powerful superset of JavaScript that adds static typing to your code. This helps catch errors early, improve code quality, and provide better tooling support like autocompletion and refactoring.In this blog post, we’ll walk through some of the most important and commonly used TypeScript features that help make your code more reliable and maintainable.
 ##### Today We'll cover:
  * #### Differences between interfaces and types with example
  * #### Keyof keyword with example
  * #### Enums keyword with example
  * #### Inference type with example
  * #### Differences between union and intersection type with example

### Interface and types:
In typescript Interface and type both are used to define the structure of objects.
However, they have some common different 

### Interface
    ➤ It can only be used to define the structure of an object  
    ➤ It supports declaration merging which means that, if you declare multiple interface with the same name the  
       compiler will merge them into a single interface  
    ➤ It can extend other interfaces using the extends keyword  

### Example:
//define the structure an object   
interface Person {  
  name: string;  
  age: number;  
}  

// Declaration merging extending the same interface name  
interface Person {  
  address:string;    
}  

//extend the another interface  
interface Person2 extends Person {  
  role: "admin" | "superadmin";  
}  
### types
      ➤ It can be used to create type aliases which are essentially new names for existing types  
      ➤ It does not support declaration merging 
      ➤ It can be used to define the structure of an object, primitive types, union types and tuple types.

### Examples: 
//type aliases (custom name for existing type)  
type UserID = string;  

//primitive type  
type Status = "active" | "inactive";  

//union type  
type Response = string | number;  

// tuple type  
type Point = [number, number];  

//object   
type Point = {    
  x: number;  
  y: number;  
};  

const point: Point = {  
  x: 10,  
  y: 20,  
};    
### KeyOf 
In TypeScript, keyof is a type operator that extracts the keys of an object type as a union of string or number literal types. It is useful for working with objects in a type-safe way, especially when dealing with dynamic data or generic functions.  
### Example:
type User = {  
  id: number
  name: string;  
  age: number;    
};  

type PersonKeys = keyof User;  

### Enums
Enums, short for enumerations, are a feature in TypeScript that allow developers to define a set of named constants. They serve as a way to organize and represent a fixed set of values, making code more readable and maintainable. TypeScript provides both numeric and string-based enums.  

### Numeric Enum
By default, if no values are assigned, the enum members are automatically assigned numerical values starting from 0. It's also possible to explicitly assign values to enum members, which can be any number. 

### Example:
//default number return  
enum Count {  
  One,  
  Two,  
  Three,  
  Four  
}  

//can set custom number  
enum Number {  
  ten = 10,  
  twenty = 20,  
  thirty = 30,  
  Forty = 40  
}  

### String Enums
In string enums, each member must be explicitly assigned a string literal value.  

### example:  
enum UserInfo {  
  name = "person name",  
  address = "person address",  
  country = "person country"  
}  

### Inference:
TypeScript's type inference automatically determines the types of variables, function return values, objects, and arrays based on their assigned values and usage.
This feature reduces the need for explicit type annotations, simplifying code while maintaining type safety. 

### Example:

let name = "Alice";   // inferred as string  
let age = 30;         // inferred as number  
let isActive = true;  // inferred as boolean  

let age = 25;  
let name = "John";  
console.log(`Age: ${age}`);  
console.log(`Name: ${name}`);  

TypeScript infers age as a number and name as a string based on their assigned values.  
This automatic detection ensures type safety without requiring explicit annotations. you can not provide name without its type string. 

### Example:
let x = 10;   
console.log(typeof x);  

TypeScript infers the type of x as number based on the initial value 10.
This ensures x can only hold numerical values, improving type safety.  

### Union and intersection:
In TypeScript, union and intersection types are ways to combine multiple types into a new type. They offer different ways to handle values that can have more than one type.Union types allow a value to be one of several types. Intersection type require a value to be all of the specified types.

### Union Types
Union types are useful when a function or variable can accept different types of values, such as a function that can handle both strings and numbers.
A union type uses the | operator to define a type that can be one of several types. For example, string | number means that a value of this type can be either a string or a number

### Example:
type StringOrNumber = string | number;  
let value: StringOrNumber;  
value = "hello";  
value = 123;   

### Intersection: 
An intersection type uses the & operator to combine multiple types into one. The resulting type has all the properties and methods of all the intersected types.are useful for combining interfaces or types to create a new type with all the properties and methods of the original types, such as when modeling objects that have multiple roles or aspects.

### Example: 
interface Person {  
  name: string;  
}  
interface Employee {  
  employeeId: number;  
}  
type PersonEmployee = Person & Employee;  
const personEmployee: PersonEmployee = {  
  name: "John Doe",  
  employeeId: 12345,  
};  

### Conclusion: 
We covered some essential TypeScript concepts — `enum`, `type` vs `interface`, `keyof`, `union` & `intersection types`, and `type inference`. These features can make your code safer, more readable, and maintainable. Keep experimenting and happy coding
