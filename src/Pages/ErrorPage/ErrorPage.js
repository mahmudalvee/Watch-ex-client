import React from 'react';
import pagenotfound from "../../assests/pagenotfound.jpg";

const ErrorPage = () => {
    return (
        <div>
            <img style={{ width: "500vh" }} src={pagenotfound} alt="404 page not found" />
        </div>
    );
};

export default ErrorPage;