import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UseAuth = () => {
 const Auth = useContext(AuthContext);
 return Auth
};

export default UseAuth;