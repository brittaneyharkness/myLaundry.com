"use client"


import Breadcrumbs from "@/components/Breadcrumbs";
import PlaceList from "@/components/PlaceList";
import { CalciteBlock, CalciteButton, CalciteChip, CalciteLabel, CalcitePanel, CalciteRating, CalciteShell, CalciteShellPanel } from "@esri/calcite-components-react";
import { useSearchParams } from "next/navigation";

import "@esri/calcite-components/components/calcite-shell"
import "@esri/calcite-components/components/calcite-shell-panel"
import "@esri/calcite-components/components/calcite-panel"
import "@esri/calcite-components/components/calcite-block"
import "@esri/calcite-components/components/calcite-label"
import "@esri/calcite-components/components/calcite-button"
import "@esri/calcite-components/components/calcite-rating"
import { usePlaceContext } from "@/context/PlaceContext";

export const getCurrentDay = (): string => {
  const daysOfWeek: string[] = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  
  const today: Date = new Date();
  const day =  daysOfWeek[today.getDay()]
  console.log("current day: ", day)
  return day;
};

export const isPlaceOpen = (hours: string | undefined): boolean => {
  if (!hours || hours.toLowerCase() === "closed") return false;

  const timeRangeMatch = hours.match(/(\d{1,2}:\d{2})\s*([APM]+)\s*[\u2013-]\s*(\d{1,2}:\d{2})\s*([APM]+)/i);

  if (!timeRangeMatch) return false; // If format is incorrect, return false

  const [, openTime, openPeriod, closeTime, closePeriod] = timeRangeMatch;

  const now = new Date();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();

  const parseTime = (time: string, period: string): { hours: number; minutes: number } => {
    let [hours, minutes] = time.split(":").map(Number);
    if (period.toUpperCase() === "PM" && hours !== 12) hours += 12;
    if (period.toUpperCase() === "AM" && hours === 12) hours = 0;
    return { hours, minutes };
  };

  const { hours: openHours, minutes: openMinutes } = parseTime(openTime, openPeriod);
  const { hours: closeHours, minutes: closeMinutes } = parseTime(closeTime, closePeriod);

  const isAfterOpening = currentHours > openHours || (currentHours === openHours && currentMinutes >= openMinutes);
  const isBeforeClosing = currentHours < closeHours || (currentHours === closeHours && currentMinutes <= closeMinutes);

  return isAfterOpening && isBeforeClosing;
};


export default function PlaceHeader() {

    const { state } = usePlaceContext();
    const place = state.place;
    const currentDay = `placeHours${getCurrentDay()}`
    console.log("current day key: ", currentDay)
    const currentHours = place ? [currentDay as keyof typeof place] : ""
    const openStatus = isPlaceOpen(currentHours?.toString())

    console.log("current hours: ", currentHours)

      return (
          <div slot="panel-top" className="w-full text-white">
            <div  className='h-fit w-[100%] flex flex-col align-middle bg-gray-500 p-10 gap-2'>
              <CalciteLabel layout='inline' className='flex justify-between'>
                <div>
                  <span className='text-4xl font-extrabold pr-2 text-white'>{place?.name}</span>
                </div>
                </CalciteLabel>
              <div>
                <CalciteRating value={place?.rating} average={place?.rating} readOnly showChip>
                </CalciteRating>
              </div>
              <div>
                <CalciteLabel layout="inline" className="text-white align-bottom">
                  <CalciteChip className='openStatus' label={openStatus ? "Open Now" : "Closed"}>{openStatus ? "Open Now" : "Closed"}</CalciteChip>
                  <span  className="text-white font-bold">{currentHours}</span>
                  <span  className="text-white">Last updated # weeks ago</span>
                </CalciteLabel>
              </div>
            </div>
          </div>
    
    )
  }