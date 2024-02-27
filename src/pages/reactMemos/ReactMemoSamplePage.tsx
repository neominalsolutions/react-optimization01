import React, { useState } from 'react';
import Header from './Header';

// Parent Child ilişkisi olan componentlerde parent componentte bir state değişimi olduğunda child component gereksiz yere render alır.
// bunun üstesinden gelmek için memoisation kavramını kullanıyoruz.

// parent child component ilişkisinde render sağlayan durum sadece parent component child componente ait bir props güncelliyorsa olmalıdır.

function ReactMemoSamplePage() {
	const [title, setTitle] = useState<string>('');

	const onSetTitle = () => {
		const _title = window.prompt('title değeri giriniz');
		setTitle(_title as string);
	};

	return (
		<div>
			<Header title={title} />
			{/* Child Component */}
			<br></br>
			<p>Title: {title}</p>
			<button onClick={onSetTitle}>Set Title</button>
		</div>
	);
}

export default ReactMemoSamplePage;
