"use client";
import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center p-6 min-h-screen">
      {/* Date Header */}
      <div className="w-full text-right text-gray-500 text-sm">16-09-2024</div>

      {/* Container */}
      <div className="bg-white shadow-md rounded-md overflow-hidden max-w-4xl w-full mt-4">
        {/* Image */}
        <div
          className="w-full h-64 bg-cover bg-center"
        >
          <img
            src="https://res.cloudinary.com/dsax8ghd0/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1730795030/pexels-jworks1124-342800_b3udkp.jpg"
            alt="About Galaxy Tiles and Ceramics"
            className="w-full h-full object-cover"
          />
          {/* Ensure you replace '/path-to-your-image.jpg' with the actual path to your image */}
        </div>

        {/* Text Content */}
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            About Galaxy Tiles and Ceramics
          </h2>
          <p className="mt-4 text-gray-600">
            Galaxy Tiles is the largest manufacturer of ceramic and vitrified
            tiles in India. It has an annual aggregate capacity of 93.10 mn. sq.
            meters, distributed across nine plants - Sikandrabad in Uttar
            Pradesh, Gailpur &amp; Malootana in Rajasthan, Srikalahasti in
            Andhra Pradesh, Balanagar in Telangana, three plants in Gujarat and
            one plant in Nepal. Equipped with cutting-edge technology, we strive
            to deliver quality products and services to our customers. Our team
            of experts work around the clock to ensure that the quality of our
            product is never compromised.
          </p>
          <p className="mt-4 text-gray-600">
            In order to cater to the specific needs of our customers we produce
            various categories of tiles, including kitchen tiles, bathroom
            tiles, wall tiles, floor tiles and exterior wall tiles. We aim at
            producing tiles that complement the distinctive style of our
            customers and cater to the vast needs of Indian audience. All of our
            tiles are crafted with intense care using state-of-the-art
            technology to ensure that we live up to the expectations of our
            buyers. Choicest of materials are used to produce our magnificent
            range of products.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
            KNOW MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
