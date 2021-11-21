import React from "react";
import "./details.scss";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useParams } from "react-router";
// cart context
import { CartContext } from "../../context/CartContext";

const Details = () => {
  const { products } = useContext(ProductContext);
  // dispatch
  const { dispatch } = useContext(CartContext);
  // console.log(products);
  const link = useParams();
  // console.log(link);

  const findProducts = products.find(
    (product) => product.id.toString() === link.id
  );
  // console.log(findProducts);
  const { id, name, price, image, status, bgColor, desc } = findProducts;
  console.log(findProducts);

  return (
    <>
      <section id="details" className="py-32">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-black capitalize mb-12 tracking-widest">
            Details <span className="text-yellow-600">Page</span>
          </h2>
          <div className="flex flex-wrap">
            <div className="md:w-9/12 text-center mx-auto">
              <div className="details_content">
                <img src={image} alt={name} className="h-screen w-full" />
                <div className="flex justify-evenly align-middle mt-5">
                  <h3 className="text-4xl font-bold italic">{name}</h3>
                  <span className="text-pink-700 text-2xl font-bold">
                    $ {price}
                  </span>
                </div>
                <p className="text-xl mt-5">{desc}</p>
                <span
                  className={`${bgColor} text-md font-bold status capitalize text-yellow-600 px-6`}
                >
                  {status}
                </span>
              </div>
              {/* add to cart btn */}
              <div className="cart_btn my-3">
                <NavLink
                  to="/cart"
                  type="button"
                  className="bg-yellow-400 px-5 py-1 text-black"
                >
                  Add to Cart
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
