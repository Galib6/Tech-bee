import app from "../Firebase/firebase.config";
import { getAuth, signInWithPopup } from "firebase/auth"
import { createContext } from "react";


const auth = getAuth(app)
export const AuthContext = createContext()



const AuthProvider = ({ children }) => {

    const signInwithGoolge = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const AuthInfo = {
        signInwithGoolge,
    }

    return (
        <AuthContext.Provider value={AuthInfo} >
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;