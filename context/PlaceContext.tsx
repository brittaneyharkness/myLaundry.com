 "use client"

import React, { createContext, useReducer, useContext, ReactNode } from "react";

// Define the Place object shape
export interface Place {
  name?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  summary?: string;
  rating?: number;
  hours?: {
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
  };
}

// Define the state shape
export interface PlaceState {
  place: Place | null;
}

// Define action types
export type PlaceAction =
  | { type: "SET_PLACE"; payload: { place: Place } }
  | { type: "CLEAR_PLACE" };

// Reducer function
export const placeReducer = (
  state: PlaceState,
  action: PlaceAction
): PlaceState => {
  switch (action.type) {
    case "SET_PLACE":
      return { place: action.payload.place };
    case "CLEAR_PLACE":
      return { place: null };
    default:
      return state;
  }
};

// Create Context
const PlaceContext = createContext<{
  state: PlaceState;
  dispatch: React.Dispatch<PlaceAction>;
} | null>(null);

// Provider Component
export const PlaceProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(placeReducer, { place: null });

  return (
    <PlaceContext.Provider value={{ state, dispatch }}>
      {children}
    </PlaceContext.Provider>
  );
};

// Custom Hook to Use Context
export const usePlaceContext = () => {
  const context = useContext(PlaceContext);
  if (!context) {
    throw new Error("usePlaceContext must be used within a PlaceProvider");
  }
  return context;
};
