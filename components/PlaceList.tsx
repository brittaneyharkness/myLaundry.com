import React from 'react'
import places from '../data/listing.json'
import regions from '../data/regions.json'
import { useSearchParams } from 'next/navigation';

function PlaceList() {

  const searchParams = useSearchParams();
  const state = searchParams.get("state") || "";
  const city = searchParams.get("city") || "";
  const state_abbr = regions
                    .filter(region => region.state_full === state)
                    .map(region => region.state)

      
  return (
    <div className='flex flex-row flex-wrap w-[100%] justify-evenly gap-4'>
        {
          places.map(place => {
            if(city && state){
              if(place.city === city && place.state === state_abbr[0]){
                return(
                  <div 
                  className='flex w-40 h-30 bg-gray-400 justify-center items-center text-white text-[20px] font-bold cursor-pointer hover:bg-gray-600 transition-all'>
                    {place.name}
                    </div>
                )
              }
            }
            if(!city && state){
              if(place.state === state_abbr[0]){
                return(
                  <div 
                  key={place.id}
                  className='flex w-40 h-30 bg-gray-400 justify-center items-center text-white text-[20px] font-bold cursor-pointer hover:bg-gray-600 transition-all'>
                    {place.name}
                  </div>
                )
              }
            }
            
            
          })
        }
    </div>
  )
}

export default PlaceList