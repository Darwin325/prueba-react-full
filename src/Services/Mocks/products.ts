import { products } from "../../Mocks/Products"
import { RentableProduct, SimpleProduct, SpaceProduct } from "../../Models/Product";

export const getProduts = async (typeProduct = 'simple') => {

  switch (typeProduct.toLowerCase()) {
    case 'simple':
      return products.filter( (product) => !!product.inventory)
      break;
    case 'rentable':
      return products.filter( (product) => !!product.rentType)
      break;
      case 'space':
        return products.filter( (product) => !!product.location)
        break;
        default:
          // lanzar un error
          new Error('No se ha encontrado el tipo de producto')
  }
}

type returnType  = SimpleProduct | RentableProduct | SpaceProduct;

export const getProductById = (id: number): returnType => {
  return products.find( (product) => product.id === id) as SimpleProduct
}