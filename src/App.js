import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Follow from "./components/Follow";
import Counter from "./components/Counter";
import Score from "./components/Score";
import FunctionClick from "./components/FunctionClick";
import ClassClink from "./components/ClassClink";
import EventBind from "./components/EventBind";
import FunctionEventBind from "./components/FunctionEventBind";
import UserGreeting from "./components/UserGreeting";
import FunctionalUserGreeting from "./components/FunctionalUserGreeting";
import ParentComponent from "./components/ParentComponent";
import childComponent from "./components/ChildComponent";
import FunctionalParentComponent from "./components/FunctionalParentComponent";
import PersonList from "./components/PersonList";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";
import classes from "./components/appStyle.module.css";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import UpdateLifeCycle from "./components/UpdateLifeCycle";
import Table from "./components/Table";
import PParentComponent from "./components/PParentComponent";
import RefDemo from "./components/RefDemo";
import FocusParent from "./components/FocusParent";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/ParentCounter";
import ParentCounter from "./components/ParentCounter";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";
import AxiosGet from "./components/AxiosGet";
import PostForm from "./components/PostForm";
import HooksUseState from "./components/HooksUseState";
import HooksUseStateWithObj from "./components/HooksUseStateWithObj";
import HookCounterWithUseEffect from "./components/HookCounterWithUseEffect";
import MouseHook from "./components/MouseHook";
import MouseContainer from "./components/MouseContainer";
import AxiosWithUseEffect from "./components/AxiosWithUseEffect";
import ComponentX from "./components/ComponentX";
import React, { useContext, useReducer } from "react";
import UseReducer from "./components/UseReducer";
import MultipleUseReducers from "./components/MultipleUseReducers";
import ComponentAA from "./components/ComponentAA";
import ComponentBB from "./components/ComponentBB";
import ComponentCC from "./components/ComponentCC";
import DataFetchTwo from "./components/DataFetchTwo";
import ParentComponentTwo from "./components/ParentComponentTwo";
import Counters from "./components/Counters";
import FocusInput from "./components/FocusInput";

export const UserContext = React.createContext();

export const CounterContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <FocusInput />

      {/* useMemo() hook */}
      {/* <Counters /> */}

      {/* Rendering components that really needs to update using memo, and useCallback */}
      {/* <ParentComponentTwo /> */}

      {/* Data fetching using useReducer() */}
      {/* <DataFetchTwo /> */}

      {/* useReducer() with useContext() */}
      {/* Count - {count}
      <CounterContext.Provider
        value={{ counterState: count, counterDispatch: dispatch }}
      >
        <ComponentAA />
        <ComponentBB />
        <ComponentCC />
      </CounterContext.Provider> */}

      {/* UseReducer() and MultipleUseReducers with same reducer function */}
      {/* <UseReducer /> */}
      {/* <MultipleUseReducers /> */}
      {/* <UserContext.Provider value={{ name: "Farzan" }}>
        <ComponentX />
      </UserContext.Provider> */}
      
      {/* <AxiosWithUseEffect /> */}
      {/* componentWillUnmout() functionality using useEffect() */}
      {/* <MouseContainer /> */}
      {/* UseEffect single call */}
      {/* <MouseHook /> */}
      {/* UseEffect implementation, rendering on state change */}
      {/* <HookCounterWithUseEffect /> */}
      {/* Use state hook */}
      {/* <HooksUseStateWithObj /> */}
      {/* Axios calls */}
      {/* <PostForm /> */}
      {/* <AxiosGet /> */}
      {/* <UserProvider value="Farzan">
        <ComponentC />
      </UserProvider> */}
      {/* Render prop */}
      {/* <ParentCounter
        render={(count, incrementCounter) => (
          <ClickCounterTwo count={count} incrementCounter={incrementCounter} />
        )}
      />
      <ParentCounter
        render={(count, incrementCounter) => (
          <HoverCounterTwo count={count} incrementCounter={incrementCounter} />
        )}
      /> */}
      {/* Higher Order Component */}
      {/* <ClickCounter name="Farzan" />
      <HoverCounter /> */}
      {/* Catching Errors */}
      {/* <ErrorBoundary>
        <Hero name="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero name="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero name="Joker" />
      </ErrorBoundary> */}
      {/* Implemented portal to render outside the main DOM */}
      {/* <PortalDemo /> */}
      {/* Call refs in child from parent */}
      {/* <FocusParent /> */}
      {/* <RefDemo /> */}
      {/* Pure component in class functionality using memo in functional component */}
      {/* <PParentComponent /> */}
      {/* Regular vs Pure Component */}
      {/* <PParentComponent /> */}
      {/* React fragments */}
      {/* <Table /> */}
      {/* <UpdateLifeCycle /> */}
      {/* Mounting life cycle */}
      {/* <LifeCycleA /> */}
      {/* Form handling */}
      {/* <Form /> */}
      {/* CSS Styling ways */}
      {/* <StyleSheet primary={true} />
      <Inline />
      <h1 className={classes.success}>Success</h1> */}
      {/* List rendering with key prop */}
      {/* <PersonList /> */}
      {/* Methods as props */}
      {/* <ParentComponent />
      <FunctionalParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <FunctionalUserGreeting /> */}
      {/* Event Binding in Class component */}
      {/* <EventBind /> */}
      {/* Event Binding in Functional component */}
      {/* <FunctionEventBind /> */}
      {/* Events in functional Componenent */}
      {/* <FunctionClick /> */}
      {/* Events in class Componenent */}
      {/* <ClassClink /> */}
      {/* onClick() using class component */}
      {/* <Counter /> */}
      {/* onClick() using functional component */}
      {/* <Score /> */}
      {/* State Management in Class Component */}
      {/* <Message /> */}
      {/* State management in Functional component */}
      {/* <Follow /> */}
      {/* 
        props with functional component!!!!
       */}
      {/* <Greet name="Bruce" superHero="Batman">
        <p>
          Description : Bruce is a super hero of Gotham city who fights against
          evil. His best friend is Robin.{" "}
        </p>
      </Greet>
      <Greet name="Clark" superHero="Superman">
        <button>Launch Superman</button>
      </Greet>
      <Greet name="Diana" superHero="Wonder woman" />
      <br />
      <br /> */}
      {/* 
        props with class component!!!!
       */}
      {/* <Welcome name="Bruce" superHero="Batman">
        <p>
          Description : Bruce is a super hero of Gotham city who fights against
          evil. His best friend is Robin.
        </p>
      </Welcome>
      <Welcome name="Clark" superHero="Superman">
        <button>Launch Superman</button>
      </Welcome>
      <Welcome name="Diana" superHero="Wonder woman" /> */}
    </div>
  );
}

export default App;
