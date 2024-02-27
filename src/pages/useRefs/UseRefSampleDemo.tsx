import React, { useEffect, useRef, useState } from 'react';

function UseRefSampleDemo() {
	console.log('...render');

	const [inputValue, setInputValue] = useState<number>(1);
	// useRef ihtiyaç duyulan veriyi referans olarak state değişiminden etkilenmeyecek yada state değişiminde sıfırlanmayacak resetlenmedyecek şekilde tutmanızı sağlar. bunu memoisation kavramı ile yapar. buda performans olarak bu tarz değişkenlerin uygulamada kullanımına imkan sağlar.
	const oldValue = useRef<number>(1);
	const diff = useRef<number>(0);
	// let diff2 = 0;
	// console.log('...diff2', diff2);

	const onInputChange = (e: any) => {
		oldValue.current = inputValue;
		setInputValue(e.target.value); // state asnyc güncellenir

		// setState('2', ()=> {

		// })
	};

	// inputValue değişmez ise useRef değerlerini koru.
	useEffect(() => {
		diff.current = Math.abs(inputValue - oldValue.current) / inputValue;
		// diff2 = Math.abs(inputValue - oldValue.current) / inputValue;
	}, [inputValue]); //

	return (
		<div>
			<label>Güncel Fiyat:</label>
			<input type="number" defaultValue={inputValue} onBlur={onInputChange} />
			<p>Güncel Fiyat: {inputValue}</p>
			<p>Eski Fiyat: {oldValue.current}</p>
			<p>Değişim Oranı: {diff.current.toFixed(3)}</p>
			{/* <p>Değişim Oranı 2 : {diff2}</p> */}
			<button
				onClick={() => {
					setInputValue(1);
				}}
			>
				Reset
			</button>
		</div>
	);
}

export default UseRefSampleDemo;
