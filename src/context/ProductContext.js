import React, { createContext, useState } from "react";
// images
import productImg1 from "../images/p1.jpg";
import productImg2 from "../images/p2.jpg";
import productImg3 from "../images/p3.jpg";
import productImg4 from "../images/p4.jpg";
import productImg5 from "../images/p5.jpg";
import productImg6 from "../images/p6.jpg";
import productImg7 from "../images/p7.jpg";
import productImg8 from "../images/p8.jpg";
import productImg9 from "../images/p9.jpg";
import productImg10 from "../images/p10.jpg";

// create context
export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products] = useState([
    {
      id: 1,
      name: "Sheath",
      price: 40,
      image: productImg1,
      status: "hot",
      desc: "Tell the story of your product to make it feel unique. Make text easy to scan and read quickly. And we’re not alone. Last year, 80% of Americans shopped online at least monthly, and 5% were shopping online daily, Big Commerce reported. For many of us, online shopping has become a routine part of daily life, with huge impact on a global scale.",
      bgColor: "a",
    },
    {
      id: 2,
      name: "T-Shirt",
      price: 80,
      image: productImg2,
      status: "new",
      desc: "Tell the story of your product to make it feel unique. Make text easy to scan and read quickly. And we’re not alone. Last year, 80% of Americans shopped online at least monthly, and 5% were shopping online daily, Big Commerce reported. For many of us.",
      bgColor: "b",
    },
    {
      id: 3,
      name: "Shari",
      price: 50,
      image: productImg3,
      status: "hot",
      desc: "Tell the story of your product to make it feel unique. Make text easy to scan and read quickly. If you’ve been reading this blog for a while, you’ve probably seen at least one of our customer spotlights. We love our customers! As a former small business marketer myself, I love our passionate dedication to empowering and supporting small business growth. ",
      bgColor: "a",
    },
    {
      id: 4,
      name: "Midi Dress",
      price: 85,
      image: productImg4,
      status: "hot",
      desc: "Tell the story of your product to make it feel unique. Make text easy to scan and read quickly. If you’ve been reading this blog for a while, you’ve probably seen at least one of our customer spotlights. We love our customers! As a former small business marketer myself, I love our passionate dedication to empowering and supporting small business growth. ",
      bgColor: "a",
    },
    {
      id: 5,
      name: "Shift Dress",
      price: 190,
      image: productImg5,
      status: "new",
      desc: "Tell the story of your product to make it feel unique. Make text easy to scan and read quickly. What are features and benefits? Think about what gets you excited about your product that makes it different from your competitors’ products. It might be careful construction, ethically sourced materials, or all the bells and whistles you dreamed up over drinks one night. Those are features.",
      bgColor: "b",
    },
    {
      id: 6,
      name: "Bodycon",
      price: 120,
      image: productImg6,
      status: "hot",
      desc: "Tell the story of your product to make it feel unique. Make text easy to scan and read quickly. In product descriptions, it’s easy to fall into the trap of only describing the features of your products. But when you just list the features, you’re not actually helping your buyer understand how your product will help them. talk about a product page that communicates both features and benefits effectively.",
      bgColor: "a",
    },
    {
      id: 7,
      name: "A-Line Dress",
      price: 234,
      image: productImg7,
      status: "new",
      desc: "Tell the story of your product to make it feel unique. Make text easy to scan and read quickly. Open your door to the world of grilling with the sleek Spirit II E-210 gas grill. This two burner grill is built to fit small spaces, and packed with features such as the powerful GS4 grilling system, iGrill capability, and convenient side tables for placing serving trays. Welcome to the Weber family.",
      bgColor: "b",
    },
    {
      id: 8,
      name: "Maxi Dress",
      price: 400,
      image: productImg8,
      status: "hot",
      desc: "Tell the story of your product to make it feel unique. Make text easy to scan and read quickly. The KONG Puppy toy is customized for a growing puppy's baby teeth, the unique, natural rubber formula is the most gentle within the KONG rubber toy line. Designed to meet the needs of a puppy's 28-baby teeth, it helps teach appropriate chewing behavior while offering enrichment and satisfying a younger pup's instinctual needs. Meanwhile, the erratic bounces make it ideal for those pups that just want to play. ",
      bgColor: "a",
    },
    {
      id: 9,
      name: "Halter",
      price: 215,
      image: productImg9,
      status: "hot",
      desc: "Tell the story of your product to make it feel unique. Make text easy to scan and read quickly. The KONG Puppy toy is customized for a growing puppy's baby teeth, the unique, natural rubber formula is the most gentle within the KONG rubber toy line. Designed to meet the needs of a puppy's 28-baby teeth, it helps teach appropriate chewing behavior while offering enrichment and satisfying a younger pup's instinctual needs. Meanwhile, the erratic bounces make it ideal for those pups that just want to play. ",
      bgColor: "a",
    },
    {
      id: 10,
      name: "Wrap",
      price: 199,
      image: productImg10,
      status: "new",
      desc: "Tell the story of your product to make it feel unique. Make text easy to scan and read quickly. Your job on the product page is to educate your customer. Write detailed, informative copy that helps your customer make a smart purchase decision. How much information they’ll need depends on the company and the product. If you’re a well-respected brand, your customers are mostly repeat buyers, or your price point is very low, you’ll need to include less information. But if you’re a small, lesser-known brand in a high-competition industry, you’ll need to provide a ton of information to make your customer feel confident in their purchase. ",
      bgColor: "b",
    },
  ]);
  return (
    <ProductContext.Provider value={{ products: [...products] }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
