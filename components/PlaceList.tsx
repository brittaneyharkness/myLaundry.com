import React from 'react'
import places from '../data/listing.json'
import regions from '../data/regions.json'
import { useSearchParams } from 'next/navigation';
import { CalciteCard, CalciteCardGroup, CalciteTile, CalciteTileGroup } from '@esri/calcite-components-react';

import "@esri/calcite-components/components/calcite-card"
import "@esri/calcite-components/components/calcite-card-group"

function PlaceList() {

  const searchParams = useSearchParams();
  const state = searchParams.get("state") || "";
  const city = searchParams.get("city") || "";
  const state_abbr = regions
                    .filter(region => region.state_full === state)
                    .map(region => region.state)

      
  return (
    <CalciteCardGroup className='mt-10 flex justify-evenly'>
        {
          places.map(place => {
            if(city && state){
              if(place.city === city && place.state === state_abbr[0]){
                return(
                  <CalciteCard 
                    key={place.id}
                    label={place.name}
                    className='w-[20%] p-2'
                    >
                    <div slot="heading" className='pb-5'>
                    {place.name}    
                    </div>
                    <div slot="description">
                    {place.summary}    
                    </div>
                  </CalciteCard> 

                )
              }
            }
            if(!city && state){
              if(place.state === state_abbr[0]){
                return(
                  <CalciteCard 
                  key={place.id}
                  label={place.name}
                  className='w-[20%] p-2'>
                   <div slot="heading" className='pb-5'>
                    {place.name}    
                    </div> 
                    <div slot="description">
                    {place.summary}    
                    </div>
                  </CalciteCard> 
                )
              }
            }
            
            
          })
        }
    </CalciteCardGroup>
  )
}

export default PlaceList