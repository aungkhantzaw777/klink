import service from './service'

export interface product {
    name: string
    price: number
    category_id: number
}

export const getProducts = (url:string, headers:any) =>  {
    return service({
        url,
        method: 'GET',
        headers: headers
    })
}