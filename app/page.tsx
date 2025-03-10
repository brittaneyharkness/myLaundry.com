import Hero from "@/components/Hero";
import PlaceList from "@/components/PlaceList";
import Regions from "@/components/Regions";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100">
         <Hero/>
         <Regions/>
        {/*<PlaceList/> */}
    </div>
  );
}
