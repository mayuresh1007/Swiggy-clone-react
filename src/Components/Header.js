// import { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const AppHeader = () => (
  <>
    <div className=" flex justify-between ">
      <div className="flex justify-between bg-logocolor shadow-lg  ">
        <Logo />
        <ul className="flex  p-4 m-4 space-x-5 ">
          <li className="bg-logocolor rounded hover:bg-pink-500 text-white px-2 ">
            <Link to="/">Home</Link>
          </li>
          <li className="bg-logocolor rounded hover:bg-pink-500 text-white px-2 ">
            <Link to="/about">About</Link>
          </li>
          <li className="bg-logocolor rounded hover:bg-pink-500 text-white px-2 ">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="bg-logocolor rounded hover:bg-pink-500 text-white px-2 ">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="bg-logocolor rounded hover:bg-pink-500 text-white px-2 ">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default AppHeader; // this is called export default

/* Named export is as bellow
  export const Logo = () => (
    <>
     
      <img
      src="https://cdn.dribbble.com/users/333713/screenshots/16263237/media/e13f7d89feec1544447e4e76f09836a5.png?compress=1&resize=400x300&vertical=center"
      alt="Logo"
      className="logo"
    />
    </>
    );

  import like ==>> import {Logo} from "./Header.js"
*/

// const AppHeader = () => {
//   const [logo, setLogo] = useState();

//   return (
//     <div className="header">
//       {/* <Logo /> */}
//       <h3>{logo}</h3>
//       <button onClick={()=>(setLogo("new-Name"))}>change logo</button>
//       <div className="navbar">
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact Us</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// {
/* <div className="header link">
    <Logo />
      <div className="navbar ">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div> */
// }
