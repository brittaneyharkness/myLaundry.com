import { CalciteButton, CalciteLabel } from "@esri/calcite-components-react"

const Filter = () => {

    const amenities = {
        "attendent": {
          icon: "person"
        }, 
        "large capacity":{
          icon: ""
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
        "drop-off service": {
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
            <CalciteLabel>Search by popular amenities</CalciteLabel>
            <div>
            {
            Object.keys(amenities).map((amenity : string, i: number) => {
            return(
                <CalciteButton 
                appearance="outline-fill" 
                key={`amenity-${i}`} 
                className="p-2">{amenity}</CalciteButton>

            )
            })
        }
            </div>
        
        </div>
        
    )
}

export default Filter