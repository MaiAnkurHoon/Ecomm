import { Product } from "@/types";
import NoResults from "./ui/no-result";
import ProductCard from "./ui/product-card";
import React from "react";
interface ProductListProps {
    title:string;
    items:Product[]
}
const ProductList:React.FC<ProductListProps> = ({
    title,
    items
}) => {
    return ( 
        <React.Fragment>

        <div className="space-y-4">
            <h3
            className="font-bold text-3xl"
            >{title}
            </h3>
            {items.length === 0 && <NoResults/>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map((item:any) => (
                    <ProductCard key={item.id}  data={item}/>             
                )
                )}
            </div>
        </div>
        </React.Fragment>
     );
}
 
export default ProductList;