"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import getProducts from "@/actions/get-products";
import { Product } from "@/types";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Transform Your Space, One Tile at a Time
      </h2>
      <Carousel items={cards} />
    </div>
  );
}



// const fetchDatas = async (): Promise<Product[]> => {
//   const res = await getProducts({ isFeatured: "true" })
//   console.log(res)
//   const topFive = res.slice(0, 5)
//   return topFive
// }
// const datas=fetchDatas().then((datas) => {
//   datas
// });
// console.log(datas)

// console.log("-------------------------");
const data = [
  {
    category: "Tiles",
    title: "Modern Designs in Porcelain Tiles.",
    src: "https://res.cloudinary.com/dsax8ghd0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1730788798/pexels-markusspiske-119812_fsu156.jpg",
    content: <p>Explore our modern porcelain tiles collection.</p>,
  },
  {
    category: "Ceramics",
    title: "Enhance Your Space with Artistic Ceramic Tiles.",
    src: "https://res.cloudinary.com/dsax8ghd0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1730788757/pexels-igor-starkov-233202-756083_e5upae.jpg",
    content: <p>Discover artistic ceramic tiles for your space.</p>,
  },
  {
    category: "Product",
    title: "Introducing Eco-Friendly Floor Tiles.",
    src: "https://res.cloudinary.com/dsax8ghd0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1730788603/pexels-lina-1841143_ca4ph3.jpg",
    content: <p>Eco-friendly floor tiles for a sustainable home.</p>,
  },
  {
    category: "Outdoor",
    title: "Durable Tiles for Outdoor Spaces.",
    src: "https://res.cloudinary.com/dsax8ghd0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1730780798/pexels-athena-2186245_wyzy4f.jpg",
    content: <p>Durable tiles perfect for outdoor spaces.</p>,
  },
  {
    category: "Innovation",
    title: "High-Performance Ceramic Solutions.",
    src: "https://res.cloudinary.com/dsax8ghd0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1730788675/pexels-pixabay-280232_wt2lfr.jpg",
    content: <p>Innovative ceramic solutions for high performance.</p>,
  },
  {
    category: "Careers",
    title: "Hiring: Tile Design Specialist",
    src: "https://res.cloudinary.com/dsax8ghd0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1730788332/pexels-christa-grover-977018-1909656_kvsrcd.jpg",
    content: <p>Join our team as a Tile Design Specialist.</p>,
  },
];
