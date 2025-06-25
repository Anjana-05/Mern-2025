import { createContext } from "react";

const Context = createContext();
export const UserContext= ({children}) => {
    const user = {name:"Anjana", phno:"80215367563"}
    return(
        <Context.Provider value={user}>
            {children}
        </Context.Provider>
    )
}
export default Context;