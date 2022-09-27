export interface ProductProp {
    id: number,
    name: string,
    price: string,
    image: string,
    category_id: number,
    updated_at: string,
    created_at: string,
}

export interface cartItemProp extends ProductProp {
    quantity: number
}

export interface orderProductProp {
    product_id: number
    quantity: number
    subtotal:number
}

export interface order {
    total: number
    tax: number
    products: orderProductProp []
}