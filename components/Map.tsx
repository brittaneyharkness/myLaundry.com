"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import "@arcgis/core/assets/esri/themes/dark/main.css";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import places from "../data/listing.json";

export default function Map({ params }: { params: { slug: string } }) {
  const mapRef = useRef<HTMLArcgisMapElement>(null);
  const searchParams = useSearchParams();
  const state = searchParams.get("state") || "";
  const city = searchParams.get("city") || "";

  useEffect(() => {
    if (!customElements.get("arcgis-map")) {
      import("@arcgis/map-components/dist/loader").then(
        ({ defineCustomElements }) => defineCustomElements()
        
      );
      console.log("arcgis map loaded")
    }
  }, []);

  // Function to create a GraphicsLayer with filtered points
  function createGraphicsLayer() {
    const graphicsLayer = new GraphicsLayer();

    // Filter and map places into graphics
    const graphics = places
      .filter(
        (place) =>
          place.geometry &&
          ((city && state && place.city === city && place.state === state) ||
            (!city && state && place.state === state) ||
            (!city && !state))
      )
      .map((place) => {
        return new Graphic({
          geometry: {
            type: "point",
            longitude: place.geometry!.location.lng,
            latitude: place.geometry!.location.lat,
          },
          symbol: {
            type: "simple-marker",
            color: [226, 119, 40], // Orange color
            outline: { color: [255, 255, 255], width: 1 },
          },
        });
      });

    graphicsLayer.addMany(graphics);
    return { graphicsLayer, graphics };
  }

  function handleViewReady() {
    const mapElement = mapRef.current!;
    const map = mapElement.map;
    const mapView = mapElement.view;

    console.log("map ready: ", mapElement)
    // Remove existing GraphicsLayer if present
    const existingLayer = map.layers.find((layer) => layer.title === "PlacesLayer");
    if (existingLayer) map.remove(existingLayer);

    // Create and add a new GraphicsLayer
    const { graphicsLayer, graphics } = createGraphicsLayer();

    console.log("graphics layer created: ", graphicsLayer)
    graphicsLayer.title = "PlacesLayer";
    map.add(graphicsLayer);

    // Zoom to extent of all points
    if (graphics.length > 0) {
      let extent = graphics[0].geometry.extent;
      for (let i = 1; i < graphics.length; i++) {
        extent = extent ? extent.union(graphics[i].geometry.extent) : graphics[i].geometry.extent;
      }
      if (extent) mapView.goTo(extent.expand(1.2));
    }
  }

  return (
    <div className="w-full h-1/4 max-h-80">
      <arcgis-map 
      ref={mapRef} 
      basemap="dark-gray" 
      onarcgisViewReadyChange={handleViewReady} />
    </div>
  );
}
