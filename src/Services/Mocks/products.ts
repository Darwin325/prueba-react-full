import { products } from "../../Mocks/Products"
import { ProductType, returnType, SimpleProduct } from "../../Models/Product";

export const getProduts = (productType: ProductType): returnType[] => {

  switch (productType.toLowerCase()) {
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
          throw new Error('No se ha encontrado el tipo de producto') 
  }
}

export const getProductById = (productType: ProductType ,id: number): returnType => {

  const filterProducts = getProduts(productType)
  return filterProducts.find( (product) => product.id === id) as returnType
}