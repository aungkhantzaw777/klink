import service from './service'

export interface login {
    email: string
    password: string
}

export const sendLogin = (url:string, data:login) =>  {
    return service({
        url,
        method: 'POST',
        data
    })
}