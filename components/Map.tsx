
import { useEffect, useRef } from "react"

const Map = () => {

    const mapRef = useRef(null)

    // useEffect(() => {

    //     if(mapRef.current){
    //         console.log(mapRef.current.navigation)
    //     }
    // }, [mapRef])

    return(
        // <arcgis-map 
        // // ref={mapRef}
        // className="map"
        // basemap="satellite" 
        // center="-154.88, 19.46" 
        // zoom={15}
        // ></arcgis-map>
        <div
        className="flex h-1/3 bg-blue-100 justify-center items-center"
        >Map Placeholder
        </div>
    )
}

export default Map