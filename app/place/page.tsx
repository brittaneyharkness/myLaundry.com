"use client";

import places from '../../data/listing.json'
import Breadcrumbs from "@/components/Breadcrumbs";
import PlaceList, { parseHours } from "@/components/PlaceList";
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
import "@esri/calcite-components/components/calcite-link"

import PlaceHeader from "../../components/Header/PlaceHeader";
import Map from "@/components/Map";
import Filter from "@/components/Filter";
import Ads from "@/components/Ads";
import { usePlaceContext } from "@/context/PlaceContext";
import { useEffect } from "react";
import PlaceInfo from '../../components/PlaceInfo';

export default function Place() {
    const searchParams = useSearchParams();    
    const { state, dispatch } = usePlaceContext(); // Get state from context
    const place = state.place;

    useEffect(() => {
        // Retrieve the parameters from the URL
        const placeName = searchParams.get("name");
        const placeState = searchParams.get("state");
        const placeCity = searchParams.get("city");

        // Ensure all necessary parameters exist
        if (placeName && placeState && placeCity) {
            // Find the place object that matches the URL parameters
            const matchingPlace = places.find(
                (place) =>
                    place.name === placeName &&
                    place.state === placeState &&
                    place.city === placeCity
            );

            // If a matching place is found, dispatch it to the context
            if (matchingPlace) {
                const parsedHours = {
                    monday: parseHours(matchingPlace.hrsMonday),
                    tuesday: parseHours(matchingPlace.hrsTuesday),
                    wednesday: parseHours(matchingPlace.hrsWednesday),
                    thursday: parseHours(matchingPlace.hrsThursday),
                    friday: parseHours(matchingPlace.hrsFriday),
                    saturday: parseHours(matchingPlace.hrsSaturday),
                    sunday: parseHours(matchingPlace.hrsSunday),
                };

                dispatch({
                    type: "SET_PLACE",
                    payload: {
                        place: {
                            ...matchingPlace,
                            hours: parsedHours, // Add parsed hours to the place object
                        },
                    },
                });
            }
        }
    }, [searchParams, dispatch]);

    return (
        <CalciteShell className="mt-28 w-full flex-col">
            <PlaceHeader/>
            <PlaceInfo/>
        </CalciteShell>
    );
}
