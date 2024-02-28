import React, { useReducer } from 'react';
import CouponReducer, { CouponItem, CouponState } from './CouponReducer';

function UseReducerSampleDemo() {
	// local state management yaptığımızdan component init olurken kupon state başlangıç değerlerini verdik.
	const couponInit: CouponState = {
		items: [],
		total: 0,
		quantity: 1,
		times: 1,
	};
	// useReducer kullanımı
	const [state, dispatch] = useReducer(CouponReducer, couponInit);

	return (
		<div>
			<div>
				{state.items.map((item: CouponItem) => {
					return (
						<div key={item.id}>
							{item.text} / ({item.ratio}) / {item.type}
						</div>
					);
				})}
			</div>
			<hr></hr>
			<button
				onClick={() => {
					const data: CouponItem = {
						text: 'BJK-TS',
						ratio: 3.25,
						id: 1,
						type: 'MS',
					};
					dispatch({ type: 'ITEM_ADD', payload: data });
					// state güncellemesini tetikler
				}}
			>
				Add Item Test
			</button>
			<button
				onClick={() => {
					dispatch({ type: 'ITEM_REMOVE', payload: { id: 1 } });
				}}
			>
				SİL
			</button>
		</div>
	);
}

export default UseReducerSampleDemo;
