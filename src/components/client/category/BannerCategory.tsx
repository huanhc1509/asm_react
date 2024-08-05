import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ICategory } from "../../../interfaces/Category";
import { getCategoryById } from "../../../services/category"; // Import dịch vụ lấy danh mục

const BannerCategory = () => {
    const { categoryId } = useParams();
    const [category, setCategory] = useState<ICategory | null>(null); // Thêm state cho danh mục

    useEffect(() => {
        const fetchCategory = async () => {
            if (categoryId) {
                // Lấy thông tin danh mục
                const categoryData = await getCategoryById(categoryId);
                setCategory(categoryData);
            }
        };

        fetchCategory();
    }, [categoryId]);

    return (
        <div className="bg-gradient-to-r from-[#B5DCB0] to-white py-16 mb-8">
            <h1 className="text-2xl font-bold text-[#505F4E] max-w-screen-lg mx-auto">
                {category?.name || "Danh mục"} 
            </h1>
        </div>
    );
};

export default BannerCategory;
