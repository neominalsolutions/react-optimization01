import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './pages/useContexts/CartProvider';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

// Production build alırken strictmode devre dışı kalır.
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<React.Suspense fallback={<>...Loading</>}>
				<CartProvider>
					{/* cartprovider altında ne kadar component varsa hepsi provider tanımından dolayı cart state görecektir. */}

					<App />
				</CartProvider>
			</React.Suspense>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
