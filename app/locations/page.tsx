"use client"


import Breadcrumbs from "@/components/Breadcrumbs";
import PlaceList from "@/components/PlaceList";
import { useSearchParams } from "next/navigation";

const amenities = [
    "attendent", "large capacity",
    "free drying", "cards accepted", "wifi", "bathroom",
    "drop-off service", "seating", "laundry products",
    "snacks", "parking"
]

export default function Locations() {
    const searchParams = useSearchParams();
    const state = searchParams.get("state") || "";
    const city = searchParams.get("city") || "";
      return (
        <div className="bg-gray-100 w-[100%] flex flex-row">
          <div className="flex justify-between flex-col container mx-auto pl-10 gap-5">
            <div className="pt-10">
              <Breadcrumbs/>
            </div>
        
          <h1 className="text-3xl font-extrabold">
            {city ? `Best Laundromats in ${city}` : "Locations"}
          </h1>
          
          <p className='text-sm'>Find the best laundromats in your area with our comprehensive directory. Whether you need a quick wash, drop-off service, or high-capacity machines for big loads, we've got you covered. Explore options for self-service or full-service laundromats near you, offering amenities like free Wi-Fi, snacks, and convenient payment methods. Discover over 100 laundromat locations, each equipped to meet your laundry needs, and get your clothes cleaned with ease today!</p>
          <hr />

          <p className="text-sm font-bold">Popular Amenities</p>

          <div className="flex flex-row gap-2">
          {
            amenities.map(amenity => {
              return(
                <div className="flex min-w-20  w-auto h-10 border border-gray-400 text-[12px] items-center justify-center cursor-pointer hover:border-blue-300 transition-all">
                  <div className="p-2">{amenity}</div>
                </div>
              )
            })
          }
          </div>
          

          <PlaceList/>

          </div>
          <div className="bg-gray-800 flex-col w-[40%] h-[100vh] pt-10 m-5 text-white text-center">
            Add Space
          </div>
        </div>
    )
  }