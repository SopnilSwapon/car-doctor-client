import axios from "axios";
import { useEffect, useState } from "react";

const UseServices = () => {
    const [servicesData, setServicesData] = useState([]);
    useEffect(() => {
       axios.get('http://localhost:5000/services')
       .then(res => {
        setServicesData(res.data)
       })
    }, []);
    return servicesData

};

export default UseServices;