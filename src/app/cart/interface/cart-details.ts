
export interface CartDetails {
    numOfCartItems: number,
    data: Data
}

interface Data {
    totalCartPrice: number,
    _id:string,
    products :Product[]
}

interface Product{
    price:number,
    count:number,
    product:InnerProduct
}

interface InnerProduct{
    title:string
    imageCover:string
    category :Category
    id:string
}

interface Category{
    name:string
}