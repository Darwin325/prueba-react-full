export interface BasicProduct {
   id: number
   name: string
   price: number
   image: string
   seller: string
   description: string
}

export interface SimpleProduct extends BasicProduct {
   inventory: number
}

export interface RentableProduct extends BasicProduct {
   rentType: string
   pricePerHour: number
   availabilityDate: string
}

export type LocationType = { lat: number; lng: number }

export interface SpaceProduct extends BasicProduct {
   location: LocationType
   availabilityDate: string
}

export type returnType = SimpleProduct | RentableProduct | SpaceProduct

export enum ProductType {
   SIMPLE = "simple",
   RENTABLE = "rentable",
   SPACE = "space",
}
