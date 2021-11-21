import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
//cart context
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const { qty } = useContext(CartContext);

  return (
    <>
      <section
        id="navbar"
        className="py-3 bg-gray-900 overflow-hidden shadow-xl fixed w-full z-50"
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="sm-w-full w-full">
              <div className="main flex justify-around align-middle">
                <div className="left_side">
                  <Link
                    to="/"
                    className="text-3xl text-gray-200 font-bold no-underline"
                  >
                    <span className="no-underline"> Shoppi</span>
                    <span className="text-yellow-500 italic">.my</span>
                  </Link>
                </div>
                <div className="right_side">
                  <Link to="/cart" className="flex align-middle">
                    <span>
                      <FaCartPlus className="text-3xl font-bold text-white" />
                    </span>

                    <span className="count text-xl h-8 w-8 rounded-full mx-3 bg-gray-700 text-white text-center leading-8 cursor-not-allowed">
                      {qty}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
