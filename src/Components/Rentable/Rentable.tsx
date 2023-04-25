import ProductNotFound from "../Shared/ProductNotFound"
import RentableHooks from "./hooks"
import "./rentable.css"
import Time from "./Time"

function Rentable() {
   const {
      availableQuantity,
      diffDays,
      endDate,
      handleCheckedOption,
      handleDate,
      isHour,
      products,
      startDate,
      nowDate,
      startTime,
      handleTime,
      diffHours,
      endTime,
   } = RentableHooks()

   return products === undefined ? (
      <ProductNotFound />
   ) : (
      <div className="rentable-container">
         <div className="image">
            <img src={products.image} alt={products.name} />
         </div>

         <div className="details">
            <h2>{products.name}</h2>
            <div>
               <b>Vendedor:</b> {products.seller}
            </div>
            <div>
               <p className="description-text">
                  <b>Descripción:</b> {products.description}
               </p>
            </div>

            {products.availabilityDate >= nowDate ? (
               <p style={{ textAlign: "start" }}>
                  {"Este producto no se encuentra disponible en el momento, estará disponible a partir de: " +
                     nowDate}
               </p>
            ) : (
               <div className="rentable-type">
                  <div className="quantity">
                     Cantidad disponible: {availableQuantity}
                  </div>

                  <h2>Tipo de renta</h2>

                  <div className="types">
                     <label>
                        Nocturna:{"  "}
                        <input
                           type="radio"
                           id="radioNight"
                           onChange={handleCheckedOption}
                           name="rentType"
                        />
                     </label>
                     <label>
                        Por horas:{"  "}
                        <input
                           type="radio"
                           id="radioHour"
                           onChange={handleCheckedOption}
                           name="rentType"
                        />
                     </label>
                  </div>

                  <h4>Fecha de renta</h4>
                  <div className="date-rent">
                     <input
                        type="date"
                        id="starDate"
                        min={nowDate}
                        value={startDate}
                        onChange={handleDate}
                     />
                     {!isHour && (
                        <input
                           type="date"
                           id="endDate"
                           value={endDate}
                           onChange={handleDate}
                           min={startDate}
                        />
                     )}
                  </div>

                  {isHour && (
                     <div className="hours">
                        <label>
                           Hora de inicio
                           <Time
                              nameList="startTime"
                              name="startTime"
                              value={startTime}
                              handleTime={handleTime}
                           />
                        </label>
                        <label>
                           Hora de fin
                           <Time
                              nameList="endTime"
                              name="endTime"
                              value={endTime}
                              min={startTime}
                              handleTime={handleTime}
                           />
                        </label>
                     </div>
                  )}

                  <div className="price">
                     <h5>
                        Precio
                        {isHour
                           ? " por hora: $" + products.pricePerHour
                           : " por noche: $" + products.price}
                     </h5>
                  </div>

                  {isHour ? (
                     <h4 className="total">
                        Usted eligió {diffHours} horas, que valen, $
                        {diffHours * products.pricePerHour}
                     </h4>
                  ) : (
                     <h4 className="total">
                        Usted eligió {diffDays} noches, que valen, $
                        {diffDays * products.price}
                     </h4>
                  )}
               </div>
            )}
         </div>
      </div>
   )
}

export default Rentable
