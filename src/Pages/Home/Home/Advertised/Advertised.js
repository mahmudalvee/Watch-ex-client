import React, { useEffect, useState } from 'react';
import BookingModal from '../../../BookingModal/BookingModal';
import AdvertisedProduct from './AdvertisedProduct';

const Advertised = () => {
    const [advertisedProducts, setAdvertisedProducts]= useState([]);
    const [product, setProduct]= useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/advertisedProducts')
            .then(res => res.json())
            .then(data => setAdvertisedProducts(data))
    }, [])
    return (
        <section className='my-8'>
            <h1 className="text-primary text-4xl font-bold text-center">Advertised Products</h1>

            <div className='grid mt-6 gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                {
                    advertisedProducts.map(advertisedProduct => <AdvertisedProduct
                        key={advertisedProduct._id}
                        advertisedProduct={advertisedProduct}
                        setProduct= {setProduct}
                    ></AdvertisedProduct>
                    )
                }
            </div>

            {
                product &&
                <BookingModal
                product={product}
                setProduct={setProduct}
                ></BookingModal>
            }
        
        </section>
    );
};

export default Advertised;