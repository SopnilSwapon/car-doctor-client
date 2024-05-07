import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import OrderRow from "./OrderRow";
import axios from "axios";

const MyOrders = () => {
  const { user } = useContext(AuthContext)
  const [orders, setOrders] = useState([])
  const url = `http://localhost:5000/order?email=mon@karap.com`
  useEffect(() => {
    axios.get(url, {withCredentials: true})
    .then(res => {
      setOrders(res.data)
    })
  }, [url]);
  const handleDeleteOrder = id => {
    const proceed = confirm('are you sure you want to delete');
    if (proceed) {
      fetch(`http://localhost:5000/order/${id}`, {
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
    fetch(`http://localhost:5000/order/${id}`, {
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