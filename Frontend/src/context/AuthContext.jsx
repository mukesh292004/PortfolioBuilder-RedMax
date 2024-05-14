import { createContext,useReducer,useEffect } from "react";
const AuthContext = createContext({ state: { user: null }, dispatch: () => {} });


const ReducerFunction=(state,action)=>{
    switch(action.type){
        case "LOGIN":
            console.log('login',action.payload);
            return{user:action.payload}

        case "LOGOUT":
            console.log('loginout');
            return{user:null}
            
        default:
            return state;
    }
}
const AuthContextprovider = ({children})=>{
    const [state,dispatch]=useReducer(ReducerFunction,{user:null});
    useEffect(() => {
        const userString = localStorage.getItem("user");
        if (userString) {
            const user = JSON.parse(userString);
           
            dispatch({ type: "LOGIN", payload: user });
        }
    }, []);
    return(
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextprovider;
export {AuthContext};