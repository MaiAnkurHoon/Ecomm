import Image from "next/image";
import bathtub from "../assets/wall_tiles/bathtub.png";
import house from "../assets/wall_tiles/house.png";
import kitchen from "../assets/wall_tiles/kitchen.png";
import interior from "../assets/wall_tiles/interior.png";

const ExploreProducts = () => {
  return (
    <>
    <div className="space-y-4">
      <h4 className="">Galaxy Tiles brings to you premium tiles</h4>
      <h2 className="text-4xl font-bold text-blue-700 text-pretty shadow-sm">
        Explore Our Wall Tiles
      </h2>
      <div className="container mx-auto p-4">
        <div className="parent-div flex flex-col h-96 md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="child-div-1 flex-1 flex flex-col justify-between  p-4">
            <h3 className="text-lg font-medium text-gray-700">
              Our wall tiles come in a multitude of styles, from sleek and
              modern designs to rustic, vintage finishes. Choose from glossy
              ceramics, textured stone, and vibrant mosaics to create a unique
              ambiance that reflects your personality.
            </h3>
              <button className="bg-blue-500 w-40 text-white px-4 py-2 rounded-lg mt-4">
                Explore Wall Tiles
              </button>
          </div>
          <div className="child-div-2 flex-1  p-4">
          <div className="grid grid-cols-2 gap-4 h-full">
        <div className="bg-white flex items-center justify-center flex-col border border-gray-300 transform transition-transform duration-500 ease-in-out translate-x-0 hover:translate-x-2">
          <Image src={bathtub} alt="" height={40} width={40}/>
          <h4 className="group-hover:text-blue-200">Bathroom Wall Tiles</h4>
          <button className="relative text-blue-500 font-semibold">
          Explore Now
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </button>
        </div>
        <div className="bg-white flex items-center justify-center flex-col border border-gray-300 transform transition-transform duration-500 ease-in-out translate-x-0 hover:translate-x-2">
          <Image src={house} alt="" height={40} width={40}/>
          <h4 className="group-hover:text-blue-200">Outdoor Wall Tiles</h4>
          <button className="relative text-blue-500 font-semibold">
          Explore Now
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </button>
        </div>
        <div className="bg-white flex items-center justify-center flex-col border border-gray-300 transform transition-transform duration-500 ease-in-out translate-x-0 hover:translate-x-2">
          <Image src={kitchen} alt="" height={40} width={40}/>
          <h4 className="group-hover:text-blue-200">Kitchen Wall Tiles</h4>
          <button className="relative text-blue-500 font-semibold">
          Explore Now
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </button>
        </div>
        <div className="bg-white flex items-center justify-center flex-col border border-gray-300 transform transition-transform duration-500 ease-in-out translate-x-0 hover:translate-x-2">
          <Image src={interior} alt="" height={40} width={40}/>
          <h4 className="group-hover:text-blue-200">Living Room Wall Tiles</h4>
          <button className="relative text-blue-500 font-semibold">
          Explore Now
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </button>
        </div>
        </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ExploreProducts;

// Commented out code
/*
<div className="space-y-4">
      <h4 className="">Galaxy Tiles brings to you premium tiles</h4>
      <h2 className="text-4xl font-bold text-blue-700 text-pretty shadow-sm">
      Explore Our Wall Tiles
      </h2>
      <div className="flex flex-wrap mt-8">
      <div className="h-[50vh] w-[30vw] flex flex-col justify-between transform transition-transform duration-500 hover:scale-95 mb-8">
        <div>
        <h3 className="text-lg font-medium text-gray-700">
          Our wall tiles come in a multitude of styles, from sleek and
          modern designs to rustic, vintage finishes. Choose from glossy
          ceramics, textured stone, and vibrant mosaics to create a unique
          ambiance that reflects your personality.
        </h3>
        </div>
        <div className=" ">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
          Explore Wall Tiles
        </button>
        </div>
      </div>
      <div className="h-[50vh] w-[30vw] transform transition-transform duration-500 hover:scale-105">
        <div className="grid grid-cols-2 gap-4 h-full">
        <div className="bg-white flex items-center justify-center flex-col border border-gray-300 transform transition-transform duration-500 ease-in-out translate-x-0 hover:translate-x-2">
          <Image src={bathtub} alt="" height={40} width={40}/>
          <h4 className="group-hover:text-blue-200">Bathroom Wall Tiles</h4>
          <button className="relative text-blue-500 font-semibold">
          Explore Now
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </button>
        </div>
        <div className="bg-white flex items-center justify-center flex-col border border-gray-300 transform transition-transform duration-500 ease-in-out translate-x-0 hover:translate-x-2">
          <Image src={house} alt="" height={40} width={40}/>
          <h4 className="group-hover:text-blue-200">Outdoor Wall Tiles</h4>
          <button className="relative text-blue-500 font-semibold">
          Explore Now
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </button>
        </div>
        <div className="bg-white flex items-center justify-center flex-col border border-gray-300 transform transition-transform duration-500 ease-in-out translate-x-0 hover:translate-x-2">
          <Image src={kitchen} alt="" height={40} width={40}/>
          <h4 className="group-hover:text-blue-200">Kitchen Wall Tiles</h4>
          <button className="relative text-blue-500 font-semibold">
          Explore Now
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </button>
        </div>
        <div className="bg-white flex items-center justify-center flex-col border border-gray-300 transform transition-transform duration-500 ease-in-out translate-x-0 hover:translate-x-2">
          <Image src={interior} alt="" height={40} width={40}/>
          <h4 className="group-hover:text-blue-200">Living Room Wall Tiles</h4>
          <button className="relative text-blue-500 font-semibold">
          Explore Now
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </button>
        </div>
        </div>
      </div>
      </div>
    </div> */
