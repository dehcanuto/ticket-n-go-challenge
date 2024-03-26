interface ProductRatingPropType {
    rate: number
    count: number
}

export interface ProductPropType {
    id:	number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: ProductRatingPropType
}