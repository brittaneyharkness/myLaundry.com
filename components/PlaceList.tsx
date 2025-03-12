import React from 'react'
import places from '../data/listing.json'
import regions from '../data/regions.json'
import { useSearchParams } from 'next/navigation';
import { CalciteCard, CalciteTile, CalciteTileGroup } from '@esri/calcite-components-react';

import "@esri/calcite-components/components/calcite-card"
import "@esri/calcite-components/components/calcite-tile"

function PlaceList() {

  const searchParams = useSearchParams();
  const state = searchParams.get("state") || "";
  const city = searchParams.get("city") || "";
  const state_abbr = regions
                    .filter(region => region.state_full === state)
                    .map(region => region.state)

      
  return (
    <div className='flex gap-3 mt-5'>
        {
          places.map(place => {
            if(city && state){
              if(place.city === city && place.state === state_abbr[0]){
                return(
                  <CalciteCard label={place.name}>
                    <div>
                      
                    </div>
                  </CalciteCard> 

                )
              }
            }
            if(!city && state){
              if(place.state === state_abbr[0]){
                return(
                  <CalciteCard label={place.name}>
                   
                  </CalciteCard> 
                )
              }
            }
            
            
          })
        }
    </div>
  )
}

export default PlaceList