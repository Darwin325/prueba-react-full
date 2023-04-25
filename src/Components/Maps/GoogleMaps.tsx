import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"
import { useCallback, useState } from "react"
import { LocationType } from "../../Models/Product"
// api = AIzaSyDNomDHOFPNffVsRjuY0o9I0z2ApO1HMU0

interface IProps {
   size?: number
   zoom?: number
   center: LocationType
}

function GoogleMaps({
   size = 500,
   zoom = 5,
   center = { lat: 4.570868, lng: -74.297333 },
}: IProps) {
   const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: "AIzaSyDNomDHOFPNffVsRjuY0o9I0z2ApO1HMU0",
   })

   const containerStyle = {
      width: `${size}px`,
      height: `${size}px`,
   }

   const [map, setMap] = useState(null)
   const onLoad = useCallback(function callback(map: any) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center)
      map.fitBounds(bounds)

      setMap(map)
   }, [])

   return isLoaded ? (
      <GoogleMap
         mapContainerStyle={containerStyle}
         center={center}
         zoom={zoom}
         onLoad={onLoad}
      >
         <Marker position={center} />
         {/* Child components, such as markers, info windows, etc. */}
         <></>
      </GoogleMap>
   ) : (
      <></>
   )
}

export default GoogleMaps
