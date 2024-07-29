import { Link } from "react-router-dom"
import { ICategory } from "../../../interfaces/Category"
import { useContext } from "react"
import { categoryCT } from "../../../context/CategoryContext"
import Search from "./Search"
import Menu from "./Menu"

const Header = () => {
    const { categorys } = useContext(categoryCT)
    return (
        <header className="bg-gradient-to-r from-[#4E7C32] to-[#ACB399] py-5">
            <div className="max-w-screen-lg mx-auto flex items-center justify-between w-full px-4">
                {/* Phần tìm kiếm */}
                <Search />
                {/* Chọn ngôn ngữ */}
                <div className="mx-20">
                    <select className="text-white bg-transparent border-none">
                        <option className="text-black">En</option>
                        <option className="text-black">De</option>
                    </select>
                </div>
                {/* Tài khoản và giỏ hàng */}
                <div className="ml-4 flex items-center space-x-4">
                    <div className="text-white flex items-center">
                        <i className="fa-solid fa-user" />
                        <Link to={`admin`} className="ml-2">Account</Link>
                    </div>

                    <div className="text-white flex items-center">
                        <i className="fa-solid fa-cart-shopping" />
                        <span className="ml-2">Cart</span>
                    </div>
                </div>
            </div>
            <hr className="max-w-screen-lg mx-auto my-2" />
            {/* Menu điều hướng */}
            <div className="max-w-screen-lg mx-auto">
                <ul className="flex space-x-12 justify-center">
                    <li>
                        <Link to="/" className="hover:underline pb-4 text-white">Home</Link>
                    </li>
                    {categorys.map((category: ICategory) => (
                        <Menu key={category.id} category={category} />
                    ))}
                    <li>
                        <Link to="chart" className="hover:underline pb-4 text-white">Chart</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
