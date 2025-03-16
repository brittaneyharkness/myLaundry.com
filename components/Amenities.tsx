import { usePlaceContext } from "@/context/PlaceContext"
import { CalciteButton, CalciteLabel } from "@esri/calcite-components-react"

export default function Amenities(){

    const { state } = usePlaceContext()
    const place = state

    const amenities = {
            "24 hour": {
                icon:""
            },
            "drop-off service": {
              icon:""
            },
            "large capacity":{
              icon: ""
            },
            "attendent": {
              icon: "person"
            }, 
            "free drying":{
              icon: ""
            }, 
            "cards accepted":{
              icon:"credit-card"
            }, 
            "wifi":{
              icon:"wifi"
            }, 
            "bathroom": {
              icon:""
            }, 
            "seating": {
              icon:""
            }, 
            "laundry products": {
              icon:""
            },
            "snacks": {
              icon:""
            }, 
            "parking": {
              icon:"car"
            }
        }
    
        return(
            <div className="flex flex-col items-center p-10 font-bold" >
                {
                Object.keys(amenities).map((amenity : string, i: number) => {
        
                    if( place && place[amenity as keyof typeof place]){
                        return(
                            <CalciteButton 
                            appearance="outline-fill" 
                            key={`amenity-${i}`} 
                            className="p-2">{amenity}</CalciteButton>
                        )
                    }
                
                })
            }
              
            
            </div>
            
        )
}
