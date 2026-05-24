import { use, useEffect } from "react";

// Functional component:
function App() {
  return <h1>This is a functional component</h1>;
}

// Class component:
class App extends React.Component {
  render() {
    return <h1>This is a class component</h1>;
  }
}

// props:Props pass data from parent to child.
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Hooks

// useState hook: Used for state management.
const [count, setCount] = useState(0);

// useEffect hook: Used for side effects like data fetching.

useEffect(() => {}, []);

// Api faching with useEffect:
useEffect(() => {
  fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => setData(data));
}, []);

// Conditional rendering:

{
  isLoggedIn ? <Dashboard /> : <Login />;
}

// Lists and keys:
const items = ["Item 1", "Item 2", "Item 3"];
return (
  <ul>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

// ref: Used to access DOM elements directly. Used for DOM access without re-render.
const inputRef = useRef(null);
<input ref={inputRef} />;

// useReducer hook: Used for complex state management.it actually provides an alternative to useState. It is used when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. It also allows you to optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.
const [state, dispatch] = useReducer(reducer, initialState);

// usememo hook: Used for memoization to optimize performance.
const total = useMemo(() => {
  return countTotal(data);
}, [data]);

// useCallback hook: Used to memoize functions to prevent unnecessary re-renders.
const handleClick = useCallback(() => {
  console.log("Button clicked");
}, []);

// React.memo: Used to memoize functional components to prevent unnecessary re-renders.

export default React.memo(MyComponent);

// contextAPi: Used for state management across the component tree without prop drilling.

const themeContext = React.createContext("light");

// custom Hook: A custom hook is a reusable function that encapsulates logic and state management. It allows you to share logic across multiple components without repeating code.
function useCustomHook() {
  const [state, setState] = useState(initialState);
  // ...
  return state;
}

// event handling: React uses synthetic events to handle events in a cross-browser compatible way.
<button onClick={handleClick}>Click me</button>;

// dynamic class:
<div className={`button ${isActive ? "active" : ""}`}></div>;

// lazy loading: React.lazy and Suspense are used for lazy loading components, which can improve performance by loading components only when they are needed.
const LazyComponent = React.lazy(() => import("./LazyComponent"));
<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>;

// Debouncing: Debouncing is a technique used to limit the rate at which a function is executed. In React, you can implement debouncing using the useEffect hook and setTimeout.

useEffect(() => {
  const timer = setTimeout(() => {
    search(query);
  }, 500);
  return () => clearTimeout(timer);
}, []);

// props drilling: Props drilling refers to the process of passing data from a parent component to a child component through multiple levels of the component tree. This can lead to code that is difficult to maintain and understand, especially when the data needs to be passed through many layers of components. To avoid props drilling, you can use React's Context API or state management libraries like Redux or MobX.

function Parent() {
  const data = "Hello from Parent";
  return <Child data={data} />;
}

function Child(props) {
  return <GrandChild data={props.data} />;
}

function GrandChild(props) {
    return <h1>{props.data}</h1>;
}