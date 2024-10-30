export interface Product {
    _id: string;
    imageUrl: string;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
  }
  
  export interface fullProduct {
    _id: string;
    images: ImageType[];
    price: number;
    slug: string;
    categoryName: string;
    name: string;
    description: string;
    price_id: string;
  }

  export interface ImageType {
    _type: string;
    _id: string;
    url: string;         // URL of the image
    alt?: string; 
  asset: {
    _ref: string;
    _type: string;// The _type property for identifying the image type
}
  }