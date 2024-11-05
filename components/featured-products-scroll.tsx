import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";



const FeaturedProductMovingCard = () => {
    return ( 
        <div className="h-[20rem] rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
        style={{
            backgroundColor: "#e3e3cd24"
        }}
        >
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
     );
}
 
export default FeaturedProductMovingCard;


const testimonials =
[
    {
      quote:
        "The tiles here are simply exquisite! I found the perfect design that added a beautiful touch to my living room.",
      name: "Anita Sharma",
      title: "Homeowner",
    },
    {
      quote:
        "Fantastic variety and excellent service! The staff helped me pick the ideal tiles for my kitchen renovation, and the outcome is stunning.",
      name: "Rajiv Menon",
      title: "Interior Designer",
    },
    {
      quote:
        "I recently redid my bathroom, and the tiles I bought here have transformed the space. Highly recommend this showroom for quality and style.",
      name: "Sneha Kapoor",
      title: "Home Renovator",
    },
    {
      quote:
        "As a contractor, quality is my top priority. This showroom has a great selection, and the tiles are both durable and stylish. My clients love them!",
      name: "Arjun Desai",
      title: "Contractor",
    },
    {
      quote:
        "The tile designs are unique and classy. The team here really understands how to help bring your vision to life.",
      name: "Pooja Iyer",
      title: "Architect",
    },
  ];
  