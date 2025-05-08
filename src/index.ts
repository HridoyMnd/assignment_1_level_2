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

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

class Vehicle {
  private make: string;
  private year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  public getInfo(): string {
    return `The Car Made by ${this.make} company In ${this.year}`;
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

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

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

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (Day.Saturday === day || day === Day.Sunday) {
    return `Today is Weekend`;
  } else {
    return `Today is WeekDay`;
  }
}

async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(("Number must be Positive"));
        } else {
          resolve(n * n);
        }
      }, 1000);
    });
  }

