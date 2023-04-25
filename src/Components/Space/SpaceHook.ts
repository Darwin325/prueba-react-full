import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { LocationType, ProductType, SpaceProduct } from "../../Models/Product"
import { getProductById, getProducts } from "../../Services/products"

export default function SpaceHook() {
   const id = parseInt(useParams().id as string) as number
   const [space, setSpace] = useState<SpaceProduct>({} as SpaceProduct)

   useEffect(() => {
      const space = getProductById(ProductType.SPACE, id) as SpaceProduct
      setSpace(space)
   }, [])

   return { space } 
}
