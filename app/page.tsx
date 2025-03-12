
"use client"

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LocationTree from "@/components/LocationTree";
import PlaceList from "@/components/PlaceList";
import Regions from "@/components/Regions";
import { CalciteShell } from "@esri/calcite-components-react";
import "@esri/calcite-components/components/calcite-shell"

export default function Home() {
  return (
    // <div className="bg-gray-100">
    //      <Hero/>
    //      <Regions/>
    // </div>
    <CalciteShell className="mt-16">
      <Hero/>
      <LocationTree/>
      {/* <Regions/> */}
    </CalciteShell>
  );
}


