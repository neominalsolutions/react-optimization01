import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// rfce kısayolu ile component oluşturduk
function SiteLayout() {
	return (
		<div style={{ padding: '1rem' }}>
			<>
				<header>Üst Bilgi</header>
				<nav>
					<Link to="/useStateDemo">useStateDemo</Link>{' '}
					<Link to="/useEffectDemo">Use Effect Demo</Link>{' '}
					<a href="/useStateDemo"> useStateDemo Href</a>
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
