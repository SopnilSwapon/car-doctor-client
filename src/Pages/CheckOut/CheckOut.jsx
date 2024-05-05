import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';

const CheckOut = () => {
    const service = useLoaderData();
    const {user} = useContext(AuthContext);

    const handleOrder = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const price = form.price.value;
        const orderInfo = {
            CustomerName: name,
            date,
            email,
            price: price,
            service: service.title,
            service_id: service._id,
            img: service.img
        }
        fetch('http://localhost:5000/order',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('order successful')
            }
        })
    }
    return (
        <div>
            <h2>book service: {service.title} </h2>
      <form onSubmit={handleOrder} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" defaultValue={user?.displayname}  className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Dua Amount</span>
          </label>
          <input type="text" name="price" defaultValue={"$" + service.price} className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Confirm Order" />
        </div>
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
    );
};

export default CheckOut;