import React from "react";
import { assets } from "../../assets/assets";

export default function Banner() {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center px-6"
      style={{
        background:
          "linear-gradient(180deg, #ffed64, #fae75f, #f6e159, #f1da54, #edd44f, #e8ce4a, #e4c844, #dfc23f)",
      }}
    >
      {/* Left Section - Image */}
      <div className="relative w-1/2 flex justify-center">
        <img
          src={assets.star}
          alt=""
          className="w-[50px] h-[50px] absolute top-16 left-44 -rotate-12"
        />
        <img
          src={assets.star}
          alt=""
          className="w-[30px] h-[30px] absolute bottom-32 left-32 -rotate-12"
        />
        <img
          src={assets.star}
          alt=""
          className="w-[40px] h-[40px] absolute top-14 right-32 -rotate-12"
        />
        <img
          src={assets.star}
          alt=""
          className="w-[36px] h-[36px] absolute bottom-16 right-24 -rotate-12"
        />
        <img
          src={assets.BannerImg}
          alt="Woman with a yellow background"
          className="w-[90%] h-auto rounded-lg"
        />
      </div>

      {/* Right Section - Text */}
      <div className="w-1/2 mt-8 md:mt-0 md:ml-8 text-center md:text-left">
        <h1 className="text-7xl font-extrabold uppercase leading-tight">
          <span className="bg-white text-black px-2">Stunning</span> Quality
        </h1>
        <p className="mt-4 text-lg text-gray-800 w-3/4">
          Our PRO plans offer advanced features like batch processing,
          high-resolution downloads, etc.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800">
          See the Pricing
        </button>
      </div>
    </div>
  );
}
