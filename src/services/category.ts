import instance from "../config/axios"
import { ICategory } from "../interfaces/Category"

export const getAllCategorys = async () =>{
    try {
        const {data} = await instance.get('categorys/')
        return data
    } catch (error) {
        throw new Error("Lỗi")
    }
}
export const getCategoryById = async (id:number | string) =>{
    try {
        const {data} = await instance.get(`categorys/${id}`)
        return data
    } catch (error) {
        throw new Error("Lỗi")
    }
}
export const createCategory = async (categoryData: ICategory) =>{
    try {
        const {data} = await instance.post('categorys', categoryData)
        return data
    } catch (error) {
        throw new Error("Lỗi")
    }
}
export const updateCategory = async (categoryData: ICategory, id: number | string ) =>{
    try {
        const {data} = await instance.put(`categorys/${id}`, categoryData)
        return data
    } catch (error) {
        throw new Error("Lỗi")
    }
}
export const deleteCategory = async (id: number | string) =>{
    try {
        const {data} = await instance.delete(`categorys/${id}`)
        return data
    } catch (error) {
        throw new Error("Lỗi")
    }
}