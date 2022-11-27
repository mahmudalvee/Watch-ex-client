
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { SpinnerDotted } from 'spinners-react';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <>
        <SpinnerDotted className='mx-auto my-24' size={50} thickness={100} speed={150} color="#FFFF00" secondaryColor="rgba(0, 0, 0, 0)" />            
        </>
    }

    if (user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;