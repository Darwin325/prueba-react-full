import { ProductType, RentableProduct } from "../../Models/Product";
import React, { useEffect, useRef, useState } from "react";
import { getProductById } from "../../Services/Mocks/products";
import { useParams } from "react-router-dom";
import ProductNotfound from "../Shared/ProductNotfound";
import "./rentable.css";

function Rentable() {
  const id: number = parseInt(useParams().id as string);

  const [products, setProducts] = useState<RentableProduct>(
    {} as RentableProduct
  );

  const [isHour, setIsHour] = useState<boolean>(false);

  const rentType = useRef<HTMLInputElement>(null);

  const handleCheckedOption = (event: any) => {
    setIsHour(event.target.id === "radioHour");
  };

  useEffect(() => {
    setProducts(getProductById(ProductType.RENTABLE, id) as RentableProduct);
  }, []);

  return products === undefined ? (
    <ProductNotfound />
  ) : (
    <div className="rentable-container">
      <div>
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
        <div>
          <p>
            <b>Precio:</b> ${isHour ? products.pricePerHour : products.price}
          </p>
        </div>
        <div className="rent-type">
          <h2>Tipo de renta</h2>
          <label>
            Nocturna:{" "}
            <input
              type="radio"
              id="radioNight"
              onChange={handleCheckedOption}
              name="rentType"
            />
          </label>
          <label>
            Por horas:{" "}
            <input
              type="radio"
              id="radioHour"
              onChange={handleCheckedOption}
              name="rentType"
            />
          </label>

          {isHour && (
            <div>
              <label>
                Hora de inicio
                <input
                  type="time"
                  ref={rentType}
                  name="starHour"
                  min={new Date().toDateString()}
                />
              </label>
              <label>
                Hora de fin
                <input type="time" name="endHour" />
              </label>
            </div>
          )}
        </div>
        <div>
          <b>Disponibilidad:</b> {products.availabilityDate}
        </div>
      </div>
    </div>
  );
}

export default Rentable;
