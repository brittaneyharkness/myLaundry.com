"use client"


import Breadcrumbs from "@/components/Breadcrumbs";
import PlaceList from "@/components/PlaceList";
import { CalciteBlock, CalciteButton, CalciteLabel, CalcitePanel, CalciteShell, CalciteShellPanel } from "@esri/calcite-components-react";
import { useSearchParams } from "next/navigation";

import "@esri/calcite-components/components/calcite-shell"
import "@esri/calcite-components/components/calcite-shell-panel"
import "@esri/calcite-components/components/calcite-panel"
import "@esri/calcite-components/components/calcite-block"
import "@esri/calcite-components/components/calcite-label"
import "@esri/calcite-components/components/calcite-button"
import LocationHeader from "./LocationHeader";
import Map from "@/components/Map";
import Filter from "@/components/Filter";
import Ads from "@/components/Ads";

export const amenities = {
    "attendent": {
      icon: "person"
    }, 
    "large capacity":{
      icon: ""
    },
    "free drying":{
      icon: ""
    }, 
    "cards accepted":{
      icon:"credit-card"
    }, 
    "wifi":{
      icon:"wifi"
    }, 
    "bathroom": {
      icon:""
    },
    "drop-off service": {
      icon:""
    }, 
    "seating": {
      icon:""
    }, 
    "laundry products": {
      icon:""
    },
    "snacks": {
      icon:""
    }, 
    "parking": {
      icon:"car"
    }
}
    


export default function Locations() {
    const searchParams = useSearchParams();
    const state = searchParams.get("state") || "";
    const city = searchParams.get("city") || "";
    

      return (
        <CalciteShell className="mt-28">
          <LocationHeader/>
          <div slot="panel-top">
            <Filter/>
            <Map/>
            <PlaceList top={20} title={'Top laundromats'}/>
          </div>
          <div slot="panel-end" className="w-1/6 pl-5 pr-5">
            <Ads/>
          </div>
         
        </CalciteShell>
    
    )
  }