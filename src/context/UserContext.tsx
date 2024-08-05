import React, { createContext, useEffect, useState } from 'react'
import { IUser } from '../interfaces/User'
import { createUser, deleteUser, getAllUsers, updateUser } from '../services/user'

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

export const userCT = createContext({} as any)

const UserContext = ({ children }: Props) => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        (async () => {
            const data = await getAllUsers();
            setUsers(data);
        })();
    }, []);
    const onAdd = async (dataUser: IUser) => {
        try {
            const data = await createUser(dataUser);
            setUsers([...users, data]);
            alert("Thêm thành công!");
        } catch (error) {
            console.log(error);
        }
    };
    const onDelete = async (id: number | string) => {
        try {
            if (confirm("Bạn có muốn xóa không!")) {
                await deleteUser(id);
                alert("Xóa thành công!");
                setUsers(users.filter((user: IUser) => user.id !== id));
            }
        } catch (error) {
            console.log(error);
        }
    };
    const onEdit = async (formData: IUser, id: number | string) => {
        try {
            const data = await updateUser(formData, id);
            const newUser = users.map((user) =>
                user.id == id ? data : user
            );
            setUsers(newUser);
            alert("Sửa thành công!");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <userCT.Provider value={{ users, onDelete, onAdd, onEdit }}>{children}</userCT.Provider>
    )
}

export default UserContext