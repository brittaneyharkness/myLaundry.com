'use client';

import { useState } from 'react';
import data from '../data/regions.json';
import Link from 'next/link';

function Regions() {
  // Create a state array to keep track of chevron direction for each state
  const [chevrons, setChevrons] = useState(
    new Array([...new Set(data.flatMap(d => d.state_full))].length).fill(true)
  );

  // Function to toggle chevron visibility for a specific state
  const onClickFunction = (index: number) => {
    setChevrons(prev => {
      const newChevrons = [...prev];
      newChevrons[index] = !newChevrons[index];  // Toggle the specific chevron state
      return newChevrons;
    });
  };

  // Extract unique states from the data
  const states = [...new Set(data.flatMap(d => d.state_full))];

  const chevronRight = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
    </svg>
  );

  const chevronDown = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
    </svg>
  );

  return (
    <div className="pt-8 justify-center flex flex-col flex-wrap container mx-auto px-30 gap-10 bg-white w-[100%] pb-10">
      {/* States row */}
      <div className="flex justify-start flex-row flex-wrap gap-5 w-full ">
        {states?.map((state, index) => {
          // Filter the cities for the current state
          const cities = data.filter(d => d.state_full === state);

          return (
            <div key={state} className="flex flex-col min-w-[20%] align-top">
              {/* State Div */}
              <div className="flex items-center gap-3 cursor-pointer font-bold" onClick={() => onClickFunction(index)}>
                {chevrons[index] ? chevronRight : chevronDown}
                <span>{state}</span>
              </div>

              {/* Cities displayed below the state, full width when chevron is down */}
              {!chevrons[index] && (
                <div className="flex flex-row flex-wrap w-full mt-4 gap-2 justify-start">
                  {cities.map((city, cityIndex) => (
                    <div key={cityIndex} className="p-2 text-center font-light">
                    <Link href={`/locations?state=${encodeURIComponent(state || '')}&city=${encodeURIComponent(city.city || '')}`} className="text-blue-500 hover:underline">
                      {city.city}
                    </Link>
                  </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Regions;
