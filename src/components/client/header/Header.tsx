import { Link, useNavigate } from "react-router-dom";
import { ICategory } from "../../../interfaces/Category";
import { useContext, useState } from "react";
import { categoryCT } from "../../../context/CategoryContext";
import { useCart } from "../../../context/CartContext"; // Import useCart hook
import Search from "./Search";
import Menu from "./Menu";

const Header = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const { categorys } = useContext(categoryCT);
    const { cart } = useCart(); // Get cart from CartContext

    // Calculate the total quantity of items in the cart
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    const navigate = useNavigate();

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);

        if (value === "login") {
            navigate("/login");
        }
        if (value === "register") {
            navigate("/register");
        }
        if (value === "logout") {
            sessionStorage.removeItem("user");
            alert("Đăng xuất thành công");
            navigate("/");
        }
    };


    return (
        <header className="bg-gradient-to-r from-[#4E7C32] to-[#ACB399] py-5">
            <div className="max-w-screen-lg mx-auto flex items-center justify-between w-full px-4">
                {/* Phần tìm kiếm */}
                <Search />
                {/* Chọn ngôn ngữ */}
                <div className="mx-20">
                    <select
                        value={selectedOption}
                        onChange={handleSelectChange}
                        className="text-white bg-transparent border-none p-2"
                    >
                        <option className="text-black" value="">Select</option>
                        <option className="text-black" value="login">Login</option>
                        <option className="text-black" value="register">Register</option>
                        <option className="text-black" value="logout">Logout</option>
                    </select>

                </div>
                {/* Tài khoản và giỏ hàng */}
                <div className="ml-4 flex items-center space-x-4">
                    <div className="text-white flex items-center">
                        <i className="fa-solid fa-user" />
                        <Link to={`admin`} className="ml-2">Account</Link>
                    </div>

                    <Link to={`/cart`} className="text-white flex items-center relative">
                        <i className="fa-solid fa-cart-shopping text-lg" />
                        {totalQuantity > 0 && (
                            <span className="absolute -top-1 right-1/2 bg-red-600 text-white text-xs rounded-full px-1">
                                {totalQuantity}
                            </span>
                        )}
                        <span className="ml-2">Cart</span>

                    </Link>
                </div>
            </div>
            <hr className="max-w-screen-lg mx-auto my-2" />
            {/* Menu điều hướng */}
            <div className="max-w-screen-lg mx-auto">
                <ul className="flex space-x-8 justify-center">
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
    );
};

export default Header;
