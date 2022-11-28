import React from 'react';
import { SpinnerDotted } from 'spinners-react';

const Loading = () => {
    return (
        <div className='App'>
            <SpinnerDotted className='mx-auto my-24' size={70} thickness={100} speed={150} color="#000000" />
        </div>
    );
};

export default Loading;