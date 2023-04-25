import { ProductType, returnType } from "../Models/Product"
import { getProductByIdMock, getProductsMock } from "./Mocks/products"

export const getProducts = (productType: ProductType): returnType[] => {
   return getProductsMock(productType)
}

export const getProductById = (
   productType: ProductType,
   id: number
): returnType => {
   return getProductByIdMock(productType, id)
}
