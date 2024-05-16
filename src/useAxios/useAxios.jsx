import axios from "axios";
import UseAuth from "../UseAuth/UseAuth";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxios = () => {
    const {logOut} = UseAuth();
    const navigate = useNavigate();
  axiosSecure.interceptors.response.use(res => {
    return res;
  }, err => {
    console.log(err.response);
    if(err.response.status === 401 || err.response.status === 403){
        console.log('logout');
        logOut()
        .then(() => {
          console.log('successfully Logout');
          alert('log out successful');
          navigate('/login')
        })
        .catch(error => {
          console.log(error.message);
        })


    }
  })

   return axiosSecure
};

export default useAxios;