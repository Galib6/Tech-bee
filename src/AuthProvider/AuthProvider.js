import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";


const auth = getAuth(app)
export const AuthContext = createContext()



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoadding] = useState(true)
    const [isDarkMode, setIsDarkMode] = useState("light");

    const signInwithGoolge = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const signInwithGitHub = (provider) => {
        return signInWithPopup(auth, provider)
    }

    //___________Sign out__________________
    const logOut = () => {
        setLoadding(true)
        return signOut(auth)
    }
    //___________Sign out__________________

    //----------------update user___
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }


    //----------------update user___

    // _____Who logged in show__________________

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("user inside state change", currentUser);
            setUser(currentUser)
            setLoadding(false)
        });

        return () => {
            unsubcribe();
        }

    }, [])
    //__________________________________________________


    //____________new user register_________________________

    const createUser = (email, password) => {
        setLoadding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    //____________new user register_________________________

    //____________login with wmail and pass_________________________

    const signIn = (email, password) => {
        setLoadding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //____________login with email and pass_________________________


    const AuthInfo = {
        signInwithGoolge,
        setUser,
        user,
        logOut,
        loading,
        createUser,
        updateUserProfile,
        signIn,
        setIsDarkMode,
        isDarkMode,
        signInwithGitHub
    }

    return (
        <AuthContext.Provider value={AuthInfo} >
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;