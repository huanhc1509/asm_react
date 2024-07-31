import { useState } from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate

const Search = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const navigate = useNavigate(); // use useNavigate to navigate to another page

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchTerm) {
            // Điều hướng đến trang kết quả tìm kiếm với từ khóa dưới dạng query parameter
            navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <form className="w-full" onSubmit={handleSearch}>
            <div className="relative">
                <input
                    type="search"
                    id="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for products..."
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    required
                />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 text-sm px-4 py-2">
                    <svg
                        className="w-4 h-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </button>
            </div>
        </form>
    );
};

export default Search;
