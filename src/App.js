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

function App() {
  return (
    <div className="App">

      <LifeCycleA />

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
