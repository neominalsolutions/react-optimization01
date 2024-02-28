import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
	CartContext,
	CartContextType,
} from '../pages/useContexts/CartProvider';
// rfce kısayolu ile component oluşturduk
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
