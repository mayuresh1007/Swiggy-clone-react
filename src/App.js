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

import React, { lazy, Suspense, useState, StrictMode } from "react";
import ReactDOM from "react-dom/client";
// import AppHeader from "./Components/Header";
import AppFooter from "./Components/Footer";
import AppBody from "./Components/Body";
import AboutClass from "./Components/About";
import Contact from "./Components/Contact";
import Errorpage from "./Components/Errorpage";
import Cart from "./Components/Cart";
import RestraurantMenu from "./Components/RestraurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ProfileFunction from "./Components/ProfileFunction";
import ProfileClass from "./Components/ProfileCLassComp";
import Shimmerui from "./Components/ShimmerUI";
import UserContext from "./context/userConntext";
import NavBar from "./Components/NavBar";

//ReDUX
import { Provider } from "react-redux";
// import store from "./utils/store";
// persist
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./utils/store";

// import Instamart from "./Components/Instamart";//  normal import
const Instamart = lazy(() => import("./Components/Instamart")); // this is a dynamic import lazy loading , on dimand loaing, code splitting ,bundle chunking
// on demand loadig react will suspend bcoz there is no any bundle
// On demand loading => upon render => suspend loading
// code yaychy aadhich react try to render thats why error thrown
// to candle this case --> Suspense from react library

// dont do in anather component example bellow

// import withNetworkCheck from './Components/withNetworkCheck'; // network error

// const notes = ReactDOM.createRoot(document.getElementById("notes"));
const root = ReactDOM.createRoot(document.getElementById("root"));

// React Element

const AppLayout = () => {
  // const Instamart = lazy(() => import("./Components/Instamart")); //  dont do this // coz lazy load for every render cycle
  const [user, setUser] = useState({
    name: "Mayuresh",
    email: "mk@email.com",
  });
  return (
    <>
      {/* Provider - react-redux  */}
      <StrictMode>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <UserContext.Provider
              value={{
                user: user,
              }}
              //  value is overriding the default value passing by original usercontext
            >
              <React.Fragment>
                <NavBar />
                {/* <AppBody /> */}
                {/* // Outlet will filled with children */}
                <Outlet />
                <AppFooter />
              </React.Fragment>
            </UserContext.Provider>
            {/* <AppFooter />// getting dummy data coz outside the proider  */}
          </PersistGate>
        </Provider>
      </StrictMode>
    </>
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
        // element: <About />,
        element: <AboutClass />,
        children: [
          {
            path: "profile",
            element: <ProfileFunction />,
          },
          {
            path: "profileclass",
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />, // lazy import for big cmponent
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/instamart",
        // In between the suspense bcoz its lazy loading to avoid quick render and this is promis // fallback is shown in between time
        element: (
          <Suspense fallback={<Shimmerui />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/restro/:id",
        element: <RestraurantMenu />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRoute} />); // way to render the react component
//RouterProvider is a component which is provided by the react-router-dom
