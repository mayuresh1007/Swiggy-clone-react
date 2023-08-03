import React, { useContext } from "react";
import UserContext from "../context/userConntext";

const AppFooter = () => {
  const {user}  = useContext(UserContext);
  // console.log(user)
  return (
    <footer style={footerStyle}>
      {/* <footer > */}
      <p>
        Made with by &#10084; Mayuresh | © {new Date().getFullYear()} All
        rights reserved.
      </p>
      {/* <p>{user.name}</p>  */}
    </footer>
  );
};

const footerStyle = {
  // backgroundColor: '#f0f0f0',
  padding: "10px",
  textAlign: "center",
  margin: "50px auto",
};

export default AppFooter;
