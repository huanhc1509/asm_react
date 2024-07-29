import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../services/product";
import { IProduct } from "../../../interfaces/Product";

const Details = () => {
    // Use the IProduct interface for type safety
    const [product, setProduct] = useState<IProduct | null>(null);
    const [quantity, setQuantity] = useState<number>(1);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        (async () => {
            if (id) {
                const data: IProduct = await getProductById(id);
                setProduct(data);
                console.log(data);

            }
        })();
    }, [id]);

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-36">
                <div>
                    <img src={product.images[0]} alt={product.name} className="w-full" />
                    <div className="grid grid-cols-3 gap-8 mt-4">
                        {product.images.slice(1).map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Product ${index + 2}`} // Chỉnh số thứ tự bắt đầu từ 2
                                className="h-full hover:border-2 hover:border-black border-2 border-white rounded-lg"
                            />
                        ))}

                    </div>
                </div>

                <div>
                    <h3 className="text-lg text-[#4E7C32] font-medium py-2">Plant</h3>
                    <h1 className="text-4xl font-bold py-2">{product.name}</h1>
                    <p className="text-sm text-[#68707D] py-2">{product.description}</p>
                    <div className="flex items-center py-2">
                        <h1 className="text-4xl font-bold pr-2">${product.price}</h1>
                        <span className="bg-[#FFEDE0] font-bold text-[#4E7C32] rounded my-auto px-2 py-1">50%</span>
                    </div>
                    <h1 className="text-xl font-medium pr-2 line-through">${product.oldPrice}</h1>
                    <form className="py-4">
                        <div className="relative flex">
                            <button
                                type="button"
                                onClick={handleDecrement}
                                className="bg-gray-100 hover:bg-gray-200 rounded-s-lg p-3 h-11 focus:ring-gray-100"
                            >
                                <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                                </svg>
                            </button>
                            <input
                                type="text"
                                value={quantity}
                                readOnly
                                className="bg-gray-100 border-x-0 border-gray-300 h-11 text-center text-black text-sm block py-2.5"
                                required
                            />
                            <button
                                type="button"
                                onClick={handleIncrement}
                                className="bg-gray-100 hover:bg-gray-200 rounded-e-lg p-3 h-11 focus:ring-gray-100"
                            >
                                <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                                </svg>
                            </button>
                            <button type="button" className="w-full bg-[#4E7C32] text-white rounded-lg ml-4 h-11">
                                <i className="fa-solid fa-card-shopping mr-2" />Add to cart
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="my-8 pr-16">
                <h3 className="text-2xl text-[#4E7C32] pt-8">Discription </h3>
                <p className="text-lg text-[#68707D] py-2">{product.description}</p>
                <h3 className="text-2xl text-[#4E7C32] pt-8">About </h3>
                <p className="text-lg text-[#68707D] py-2">Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled i</p>
            </div>
            <div className="my-8 pr-16">
                <div className="grid grid-cols-2 py-8">
                    <div className="flex items-center mt-2.5 mb-5">
                        <img src={product.images[0]} alt={product.name} className="w-h-56" />
                        <div className="text-center mx-5">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                <svg className="w-8 h-8 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-8 h-8 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-8 h-8 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-8 h-8 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-8 h-8 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <p className="text-[#4E7C32] text-2xl font-semibold px-2.5 py-0.5 rounded ms-3">
                                {product.rating}
                                <span className="text-sm ml-2">(100)</span>
                            </p>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className=" bg-[#4E7C32] text-white rounded-lg font-semibold px-4 py-2 ">Write
                            reviews</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;
