import React from 'react';
import smart from '../../../../assests/categories/Smart.jpg'
import men from '../../../../assests/categories/Men.jpg'
import ladies from '../../../../assests/categories/Ladies.jpg'
import ProductCategoryCard from './ProductCategoryCard';

const ProductCategoryCards = () => {

    const cardData = [
        {
            id: 1,
            typeName: 'Smart Watch',
            bgClass: smart
        },
        {
            id: 2,
            typeName: "Men Watch",
            bgClass: men
        },
        {
            id: 3,
            typeName: 'Ladies Watch',
            bgClass: ladies
        },
    ]

    return (
        <div className='my-8'>
            <h1 className="text-primary text-4xl font-bold text-center">Product Categories</h1>

            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card => <ProductCategoryCard
                    key={card.id}
                    card={card}
                ></ProductCategoryCard>)
            }
        </div>
        </div>
    );
};

export default ProductCategoryCards;