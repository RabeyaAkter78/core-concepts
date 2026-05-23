// veriable type HI-Rabeya:

let age: number = 26;

// function type: it declare also the return type with the parametter.
function add(a: number, b: number): number {
  return a + b;
}

// optional parameter:

function greet(title: string, name?: string): string {
  if (name) {
    console.log(`Hi${name},${title}`);
  }
  return title;
}

// union types: | means either type is allowed.either string or number

function course(id: string | number): void {
  console.log(id);
}

// interface: extendable,

interface IUser {
  name: string;
  address: string;
  phone: number;
  isStudent: boolean;
}

// Type Alias: ReUsable type ,

type Product = {
  id: number;
  name: string;
  price: number;
};

// eg:

// Array Typing:

const skills: string[] = ["React", "Next Js", "Typescript"];

// Generic function: Generics make functions reusable while preserving types.

function identity<T>(value: T): T {
  return value;
}

identity<string>("Bangladeshi");

// generic Interface:
// Create a generic API response interface.

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

const resposne: ApiResponse<string> = {
  success: true,
  data: "User Created",
};

// Type narrowing: HAndle Multiple types safely.

function process(value: string | number) {
  if (typeof value === "string") {
    // here typeof narrows the type safety.
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

// Emum,

// Tuple:

const coordinatesPoint: [number, number] = [10, 20];

// REadonly properties: prevents object modificatiuons

type User = {
  readonly id: number;
  name: string;
};

// partial utility type:

interface RUser {
  name: number;
  age: number;
}
function updateUser(user: Partial<RUser>) {
  console.log(user);
}

// Pick, Omit,Record Utility Type,Async Function Typing,Class Example,Access Modifiers,Abstract Class
