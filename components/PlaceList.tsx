import React from 'react'
import places from '../data/listing.json'
import regions from '../data/regions.json'
import { useRouter } from 'next/navigation';
import { CalciteCard, CalciteChip, CalciteChipGroup, CalciteLabel, CalciteRating } from '@esri/calcite-components-react';
import { amenities } from '@/app/locations/page';
import { usePlaceContext } from "@/context/PlaceContext";

import "@esri/calcite-components/components/calcite-card"
import "@esri/calcite-components/components/calcite-chip"
import "@esri/calcite-components/components/calcite-chip-group"
import "@esri/calcite-components/components/calcite-rating"
import Amenities from './Amenities';

export const parseHours = (hoursString: string): string => {
  // Remove the day prefix (e.g., "Monday: ")
  return hoursString?.split(": ").slice(1).join(": ") || "Unavailable";
};


function PlaceList({ filter, top, title }: { filter?: string | null; top?: number | null ; title?: string}) {
  
  const router = useRouter();
  const { state, dispatch } = usePlaceContext(); // Get state from context

  // Use context state for city and state
  const city = state.place?.address?.split(",")[0] || "";
  const stateAbbr = state.place?.address?.split(",")[1] || "";

  
  // Function to navigate to the Place Details page
  const handleNavigation = (place: any) => {
    dispatch({
      type: "SET_PLACE",
      payload: {
          place: {
              name: place.name,
              phone: place.phone,
              address: place.formatted_address,
              summary: place.summary,
              rating: place.rating,
              user_ratings_total: place.user_ratings_total,
              photos: place.photos ? place.photos.map(photo => ({ photo_reference: photo.photo_reference })) : [],
              geometry: place.geometry ? { location: { lat: place.geometry.location.lat, lng: place.geometry.location.lng } } : null,
              open24Hours: !!place.open24Hours,
              dropOffService: !!place.dropOffService,
              sameDayService: !!place.sameDayService,
              largeCapacityMachines: !!place.largeCapacityMachines,
              efficientMachines: !!place.efficientMachines,
              attendent: !!place.attendent,
              freeDrying: !!place.freeDrying,
              cardsAccepted: !!place.cardsAccepted,
              prepaidCardsRequired: !!place.prepaidCardsRequired,
              digitalPaymentAccepted: !!place.digitalPaymentAccepted,
              cashOnly: !!place.cashOnly,
              entertainment: !!place.entertainment,
              wifi: !!place.wifi,
              bathroom: !!place.bathroom,
              seating: !!place.seating,
              laundryProducts: !!place.laundryProducts,
              snacks: !!place.snacks,
              parking: !!place.parking,
              wheelchairAccessibleParking: !!place.wheelchairAccessibleParking,
              clean: !!place.clean,
              brokenMachines: !!place.brokenMachines,
              affordable: !!place.affordable,
              hours: {
                  monday: parseHours(place.hrsMonday),
                  tuesday: parseHours(place.hrsTuesday),
                  wednesday: parseHours(place.hrsWednesday),
                  thursday: parseHours(place.hrsThursday),
                  friday: parseHours(place.hrsFriday),
                  saturday: parseHours(place.hrsSaturday),
                  sunday: parseHours(place.hrsSunday),
              },
          },
      },
  });
  

    router.push(
        `/place?name=${encodeURIComponent(place.name)}&state=${encodeURIComponent(place.state)}&city=${encodeURIComponent(place.city)}`
    );
};


  // Function to render a card
  const card = (place: any) => (
    <CalciteCard 
      onClick={() => handleNavigation(place)}
      key={place.place_id}
      label={place.name}
      className="w-1/4 min-w-[250px] h-auto pb-2 pr-2"
    >
      <div slot="heading" className="pb-5 flex flex-col gap-2">
        {place.name}   
        <CalciteLabel scale="s">
          Visitor rating
          <CalciteRating value={place.rating} average={place.rating} readOnly showChip={true} count={place?.user_ratings_total ? place?.user_ratings_total  : 0}></CalciteRating> 
        </CalciteLabel>
      </div>
      <div>
      <Amenities place={place}/>
      </div>
        
    </CalciteCard>
  );

  return (
    <div className="flex flex-col w-full p-10">
      <div className='flex font-bold'>
        <CalciteLabel scale='l'>{title}</CalciteLabel>
      </div>

      <div className='flex flex-row w-full flex-wrap justify-evenly'>
        {places
          .filter(place => 
            (city && stateAbbr && place.city === city && place.state === stateAbbr) ||
            (!city && stateAbbr && place.state === stateAbbr) ||
            (!city && !stateAbbr)
          )
          .sort((a, b) => (b.rating || 0) - (a.rating || 0))  // Sort by rating (highest first)
          .filter(place => (!filter || place[filter]))  // Apply filter if provided
          .slice(0, top || places.length) // Limit results based on `top` if provided
          .map(card)} 
      </div>
    </div>
  );
}

export default PlaceList;
