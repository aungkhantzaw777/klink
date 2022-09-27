import service from './service'

export interface orderProp {
    url: string
    headers: {Authorization: string}
    data: any
}

export const postOrder = (order:orderProp) =>  {
    return service({
        url: order.url,
        method: 'POST',
        data:order.data,
        headers: order.headers
    })
}