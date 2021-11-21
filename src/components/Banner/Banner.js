import React from "react";
import "./Banner.scss";

const Banner = () => {
  return (
    <>
      <section id="bannerSec">
        <div className="container.mx-auto">
          <div className="flex fex-wrap">
            <div className="sm:w-full w-full">
              <div className="banner_content text-center mt-44">
                <h2 className="text-6xl text-gray-100 mb-3">
                  Make
                  <span className="text-yellow-500 font-bold"> Beautiful </span>
                  life with <span>shopping</span>
                </h2>
                <p className="text-xl text-gray-200">
                  Social media lets consumers easily share products to
                  <span className="text-yellow-500"> buy </span>
                  online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
