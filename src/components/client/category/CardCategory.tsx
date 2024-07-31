import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getProductsByCategory, searchProducts } from '../../../services/product'; // Import searchProducts
import { IProduct } from '../../../interfaces/Product';

const CardCategory = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState<IProduct[]>([]);
    const location = useLocation();

    // Lấy từ khóa tìm kiếm từ URL
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get("query") || "";

    useEffect(() => {
        const fetchProducts = async () => {
            if (searchTerm) {
                // Thực hiện tìm kiếm theo từ khóa
                const data = await searchProducts(searchTerm);
                setProducts(data);
            } else {
                // Lấy sản phẩm theo danh mục
                const data = await getProductsByCategory(categoryId as string | number);
                setProducts(data);
            }
        };

        fetchProducts();
    }, [categoryId, searchTerm]); // Thêm searchTerm vào dependency array

    return (
        <div className="col-span-3 grid grid-cols-3 gap-4">
            {products.map((product) => (
                <div key={product.id}>
                    <div className="overflow-hidden relative">
                        <img className="h-56 mx-auto p-4 hover:scale-110 duration-500" src={product.images[0]} alt={product.name} />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 duration-500 gap-4">
                            <button className="bg-gray-300 hover:bg-[#4E7C32] text-[#4E7C32] hover:text-white py-2 px-4 rounded cursor-pointer"><i className="fa-solid fa-repeat" /></button>
                            <button className="bg-gray-300 hover:bg-[#4E7C32] text-[#4E7C32] hover:text-white py-2 px-4 rounded cursor-pointer"><i className="fa-solid fa-bag-shopping" /></button>
                            <button className="bg-gray-300 hover:bg-[#4E7C32] text-[#4E7C32] hover:text-white py-2 px-4 rounded cursor-pointer"><i className="fa-regular fa-heart" /></button>
                        </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <div className="flex justify-between">
                        <p className="text-gray-700 mb-2">{product.description}</p>
                        <p className="text-gray-700 mb-2">${product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardCategory;
