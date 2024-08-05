import { Link } from "react-router-dom"
import { IProduct } from "../../interfaces/Product"
import { useContext } from "react"
import { productCT } from "../../context/ProductContext"



const Card = () => {
    const { products } = useContext(productCT)
    const firstFourProducts = products.slice(0, 4)
    const formatCurrency = (amount: number) => {
        return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    };
    return (

        <div className="my-8 mx-auto">
            <h2 className="text-2xl font-bold mb-4 px-20">Featured Products</h2>
            <div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4 px-20">
                {firstFourProducts.map((product: IProduct) => (
                    <Link to={`detail/${product.id}`}>
                        <div className="h-[350px] overflow-hidden">
                            <img className="h-full mx-auto p-4 hover:scale-110 duration-500" src={product.images[0]} alt={product.name} />
                        </div>
                        <h3 className="font-semibold truncate text-xl my-2">{product.name}</h3>
                        <div className="flex gap-2 text-xl my-2">
                            <p className="text-red-500 font-semibold whitespace-nowrap">{formatCurrency(product.price)}</p>
                            {product.oldPrice && (
                                <p className="text-gray-500 line-through whitespace-nowrap">{formatCurrency(product.oldPrice)}</p>
                            )}
                        </div>

                        <p className="text-gray-700 text-sm truncate">{product.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Card