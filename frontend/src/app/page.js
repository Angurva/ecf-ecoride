import Image from "next/image";

import Searchbar from "@/components/Searchbar/Searchbar";
import Card from "@/components/Home/Card";

import HomeImg from '../../public/assets/home.png';

export default function HomePage() {
  return (
    <section className="">
      <Image
        src={HomeImg}
        alt="image road in forest"
      />
      <div className="max-w-7xl mx-auto p-6 flex flex-col items-center justify-center gap-20">
           <Searchbar/> 
           <Card/>
      </div>
     
   
    </section>
  );
}
