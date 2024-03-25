import { Dispatch, SetStateAction } from "react"

export interface ILoginWithProps {
    loginWith: 'google' | 'github'
}

export interface ILoginFormProps {
    isLogged: string
    setIsLogged: Dispatch<SetStateAction<string>>
}

export interface IForm {
    email: string
    password?: string
}

export interface ILoginResponse {
    error: number
    detail: any[]
    timestamp: number
    access_token: string
    refresh_token: string
    token_expire: number
    refresh_token_expire: number
}

export interface IForgetCreateResponse {
    error: number
    detail: any[]
    timestamp: number
  }
  
export interface IFormCreate {
    password: string
    confirmPassword: IFormCreate['password']
}
  
export interface ICreatePayload {
    token: string,
    secret: string,
    password: string,
    password_confirm: string
        
}