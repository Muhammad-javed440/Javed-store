import Image from "next/image";
import Hero from "./components/Hero";
import Newest from "./components/Newest";
import {ShoppingCartModal} from "./components/ShoppingCartModal";


export default function Home() {
  return (
 <div>
  <Hero/>
  <Newest/>
 </div>
  );
}
