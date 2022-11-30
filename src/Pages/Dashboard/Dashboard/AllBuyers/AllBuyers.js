import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Loading from '../../../Home/Home/Shared/Loading/Loading';
import { FaUserAltSlash } from "react-icons/fa";

const AllBuyers = () => {
    const {data: users = [], isLoading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/allbuyers');
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = (id) => {
      const proceed = window.confirm(
        "Are you sure, you want to cancel this Review"
      );
      if (proceed) {
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        })
          .then((res) => res.json())
          .then((data) => {
            
            if (data.deletedCount > 0) {
              console.log(data);
            refetch();
              toast.success("Deleted successfully!");
              <Toaster />;
            }
          });
      }
    };

    if(isLoading){
        return <Loading></Loading>
    }
    

    return (
        <div className='text-center'>
            <h2 className="text-3xl font-bold text-primary underline underline-offset-4">All Buyers</h2>

            <div className="overflow-x-auto">
  <table className="table w-10/12 mx-auto">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Delete Buyer</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, i) =><tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><button onClick={()=>handleDelete(user._id)} className='btn btn-xs bg-red-600 text-white'>Delete  <FaUserAltSlash> </FaUserAltSlash></button></td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllBuyers;