import instance from "../config/axios"
import { IUser } from "../interfaces/User"

export const login = async (user: IUser) =>{
    try {
        const {data} = await instance.post('login', user)
        return data
    } catch (error) {
        throw new Error("Lỗi")
    }
}
export const register = async (user: IUser) =>{
    try {
        const {data} = await instance.post('register', user)
        return data
    } catch (error) {
        throw new Error("Lỗi")
    }
}