import service from './service'

export const getCategories = (url:string, headers:any) =>  {
    return service({
        url,
        method: 'GET',
        headers: headers
    })
}