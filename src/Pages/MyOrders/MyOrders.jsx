import { useEffect, useState } from "react";
import OrderRow from "./OrderRow";
// import axios from "axios";
import UseAuth from "../../UseAuth/UseAuth";
import useAxios from "../../useAxios/useAxios";

const MyOrders = () => {
  const {user} = UseAuth();
  const [orders, setOrders] = useState([]);
  const useAxiosSecure = useAxios();
  const url = `/order?email=${user.email}`
  useEffect(() => {
    
    useAxiosSecure.get(url)
    .then(res => {
      setOrders(res.data)
    })
  }, [url, useAxiosSecure]);
  const handleDeleteOrder = id => {
    const proceed = confirm('are you sure you want to delete');
    if (proceed) {
      fetch(`https://car-doctor-server1-xi.vercel.app/order/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('deleted successful');
            const remaining = orders.filter(order => order._id !==id);
            setOrders(remaining)
          }
        })
    }
  };
  console.log(orders);
  const handleOrderConfirm = id => {
    fetch(`https://car-doctor-server1-xi.vercel.app/order/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({status: 'confirm'})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount > 0){
        const remaining = orders.filter(order => order._id !==id);
        const updateOrder = orders.find(order => order._id === id);
        updateOrder.status = 'confirm';
        const newOrders = [updateOrder, ...remaining];
        setOrders(newOrders)

      }
    })
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>price</th>
              <th>status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map(order => <OrderRow
                key={order._id}
                order={order}
                handleDeleteOrder={handleDeleteOrder}
                handleOrderConfirm={handleOrderConfirm}
                
                ></OrderRow>)
            }
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default MyOrders;