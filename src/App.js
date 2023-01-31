import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Follow from "./components/Follow";

function App() {
  return (
    <div className="App">
      {/* State Management in Class Component */}
      <Message />

      {/* State management in Functional component */}
      <Follow />

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
