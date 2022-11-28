import React from "react";
import { Link } from "react-router-dom";

const ProductCategoryCard = ({ card , id}) => {
  const { typeName, bgClass } = card;
  return (
    <div className="card  mx-auto w-90 image-full">
      <figure>
        <img src={bgClass} alt="product" />
      </figure>
      <div className="card-body mx-auto my-auto">
        <h2 className="text-4xl text-yellow-300">{typeName}</h2>
        <div className="card-actions mx-auto">
          <Link to={`/productCategory/${id}`}>
          <button className="btn btn-outline bg-yellow-400 btn-xs btn-md btn glass">View All</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryCard;
