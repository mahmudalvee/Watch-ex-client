import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from 'react-hot-toast';

const BookingModal = ({product, setProduct}) => {
    const {_id, name, resale_price, picture}= product;
    const {user} = useContext(AuthContext);
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const customer = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const meeting = form.meeting.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        const booking = {
           product_id: _id,
            product: name,
            price: resale_price,
            customer: customer,
            picture: picture,
            email,
            phone,
            meeting
        }

        //send data to the server
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                  setProduct(null);
                    toast.success('Booking confirmed');

                }
                else{
                    toast.error(data.message);
                }
            })

    }

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-3xl text-primary font-bold">
            {name}
          </h3>
          <h3 className="text-2xl">
            Price: {resale_price}$
          </h3>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" disabled  defaultValue={user?.displayName} className="input w-full input-bordered " />
                        <input name="email" disabled defaultValue={user?.email} className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Your Phone" className="input w-full input-bordered" />
                        <input name="meeting" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn bg-yellow-400 btn-xs btn-md btn glass w-full text-primary' type="submit" value="Submit" />
                    </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
