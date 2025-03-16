import React from 'react'
import places from '../data/listing.json'
import regions from '../data/regions.json'
import { useSearchParams } from 'next/navigation';
import { CalciteCard, CalciteChip, CalciteChipGroup, CalciteLabel, CalciteRating } from '@esri/calcite-components-react';
import { amenities } from '@/app/locations/page';

import "@esri/calcite-components/components/calcite-card"
import "@esri/calcite-components/components/calcite-chip"
import "@esri/calcite-components/components/calcite-chip-group"
import "@esri/calcite-components/components/calcite-rating"

function PlaceList({ filter, top, title }: { filter?: string | null; top?: number | null ; title?: string}) {
  const searchParams = useSearchParams();
  const state = searchParams.get("state") || "";
  const city = searchParams.get("city") || "";

  // Get state abbreviation from regions JSON
  const state_abbr = regions
    .filter(region => region.state_full === state)
    .map(region => region.state)[0]; // Get first match

  // Function to render a card
  const card = (place: any) => (
    <CalciteCard 
      key={place.place_id}
      label={place.name}
      className="w-[250px] min-w-[250px] h-auto"
    >
      <div slot="heading" className="pb-5 flex flex-col gap-2">
        {place.name}   
        <CalciteLabel scale="s">
        Vistor rating
        <CalciteRating value={place.rating} average={place.rating} readOnly showChip={true}></CalciteRating> 
        </CalciteLabel>
        
      </div>

      <CalciteChipGroup>
        {Object.keys(amenities).map((amenity: string, i: number) => 
          place[amenity.replace(" ", "_")] === 1 ? (
            <CalciteChip scale="s" key={`${place.place_id}-${i}`} label={amenity}>
              {amenity}
            </CalciteChip>
          ) : null
        )}
      </CalciteChipGroup>
    </CalciteCard>
  );

  return (
      <div className="flex flex-col w-full p-10 ">
        
        <div className='flex font-bold'>
          <CalciteLabel scale='l'>{title}</CalciteLabel>
        </div>
        
        
        <div className='flex flex-row w-full flex-wrap justify-between'>
        {places
          .filter(place => 
            (city && state && place.city === city && place.state === state_abbr) ||
            (!city && state && place.state === state_abbr) ||
            (!city && !state)
          )
          .sort((a, b) => (b.rating || 0) - (a.rating || 0))  // Sort by rating (highest first)
          .filter(place => (!filter || place[filter] === 1))  // Apply filter if provided
          .slice(0, top || places.length) // Limit results based on `top` if provided
          .map(card)} 
        </div>
        
      </div>
  );
}

export default PlaceList;
