import axios from "axios";
import { useEffect, useState } from "react";

const UseServices = () => {
    const [servicesData, setServicesData] = useState([]);
    useEffect(() => {
       axios.get('https://car-doctor-server1-xi.vercel.app/services')
       .then(res => {
        setServicesData(res.data)
       })
    }, []);
    return servicesData

};

export default UseServices;