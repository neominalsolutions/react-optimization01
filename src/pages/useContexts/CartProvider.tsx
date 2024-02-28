// uygulama genelinden bu ortak state erişmemizi sağlayan yhapılara provider diyoruz.

import { createContext, useState } from 'react';

// /*
// /* <CartProvider>
// /* <Component>
// /* </CartProvider>

export type CartItem = {
	id: number;
	name: string;
	quantity: number;
	listprice: number;
};

export type CartState = {
	items: CartItem[];
	total: number;
};

// Reducer ActionType Burada ise Context içerisi yapılacak actionlar için ContextType açıyoruz.
// yapılacak operasyonları belirtiyoruz
export type CartContextType = {
	addToCart: (item: CartItem) => void; // ACTION
	removeFromCart: (id: number) => void; // ACTION
	loadCartFromLocalStorage: () => void;
	cart: CartState; // STATE
};

// global state yönetimini context ile yapıyoruz.
export const CartContext = createContext<CartContextType | null>(null);

function CartProvider({ children }: any) {
	const [cart, setCart] = useState<CartState>({ items: [], total: 0 });

	const addToCart = (item: CartItem) => {
		cart.items = [...cart.items, item];

		let total = 0;
		cart.items.forEach((item: CartItem) => {
			total += item.quantity * item.listprice;
		});

		cart.total = total;

		setCart({ ...cart });
	};

	const removeFromCart = (id: number) => {
		cart.items = [...cart.items.filter((x) => x.id !== id)];

		let total = 0;
		cart.items.forEach((item: CartItem) => {
			total += item.quantity * item.listprice;
		});

		cart.total = total;

		setCart({ ...cart });
	};

	const loadCartFromLocalStorage = () => {
		const exists = localStorage.getItem('cart');
		setCart({ ...cart });
	};

	return (
		<CartContext.Provider
			value={{ addToCart, removeFromCart, loadCartFromLocalStorage, cart }}
		>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;
