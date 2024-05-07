import { createContext, useEffect, useState } from "react";
import  {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from "../firebase/firebase.confg";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
// ______________user create__________________//
    const createUser = (email, password) => {
        setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
    }
    // _______________User Login ______________________//
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // ______________log Out____________________//
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
      const unSubscribe =  onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser)
        setUser(currentUser);
        setLoading(false)
        })
       return () => {
        return unSubscribe();
       }
        
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;