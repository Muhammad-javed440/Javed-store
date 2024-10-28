import { client } from '@/sanity/lib/client'
import { Product } from '../interface';
import Image from 'next/image';
import Link from 'next/link';

async function getData(category:string){
    const query = `*[_type == "product" && category->name=="${category}" ]{
  _id,
    price,
    name,
    "slug":slug.current,
    "categoryName":category->name,
    "imageUrl":images[0].asset->url,
}
`
const data = await client.fetch(query)
return data;
}

export default  async({params}:{params:{category:string};}) => {
    const data:Product[] = await getData(params.category);
    
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold tracking-tight text-yellow-500">Our Products for {params.category}</h2>
        
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
            {data.map((product:any)=>(
                <div key={product._id} className="group relative">
                    <div className="aspect-square w-full overflow-hidden rounded md bg-gray-200 group-hover:opacity-75 lg:h-80">
                        <Image src={product.imageUrl} alt="Product Image" className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                        width={300}
                        height={300}
                        />
                        </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-lg text-yellow-500 hover:bg-red-500 p-2 hover:text-white hover:text-bold rounded-lg">
                                <Link href={`/product/${product.slug}`}>
                                {product.name }
                                </Link>
                            </h3>
                            <p className="mt-1 ">{product.categoryName}</p>
                        </div>
                        <p className=" p-2 font-medium ">Rs:{product.price}</p>
                    </div>
                </div>
            ))}

        </div>

    </div>

</div>

  )
}
