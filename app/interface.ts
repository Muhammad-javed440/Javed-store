export interface Product{
    _id : string;
    name:string;
    imageUrl:string; 
    price:number;
    slug:string;
    categoryName:string

}

export interface FullProduct{
    _id : string;
    name:string;
    images:any; 
    price:number;
    slug:string;
    categoryName:string;
    description:string;
}