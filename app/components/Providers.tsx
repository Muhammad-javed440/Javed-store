
"use client";

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";


export default function CartProvider({ children }: { children: ReactNode }) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}

      successUrl="https://localhost:3000/stripe/success"
      cancelUrl="https://localhost:3000/stripe/error"
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    
    >
      {children}
    </USCProvider>
  );
}
