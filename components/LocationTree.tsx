import { CalciteLabel, CalciteLink, CalciteTree, CalciteTreeItem } from "@esri/calcite-components-react"
import "@esri/calcite-components/components/calcite-tree"
import "@esri/calcite-components/components/calcite-tree-item"
import "@esri/calcite-components/components/calcite-link"

import data from '../data/regions.json';

function LocationTree(){

    // Extract unique states from the data
    const states = [...new Set(data.flatMap(d => d.state_full))];

    return(
        <div className="flex flex-col w-[100%] items-center mt-10 bg-gray-500 pt-10">
            <div className="text-white font-bold text-2xl">Laundromats by State</div>
            <CalciteTree className="flex flex-row flex-wrap w-[75%] gap-10 justify-evenly p-10">
                {states?.map((state, index) => {
                // Filter the cities for the current state
                const cities = data.filter(d => d.state_full === state);
                return (
                    <CalciteTreeItem key={state} className="w-50 text-white"> 
                        {state}
                        <CalciteTree slot="children">
                        {cities.map((city, i) => {
                            return(
                                <CalciteTreeItem key={`city-${i}`}>
                                    <CalciteLink
                                    className="tree-item"
                                     href={`/locations?state=${encodeURIComponent(state || '')}&city=${encodeURIComponent(city.city || '')}`} 
                                    >
                                        {city.city}
                                    </CalciteLink>
                                </CalciteTreeItem>
                            )
                        })}
                        </CalciteTree>
                        
                    </CalciteTreeItem>
                );
                })}
            </CalciteTree>
        </div>

    )
}

export default LocationTree