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

export default function LocationHeader() {
    const searchParams = useSearchParams();
    const state = searchParams.get("state") || "";
    const city = searchParams.get("city") || "";
    

      return (
            <CalciteBlock className='w-[100%]' slot="panel-top">
              <div slot="content-start" className='h-fit w-full flex flex-col align-middle bg-gray-500 p-10 '>
                <CalciteLabel layout='inline' className='flex justify-between w-[100%]'>
                  <div className='w-full'>
                    <span className='text-4xl font-extrabold pr-2 text-white'>Laundromats in {state && !city ? state : city ? city : "the US"}</span>
                    <span className='text-2xl text-white'>Best laundromats near you</span>
                  </div>
                  </CalciteLabel>

                <div className="flex  text-white">
                  Find the best laundromats in your area with our comprehensive directory. Whether you need a quick wash, drop-off service, or high-capacity machines for big loads, we've got you covered. Explore options for self-service or full-service laundromats near you, offering amenities like free Wi-Fi, snacks, and convenient payment methods. Discover over 100 laundromat locations, each equipped to meet your laundry needs, and get your clothes cleaned with ease today!
                </div>
              </div>
              
            </CalciteBlock>
    
    )
  }