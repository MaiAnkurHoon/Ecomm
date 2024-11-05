import { Product } from "@/types";
import qs from "query-string";


const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;
const requestOptions = {
    method: "GET",
    redirect: "follow" as RequestRedirect
  };

interface Query{
    categoryId?:string
    colorId?:string
    sizeId?:string
    isFeatured?:string
}

const getProducts = async (query:Query):Promise<Product[]> => {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        colorId: query.colorId,
        sizeId: query.sizeId,
        categoryId: query.categoryId,
        isFeatured: query.isFeatured
      }
    })
    const res = await fetch(url, requestOptions);
    return res.json();

}

export default getProducts;