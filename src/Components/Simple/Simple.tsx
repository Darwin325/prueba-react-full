import { useEffect, useState } from "react";
import { SimpleProduct } from "../../Models/Product";
import { getProductById } from "../../Services/Mocks/products";
import { useParams } from "react-router-dom";
import "./main.css";

function Simple() {
  const id: number = parseInt(useParams().id as string);

  const [productDetails, setProductDetails] = useState<SimpleProduct>(
    {} as SimpleProduct
  );

  useEffect(() => {
    setProductDetails(getProductById(id) as SimpleProduct);
  }, []);

  return (
    <div className="simple-container">
      <div>
        <img src={productDetails.image} alt={productDetails.name} />
      </div>

      <div className="details">
        <h2>{productDetails.name}</h2>
        <div>
          <b>Vendedor:</b> {productDetails.seller}
        </div>
        <div>
          <p className="description-text"><b>Descripción:</b> {productDetails.description}</p>
        </div>
        <div>
          <p><b>Precio:</b> ${productDetails.price}</p>
        </div>
        <div>
          <b>Cantidad:</b> {productDetails.inventory}
        </div>
        
      </div>
    </div>
  );
}

export default Simple;
