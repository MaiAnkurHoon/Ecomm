import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;
const requestOptions = {
    method: "GET",
    redirect: "follow" as RequestRedirect
  };

const getProduct = async (id:string):Promise<Product> => {

    const res = await fetch(`${URL}/${id}`, requestOptions);
    return res.json();

}

export default getProduct;