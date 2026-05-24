# React.js Core Concepts Q&A

> Beginner → Intermediate → Advanced

---

## 🟢 Beginner Level

### 1. What is React?

React is a JavaScript library used for building user interfaces, especially **Single Page Applications (SPA)**.

- Component-based
- Declarative
- Fast because of Virtual DOM
- Reusable

> Created by Meta.

---

### 2. What is JSX?

**JSX** stands for JavaScript XML. It allows writing HTML-like syntax inside JavaScript.

```jsx
const element = <h1>Hello React</h1>;
```

React converts JSX into `React.createElement()`.

---

### 3. What is a Component in React?

A component is a **reusable piece of UI**.

Two types:
- **Functional Component**
- **Class Component** (older approach)

```jsx
function Button() {
  return <button>Click</button>;
}
```

---

### 4. What is the difference between Props and State?

| Props | State |
|-------|-------|
| Passed from parent | Managed inside component |
| Read-only | Mutable |
| Used for communication | Used for dynamic data |

---

### 5. What is Virtual DOM?

Virtual DOM is a **lightweight copy of the real DOM**.

React:
1. Creates Virtual DOM
2. Compares changes using **Diffing Algorithm**
3. Updates only changed parts in real DOM

This improves performance.

---

### 6. Real DOM vs Virtual DOM

| Real DOM | Virtual DOM |
|----------|-------------|
| Slow updates | Faster updates |
| Updates entire DOM | Updates only changed nodes |
| Direct manipulation | React handles updates |

---

### 7. What is State in React?

State stores **dynamic data** that changes over time.

```jsx
const [count, setCount] = useState(0);
```

---

### 8. What is `useState` Hook?

`useState` is a React Hook used to manage state in functional components.

```jsx
const [name, setName] = useState("");
```

---

### 9. What is `useEffect` Hook?

`useEffect` handles side effects like:
- API calls
- Event listeners
- Timers

```jsx
useEffect(() => {
  fetchData();
}, []);
```

> Empty dependency array means it runs **once** after component mount.

---

### 10. What is Conditional Rendering?

Showing UI based on conditions.

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

---

### 11. What is Event Handling in React?

React handles events using **camelCase**.

```jsx
<button onClick={handleClick}>Click</button>
```

---

### 12. What is List Rendering?

Rendering multiple items using `.map()`.

```jsx
users.map(user => <p key={user.id}>{user.name}</p>)
```

---

### 13. Why is `key` important in React?

Keys help React **identify changed items** efficiently.

```jsx
// ❌ Bad
key={index}

// ✅ Best
key={item.id}
```

---

### 14. What is a Controlled Component?

Form input **controlled by React state**.

```jsx
<input value={name} onChange={(e) => setName(e.target.value)} />
```

---

### 15. What is Lifting State Up?

Moving shared state to a **common parent component**. Used for sibling communication.

---

## 🟡 Intermediate Level

### 16. What are React Hooks?

Hooks allow functional components to use state, lifecycle, context, and refs.

Common hooks:
- `useState`
- `useEffect`
- `useRef`
- `useMemo`
- `useCallback`
- `useContext`

---

### 17. `useEffect` vs `useLayoutEffect`

| `useEffect` | `useLayoutEffect` |
|-------------|-------------------|
| Runs after paint | Runs before paint |
| Async behavior | Blocks painting |
| Used mostly | Rarely needed |

---

### 18. What is `useRef`?

Stores mutable values **without re-rendering**.

```jsx
const inputRef = useRef();
```

Uses:
- DOM access
- Store previous value
- Prevent re-render

---

### 19. What is `useMemo`?

Memoizes **expensive calculations**.

```jsx
const total = useMemo(() => calculateTotal(data), [data]);
```

Prevents unnecessary recalculation.

---

### 20. What is `useCallback`?

Memoizes **functions**.

```jsx
const handleClick = useCallback(() => {
  console.log("clicked");
}, []);
```

Useful for performance optimization.

---

### 21. `useMemo` vs `useCallback`

| `useMemo` | `useCallback` |
|-----------|---------------|
| Memoizes a value | Memoizes a function |

---

### 22. What is React Context API?

Used for **global state management** without prop drilling.

```jsx
const ThemeContext = createContext();
```

---

### 23. What is Prop Drilling?

Passing props through multiple components unnecessarily.

Solved by:
- Context API
- Redux
- Zustand

---

### 24. What is React Fragment?

Used to group elements **without extra DOM nodes**.

```jsx
<>
  <h1>Hello</h1>
</>
```

---

### 25. What is `React.memo`?

Prevents **unnecessary re-renders**.

```jsx
export default React.memo(Component);
```

---

