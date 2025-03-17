import { useEffect } from "react";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { useMapContext } from "@/context/MapContext"; // Assuming you have a MapContext for accessing the map

// Define a TypeScript interface for the geometry structure
interface PlaceGeometry {
  location: {
    lat: number;
    lng: number;
  };
}

interface Place {
  geometry: PlaceGeometry | null;
}

// Function to create and add points to the ArcGIS map
export function useAddPointsToMap(places: Place[]) {
  const { mapView } = useMapContext(); // Get the ArcGIS MapView from context

  useEffect(() => {
    if (!mapView) return; // Ensure the mapView is available

    // Create a new GraphicsLayer
    const graphicsLayer = new GraphicsLayer();
    
    // Generate graphics from place geometries
    const graphics = places
      .filter(place => place.geometry) // Filter out null geometries
      .map(place => {
        return new Graphic({
          geometry: {
            type: "point",
            longitude: place.geometry!.location.lng,
            latitude: place.geometry!.location.lat
          },
          symbol: {
            type: "simple-marker",
            color: [226, 119, 40], // Orange color
            outline: { color: [255, 255, 255], width: 1 }
          }
        });
      });

    // Add graphics to the layer
    graphicsLayer.addMany(graphics);

    // Add the graphics layer to the map
    mapView.map.add(graphicsLayer);

    // Cleanup function to remove the layer when the component unmounts
    return () => {
      mapView.map.remove(graphicsLayer);
    };
  }, [mapView, places]); // Re-run effect when mapView or places change
}
