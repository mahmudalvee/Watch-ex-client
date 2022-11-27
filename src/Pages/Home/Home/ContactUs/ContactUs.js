import React from "react";

const ContactUs = () => {
  return (
    <div className="hero py-8 bg-base-200 rounded-xl">
      <div className="lg:w-80 text-center">
        <div className=" text-primary">
          <h1 className="text-4xl font-bold">Contact US</h1>
          <div className=" form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder=""
              className="input input-bordered"
            />
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              placeholder=""
              className="input input-bordered"
            />
            <label className="label">
              <span className="label-text">Your Message</span>
            </label>
            <textarea
              className="textarea textarea-secondary"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-outline btn-primary btn-xs btn-md btn glass">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
