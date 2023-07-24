/*
HMR - hot modeule replacing - responsible for reaload page when updated or make changes.
file watcher algorithm - written in C++ 
Bundling the code 
Minify
Cleaning the code
Dev and the Production build algorithm
super fast build algorithm
image optimization also done by parcel and caching while development
provides the https for dev build ==> npx parcel index.html --https
"main": "App.js", removed from package.json bcoz for parcel 

====================
// Functional component = New way to write 
// class based component = old way to write 

*/

import React from "react";
import ReactDOM from "react-dom/client";
import AppHeader from "./Components/Header";
import AppFooter from "./Components/Footer";
import AppBody from "./Components/Body";



const notes = ReactDOM.createRoot(document.getElementById("notes"));
const root = ReactDOM.createRoot(document.getElementById("root"));

// React Element

const head1 = React.createElement(
  "h1",
  { id: "title", key: "1" },
  "Hi mayuresh Welcome to Namaste React by akshay"
);
// console.log(head1); // returns the js object this means any object is a react element

const head2 = React.createElement(
  "h2",
  { id: "title", key: "2" },
  "Use of parcel to bundel and Parcel is a Bundler and create the react app from scratch"
);
const head3 = (
  <h3 id="titile" key="3">
    This is also react Element
  </h3>
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [head1, head2, head3]
);

// React functional component
// const Title = () => {
//   return <h1>Foodora</h1>;
// };
const Title = () => <h1>Foodora</h1>;

const HeaderComponent = () => {
  // return <h1>First functional component</h1>;
  return (
    // react fragment
    <>
      {/* {Title()} // method one to call the functional component */}
      {/* <Title /> // method two and good practice to call the functional component */}
      <Title />
      {container}
      <h1>Functional component</h1>
      <h2>h2 element</h2>
    </>
  );
};

const HeaderComponent2 = () => (
  // react fragment
  <>
    <h1>component</h1>
    <h2>component</h2>
  </>
);
// root.render(container); // way to render the react element
// notes.render(<HeaderComponent />); // way to render the react component

/* <React.Fragment></React.Fragment> React fragment is a component which is exported by react
<React.Fragment></React.Fragment> ==>> <></>

*/


const AppLayout = () => {
  return (
    <React.Fragment>
      <AppHeader />
      <AppBody />
      <AppFooter />
    </React.Fragment>
  );
};
/*
AppLayout
  -header
    -logo name
    -navbar
    -cart
  -body 
    -search
    -cards
    -menus
  -footer
    -links
*/

/**
 Restraurants card
  - Menu
  - Price
  - category
  - tag
 */

// console.log(Burger[0].cuisine )
// Burger.map(cuisine=>{console.log(cuisine)})
const RestraurantCardNormalprop = (props) => {
  console.log(props);
  return (
    <div className="card">
      <img src={props.restraurant?.image} alt="panner kadhai" />
      <h3>{"Menu -" + props.restraurant?.name}</h3>
      <h4>
        {"Price -" + props.restraurant?.price} <span>&#8377;</span>{" "}
      </h4>
      <h4>{props.restraurant?.rating} Stars</h4>
      <p>
        <strong>Cuisine -</strong>
        {props.restraurant?.cuisine.join(",")}{" "}
      </p>
    </div>
  );
};

root.render(<AppLayout/>); // way to render the react component
