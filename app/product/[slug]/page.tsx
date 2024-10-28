import ImageGallery from "@/app/components/ImageGallery";
import { FullProduct } from "@/app/interface";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client"
import { Star, Truck } from "lucide-react";

async function getData(slug:string) {
    const query = `*[_type == "product" && slug.current=="${slug}"][0]{
  id,
    images,
    price,
    name,
    description,
    "slug":slug.current,
    "categoryName":category->name,
}`
   const data = await client.fetch(query);
   return data; 
}


export default async function Product({params}:{params:{slug:string}}){
    const data:FullProduct = await getData(params.slug)
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 md:ps-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <ImageGallery  images={data.images} />

                    <div className="md:py-8">
                        <div className="mb-2 md:mb-3">
                        <h2 className="text-yellow-500 text-2xl font-bold lg:text-3xl mb-4">{data.name}</h2>
                            <span  className="mb-0.5 inline-block text-lg mb-4 mt-4">{data.categoryName}</span>
                      
                        </div>
                        <div className="mb-6 flex items-center gap-3 mt-8 md:mb-10">
                            <Button className="rounded-full gap-x-2">
                                <span className="text-sm">4.2</span>
                                <Star className="h-5 w-5"/>
                            </Button>
                           <span className="text-sm transition duration-100">
                            56 Ratings
                           </span>
                        </div>
                        <div className="mb-4">
                            <div className="flex itemx-end gap-2">
                                <span className="text-xl font-bold md:text:2xl">
                                   Rs: {data.price}
                                </span>

                                <span className="mb-0.5 text-red-500 line-through">
                                Rs: {data.price + 500}
                                </span>
                            </div>
                            <div className="mt-4">
                         <span className="text-sm text-gray-500 ">Incl. Vat plus shipping</span>
                         </div>
                         <div className="mb-6 flex items-center gap-2 mt-8 text-yellow-500">
                            <Truck className="w-12 h-12 "/>
                            <span>2-4 Day Shipping</span>

                         </div>
                        
                        <div className="flex gap-2.5 mt-8">
                            <Button >Add To Bag</Button>
                            <Button >Checkout now</Button>
                        </div>

                        <p className="mt-12 text-base text-gray-500 tracking-wide">{data.description}</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}