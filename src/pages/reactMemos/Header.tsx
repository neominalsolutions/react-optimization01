import React, { memo, useEffect, useState } from 'react';

// Component özgü tipleri genelde type olarak tanımlarız. Component propsları type olarak tanımlanır.
type HeaderProps = {
	title?: string; // ? optional
};

function Header({ title }: HeaderProps) {
	console.log('child rendering...');

	const [renderCount, setRenderCount] = useState<number>(0);

	let localVariable = 0;

	useEffect(() => {
		console.log('child-effect');
		fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log('data', data);
			});
	}, []); // 1 kereye mahsus render oldu domda hala var domadan çıkana kadar tekrar çalışmaz.

	useEffect(() => {
		// title her değişiminde buraya gir
		console.log('title-değişti');
		setRenderCount(renderCount + 1);
		localVariable++;
		console.log('localVariable', localVariable);
	}, [title]); // title deps bağladık

	return (
		<div>
			Header {title}
			<p>RenderCount: {renderCount}</p>
		</div>
	);
}

// Header componente herhangi bir props değeri değişine kadar header component memoisation yapıldı.
// componente memoisation uyguladık.
// parent state değişiminde header component etkilenmeyecektir.
export default memo(Header);
