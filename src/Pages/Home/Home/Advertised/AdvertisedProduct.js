import React from 'react';

const AdvertisedProduct = ({advertisedProduct, setProduct}) => {
    const {picture, name, seller_location, resale_price, original_price, years_of_use, time_posted, seller_name, advertised_status}= advertisedProduct;
    return (
        <div className="card flex mx-auto w-96 bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
                <img src={picture} alt="Product" className="rounded-lg" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl">{name}</h2>
                <p className="flex text-xl inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-yellow-300 text-black rounded">
                Resale Price: {resale_price}$
              </p>
                <p>Original Price: {original_price}$</p>
                <p>Location: {seller_location}</p>
                <p>Years of Use: {years_of_use}</p>
                <p>Posted: {time_posted}</p>
                <p>Seller: {seller_name}</p>
                <div className="card-actions">
                    <label 
                        htmlFor="booking-modal" 
                        className="btn bg-yellow-400 btn-xs btn-md btn glass text-black"
                        onClick={()=>setProduct(advertisedProduct)}
                    >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default AdvertisedProduct;