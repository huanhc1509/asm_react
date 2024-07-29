import React, { useContext } from 'react';
import { categoryCT } from '../../../context/CategoryContext';
import { ICategory } from '../../../interfaces/Category';
import { Link } from 'react-router-dom';

const CategoryList = () => {
    const { categorys, onDelete } = useContext(categoryCT);

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-bold">Quản lý danh mục</h1>
                <Link to={`add`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Thêm sản phẩm
                </Link>
            </div>
            <table className="min-w-full divide-y divide-gray-200 mt-4 border border-gray-300">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            STT
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tên
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Mô tả
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Thao tác
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {categorys.map((category: ICategory, index: number) => (
                        <tr key={category.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-center">{index + 1}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{category.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{category.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-2">
                                <Link
                                    to={`edit/${category.id}`}
                                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                                >
                                    Cập nhật
                                </Link>
                                <button
                                    onClick={() => onDelete(category.id)}
                                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                                >
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CategoryList;
