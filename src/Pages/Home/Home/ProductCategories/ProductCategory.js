import React, { useEffect, useState } from 'react';
import BookingModal from '../../../BookingModal/BookingModal';
import AdvertisedProduct from '../Advertised/AdvertisedProduct';
import { useLoaderData } from "react-router-dom";

const ProductCategory = () => {
    const [advertisedProducts, setAdvertisedProducts]= useState([]);
    const [product, setProduct]= useState(null);

    const [categoryProducts]= useLoaderData();

    useEffect(() => {
        fetch(`https://watch-ex-server.vercel.app/category/${categoryProducts.category_id}`)
          .then((res) => res.json())
          .then((data) => setAdvertisedProducts(data));
      }, [categoryProducts.category_id]);

    return (
        <section className='my-8'>
        <h1 className="text-primary text-4xl font-bold text-center underline underline-offset-4">{categoryProducts.product_category}</h1>

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

export default ProductCategory;