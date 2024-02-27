import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import { UseStateSamplePage } from './pages/useStates/UseStateSamplePage';
// import UseStateSamplePage, { A } from './pages/useStates/UseStateSamplePage';
// import * as m from './pages/useStates/UseStateSamplePage';
// import { UseStateSamplePage } from './pages/useStates/UseStateSamplePage';
import UseStateSamplePage from './pages/useStates/UseStateSamplePage';
import { Link, Outlet, useRoutes } from 'react-router-dom';
import SiteLayout from './layouts/SiteLayout';
import UseEffectSamplePage from './pages/useEffects/UseEffectSamplePage';
function App() {
	// appcomponent dosyasını routing amaçlı kullanıyoruz.
	return useRoutes([
		{
			path: '/', // ana path ile layout görünümünü karşılastın
			Component: SiteLayout,
			children: [
				// path bağlı açılacak sayfa componentleri şunlardır.
				{
					path: '/useStateDemo',
					Component: UseStateSamplePage,
				},
				{
					path:'/useEffectDemo',
					Component:UseEffectSamplePage
				},
				{
					path: '*',
					element: <>Sayfa Bulunamadı</>,
				},
			],
		},
	]);
}

export default App;
