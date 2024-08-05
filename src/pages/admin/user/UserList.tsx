import { useContext } from 'react';
import { userCT } from '../../../context/UserContext';
import { IUser } from '../../../interfaces/User';
import { Link } from 'react-router-dom';

const UserList = () => {
    const { users, onDelete } = useContext(userCT);

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-bold">Quản lý danh mục</h1>
                <Link to={`add`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Thêm danh mục
                </Link>
            </div>
            <table className="min-w-full divide-y divide-gray-200 mt-4 border border-gray-300">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            STT
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Mật khẩu
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Thao tác
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user: IUser, index: number) => (
                        <tr key={user.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-center">{index + 1}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{user.password}</td>
                            <td className="px-6 py-4 whitespace-nowrap space-x-2">
                                <Link
                                    to={`edit/${user.id}`}
                                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                                >
                                    Cập nhật
                                </Link>
                                <button
                                    onClick={() => onDelete(user.id)}
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

export default UserList;
