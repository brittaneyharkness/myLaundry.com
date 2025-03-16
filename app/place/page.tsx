"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import PlaceList from "@/components/PlaceList";
import { 
    CalciteBlock, 
    CalciteButton, 
    CalciteIcon, 
    CalciteLabel, 
    CalciteLink, 
    CalcitePanel, 
    CalciteShell, 
    CalciteShellPanel 
} from "@esri/calcite-components-react";
import { useSearchParams } from "next/navigation";

import "@esri/calcite-components/components/calcite-shell"
import "@esri/calcite-components/components/calcite-shell-panel"
import "@esri/calcite-components/components/calcite-panel"
import "@esri/calcite-components/components/calcite-block"
import "@esri/calcite-components/components/calcite-label"
import "@esri/calcite-components/components/calcite-button"

import PlaceHeader from "./PlaceHeader";
import Map from "@/components/Map";
import Filter from "@/components/Filter";
import Ads from "@/components/Ads";
import { usePlaceContext } from "@/context/PlaceContext";

export default function Place() {
    const searchParams = useSearchParams();    
    const { state } = usePlaceContext(); // Get state from context
    const place = state.place;

    return (
        <CalciteShell className="mt-28 w-full flex flex-col">
            <PlaceHeader/>
            <div className="flex p-10 h-full" slot="panel-bottom">
                <div>
                    <CalciteLabel>What visitors are saying</CalciteLabel>
                    <p>{place?.summary || "No summary available."}</p>
                </div>
                <div className="flex flex-col h-fit w-1/2 border border-gray-500 p-5">
                    <CalciteLabel layout='inline'>
                        {place?.phone || "No phone available"}
                        <CalciteIcon icon="phone"></CalciteIcon>
                    </CalciteLabel>
                    <CalciteLabel>
                        {place?.address || "No address available"}
                        <CalciteLink>Get Directions</CalciteLink>
                    </CalciteLabel>
                    <CalciteLabel>Hours</CalciteLabel>
                    <div>
                        <p>Monday: {place?.hours?.monday}</p>
                        <p>Tuesday: {place?.hours?.tuesday}</p>
                        <p>Wednesday: {place?.hours?.wednesday }</p>
                        <p>Thursday: {place?.hours?.thursday}</p>
                        <p>Friday: {place?.hours?.friday }</p>
                        <p>Saturday: {place?.hours?.saturday}</p>
                        <p>Sunday: {place?.hours?.sunday}</p>
                    </div>
                </div>
            </div>
        
            <div slot="panel-end" className="w-1/6 pl-5 pr-5">
                <Ads/>
            </div>
        </CalciteShell>
    );
}
