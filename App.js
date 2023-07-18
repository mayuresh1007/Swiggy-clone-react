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
const HeaderComponent = () => {
  // return <h1>First functional component</h1>;
  return (
    // react fragment
    <>
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
root.render(<HeaderComponent />); // way to render the react component
