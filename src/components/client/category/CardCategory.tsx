import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
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
    const formatCurrency = (amount: number) => {
        return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    };
    return (
        <div className="col-span-3 grid grid-cols-3 gap-4">
            {products.map((product) => (
                <Link to={`/detail/${product.id}`} key={product.id}>
                    <div className="overflow-hidden relative">
                        <img className="h-56 mx-auto p-4 hover:scale-110 duration-500" src={product.images[0]} alt={product.name} />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 duration-500 gap-4">
                            <button className="bg-gray-300 hover:bg-[#4E7C32] text-[#4E7C32] hover:text-white py-2 px-4 rounded cursor-pointer"><i className="fa-solid fa-repeat" /></button>
                            <button className="bg-gray-300 hover:bg-[#4E7C32] text-[#4E7C32] hover:text-white py-2 px-4 rounded cursor-pointer"><i className="fa-solid fa-bag-shopping" /></button>
                            <button className="bg-gray-300 hover:bg-[#4E7C32] text-[#4E7C32] hover:text-white py-2 px-4 rounded cursor-pointer"><i className="fa-regular fa-heart" /></button>
                        </div>
                    </div>
                    <h3 className="font-semibold truncate text-xl my-2">{product.name}</h3>
                    <div className="flex gap-2 text-xl my-2">
                        <p className="text-red-500 font-semibold whitespace-nowrap">{formatCurrency(product.price)}</p>
                        {product.oldPrice && (
                            <p className="text-gray-500 line-through whitespace-nowrap">{formatCurrency(product.price)}</p>
                        )}
                    </div>

                    <p className="text-gray-700 text-sm truncate">{product.description}</p>
                </Link>
            ))}
        </div>
    );
};

export default CardCategory;
