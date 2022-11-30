import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h3 className="text-4xl">Welcome {user?.displayName}</h3>
        </div>
    );
};

export default Dashboard;