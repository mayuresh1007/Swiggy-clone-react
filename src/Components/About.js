// import { Outlet } from "react-router-dom";
// import ProfileClass from "./ProfileCLassComp";
// import ProfileFunction from "./ProfileFunction";

// const About = () => {
//   return (
//     <>
//       <h1>About page</h1>
//       {/* <Outlet/> */}
//       <ProfileFunction name={"mayuresh"} />
//       <ProfileClass name={"first child mayuresh"} />
//       <ProfileClass name={"second child akshata"} />
//     </>
//   );
// };

// export default About;

import React from "react";
import ProfileClass from "./ProfileCLassComp";
import withNetworkCheck from "../utils/withNetworkCheck"; // network error

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor parent");
    this.state = {};
  }

  componentDidMount() {
    console.log("componentDidMount parent");
  }
  render() {
    console.log("render parent");
    return (
      <>
        {/* this for two child example */}
        {/* <h1>About page</h1> */}
        {/* <Outlet/> */}
        {/* <ProfileFunction name={"mayuresh"} /> */}
        {/* <ProfileClass name={"first child mayuresh"} /> */}
        {/* <ProfileClass name={"second child akshata"} /> */}

        {/* this for api called in child comp example */}
        <div className="restro-list flex flex-col justify-center items-center mt-5">
          <h1 className="">About page</h1>
          <ProfileClass name={"first child "} />
        </div>
      </>
    );
  }
}

// export default AboutClass;
export default withNetworkCheck(AboutClass);

/**
 * flow of called for two child components
 * constructor parent
   render parent
  contructor first child mayuresh
  render first child mayuresh
  contructor second child akshata
  render second child akshata
  componentDidMount first child mayuresh
  componentDidMount second child akshata
  componentDidMount parent
 * 
 * flow for api call in the childern 
 * constructor parent
   render parent
   contructor first child mayuresh
   render first child mayuresh
   componentDidMount parent
   componentDidMount first child mayuresh
   render first child mayuresh
 * 
 * 
 * 
 */
