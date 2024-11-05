"use client"
import React, { useState } from "react";
import Image from "next/image";

const Finishes = () => {
    const [selectedFinish, setSelectedFinish] = useState("Polished");

    const finishes = [
        "Polished",
        "Gloss Matt",
        "Carving",
        "Superwhite",
        "Matt",
        "Metallic",
        "Marbletech",
        "Rotomatt",
    ];

    const descriptions = {
        Polished:
            "A spectacular mirror-like effect is what you get in this superior finish. The highly polished look is achieved with a thicker coat of glaze, enhancing image sharpness and giving you a rich and true color experience.",
            
        "Gloss Matt":
            "A refined balance between gloss and matte, this finish provides a subtle shine without being overly reflective. Ideal for modern spaces seeking a soft, elegant touch.",
        Carving:
            "Featuring intricate, textured patterns, the Carving finish adds a layer of depth and character to your space. It’s perfect for accent walls or areas that demand a unique look.",
        Superwhite:
            "The Superwhite finish offers a pristine, ultra-white appearance that brightens up any space. It is especially popular for minimalist and contemporary designs.",
        Matt:
            "A classic, non-reflective finish that provides a smooth and understated look. The Matt finish is versatile and works well in almost any setting, adding a soft sophistication.",
        Metallic:
            "With a metallic sheen, this finish brings a touch of luxury and glamour to your walls. The light-reflective quality of Metallic finish adds depth and dimension to any room.",
        Marbletech:
            "Marbletech mimics the timeless elegance of natural marble, offering a luxurious look with the durability of ceramic. Perfect for adding a touch of class without the maintenance of real stone.",
        Rotomatt:
            "A unique blend of matte with a slightly rough texture, the Rotomatt finish is designed to create a natural, rustic appeal. Ideal for spaces that require a more grounded, earthy aesthetic."
    };
    
    return ( 
        <div>
            <h2 className="text-4xl font-bold text-blue-600">
                Know Our Finishes
            </h2>
            <div className="flex flex-col lg:flex-row lg:justify-between p-8">
            {/* Left Side - Finishes List */}
            <div className="lg:w-1/2 mb-6 lg:mb-0">
                <ul className="space-y-2">
                    {finishes.map((finish) => (
                        <li
                            key={finish}
                            className={`cursor-pointer text-lg ${
                                selectedFinish === finish
                                    ? "font-bold text-black"
                                    : "text-gray-400"
                            }`}
                            onClick={() => setSelectedFinish(finish)}
                        >
                            {finish}
                            {selectedFinish === finish && (
                                <span className="block h-0.5 w-8 bg-blue-500 mt-1"></span>
                            )}
                        </li>
                    ))}
                </ul>
                <p className="mt-6 text-gray-700">
                    {/* @ts-ignore */}
                    {descriptions[selectedFinish] || "Select a finish to see the details."}
                </p>
            </div>

            {/* Right Side - Image */}
                <img
                    src="https://res.cloudinary.com/dsax8ghd0/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1730788757/pexels-igor-starkov-233202-756083_e5upae.jpg"
                    alt="Tile finish example"
                    className="w-full h-auto max-w-lg object-cover rounded-md shadow-lg"
                />

            </div>
        </div>

     );
}
 
export default Finishes;