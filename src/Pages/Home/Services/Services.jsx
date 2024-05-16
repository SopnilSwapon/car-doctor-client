import ServicesCart from "./ServicesCart";
import UseServices from "../../../UseServices/UseServices";
import { useState } from "react";

const Services = () => {
    const [asc, setAsc] = useState(true)
  const servicesData = UseServices(asc);
    return (
        <div>
            <div className="space-y-4">
            <h3 className="text-center text-2xl mt-10 font-bold text-orange-400">Services</h3>
            <h1 className="text-center text-4xl font-bold">Our Services Area</h1>
            <p className="text-center">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable.</p>
            <div className="flex justify-end">
            <button onClick={()=>setAsc(!asc)} className="btn btn-secondary">
                {
                    asc ? 'High to low' : 'Low to high'
                }
            </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    servicesData.map(service => <ServicesCart
                    key={service._id}
                    service={service}
                    ></ServicesCart>)
                }
            </div>
            </div>
        </div>
    );
};

export default Services;