export type CouponItem = {
	id: number;
	text: string; // BJK-TS
	ratio: number; // 1.34
	type: string; // MS
};

export type CouponState = {
	items: CouponItem[];
	times: number; // misli
	quantity: number; // adet
	total: number; // kupon toplam tutarı
};

// hangi tipte kupon state değiştirmek için kullanacağımız actionlar
export type CouponType =
	| 'ITEM_ADD'
	| 'ITEM_REMOVE'
	| 'CHANGE_TIMES'
	| 'CHANGES_QUANTITY';

// yapılacak işleme dair componentten gönderilecek bilgiler (payload)
export type CouponAction = {
	type: CouponType;
	payload:
		| CouponItem
		| { id: number }
		| { quantity: number }
		| { times: number };
};

function calculateTotal(state: CouponState) {
	let total = 0;

	state.items.forEach((item) => {
		total += state.quantity * state.times * item.ratio;
	});

	state.total = total;

	return { ...state };
}

function CouponReducer(state: CouponState, action: CouponAction) {
	if (action.type === 'ITEM_ADD') {
		const couponExist = state.items.find(
			(x) => x.id === (action.payload as CouponItem).id
		);

		if (!couponExist) {
			state.items = [...state.items, action.payload as CouponItem];
		}

		const newState = calculateTotal(state);

		return { ...newState }; // güncel state bilgisi
	} else if (action.type === 'ITEM_REMOVE') {
		const couponExist = state.items.find(
			(x) => x.id === (action.payload as CouponItem).id
		);

		if (couponExist) {
			const data = action.payload as { id: number };
			const filteredCoupons = state.items.filter((x) => x.id !== data.id);
			state.items = [...filteredCoupons];

			const newState = calculateTotal(state);

			return { ...newState };
		}
	} else if (action.type === 'CHANGES_QUANTITY') {
	} else if (action.type === 'CHANGE_TIMES') {
	}

	return state;
}

export default CouponReducer;
