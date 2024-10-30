// types.ts

// Define the structure for an individual image object
export interface ImageType {
    _id: string;         // Unique identifier for the image
    url: string;         // URL of the image
    alt?: string;        // Optional alt text for accessibility
    // You can add other fields here if needed (e.g., width, height, description, etc.)
  }
  
  // Define the props for the ImageGallery component
  export interface ImageGalleryProps {
    images: ImageType[]; // Array of ImageType objects
  }
  

  export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image?: string;
    description?: string;
  }
  
  export interface ShoppingCartProps {
    cartCount: number;
    shouldDisplayCart: boolean;
    handleCartClick: () => void;
    cartDetails: Record<string, CartItem>;
    removeItem: (id: string) => void;
    totalPrice: number;
    redirectToCheckout: () => Promise<{ error?: string } | void>;
  }


 