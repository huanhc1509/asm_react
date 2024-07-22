
const Sidebar = () => {
    return (
        <div className="col-span-1 p-4">
            <h1 className="text-2xl font-bold text-[#505F4E] max-w-screen-lg mx-auto">
                Kategorien
            </h1>
            <div className="py-4">
                <div className="flex items-center my-2">
                    <input defaultChecked id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                    <label htmlFor="default-checkbox" className="ms-2">Default
                        checkbox</label>
                </div>
                <div className="flex items-center my-2">
                    <input id="checked-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                    <label htmlFor="checked-checkbox" className="ms-2">Checked
                        state</label>
                </div>
                <div className="flex items-center my-2">
                    <input id="checked-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                    <label htmlFor="checked-checkbox" className="ms-2">Checked
                        state</label>
                </div>
                <div className="flex items-center my-2">
                    <input id="checked-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                    <label htmlFor="checked-checkbox" className="ms-2">Checked
                        state</label>
                </div>
                <div className="flex items-center my-2">
                    <input id="checked-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                    <label htmlFor="checked-checkbox" className="ms-2">Checked
                        state</label>
                </div>
            </div>
            <div className="relative h-64">
                <img src="src/assets/img/sidebar-1.png" alt="Image" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gray-700 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 grid grid-cols-1 place-content-between p-5">
                    <h3 className="text-white text-xl font-bold">Grow your own favourite plant</h3>
                    <a href="#" className="text-white w-full duration-300 rounded hover:text-[#4E7C32]">Shop
                        Now <i className="fa-solid fa-circle-arrow-right px-2" /></a>
                </div>
            </div>
            <div className="py-4 max-w-lg mx-auto">
                <div className="py-4">
                    <h3 className="text-lg font-bold">Filter By Price</h3>
                    <input type="range" className="w-full h-2 bg-[#4E7C32] rounded-lg appearance-none cursor-pointer range-lg" min={0} max={8000} defaultValue={4000} id="minPrice" />
                    <div className="flex justify-between mb-2 text-sm">
                        <span>From $0 to $8000</span>
                        <button>Filter</button>
                    </div>
                </div>
                <div className="py-4">
                    <h3 className="text-lg font-bold">Filter By Size</h3>
                    <input type="range" className="w-full h-2 bg-[#4E7C32] rounded-lg appearance-none cursor-pointer range-lg" min={0} max={8000} defaultValue={4000} id="minPrice" />
                    <div className="flex justify-between mb-2 text-sm">
                        <span>2 mm by 50</span>
                        <button>Filter</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sidebar