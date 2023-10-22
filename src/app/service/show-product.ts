export interface ShowProduct {
    title: string,
    imageCover: string,
    price: number,
    category: Category,
    ratingsAverage: number
    _id: string
    description: string
    images?: string[]
}

interface Category {
    name: string
}


