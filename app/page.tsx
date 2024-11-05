
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import ExploreFloorTiles from "@/components/explore-floor-tiles";
import ExploreProducts from "@/components/explore-products";
import { AppleCardsCarouselDemo } from "@/components/landing-area";
import Finishes from "@/components/finishes"

import ProductList from "@/components/product-list";
import MainNavbar from "@/components/root-navbar";

import Container from "@/components/ui/container";
import  AboutUs  from "@/components/AboutUs";
import Footer from "@/components/footer-main";
import ToggleDivs from "@/components/parallax";
import FeaturedProductMovingCard from "@/components/featured-products-scroll";

const HomePage = async () => {
  const billboard: any = await getBillboard(
    "854efbfb-834e-4415-8221-60a6128bfadb"
  );
  const product = await getProducts({ isFeatured: "true" });
  const products = product.slice(0, 4);
  
  return (
    <>
    
    <div className="mt-6 pt-3 ">
      <AppleCardsCarouselDemo/>
      </div>
      

      <Container>
        <div className="space-y-10 pb-10">
        
        <div className="flex flex-col gap-y-32">
              <ExploreProducts/>
              <ExploreFloorTiles/>
            </div>



          <div className="flex flex-col gap-y-32 px-4 sm:px-6 lg:px-8">
            <div className=""/>
            <ProductList title="Featured Products" items={products} />
            <Finishes/>
            <FeaturedProductMovingCard/>
            <AboutUs/>

          </div>
        </div>
      </Container>
      {/* <ToggleDivs/> */}


      <Footer/>

    </>
  );
};

export default HomePage;
