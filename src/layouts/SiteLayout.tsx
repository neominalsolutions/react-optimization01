import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
	CartContext,
	CartContextType,
} from '../pages/useContexts/CartProvider';
// rfce kısayolu ile component oluşturduk

import routes from '../utils/routes.json';

function SiteLayout() {
	// burada state select edip state başka bir componente değişirken useContext hook ile yakalıyoruz. değişimi takibe alıp componentin yeniden yeni cart değerine göre render olmasını sağlıyoruz.
	const { cart } = useContext(CartContext) as CartContextType;

	return (
		<div style={{ padding: '1rem' }}>
			<>
				<header>
					Toplam Sepet Fiyat: {cart.total}
					<br></br>
					Toplam Adet: {cart.items.length}
				</header>
				<nav>
					{/* dinamik menü örneği from json */}
					{/* {(routes as any).map((item: any, index: number) => {
						return (
							<>
								<Link key={index} to={item.path}>
									{item.menu_name}
								</Link>{' '}
							</>
						);
					})} */}
					<Link to="/useStateDemo">useStateDemo</Link>{' '}
					<Link to="/useEffectDemo">Use Effect Demo</Link>{' '}
					<Link to="/reactMemoDemo">React Memo Demo</Link>{' '}
					<Link to="/useRefDemo">Use Ref Demo</Link>{' '}
					<Link to="/useRefHtmlElement">useRef HtmlElement Demo</Link>{' '}
					<Link to="/UseMemoDemo">Use Memo Demo</Link>{' '}
					<Link to="/useCallbackDemo">Use Callback Demo</Link>{' '}
					<Link to="/useReducerDemo">Use Reducer Demo</Link>{' '}
					<Link to="/useFetchDemo">Use Fetch Demo</Link>{' '}
					<Link to="/loginDemo">Login Demo</Link>{' '}
					<Link to="/debouncing">Debouncing</Link>{' '}
					<Link to="/useImperative">UseImperativeHandle Hook</Link>{' '}
					<a href="/useStateDemo">useStateDemo Href</a>
				</nav>
				<main>
					<Outlet />
					{/* Dinamik içeriğin değiştiği bölge */}
				</main>
				<footer>Alt Bilgi</footer>
			</>
		</div>
	);
}

export default SiteLayout;
