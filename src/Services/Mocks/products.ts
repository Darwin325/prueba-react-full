import { products } from "../../Mocks/Products"
import {
   ProductType,
   RentableProduct,
   returnType,
   SimpleProduct,
   SpaceProduct,
} from "../../Models/Product"

export const getProductsMock = (productType: ProductType): returnType[] => {
   switch (productType.toLowerCase()) {
      case "simple":
         return products.filter(
            (product) => !!product.inventory
         ) as SimpleProduct[]
         break
      case "rentable":
         return products.filter(
            (product) => !!product.rentType
         ) as RentableProduct[]
         break
      case "space":
         return products.filter(
            (product) => !!product.location
         ) as SpaceProduct[]
         break
      default:
         // lanzar un error
         throw new Error("No se ha encontrado el tipo de producto")
   }
}

export const getProductByIdMock = (
   productType: ProductType,
   id: number
): returnType => {
   const filterProducts = getProductsMock(productType)
   return filterProducts.find((product) => product.id === id) as returnType
}
