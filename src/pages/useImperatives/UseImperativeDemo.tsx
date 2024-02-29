import React, { useRef } from 'react';
import CountDown, { CountDownHandle } from './CountDown';

function UseImperativeDemo() {
	// useImperativeHandle hook ile bir component api dışarı açtıysak bu component'in bu özelliğine useRef Hook ile erişiyoruz.
	const cRef = useRef<CountDownHandle>(null);

	const onIncrease = () => {
		console.log('artış oldu');
	};

	return (
		<div>
			<CountDown onIncrease={onIncrease} ref={cRef} />
			<button
				onClick={() => {
					cRef.current?.increase();
					// CountDown referansına ait ilgili methodu tetikliyoruz.
				}}
			>
				(+)
			</button>
			<button
				onClick={() => {
					cRef.current?.decrease();
				}}
			>
				(-)
			</button>
			<button
				onClick={() => {
					cRef.current?.setBgColor();
				}}
			>
				BG Color
			</button>
		</div>
	);
}

export default UseImperativeDemo;
