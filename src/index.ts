function formatString(input: string, toUpper?: boolean) {
  if (toUpper === true || toUpper === undefined) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}


function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const HighestRating = items?.filter((item) => item?.rating >= 4);
  return HighestRating;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

const result2 = filterByRating(books);
console.log(result2);


function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
  }

  const result3 = concatenateArrays(["a", "b"], ["c"]);
  console.log(result3);


  class Vehicle {
    private make: string;
    private year: number;
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
    public getInfo(): string {
      return `Make:${this.make}, Year:${this.year}`;
    }
  }

  class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
    public getModel(): string {
      return `The car model is ${this.model}`;
    }
  }

  const MyCar = new Car("Toyota", 2018, "premio");
  console.log(MyCar.getInfo());
  console.log(MyCar.getModel());

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

  const result5 = processValue(23);
  console.log(result5);


  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    } else {
      let mostExpensive = products[0];
      for (const product of products) {
        if (product.price > mostExpensive.price) {
          mostExpensive = product;
        }
      }
      return mostExpensive;
    }
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

  const result6 = getMostExpensiveProduct(products);
  console.log(result6);

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day:Day):string {
  return `The day you have given is ${day}`
  }

  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Number must be non-negative"));
        } else {
          resolve(n * n);
        }
      }, 1000);
    });
  }

  squareAsync(4)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  squareAsync(-3)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));