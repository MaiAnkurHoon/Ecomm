import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;
const requestOptions = {
    method: "GET",
    redirect: "follow" as RequestRedirect
  };

const getBillboard = async (id:string):Promise<Billboard[]> => {

    const res = await fetch(`${URL}/${id}`, requestOptions);
    return res.json();

}

export default getBillboard;