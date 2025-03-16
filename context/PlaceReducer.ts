// Define the state shape
export interface PlaceState {
    place: Object;
}
  
  // Define action types
  export type PlaceAction =
    | { type: "SET_PLACE"; 
        payload: { 
            place: Object
        } }
    | { type: "CLEAR_PLACE" };
  
  // Reducer function
  export const placeReducer = (
    state: PlaceState, 
    action: PlaceAction): PlaceState => {
    switch (action.type) {
      case "SET_PLACE":
        return {
          ...state,
            place: action.payload.place,
            };
      case "CLEAR_PLACE":
        return { 
            place: {}, 
        };
      default:
        return state;
    }
  };
  