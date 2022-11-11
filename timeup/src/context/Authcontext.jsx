import { useReducer } from "react";
import { createContext } from "react";
import {reducer} from "./reducer"

export const AuthContext=createContext();



function AuthContextProvider({children}){

    const init=[];
     const [state,dispatch]=useReducer(reducer,init);


    return <AuthContext.Provider value={{state,dispatch}}>{children}</AuthContext.Provider>

}


export default AuthContextProvider