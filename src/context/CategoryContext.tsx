import React, { createContext, useEffect, useState } from 'react'
import { ICategory } from '../interfaces/Category'
import { createCategory, deleteCategory, getAllCategorys, updateCategory } from '../services/category'

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

export const categoryCT = createContext({} as any)

const CategoryContext = ({ children }: Props) => {
    const [categorys, setCategorys] = useState<ICategory[]>([]);

    useEffect(() => {
        (async () => {
            const data = await getAllCategorys();
            setCategorys(data);
        })();
    }, []);
    const onAdd = async (dataCategory: ICategory) => {
        try {
            const data = await createCategory(dataCategory);
            setCategorys([...categorys, data]);
            alert("Thêm thành công!");
        } catch (error) {
            console.log(error);
        }
    };
    const onDelete = async (id: number | string) => {
        try {
            if (confirm("Bạn có muốn xóa không!")) {
                await deleteCategory(id);
                alert("Xóa thành công!");
                setCategorys(categorys.filter((category: ICategory) => category.id !== id));
            }
        } catch (error) {
            console.log(error);
        }
    };
    const onEdit = async (formData: ICategory, id: number | string) => {
        try {
            const data = await updateCategory(formData, id);
            const newCategory = categorys.map((category) =>
                category.id == id ? data : category
            );
            setCategorys(newCategory);
            alert("Sửa thành công!");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <categoryCT.Provider value={{ categorys, onDelete, onAdd, onEdit }}>{children}</categoryCT.Provider>
    )
}

export default CategoryContext