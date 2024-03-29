import axios from 'axios';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import debounce from '../../utils/debounce';
import {
	CartContext,
	CartContextType,
	CartItem,
} from '../useContexts/CartProvider';

function ProductSearchDemo() {
	const [products, setProducts] = useState<any[]>([]);
	const [search, setSearch] = useState<string>('');

	// dispatcher
	const { addToCart } = useContext(CartContext) as CartContextType;

	useEffect(() => {
		loadData(); // search değiştiğinde api ye istek at
	}, [search]);

	const loadData = async () => {
		console.log('search', search);
		try {
			axios
				.get(
					`https://services.odata.org/northwind/northwind.svc/Products?$filter=substringof('${search}', ProductName)&$format=json`
				)
				.then((res) => {
					console.log('res', res.data);
					setProducts(res.data.value);
				});
		} catch (error) {
			console.log('err', error);
		}
	};

	// 500ms sonra değişti.
	const onSearch = (e: any) => {
		console.log('...search', e.target.value);
		// her bir tuşta loadData veri çekecek.
		setSearch(e.target.value); // state değişti.
	};

	const searchHandler = useMemo(() => debounce(onSearch, 500), []);

	// Onchange işlemlerinde kesinlikle debouncing yapalım

	return (
		<div>
			<input onChange={searchHandler} />
			<hr></hr>
			<ul>
				{products.map((item: any) => {
					return (
						<li key={item.ProductID}>
							{item.ProductName}
							<button
								onClick={() => {
									const data: CartItem = {
										id: item.ProductID,
										name: item.ProductName,
										quantity: 1,
										listprice: item.UnitPrice,
									};
									// cart state değişsin diye addtoCart action tetişkliyoruz. global state güncelleniyor.
									addToCart(data);
								}}
							>
								Sepete Ekle
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default ProductSearchDemo;
