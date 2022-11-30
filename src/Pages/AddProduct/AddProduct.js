import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
    const {user}= useContext(AuthContext);
    const navigate = useNavigate();

    const handlePlaceProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.Product.value;
        const product_category= form.Category.value;
        const resale_price= form.PriceResale.value;
        const original_price= form.PriceOriginal.value;
        const seller_phone= form.Phone.value;
        const year_of_Purchase= form.YearPurchase.value;
        const years_of_use= form.YearUsed.value;
        const picture= form.Img.value;
        const seller_location= form.Location.value;
        const condition= form.Condition.value;
        const time_posted= form.Date.value;
        const description= form.Description.value;

        function categoryID() {
            if(product_category==='Smart Watch'){
                return '1';
            }
            if(product_category==='Ladies Watch'){
                return '2';
            }
            if(product_category==='Men Watch'){
                return '3';
            }
        };
        const category_id= categoryID();

        const newProduct = {
            name: name,
            product_category: product_category,
            category_id: category_id,
            resale_price: resale_price,
            original_price: original_price,
            seller_phone: seller_phone,
            year_of_Purchase: year_of_Purchase,
            years_of_use: years_of_use,
            picture: picture,
            seller_location: seller_location,
            condition: condition,
            time_posted: time_posted,
            description: description,
            seller_name: user?.displayName,
            seller_email: user?.email
        }

        fetch('https://watch-ex-server.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    toast.success('Product added successfully!');
                <Toaster />
                    form.reset();
                    navigate('/dashboard/myproducts');
                }
            })
            .catch(er => console.error(er));
        

    }


    return (
        <div>
            <form onSubmit={handlePlaceProduct}>
                <h2 className="mt-3 text-3xl text-center text-primary underline underline-offset-4 font-bold">Add New Service</h2>
                <div className='mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="Product" type="text" placeholder="Product Name" className="input input-ghost w-full  input-bordered" required/>
                    <select name="Category" className="input input-ghost w-full  input-bordered" required>
                    <option value="Smart Watch">Smart Watch</option>
                    <option value="Ladies Watch">Ladies Watch</option>
                    <option value="Men Watch">Men Watch</option>
                    </select>
                    <input name="PriceResale" type="text" placeholder="Resale Price ($)" className="input input-ghost w-full  input-bordered" required/>
                    <input name="PriceOriginal" type="text" placeholder="Original Price ($)" className="input input-ghost w-full  input-bordered" required/>
                    <input name="Phone" type="text" placeholder="Phone number" className="input input-ghost w-full  input-bordered" required/>
                    <input name="YearPurchase" type="text" placeholder="Purchase Year" className="input input-ghost w-full  input-bordered" required/>
                    <input name="YearUsed" type="text" placeholder="Year(s) used" className="input input-ghost w-full  input-bordered" required/>
                    <input name="Img" type="text" placeholder="Image url (Product Image URL)" className="input input-ghost w-full  input-bordered" required/>
                    <input name="Location" type="text" placeholder="Location" className="input input-ghost w-full  input-bordered" required/>
                    <select name="Condition" className="input input-ghost w-full  input-bordered" required>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                    </select>
                    <input name="Date" type="Date" placeholder="Date" className="input input-ghost w-full  input-bordered" required/>
                </div>
                <textarea name="Description" className="my-3 textarea textarea-bordered h-24 w-full" placeholder="Product Description" required></textarea>

                <div className="text-center">
                <input className='btn' type="submit" value="Add Service" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;