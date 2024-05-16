import { createContext, useEffect, useState } from "react";
import  {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import axios from "axios";
import app from "../firebase/firebase.confiq";
const auth = getAuth(app);
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
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
        const userEmail = currentUser?.email || user?.email;
        const loggedEmail = {email: userEmail}
        console.log(currentUser)
        setUser(currentUser);
        setLoading(false);
        if(!currentUser){
            axios.post('https://car-doctor-server1-xi.vercel.app/logout', loggedEmail, {
                withCredentials: true
            }
        )
        
        .then(res =>{
            console.log("token response", res.data);
         })
        }
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