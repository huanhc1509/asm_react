import { Link } from "react-router-dom"
import { IProduct } from "../../interfaces/Product"

type Props = {
    product: IProduct
}

const Card = ({ product }: Props) => {

    return (

        <Link to={`detail/${product.id}`}>
            <div className="h-[350px] overflow-hidden">
                <img className="h-full mx-auto p-4 hover:scale-110 duration-500" src={product.images[0]} alt={product.name} />
            </div>
            <div className="flex justify-between px-2">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <p className="text-red-500 font-semibold">{product.price} ₫</p>
                        {product.oldPrice && (
                            <p className="text-gray-500 line-through">{product.oldPrice} ₫</p>
                        )}
                    </div>
                </div>
            </div>
            <p className="text-gray-700 px-2">{product.description}</p>
        </Link>
    )
}

export default Card