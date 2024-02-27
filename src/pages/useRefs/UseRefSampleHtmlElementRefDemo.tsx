import React, { useRef } from 'react';
import ChildSampleDemo from './ChildSampleDemo';

function UseRefSampleHtmlElementRefDemo() {
	console.log('...rendering');
	const inputRef = useRef<HTMLInputElement>(null);
	// document.getElementById() yöntemine benzer bir şekilde html elemente bir refans ataması yapılarak, referans değer üzerinden input değerine müdehale edebiliriz.

	return (
		<div>
			<input
				ref={inputRef}
				defaultValue={inputRef.current?.value}
				type="text"
			/>
			<button
				onClick={() => {
					if (inputRef.current) {
						inputRef.current.value = '';
					}
				}}
			>
				Clear Input
			</button>
			<button
				onClick={() => {
					if (inputRef.current) {
						inputRef.current.value = 'ALI';
					}
				}}
			>
				Set Input Value
			</button>
			<button
				onClick={() => {
					if (inputRef.current) {
						inputRef.current.focus();
					}
				}}
			>
				Focus
			</button>

			{/* <ChildSampleDemo parentRef={inputRef} /> */}
		</div>
	);
}

export default UseRefSampleHtmlElementRefDemo;
