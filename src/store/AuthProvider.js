import { useState, useEffect } from "react";

import AuthContext from "./auth-context";
import { auth } from "../firebase/firebase";


const AuthProvider = (props) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email,password);
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const logout = () => {
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        })
        return () => {
           unsubscribe();
        }
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>{!loading && props.children}</AuthContext.Provider>
    )

};

export default AuthProvider;