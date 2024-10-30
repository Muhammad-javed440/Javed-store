// ShoppingCartModal.tsx

"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { CartItem } from "../types"; // Import CartItem type

// error is resolved

export default function ShoppingCartModal() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  async function handleCheckoutClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.error("Checkout error:", result.error);
      }
    } catch (error) {
      console.error("Unexpected error during checkout:", error);
    }
  }

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className="text-2xl py-6">You do not have any items</h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry: CartItem) => (
                    <li key={entry.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border-gray-200">
                        {entry.image ? (
                          <Image
                            src={entry.image}
                            alt="Product image"
                            width={100}
                            height={100}
                          />
                        ) : (
                          <div className="h-24 w-24 bg-gray-200 rounded-md flex items-center justify-center">
                            <p>No Image</p>
                          </div>
                        )}
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{entry.name}</h3>
                          <p className="mr-4">${entry.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                          {entry.description}
                        </p>
                        <div className="flex flex-1 item-end justify-between text-sm mt-4">
                          <p>Quantity: {entry.quantity}</p>
                          <div className="flex">
                            <Button
                              type="button"
                              onClick={() => removeItem(entry.id)}
                              className="font-medium text-red hover:text-red/80"
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal :</p>
              <p>${totalPrice}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes are calculated at checkout
            </p>
            <div className="mt-6 ">
              <Button className="w-full" onClick={handleCheckoutClick}>
                Checkout
              </Button>
            </div>

            <div className="mt-6 flex justify-center text-sm text-gray-500">
              <Button
                onClick={() => handleCartClick()}
                className="text-black hover:underline"
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
