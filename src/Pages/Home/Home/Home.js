import React from 'react';
import Advertised from './Advertised/Advertised';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs/ContactUs';
import ProductCategoryCards from './ProductCategories/ProductCategoryCards';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Advertised></Advertised>
            <ProductCategoryCards></ProductCategoryCards>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;