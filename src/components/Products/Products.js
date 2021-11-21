import React, { useContext } from "react";
import "./products.scss";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import Banner from "../Banner/Banner";
// cart context
import { CartContext } from "../../context/CartContext";

const Products = () => {
  const { products } = useContext(ProductContext);
  // const data = useContext(CartContext);
  // console.log(data);
  const { dispatch } = useContext(CartContext);
  // console.log(dispatch);
  // console.log(products);
  //   console.log(products.products);
  //   console.log(products.products[0].name);

  //   const data = useContext(ProductContext);
  //   console.log(data.products);
  //   console.log(data.products);
  //   console.log(data.products[1].name);

  return (
    <>
      <Banner />
      <section id="products" className="overflow-hidden pb-24 pt-14">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-black capitalize mb-5">
            Our <span className="text-yellow-600">Products</span>
          </h2>
          <div className="flex flex-wrap">
            {products.map((product) => {
              return (
                <div
                  className="xl:w-3/12 lg:w-4/12 md:w-6/12 sm:w-full w-full product_div"
                  key={product.id}
                >
                  <span className={`${product.bgColor} status px-4`}>
                    {product.status}
                  </span>
                  <NavLink
                    to={`/details/${product.id.toString()}`}
                    className="product_img"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-80 w-full"
                    />
                  </NavLink>
                  <div className="product_content flex justify-between align-middle">
                    <h3 className="text-2xl font-bold">{product.name}</h3>
                    <span className={`text-xl font-bold text-pink-800`}>
                      $ {product.price}
                    </span>
                  </div>
                  <div className="cart_btn my-3">
                    <button
                      type="button"
                      className="bg-yellow-400 px-5 py-1 text-black"
                      onClick={() =>
                        dispatch({
                          type: "ADD_TO_CART",
                          id: product.id,
                          product,
                        })
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
