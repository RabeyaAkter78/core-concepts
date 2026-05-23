# TypeScript Interview Questions & Answers

---

## 🟢 Beginner Level

---

### **1. What is TypeScript?**

TypeScript is a superset of JavaScript that adds:

- Static typing
- Interfaces
- Generics
- Type safety

It improves code quality, maintainability, scalability, and developer experience.

---

### **2. Difference Between JavaScript and TypeScript?**

| JavaScript | TypeScript |
|---|---|
| Dynamically typed | Statically typed |
| Errors at runtime | Errors during development |
| No interfaces | Supports interfaces |
| No type checking | Strong type checking |
| Hard for large apps | Better for scalable apps |

---

### **3. What is Static Typing?**

Static typing means variable types are checked **before** execution.

```ts
let age: number = 25
```

TypeScript catches invalid assignments before runtime.

---

### **4. Difference Between `any` and `unknown`?**

| `any` | `unknown` |
|---|---|
| Disables type checking | Safer |
| Allows everything | Requires type checking |
| Dangerous | Recommended |

```ts
let value: unknown = "hello"

if (typeof value === "string") {
  console.log(value.toUpperCase())
}
```

---

### **5. What is a Union Type?**

A variable can hold multiple possible types.

```ts
let id: string | number
```

---

### **6. What is a Type Alias?**

Used to create reusable custom types.

```ts
type User = {
  name: string
  age: number
}
```

---

### **7. Difference Between Interface and Type?**

| Interface | Type |
|---|---|
| Extendable | Flexible |
| Object-focused | Works with unions/primitives |
| Supports declaration merging | Does not |

---

### **8. How Do You Type Functions?**

```ts
function add(a: number, b: number): number {
  return a + b
}
```

Parameters and return type are explicitly typed.

---

### **9. What is Type Inference?**

TypeScript automatically detects types.

```ts
let name = "Rabeya"
```

TS infers `string`.

---

### **10. What are Optional Properties?**

```ts
type User = {
  name: string
  age?: number
}
```

`age` is optional.

---

## 🟡 Intermediate Level

---

### **11. What are Generics?**

Generics create reusable and type-safe components.

```ts
function identity<T>(value: T): T {
  return value
}
```

---

### **12. Why are Generics Important?**

Generics:

- Preserve types
- Improve reusability
- Avoid `any`
- Improve autocomplete

---

### **13. What is `keyof`?**

Gets all keys from an object type.

```ts
type User = {
  name: string
  age: number
}

type Keys = keyof User
// Result: "name" | "age"
```

---

### **14. What is Type Narrowing?**

Reducing possible types using checks.

```ts
function print(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase()
  }

  return value.toFixed(2)
}
```

---

### **15. What is a Tuple?**

Tuple stores fixed-length values with fixed types.

```ts
let user: [string, number]

user = ["Rabeya", 25]
```

---

### **16. What is an Enum?**

Enum stores named constants.

```ts
enum Role {
  ADMIN,
  USER
}
```

---

### **17. What is `Partial` Utility Type?**

Makes all properties optional.

```ts
interface User {
  name: string
  age: number
}

type PartialUser = Partial<User>
```

---

### **18. What is `Pick`?**

Selects specific properties.

```ts
type UserPreview = Pick<User, "name">
```

---

### **19. What is `Omit`?**

Removes specific properties.

```ts
type UserWithoutAge = Omit<User, "age">
```

---

### **20. What is `Record`?**

Creates dynamic object types.

```ts
type Users = Record<string, number>
```

---

## 🔴 Advanced Level

---

### **21. What is the `never` Type?**

Represents values that never occur.

```ts
function throwError(message: string): never {
  throw new Error(message)
}
```

---

### **22. Difference Between `unknown` and `never`?**

| `unknown` | `never` |
|---|---|
| Anything possible | Nothing possible |
| Requires narrowing | Impossible state |

---

### **23. What is a Type Guard?**

A technique to narrow types safely.

```ts
function isString(value: unknown): value is string {
  return typeof value === "string"
}
```

---

### **24. What is Type Assertion?**

Telling TypeScript the type manually.

```ts
const input = document.getElementById("email") as HTMLInputElement
```

---

### **25. What are Access Modifiers?**

| Modifier | Meaning |
|---|---|
| `public` | Accessible everywhere |
| `private` | Inside class only |
| `protected` | Class + subclasses |

---

### **26. What is an Abstract Class?**

```ts
abstract class Animal {
  abstract sound(): void
}
```

Cannot be instantiated directly.

---

### **27. What are Mapped Types?**

Types created by transforming existing types.

```ts
type Optional<T> = {
  [K in keyof T]?: T[K]
}
```

---

### **28. What are Conditional Types?**

Types based on conditions.

```ts
type IsString<T> = T extends string ? true : false
```

---

### **29. What is the `infer` Keyword?**

Used inside conditional types to extract types.

```ts
type Return<T> =
  T extends (...args: any[]) => infer R ? R : never
```

---

### **30. Why Use TypeScript in React/Next.js Projects?**

TypeScript helps:

- Type React props
- Catch API errors
- Improve scalability
- Safer state management
- Better autocomplete
- Easier refactoring
- Safer large applications

---