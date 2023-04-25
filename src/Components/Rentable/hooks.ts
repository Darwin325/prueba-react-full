import { useEffect, useState } from "react"
import { ProductType, RentableProduct } from "../../Models/Product"
import { getProductById, getProducts } from "../../Services/products"
import moment from "moment"
import { useParams } from "react-router-dom"

const RentableHooks = () => {
   // now data in format: "YY-MM-DD"
   const id: number = parseInt(useParams().id as string)
   const nowDate: string = new Date().toISOString().split("T")[0]

   const [products, setProducts] = useState<RentableProduct>(
      {} as RentableProduct
   )

   const [startDate, setStartDate] = useState<string>("")
   const [endDate, setEnDate] = useState<string>("")
   const [diffDays, setDiffDays] = useState<number>(0)
   const [isHour, setIsHour] = useState<boolean>(false)
   const [availableQuantity, setAvailableQuantity] = useState(0)
   const [startTime, setStartTime] = useState<string>("")
   const [endTime, setEndTime] = useState<string>("")
   const [diffHours, setDiffHours] = useState<number>(0)

   const handleCheckedOption = (event: any) => {
      setIsHour(event.target.id === "radioHour")
   }

   const calculateHours = (startTime: string, endTime: string) => {
      return moment(endTime, "HH:mm").diff(moment(startTime, "HH:mm"), "hours")
   }

   const handleTime = (e: any) => {
      const { name, value } = e.target
      if (name === "startTime") {
         setStartTime(value)
         setEndTime("")
      } else {
         if (startTime === "") {
            alert("Seleccione la hora de inicio")
            return
         }
         setEndTime(value)
         setDiffHours(calculateHours(startTime, value))
      }
   }

   const handleDate = (event: any) => {
      const { id, value } = event.target
      if (id === "starDate") {
         setStartDate(value)
         setEnDate("")
      } else {
         if (startDate === "") {
            alert("Seleccione la fecha de inicio")
            return
         }
         setEnDate(value)
         const diff = moment(value).diff(startDate, "days")
         setDiffDays(diff)
      }
   }

   useEffect(() => {
      const products: RentableProduct = getProductById(
         ProductType.RENTABLE,
         id
      ) as RentableProduct
      setProducts(products)

      const getAvailableProducts: RentableProduct[] = getProducts(
         ProductType.RENTABLE
      ) as RentableProduct[]

      const availableProducts = getAvailableProducts?.filter(
         (products: RentableProduct) => products.availabilityDate <= nowDate
      )

      setAvailableQuantity(availableProducts.length)
   }, [])

   return {
      products,
      startDate,
      endDate,
      diffDays,
      isHour,
      availableQuantity,
      handleCheckedOption,
      handleDate,
      nowDate,
      startTime,
      setStartTime,
      endTime,
      setEndTime,
      handleTime,
      diffHours,
   }
}

export default RentableHooks
