import service from './service'

export const getProducts = (url:string, headers:any) =>  {
    return service({
        url,
        method: 'GET',
        headers: headers
    })
}