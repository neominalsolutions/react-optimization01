import React, { useMemo, useState } from 'react';

function UseMemoSample() {
	console.log('...rendering');
	const [number, setNumber] = useState<number>(0);

	// return eden function ile çalışmalıyız.
	// deps değişiminde function tekrar tetiklenir, memoisation bozulur, tekrar değer memoize edilir.
	const calculation = () => {
		console.log('...calculation');
		return number;
	};

	// calculation 1 defaya mahsus yap, [] boş deps verdiğimiz için
	// herhangi bir state değişiminde tekrar caculation function çağırma value değerini tekrar gereksiz yere hesaplama.
	const value = useMemo(() => calculation(), []); // hesaplama sonucunda elde edilen değer tekrar tekrar hesaplanıp uzun bir hesaplama işlemi her render değişiminden etkileniyor.
	// value değerini memoisation yapıp değişimini kontrollü sağlamak.
	// useEffect ile aynı mantıkta çalışır [state] değerinin değişimine kadar güncel değeri korur, değeri memoize eder.

	console.log('value', value);

	return (
		<div>
			Number: {number}
			<button
				onClick={() => {
					setNumber(Math.round(Math.random() * 2));
				}}
			>
				Set Number
			</button>
			Sonuc: {value}
		</div>
	);
}

export default UseMemoSample;
