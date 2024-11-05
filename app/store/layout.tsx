
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";

export default async function layout({ 
  children
}:{
  children:React.ReactNode
}) {
  return (
    <>
        <Navbar/>
        {children}
    </>
  )

}







