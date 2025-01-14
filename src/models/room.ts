
  
  export type CreateBookingDto = {
 
    hotelRoom: string;
    checkinDate: string;
    checkoutDate: string;
    numberOfDays: number;
    adults: number;
    telephone:string;
    children: number;
    totalPrice: number;
    discount: number;
    email:string;
 
  };

export type Image = {
  _key: string;
  url: string;
};


type Amenity = {
  _key: string;
  amenity: string;
  icon: string;
};

type Slug = {
  _type: string;
  current: string;
};

export type Room = {
  _id: string;
  coverImage: string;
  description: {
    en:string;
    fr:string;
  }
  dimension: {
    en:string;
    fr:string;
  }
  discount: number;
  images: Image[];
  isBooked: boolean;
  isFeatured: boolean;
  name: {
    en: string;
    fr: string;
    // Add more locales if needed
  };
  numberOfBeds: number;
  offeredAmenities: Amenity[];
  price: number;
  slug: Slug;
  specialNote: {
    en: string;
    fr: string;
  };
  type: string;
};
