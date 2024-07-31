import instance from "../config/axios"
import { IProduct } from "../interfaces/Product"

// Hiển thị product
export const getAllProducts = async () =>{
    try {
        const {data} = await instance.get('products/')
        return data
    } catch (error) {
        throw new Error("Lỗi")
    }
}

// Hiển thị Review
export const getAllReviews = async () =>{
    try {
        const {data} = await instance.get('reviews/')
        return data
    } catch (error) {
        throw new Error("Lỗi")
    }
}
export const getProductById = async (id:number | string) =>{
    try {
        const {data} = await instance.get(`products/${id}`)
        return data
    } catch (error) {
        throw new Error("Lỗi")
    }
}
export const createProduct = async (productData: IProduct) =>{
    try {
        const {data} = await instance.post('products', productData)
        return data
    } catch (error) {
        throw new Error("Lỗi")
    }
}
export const updateProduct = async (productData: IProduct, id: number | string ) =>{
    try {
        const {data} = await instance.put(`products/${id}`, productData)
        return data
    } catch (error) {
        throw new Error("Lỗi")
    }
}
export const deleteProduct = async (id: number | string) =>{
    try {
        const {data} = await instance.delete(`products/${id}`)
        return data
    } catch (error) {
        throw new Error("Lỗi")
    }
}
export const getProductsByCategory = async (categoryId: number | string) => {
    try {
      const { data } = await instance.get(`products?categoryId=${categoryId}`);
      return data;
    } catch (error) {
        throw new Error("Lỗi")
    }
};
export const searchProducts = async (keywords: string) => {
    try {
      const { data } = await instance.get(`products`, {
        params: { name_like: keywords },
      });
      return data;
    } catch (error) {
      throw new Error("Lỗi");
    }
};
  