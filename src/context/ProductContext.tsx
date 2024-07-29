import React, { createContext, useEffect, useState } from 'react'
import { IProduct } from '../interfaces/Product'
import { createProduct, deleteProduct, getAllProducts, updateProduct } from '../services/product'

type Props = {
    children: React.ReactNode
}
// interface ProductContextType {
//     products: IProduct[];
//     onAdd: (dataProduct: IProduct) => Promise<void>;
//     onDelete: (id: number | string) => Promise<void>;
//     onEdit: (formData: IProduct, id: number | string) => Promise<void>;
// }
// export const productCT = createContext<ProductContextType | undefined>(undefined);

export const productCT = createContext({} as any)

const ProductContext = ({ children }: Props) => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        (async () => {
            const data = await getAllProducts();
            setProducts(data);
        })();
    }, []);
    const onAdd = async (dataProduct: IProduct) => {
        try {
            const data = await createProduct(dataProduct);
            setProducts([...products, data]);
            alert("Thêm thành công!");
        } catch (error) {
            console.log(error);
        }
    };
    const onDelete = async (id: number | string) => {
        try {
            if (confirm("Bạn có muốn xóa không!")) {
                await deleteProduct(id);
                alert("Xóa thành công!");
                setProducts(products.filter((product: IProduct) => product.id !== id));
            }
        } catch (error) {
            console.log(error);
        }
    };
    const onEdit = async (formData: IProduct, id: number | string) => {
        try {
            const data = await updateProduct(formData, id);
            const newProduct = products.map((product) =>
                product.id == id ? data : product
            );
            setProducts(newProduct);
            alert("Sửa thành công!");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <productCT.Provider value={{ products, onDelete, onAdd, onEdit }}>{children}</productCT.Provider>
    )
}

export default ProductContext