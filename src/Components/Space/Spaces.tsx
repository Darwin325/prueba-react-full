import GoogleMaps from "../Maps/GoogleMaps"
import ProductNotFound from "../Shared/ProductNotFound"
import SpaceHook from "./SpaceHook"
import "./space.css"

function Spaces() {
   const { space } = SpaceHook()
   return space === undefined ? (
      <ProductNotFound />
   ) : (
      <div className="space-container">
         <div>
            <img src={space.image} alt={space.name} />
         </div>

         <div className="details">
            <h2>{space.name}</h2>
            <div>
               <b>Vendedor:</b> {space.seller}
            </div>
            <div>
               <p className="description-text">
                  <b>Descripción:</b> {space.description}
               </p>
            </div>
            <div>
               <p>
                  <b>Precio:</b> ${space.price}
               </p>
            </div>

            <div>
               <b>Ubicación:</b>
               <GoogleMaps center={space.location} />
            </div>
         </div>
      </div>
   )
}

export default Spaces
