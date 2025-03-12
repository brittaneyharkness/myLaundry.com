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

const amenities = [
    "attendent", "large capacity",
    "free drying", "cards accepted", "wifi", "bathroom",
    "drop-off service", "seating", "laundry products",
    "snacks", "parking"
]

export default function Locations() {
    const searchParams = useSearchParams();
    const state = searchParams.get("state") || "";
    const city = searchParams.get("city") || "";
      return (
        <div className=" flex flex-row">
 
          <div className="p-10 w-full h-auto flex flex-col">

            <Breadcrumbs/>

            <CalciteLabel scale="l" className="pt-5">
            {city ? `Best Laundromats in ${city}` : state && !city ?  `Best Laundromats in ${state}`: 'Locations'}
            </CalciteLabel>
            <CalciteLabel scale="m">
            Find the best laundromats in your area with our comprehensive directory. Whether you need a quick wash, drop-off service, or high-capacity machines for big loads, we've got you covered. Explore options for self-service or full-service laundromats near you, offering amenities like free Wi-Fi, snacks, and convenient payment methods. Discover over 100 laundromat locations, each equipped to meet your laundry needs, and get your clothes cleaned with ease today!
            </CalciteLabel>
 
            <hr className="border-gray-300"/>

            <div className="flex flex-row flex-wrap w-full">
            {
              amenities.map((amenity, i) => {
                return(
                    <CalciteButton appearance="outline-fill" key={`amenity-${i}`} className="p-2">{amenity}</CalciteButton>

                )
              })
            }
            </div>
 
            <PlaceList/>
    

          </div>

          

            <div className="bg-gray-800 flex-col w-[25%] h-[80vh] pt-10 m-5 text-white text-center">
              Add Space
            </div>

            
        </div>
        // <div className="bg-gray-100 w-[100%] flex flex-row">
        //   <div className="flex justify-between flex-col container mx-auto pl-10 gap-5">
            
        
        //   <h1 className="text-3xl font-extrabold">
        //     {city ? `Best Laundromats in ${city}` : "Locations"}
        //   </h1>
          
        //   <p className='text-sm'>Find the best laundromats in your area with our comprehensive directory. Whether you need a quick wash, drop-off service, or high-capacity machines for big loads, we've got you covered. Explore options for self-service or full-service laundromats near you, offering amenities like free Wi-Fi, snacks, and convenient payment methods. Discover over 100 laundromat locations, each equipped to meet your laundry needs, and get your clothes cleaned with ease today!</p>
        //   <hr />

        //   <p className="text-sm font-bold">Popular Amenities</p>


          

    
    )
  }