import { usePlaceContext } from "@/context/PlaceContext";
import { CalciteIcon, CalciteLabel, CalciteLink } from "@esri/calcite-components-react";
import Amenities from "./Amenities";
import Ads from "./Ads";

export default function PlaceInfo(){

    const { state, dispatch } = usePlaceContext(); // Get state from context
    const place = state.place;

    return(
        <div className="flex p-10 h-full" slot="panel-bottom">
            <div className="flex flex-col gap-5 pr-10">
                <div className="w-[100%]">
                    <CalciteLabel scale="l" className="font-bold">What visitors are saying</CalciteLabel>
                    <p>{place?.summary || "No summary available."}</p>
                </div>
                <div>
                    <CalciteLabel scale="l" className="font-bold">Amenities</CalciteLabel>
                    <Amenities/>
                </div>
                <div>
                    <CalciteLabel scale="l" className="font-bold">Location and Hours</CalciteLabel>
                    <div className="flex gap-10">
                        <div id="map" className="w-[300px] h-[300px] bg-gray-700">
                        </div>
                        <div className="flex flex-col">
                    <CalciteLabel className="font-bold">Hours</CalciteLabel>
                    <div>
                        <p>Monday: {place?.hours?.monday}</p>
                        <p>Tuesday: {place?.hours?.tuesday}</p>
                        <p>Wednesday: {place?.hours?.wednesday }</p>
                        <p>Thursday: {place?.hours?.thursday}</p>
                        <p>Friday: {place?.hours?.friday }</p>
                        <p>Saturday: {place?.hours?.saturday}</p>
                        <p>Sunday: {place?.hours?.sunday}</p>
                    </div>
                </div>
                    </div>
                    
                </div>
            </div>

                <div className="flex flex-col h-[100%] w-1/3 gap-5">
                    <div className="border border-gray-500 p-5 ">
                        <div className="w-full flex justify-between font-bold">
                            <CalciteLabel layout='inline' >
                                {place?.phone || "No phone available"}
                            </CalciteLabel>
                            <CalciteIcon icon="phone"></CalciteIcon>
                        </div>
                        <div  className="w-full flex justify-between">
                            <CalciteLabel className="font-bold">
                                {place?.address || "No address available"}
                                <CalciteLink href="" aria-label="Get Directions">Get Directions</CalciteLink>
                            </CalciteLabel>
                            <CalciteIcon icon="road-sign"></CalciteIcon>
                        </div>
                    </div>
                        <Ads/>
                </div>
            </div>
    )
}
