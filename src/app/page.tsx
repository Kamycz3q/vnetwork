import Admins from "@/Components/Admins";
import Footer from "@/Components/Footer";
import MainPresentation from "@/Components/MainPresentation";
import Navbar from "@/Components/Navbar";
import ServerConcepts from "@/Components/ServerConcepts";


export default function Home() {
  return(
    <div className="bg-zinc-900 w-screen">
      <Navbar/>
      <div className="size-10/12 w-screen h-screen">
        <MainPresentation/>
      </div>
      <ServerConcepts/>
      <Admins/>
      <Footer/>
    </div>
    
  )
}