### 26. What causes re-render in React?

Re-render happens when:
- State changes
- Props change
- Parent re-renders
- Context changes

---

### 27. What is Reconciliation?

Process React uses to **compare old and new Virtual DOM** and update efficiently.

---

### 28. What is Lazy Loading in React?

Loads components **only when needed**.

```jsx
const Dashboard = lazy(() => import("./Dashboard"));
```

Used with:

```jsx
<Suspense fallback={<Loader />} />
```

---

### 29. What is a Custom Hook?

Reusable logic using hooks.

```jsx
function useFetch(url) {
  // ...
}
```

---

### 30. What is a Higher Order Component (HOC)?

A function that takes a component and returns an **enhanced component**.

```jsx
withAuth(Dashboard)
```

---

## 🔴 Advanced Level

### 31. What is React Fiber Architecture?

React Fiber is the new reconciliation engine introduced in **React 16**.

Benefits:
- Incremental rendering
- Better scheduling
- Prioritization
- Improved responsiveness

---

### 32. What is Concurrent Rendering in React?

Allows React to prepare **multiple UI versions simultaneously**.

Features:
- `startTransition`
- `Suspense`
- Streaming SSR

---

### 33. What is Hydration in React?

Hydration **attaches event listeners** to server-rendered HTML.

Common in: Next.js

---

### 34. What is Hydration Mismatch?

When server-rendered HTML **differs** from client-rendered HTML.

Common causes:
- `window` usage
- Random values
- Date mismatch

---

### 35. What is Server Side Rendering (SSR)?

HTML generated **on the server** before sending to the browser.

Benefits:
- Better SEO
- Faster initial load

Common in: Next.js

---

### 36. What is Client Side Rendering (CSR)?

Browser downloads JS and renders UI **on the client side**. Standard React behavior.

---

### 37. SSR vs CSR

| SSR | CSR |
|-----|-----|
| Better SEO | Faster interactions |
| Server renders HTML | Browser renders HTML |
| Better first paint | Better SPA experience |

---

### 38. What is Code Splitting?

Breaking bundle into **smaller chunks** to improve performance.

Done using:
- `lazy()`
- Dynamic `import()`

---

### 39. What is React Strict Mode?

Helps detect:
- Unsafe lifecycle
- Side effects
- Deprecated APIs

```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

---

### 40. Controlled vs Uncontrolled Components

| Controlled | Uncontrolled |
|------------|--------------|
| React controls input | DOM controls input |
| Uses state | Uses ref |

---

### 41. What is Error Boundary?

**Catches JavaScript errors** in the component tree. Class component feature.

```jsx
componentDidCatch()
```

---

### 42. What is Batching in React?

React **groups multiple state updates** into one render for performance.

---

### 43. What is React Portal?

Render a component **outside parent DOM hierarchy**.

Used for:
- Modal
- Tooltip
- Dropdown

---

### 44. `npm` vs `npx`

| `npm` | `npx` |
|-------|-------|
| Installs packages | Executes packages |

```bash
npx create-react-app app
```

---

### 45. What are Pure Components?

Components that **re-render only when props/state change** shallowly.

---

### 46. What is Shallow Comparison?

Compares **references** instead of deeply nested values. Important for React performance.

---

### 47. What are Synthetic Events in React?

React wrapper around **native browser events**. Provides cross-browser compatibility.

---

### 48. What is the React Rendering Flow?

```
State/Props change
      ↓
Component re-renders
      ↓
Virtual DOM created
      ↓
    Diffing
      ↓
Reconciliation
      ↓
Real DOM update
```

---

### 49. Common React Performance Optimizations

- `React.memo`
- `useMemo`
- `useCallback`
- Lazy loading
- Code splitting
- Virtualization
- Avoid unnecessary re-renders

---

### 50. React Component Lifecycle

**Mounting**
1. `constructor`
2. `render`
3. `componentDidMount`

**Updating**
1. `shouldComponentUpdate`
2. `render`
3. `componentDidUpdate`

**Unmounting**
1. `componentWillUnmount`

> In functional components, `useEffect` handles all lifecycle behavior.

---

## ⭐ Most Important Topics for Mid-Level Frontend Interviews

Based on a **React + Next.js + TypeScript + Tailwind** stack, focus deeply on:

| Category | Topics |
|----------|--------|
| Rendering | Lifecycle, re-render optimization, `useEffect` cleanup |
| Performance | Memoization, lazy loading, Suspense |
| SSR/CSR | Hydration mismatch, SSR vs CSR |
| State | API state handling, Context API vs Redux |
| Architecture | Component design, custom hooks, error handling |
| Auth | Authentication flow |

> These are heavily asked in product companies and SaaS interviews.