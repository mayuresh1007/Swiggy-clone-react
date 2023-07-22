import { useState } from "react";

const Logo = () => (
  <>
    {/* <a href="/"> */}
    <img
      src="https://cdn.dribbble.com/users/333713/screenshots/16263237/media/e13f7d89feec1544447e4e76f09836a5.png?compress=1&resize=400x300&vertical=center"
      alt="LogoOfApp"
      className="logo"
    />
    {/* </a> */}
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