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

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

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
    content: <DummyContent />,
  },
  {
    category: "Ceramics",
    title: "Enhance Your Space with Artistic Ceramic Tiles.",
    src: "https://res.cloudinary.com/dsax8ghd0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1730788757/pexels-igor-starkov-233202-756083_e5upae.jpg",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Introducing Eco-Friendly Floor Tiles.",
    src: "https://res.cloudinary.com/dsax8ghd0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1730788603/pexels-lina-1841143_ca4ph3.jpg",
    content: <DummyContent />,
  },
  {
    category: "Outdoor",
    title: "Durable Tiles for Outdoor Spaces.",
    src: "https://res.cloudinary.com/dsax8ghd0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1730780798/pexels-athena-2186245_wyzy4f.jpg",
    content: <DummyContent />,
  },
  {
    category: "Innovation",
    title: "High-Performance Ceramic Solutions.",
    src: "https://res.cloudinary.com/dsax8ghd0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1730788675/pexels-pixabay-280232_wt2lfr.jpg",
    content: <DummyContent />,
  },
  {
    category: "Careers",
    title: "Hiring: Tile Design Specialist",
    src: "https://res.cloudinary.com/dsax8ghd0/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1730788332/pexels-christa-grover-977018-1909656_kvsrcd.jpg",
    content: <DummyContent />,
  },
];
