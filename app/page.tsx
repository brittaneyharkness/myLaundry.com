
"use client"

import Faqs from "@/components/FAQs";
import Filter from "@/components/Filter";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero";
import LocationTree from "@/components/LocationTree";
import Map from "@/components/Map";
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
      <div slot="panel-bottom">
        <Filter/>
        <Map/>
        <PlaceList top={8} title={'Top 24 hour laundromats'} filter={'open24Hours'}/>
        <PlaceList top={8} title={'Cheapest laundromats'} filter={'affordable'}/>
        <PlaceList top={8} title={'Top Coin laundromats'} filter={'cashOnly'}/>
        <PlaceList top={8} title={'Top Drop-off Service laundromats'} filter={'dropOffService'}/>
        <LocationTree/>
        <Faqs/>
      </div>
      
      {/* <Regions/> */}
    </CalciteShell>
  );
}


