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
import About from "./Components/About";
import Contact from "./Components/Contact";
import Errorpage from "./Components/Errorpage";
import Cart from "./Components/Cart";
import RestraurantMenu from "./Components/RestraurantMenu";

import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";

const notes = ReactDOM.createRoot(document.getElementById("notes"));
const root = ReactDOM.createRoot(document.getElementById("root"));

// React Element

const AppLayout = () => {
  return (
    <React.Fragment>
      <AppHeader />
      {/* <AppBody /> */}
      {/* // Outlet will filled with children */}
      <Outlet/>
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
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <AppBody />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
        
      },
      {
        path: "/cart",
        element: <Cart />,
        
      },
      {
        path:"/restro/:id",
        element:<RestraurantMenu/>

      }
    ],
  },
]);

root.render(<RouterProvider router={appRoute} />); // way to render the react component
//RouterProvider is a component which is provided by the react-router-dom
