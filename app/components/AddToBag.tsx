'use client';

import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/client";
import { useShoppingCart } from "use-shopping-cart";

// Define a specific type for the image object expected from Sanity
interface SanityImage {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

// Define the ProductCart interface with the image property typed as SanityImage
export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: SanityImage;
  price_id: string;
}

// Define the AddToBag component
export default function AddToBag({
  currency,
  name,
  description,
  price,
  image,
  price_id,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();

  // Product object that will be added to the cart
  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };

  return (
    <Button
      onClick={() => {
        addItem(product);
        handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
}
