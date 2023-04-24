export interface BasicProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  seller: string;
  description: string;
}

export interface SimpleProduct extends BasicProduct {
 inventory: number;
}

export interface RentableProduct extends BasicProduct {
  rentType: string;
  availabilityDate: string;
}

export interface SpaceProduct extends BasicProduct {
  location: string;
  availabilityDate: string;
}