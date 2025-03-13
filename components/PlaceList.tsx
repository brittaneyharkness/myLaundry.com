import React from 'react'
import places from '../data/listing.json'
import regions from '../data/regions.json'
import { useSearchParams } from 'next/navigation';
import { CalciteCard, CalciteCardGroup, CalciteChip, CalciteChipGroup, CalciteRating } from '@esri/calcite-components-react';
import { amenities } from '@/app/locations/page';

import "@esri/calcite-components/components/calcite-card"
import "@esri/calcite-components/components/calcite-card-group"
import "@esri/calcite-components/components/calcite-chip"
import "@esri/calcite-components/components/calcite-chip-group"
import "@esri/calcite-components/components/calcite-rating"
function PlaceList() {
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
      key={place.place_id}  // Ensure unique key
      label={place.name}
      className="w-[33%] h-55 p-2"
    >
      <div slot="heading" className="pb-5">
        {place.name}   
        <CalciteRating value={place.rating} readOnly></CalciteRating> 
      </div>

      {/* <div slot="description">
        {place.summary}    
      </div> */}

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
    <div className='mt-10 flex flex-row flex-wrap justify-between'>
      {places
        .filter(place => 
          (city && state && place.city === city && place.state === state_abbr) ||
          (!city && state && place.state === state_abbr)
        )
        .sort((a, b) => (b.rating || 0) - (a.rating || 0)) 
        .map(place => card(place))  // Use card() directly here
      }
    </div>
  );
}

export default PlaceList;
