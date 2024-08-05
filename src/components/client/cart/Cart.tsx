// components/Cart.tsx

import { useCart } from "../../../context/CartContext";


const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCart();
    const formatCurrency = (amount: number) => {
        return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    };
    const getTotalCost = () => {
        return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Giỏ hàng</h1>
            {cart.length === 0 ? (
                <p className="text-gray-500">Giỏ hàng của bạn hiện đang trống.</p>
            ) : (
                <div>
                    {cart.map(item => (
                        <div key={item.product.id} className="bg-white shadow-md rounded-lg p-4 mb-4 flex items-center">
                            <img src={item.product.images[0]} alt={item.product.name} className="w-24 h-24 object-cover rounded-lg" />
                            <div className="ml-4 flex-1">
                                <h2 className="text-lg font-semibold">{item.product.name}</h2>
                                <p className="text-gray-600">Số lượng: {item.quantity}</p>
                                <p className="text-gray-600">Giá: {formatCurrency(item.product.price)}</p>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.product.id)}
                                className="text-red-600 hover:underline ml-4"
                            >
                                Xóa
                            </button>
                        </div>
                    ))}
                    <div className="mt-6 flex justify-between items-center">
                        <div className="text-xl font-semibold mb-4 flex">Tổng cộng:<p className="text-red-500 ml-2">{formatCurrency(getTotalCost())}</p></div>
                        <button
                            onClick={clearCart}
                            className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
                        >
                            Thanh toán
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};


export default Cart;
