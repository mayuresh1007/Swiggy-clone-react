
/*
HMR - hot modeule reloading - responsible for reaload page when updated or make changes.
file watcher algorithm - written in C++ 
Bundling the code 
Minify
Cleaning the code
Dev and the Production build algorithm
super fast build algorithm
image optimization also done by parcel and caching while development
provides the https for dev build ==> npx parcel index.html --https
"main": "App.js", removed from package.json bcoz for parcel 

*/



import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const head1 = React.createElement(
  "h1",
  { id: "title" },
  "Hi mayuresh Welcome to Namaste React by akshay"
);
const head2 = React.createElement("h2", { id: "title" }, "use of parcel to bundel and create the react app from scratch");

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [head1, head2]
);

root.render(container);
