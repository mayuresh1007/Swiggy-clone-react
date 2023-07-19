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
const Logo = () => (
  <>
    <a href="/">
      <img
        src="https://cdn.dribbble.com/users/333713/screenshots/16263237/media/e13f7d89feec1544447e4e76f09836a5.png?compress=1&resize=400x300&vertical=center"
        alt="Logo"
        className="logo"
      />
    </a>
    {/* <h1 className="title">FlashFood</h1> */}
  </>
);
const AppHeader = () => (
  <div className="header">
    <Logo />
    <div className="navbar">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

/**
 Restraurants card
  - Menu
  - Price
  - category
  - tag
 */

const restraurantList = [
  {
    id:1,
    name: "Burger King",
    price: "100",
    rating: "4.2 ",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
    cuisine: ["Veg-Burger", "Nonveg", "egg -Burger"],
  },
  {
    id:2,
    name: "Pizza Hut",
    price: "150",
    rating: "4.4 ",
    image:
      "https://thumbs.dreamstime.com/b/heart-shape-various-vegetables-fruits-healthy-food-concept-isolated-white-background-140287808.jpg",
    cuisine: ["Veg-kadhai", "veg-Bhaji", "palak panner"],
  },
  {
    id:3,
    name: "Dominoz",
    price: "50",
    rating: "3.4 ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqXo9UyZpyi08p03nofaS2MxRb_ScxqZ9ZMjNyvYM&s",
    cuisine: ["Veg-kadhai", "veg-Bhaji", "palak panner"],
  },
];
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
      <p><strong>Cuisine -</strong>{props.restraurant?.cuisine.join(",")} </p>
    </div>
  );
};

// Propes ==> properties >> way to send data with destructuring=>{name,price,image,rating,cuisine}
const RestraurantCard = ({name,price,image,rating,cuisine})=>{
  return (
    <div className="card">
    <img src={image} alt="panner kadhai" />
    <h3>{"Menu -" + name}</h3>
    <h4>
      {"Price -" + price} <span>&#8377;</span>{" "}
    </h4>
    <h4>{rating} Stars</h4>
    <p><strong>Cuisine -</strong>{cuisine.join(", ")} </p>
  </div>
  )
}

const AppBody = () => {
  return (
    <div className="restro-list">
      {/* {RestraurantCard(restraurantList[0])} method 1 same the functions passing the arguments */}
      {/* <RestraurantCard restraurant={restraurantList[0]} /> method 2 <RestraurantCard restraurant={restraurantList[1]} />
      <RestraurantCard restraurant={restraurantList[2]} />*/}
      {/* <RestraurantCard {...restraurantList[0]} />
      <RestraurantCard {...restraurantList[1]} />
      <RestraurantCard {...restraurantList[2]} /> */}
      {
        restraurantList.map((restro) =>{
          return <RestraurantCard {...restro} key={restro.id}/>
        })
      }
      
    </div>
  );
};
const AppFooter = () => {
  return <h3>Footer</h3>;
};
root.render(<AppLayout />); // way to render the react component
