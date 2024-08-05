// context/CartContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { ICart } from '../interfaces/Cart';
import { IProduct } from '../interfaces/Product';

interface CartContextType {
    cart: ICart[];
    addToCart: (product: IProduct, quantity: number) => void;
    removeFromCart: (productId: string | number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<ICart[]>(() => {
        // Lấy dữ liệu giỏ hàng từ localStorage nếu có
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Lưu giỏ hàng vào localStorage mỗi khi giỏ hàng thay đổi
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: IProduct, quantity: number) => {
        setCart((prevCart) => {
            const existingCartItem = prevCart.find(item => item.product.id === product.id);

            if (existingCartItem) {
                return prevCart.map(item =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prevCart, { product, quantity }];
            }
        });
        alert("Đã thêm vào giỏ hàng")
    };

    const removeFromCart = (productId: string | number) => {
        setCart((prevCart) => prevCart.filter(item => item.product.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
        alert("Bạn đã thanh toán thành công")
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
