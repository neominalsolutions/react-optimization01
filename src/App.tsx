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
import ReactMemoSamplePage from './pages/reactMemos/ReactMemoSamplePage';
import UseRefSampleDemo from './pages/useRefs/UseRefSampleDemo';
import UseRefSampleHtmlElementRefDemo from './pages/useRefs/UseRefSampleHtmlElementRefDemo';
import UseMemoSample from './pages/useMemos/UseMemoSample';
import UseCallbackSampleDemo from './pages/useCallbacks/UseCallbackSampleDemo';
import UseReducerSampleDemo from './pages/useReducers/UseReducerSampleDemo';
import UseFetchDemo from './pages/customHook/UseFetchDemo';
import LoginDemo from './pages/login/LoginDemo';
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
					path: '/useEffectDemo',
					Component: UseEffectSamplePage,
				},
				{
					path: '/reactMemoDemo',
					Component: ReactMemoSamplePage,
				},
				{
					path: '/useRefDemo',
					Component: UseRefSampleDemo,
				},
				{
					path: '/useRefHtmlElement',
					Component: UseRefSampleHtmlElementRefDemo,
				},
				{
					path: '/UseMemoDemo',
					Component: UseMemoSample,
				},
				{
					path: '/useCallbackDemo',
					Component: UseCallbackSampleDemo,
				},
				{
					path: '/useReducerDemo',
					Component: UseReducerSampleDemo,
				},
				{
					path: '/useFetchDemo',
					Component: UseFetchDemo,
				},
				{
					path: '/loginDemo',
					Component: LoginDemo,
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
