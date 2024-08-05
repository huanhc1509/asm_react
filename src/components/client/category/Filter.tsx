const Filter = () => {
    return (
        <form className="max-w-sm flex w-full gap-4 mb-8">
            <div className="flex items-center gap-4">
                <label htmlFor="sort" className="block text-sm font-medium text-gray-900 whitespace-nowrap">Sắp xếp theo:</label>
                <select id="sort" className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500">
                    <option value="" disabled selected>Chọn cách sắp xếp</option>
                    <option value="price-asc">Giá tăng dần</option>
                    <option value="price-desc">Giá giảm dần</option>
                    <option value="rating">Đánh giá cao nhất</option>
                </select>
            </div>
            <div className="flex items-center gap-4">
                <label htmlFor="show" className="block text-sm font-medium text-gray-900 whitespace-nowrap">Hiển thị:</label>
                <select id="show" className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500">
                    <option value="" disabled selected>Chọn số lượng hiển thị</option>
                    <option value="10">10 sản phẩm</option>
                    <option value="20">20 sản phẩm</option>
                    <option value="50">50 sản phẩm</option>
                    <option value="100">100 sản phẩm</option>
                </select>
            </div>
        </form>
    )
}

export default Filter;
