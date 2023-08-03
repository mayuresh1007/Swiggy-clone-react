// CREATING THE CONTEXT
import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "dummy",
    email: "dummy@email.com",
  },
});

UserContext.displayName = "UserContext" // for showing the name in react developer component (extenstion for debug)
export default UserContext;

/** userContext.js
    const UserContext = createContext()

    export default UserContext;


    file second userState.js

    import React,{createContext} from "react";
    import UserContext from "path"// used in before.Provider

    const UserState =(props)=>{
        const s1 = {
        user: {
            name: "dummy",
            email: "dummy@email.com",
        },
        }
        return({
            <UserContext.Provider value={s1}>
                {props.children}
            </UserContext.Provider>

        })
    }
    export default UserState;
    
    // then wrap in the this will give the access for all component
    <UserState>
        <React.Fragment>
        <AppHeader />
            <AppBody />
            <Outlet />
            <AppFooter />
        </React.Fragment>
     </UserState>

    // using in the actual component

    import UserContext from "path";

    Const About =()=>{
        const you = useContext(UserContext)
        return(
            <div>
                This is about page of  {you.name}
            </div>
        )
    }
    export default About
 */
