 "use client"

import React, { createContext, useReducer, useContext, ReactNode } from "react";

// Define the Place object shape
export interface Place {
  place_id?:string;
  name?: string;
  website?:string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  summary?: string;
  rating?: number;
  open24Hours?: boolean;
  dropOffService?: boolean;
  sameDayService?:boolean;
  largeCapacityMachines?: boolean;
  efficientMachines?:boolean;
  attendent?: boolean;
  freeDrying: boolean;
  cardsAccepted: boolean;
  prepaidCardsRequired?: boolean;
  digitalPaymentAccepted?:boolean;
  cashOnly?:boolean;
  entertainment?:boolean;
  wifi?:boolean;
  bathroom?:boolean;
  seating?:boolean;
  laundryProducts?:boolean;
  snacks?:boolean;
  parking?:boolean;
  wheelchairAccessibleParking?:boolean;
  clean?:boolean;
  brokenMachines?:boolean;
  affordable?:boolean;
  hours?: {
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
  };
  user_ratings_total?: number | null;
  photos?: { photo_reference: string }[];
  geometry?: { location: { lat: number; lng: number } };
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
