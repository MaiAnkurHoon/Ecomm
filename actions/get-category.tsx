import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;
const requestOptions = {
    method: "GET",
    redirect: "follow" as RequestRedirect
  };

const getCategory = async (id:string):Promise<Category> => {

    const res = await fetch(`${URL}/${id}`, requestOptions);
    return res.json();

}

export default getCategory;