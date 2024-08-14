import Card from "@/components/Card";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { FloatingNav } from "@/components/ui/FloatingNav";
import MagicButton from "@/components/ui/MagicButton";
import { navItems } from "@/data";
import Image from "next/image";
import { title } from "process";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex sm:px-10 overflow-clip justify-center items-center flex-col  mx-5 px-5">
      <div className="w-full max-w-xl">
        <h1>
          <FloatingNav navItems={navItems}/>
          <Hero />
          
          <Card />
          
          <Clients />
          <Pricing />
          <Footer />
        </h1>
      </div>
     
    </main>
  );
}
