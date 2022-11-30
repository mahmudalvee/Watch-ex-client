import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { SpinnerDotted } from 'spinners-react';
import { MdDeleteForever } from "react-icons/md";
import { FcAdvertising } from "react-icons/fc";
import { AuthContext } from "../../contexts/AuthProvider";

const MyProducts = () => {
    const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:5000/myproducts?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user?.email]);


  const handleAd= (id) =>{
    fetch(`http://localhost:5000/advertisedProducts/${id}`, {
        method: 'PUT', 
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            toast.success('Product Advertisement Done!')
            window.location.reload();
        }
    })
  }

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel the Product?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/myproducts/${id}`, {
        method: "DELETE",
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Deleted successfully!");
            <Toaster />;
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
  };

    return (
        <div>
      {products.length === 0 ? (
        <>
          <div className='App'>
            <SpinnerDotted className='mx-auto my-24' size={70} thickness={100} speed={150} color="#000000" />
        </div>
        </>
      ) : (
        <>
          {products?.length ? (
            <>
              <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Product</th>
              <th>Status</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={product.picture}
                        alt="Product"
                      />
                    </div>
                  </div>
                </td>
                <td>{product.name}</td>
                <td>{product.resale_price}</td>
                <td><p>Available</p></td>
                <td><button onClick={() => handleDelete(product._id)} className=" btn btn-sm btn-outline bg-red-500 text-white">Delete<MdDeleteForever className="text-2xl"></MdDeleteForever></button></td>
                <td>{product?.ad_status !== 'true' && <button onClick={() => handleAd(product._id)} className=" btn btn-sm btn-outline bg-yellow-400 text-black">Advertise<FcAdvertising className="text-2xl"></FcAdvertising></button>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
            </>
          ) : (
            <>
              <h2 className="mt-6 text-2xl text-center text-primary underline underline-offset-4 font-bold ">
                No products are added by You.
              </h2>
            </>
          )}
        </>
      )}
    </div>
    );
};

export default MyProducts;