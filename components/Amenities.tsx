import { usePlaceContext } from "@/context/PlaceContext"
import { CalciteButton, CalciteChip, CalciteLabel } from "@esri/calcite-components-react"

// Define the interface for the props
interface AmenitiesProps {
  place: { [key: string]: any } | null;  // Adjust the type as needed for your `place` object
}

export default function Amenities({ place }: AmenitiesProps){

    const amenities = [
        'open24Hours', 'wheelchairAccessibleParking', 'attendent',
        'clean', 'largeCapacityMachines', 'efficientMachines', 'freeDrying',
        'brokenMachines', 'cardsAccepted', 'prepaidCardsRequired',
        'digitalPaymentAccepted', 'cashOnly', 'wifi', 'entertainment',
        'bathroom', 'dropOffService', 'sameDayService', 'seating',
        'laundryProducts', 'snacks', 'affordable', 'parking',
    ]

    // Function to convert camelCase to space-separated lowercase words
    const formatAmenity = (amenity: string) => {
        return amenity.replace(/([a-z0-9])([A-Z])/g, '$1 $2').toLowerCase()
    }

    return (
        <div className="flex flex-row flex-wrap items-center font-bold">
            {
                amenities.map((amenity: string, i: number) => {
                    if (place && place[amenity as keyof typeof place]) {
                        const formattedAmenity = formatAmenity(amenity)
                        return (
                            <CalciteChip
                                appearance="outline-fill"
                                key={`amenity-${i}`}
                                label={formattedAmenity}
                                scale='s'
                                className="p-1"
                            >
                                {formattedAmenity}
                            </CalciteChip>
                        )
                    }
                })
            }
        </div>
    )
}
