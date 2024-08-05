import { useContext, useEffect, useState } from "react"
import { categoryCT } from "../../../context/CategoryContext"
import { ICategory } from "../../../interfaces/Category"
import { Link, useParams } from "react-router-dom"
import { getCategoryById } from "../../../services/category"

const Sidebar = () => {
    const { categorys } = useContext(categoryCT)
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
        <div className="col-span-1 p-4">
            <h1 className="text-2xl font-bold text-[#505F4E] max-w-screen-lg mx-auto">
                Kategorien
            </h1>
            <div className="py-4">
                {categorys.map((category: ICategory) => (
                    <div className="flex items-center my-2" key={category.id}>
                        <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                        <Link to={`/category/${category.id}`} className="ms-2">{category.name}</Link>
                    </div>
                ))}

            </div>
            <div className="relative h-64">
                <img src={category?.images || "/src/assets/img/sidebar-1.png"} alt="Image" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gray-700 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 grid grid-cols-1 place-content-between p-5">
                    <h3 className="text-white text-xl font-bold">Grow your own favourite plant</h3>
                    <a href="#" className="text-white w-full duration-300 rounded hover:text-[#4E7C32]">Shop
                        Now <i className="fa-solid fa-circle-arrow-right px-2" /></a>
                </div>
            </div>
            <div className="py-4 max-w-lg mx-auto">
                <div className="py-4">
                    <h3 className="text-lg font-bold">Lọc theo giá</h3>
                    <input type="range" className="w-full h-2 bg-[#4E7C32] rounded-lg appearance-none cursor-pointer range-lg" min={0} max={8000} defaultValue={4000} id="minPrice" />
                    <div className="flex justify-between mb-2 text-sm">
                        <span>Từ 0 đ đến 8.000.000 đ</span>
                        <button>Filter</button>
                    </div>
                </div>
                <div className="py-4">
                    <h3 className="text-lg font-bold">Lọc theo kích thước</h3>
                    <input type="range" className="w-full h-2 bg-[#4E7C32] rounded-lg appearance-none cursor-pointer range-lg" min={0} max={8000} defaultValue={4000} id="minPrice" />
                    <div className="flex justify-between mb-2 text-sm">
                        <span>2 mm đến 50</span>
                        <button>Lọc</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sidebar