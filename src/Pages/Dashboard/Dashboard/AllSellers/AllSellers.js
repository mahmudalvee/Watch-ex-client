import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../Home/Home/Shared/Loading/Loading';
import { FaUserAltSlash } from "react-icons/fa";

const AllSellers = () => {
    const {data: users = [], isLoading} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/allsellers');
            const data = await res.json();
            return data;
        }
    })
        if(isLoading){
        return <Loading></Loading>
    }


    return (
        <div className='text-center'>
            <h2 className="text-3xl font-bold text-primary underline underline-offset-4">All Sellers</h2>
            <div className="overflow-x-auto">
  <table className="table w-10/12 mx-auto">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Delete Seller</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, i) =><tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><button className='btn btn-xs bg-red-600 text-white'>Delete  <FaUserAltSlash> </FaUserAltSlash></button></td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllSellers;