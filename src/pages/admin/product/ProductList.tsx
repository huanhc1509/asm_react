import { useContext } from 'react'
import { productCT } from '../../../context/ProductContext'
import { IProduct } from '../../../interfaces/Product'
import { Link } from 'react-router-dom'

const ProductList = () => {
    const { products, onDelete } = useContext(productCT)
    const formatCurrency = (amount: number) => {
        return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    };
    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">Quản lý sản phẩm</h1>
                <Link to={`product/add`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Thêm sản phẩm</Link>
            </div>
            <table className="max-w-full divide-y divide-gray-200 mt-4 border border-gray-300">
                <thead>
                    <tr>

                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>

                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên</th>

                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giá</th>

                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ảnh</th>

                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mô tả</th>

                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {products.map((product: IProduct, index: number) => (
                        <tr key={product.id} >
                            <td className="px-6 py-4 whitespace-nowrap text-center">{index + 1}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{formatCurrency(product.price)}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <img width={50} src={product.images[0]} alt={product.name} />
                            </td>
                            <td className="px-6 py-4">{product.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap  space-x-2">
                                <Link to={`product/edit/${product.id}`}
                                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">Cập nhập</Link>
                                <button onClick={() => onDelete(product.id)} className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">
                                    Xóa
                                </button>
                            </td>
                        </tr >
                    ))}

                </tbody >
            </table >
        </div >


    )
}

export default ProductList