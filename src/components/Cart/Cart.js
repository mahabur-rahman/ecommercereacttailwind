import React, { useContext } from "react";
import "./cart.scss";
import { CartContext } from "../../context/CartContext";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
// stripe checkout
import StripeCheckout from "react-stripe-checkout";
// axios
import axios from "axios";
// React Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Cart = (props) => {
  const data = useContext(CartContext);
  // console.log(data);
  const { shoppingCart, totalPrice, qty, dispatch } = data;

  // stripe checkout
  const handleToken = async (token) => {
    // console.log(token);
    const product = { name: "All Products", price: totalPrice };
    const response = await axios.post("localhost:5000/checkout", {
      product,
      token,
    });
    const { status } = response.data;
    if (status === "success") {
      dispatch({ type: "EMPTY" });
      props.history.push("/");
      toast.success(
        "You have paid successfully now you can continue shopping :) ",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
    }

    console.log(response);
  };

  return (
    <>
      <section id="cartSec" className="overflow-hidden py-32">
        <div className="container mx-auto">
          <h2 className="font-bold text-5xl text-center mb-20">
            <span className="text-yellow-600 tracking-widest capitalize">
              Cart
            </span>
            Page
          </h2>

          {shoppingCart.length > 0 ? (
            shoppingCart.map((item) => (
              <div key={item.id} className="flex justify-between">
                {/* left part */}
                <div className="item_img flex justify-between align-middle left_part">
                  <img src={item.image} alt={item.name} className="w-20 h-20" />
                  <span className="ml-3 font-bold text-xl dressName">
                    {item.name}
                  </span>
                </div>
                {/* middle part  */}

                <div className="middle_part">
                  <span className="text-xl font-bold">$ {item.price}</span>
                  <button className="text-xl font-bold bg-yellow-600 px-7 py-2 rounded-full text-white">
                    <FaPlus
                      onClick={() =>
                        dispatch({ type: "INCREMENT", id: item.id, item })
                      }
                    />
                  </button>
                  <span className="text-xl font-bold px-1">{item.qty}</span>
                  <button className="text-xl font-bold bg-yellow-600 px-7 py-2 rounded-full text-white">
                    <FaMinus
                      onClick={() =>
                        dispatch({ type: "DECREMENT", id: item.id, item })
                      }
                    />
                  </button>
                  <span className="total_price text-xl font-bold">
                    $ {item.price * item.qty}
                  </span>
                  <button className="text-xl font-bold text-red-600 px-7 py-2 rounded-full">
                    <FaTrash
                      onClick={() =>
                        dispatch({ type: "DELETE", id: item.id, item })
                      }
                    />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h2 className="text-red-500 text-center font-bold text-4xl italic">
              Sorry your cart is empty !
            </h2>
          )}

          {/* right part */}
          {shoppingCart.length > 0 ? (
            <div className="right_part text-right">
              <h4 className="text-2xl text-yellow-700 capitalize font-bold">
                Order summary
              </h4>
              <div>
                <h5 className="text-xl text-black font-bold capitalize my-2">
                  total Items: {qty}
                </h5>
              </div>
              <div>
                <h5 className="text-xl text-black font-bold capitalize">
                  Total Price : $ {totalPrice}
                </h5>
              </div>

              <button className="mt-3">
                <StripeCheckout
                  stripeKey="pk_test_51JwpL5BWwMKzdCZXHGWcrq7mPnn9bChbPihabAISBE63zU3EfjJxL0xfxHqUfkLQay70v4FoZkKprjH2sjcvzFrq00lNPvm2ZN"
                  token={handleToken}
                  billingAddress
                  shippingAddress
                  amount={totalPrice * 100}
                  name="All Products"
                />
              </button>
              {/* <button
                type="button"
                className="text-xl font-bold bg-red-600 px-8 py-2 rounded-full text-white mt-2"
              >
                Pay Now
              </button> */}
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
