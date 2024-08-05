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
export const getAllUsers = async () =>{
    try {
        const {data} = await instance.get('users/')
        return data
    } catch (error) {
        throw new Error("Lỗi")
    }
}
export const getUserById = async (id:number | string) =>{
    try {
        const {data} = await instance.get(`users/${id}`)
        return data
    } catch (error) {
        throw new Error("Lỗi")
    }
}
export const createUser = async (userData: IUser) =>{
    try {
        const {data} = await instance.post('users', userData)
        return data
    } catch (error) {
        throw new Error("Lỗi")
    }
}
export const updateUser = async (userData: IUser, id: number | string ) =>{
    try {
        const {data} = await instance.put(`users/${id}`, userData)
        return data
    } catch (error) {
        throw new Error("Lỗi")
    }
}
export const deleteUser = async (id: number | string) =>{
    try {
        const {data} = await instance.delete(`users/${id}`)
        return data
    } catch (error) {
        throw new Error("Lỗi")
    }
}