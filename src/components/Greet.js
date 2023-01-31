// Functional component

// function Greet(){
//     return <h1>Hi, Farzan!</h1>
// }

const Greet = (props) => {
  return <div>
    <h1>
      Hi, I am {props.name} a.k.a {props.superHero}
    </h1>
    {props.children}
  </div>;
};

export default Greet;
