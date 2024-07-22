
const Header = () => {
    return (
        <header className="bg-gradient-to-r from-[#4E7C32] to-[#ACB399] py-5">
            <div className="max-w-screen-lg mx-auto flex items-center justify-between w-full px-4">
                <form className="w-full">
                    <div className="relative">
                        <input type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search" required />
                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 text-sm px-4 py-2">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </button>
                    </div>
                </form>
                <div className="mx-20">
                    <select className="text-white bg-transparent border-none">
                        <option className="text-black">En</option>
                        <option className="text-black">De</option>
                    </select>
                </div>
                <div className="ml-4 flex items-center space-x-4">
                    <div className="text-white flex items-center">
                        <i className="fa-solid fa-user" />
                        <span className="ml-2">Account</span>
                    </div>
                    <div className="text-white flex items-center">
                        <i className="fa-solid fa-cart-shopping" />
                        <span className="ml-2">Cart</span>
                    </div>
                </div>
            </div>
            <hr className="max-w-screen-lg mx-auto my-2" />
            <div className="max-w-screen-lg mx-auto">
                <ul className="flex space-x-6">
                    <li className="group relative">
                        <select className="text-white bg-transparent border-none" >
                            <option className="text-black" value=""><a href="#">Beleuchtung</a></option>
                            <option className="text-black" value="">Submenu 1</option>
                            <option className="text-black" value="">Submenu 1</option>
                            <option className="text-black" value="">Submenu 1</option>
                            <option className="text-black" value="">Submenu 1</option>
                        </select>
                    </li>
                    <li className="group relative">
                        <a href="#" className="hover:underline pb-4 text-white">Growbox</a>
                        <ul className="absolute inset-x-0 mt-2 w-48 bg-white hidden group-hover:block">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Submenu 1</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Submenu 2</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Submenu 3</a>
                            </li>
                        </ul>
                    </li>
                    <li className="group relative">
                        <a href="#" className="hover:underline pb-4 text-white">Beleuchtung</a>
                        <ul className="absolute left-0 mt-2 w-48 bg-white hidden group-hover:block">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Submenu 1</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Submenu 2</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Submenu 3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="hover:underline pb-4 text-white">Beleuchtung</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline pb-4 text-white">Beleuchtung</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline pb-4 text-white">Beleuchtung</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline pb-4 text-white">Beleuchtung</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline pb-4 text-white">Beleuchtung</a>
                    </li>
                </ul>
            </div>
        </header>

    )
}

export default Header