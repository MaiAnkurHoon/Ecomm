import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;
const requestOptions = {
    method: "GET",
    redirect: "follow" as RequestRedirect
  };

const getSizes = async ():Promise<Size[]> => {

    const res = await fetch(URL, requestOptions);
    return res.json();

}

export default getSizes;