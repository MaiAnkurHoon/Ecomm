import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;
const requestOptions = {
    method: "GET",
    redirect: "follow" as RequestRedirect
  };

const getColors = async ():Promise<Color[]> => {

    const res = await fetch(URL, requestOptions);
    return res.json();

}

export default getColors;