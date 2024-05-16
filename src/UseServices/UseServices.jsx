// import axios from "axios";
import { useEffect, useState } from "react";
import { axiosSecure } from "../useAxios/useAxios";

const UseServices = (asc) => {
    const [servicesData, setServicesData] = useState([]);
    useEffect(() => {
        axiosSecure(`/services?sort=${asc ? 'asc' : 'desc'}`)
        .then(res =>{
            setServicesData(res.data)
        })
    //    axios.get('https://car-doctor-server1-xi.vercel.app/services')
    //    .then(res => {
    //     setServicesData(res.data)
    //    })
    }, [asc]);
    return servicesData

};

export default UseServices;