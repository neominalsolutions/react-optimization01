import React, { useCallback, useState } from 'react';
import NameList from './NameList';

// Callback kullanıyorsak parent child component ilişkisi olması lazım.

function UseCallbackSampleDemo() {
	const [names, setNames] = useState<string[]>(['ali', 'ayşe', 'can', 'canan']);

	// child component ile ilişkisi olmayan bir state tanımı, bu child componentlerin renderını etkilememeli.
	const [number, setNumber] = useState<number>(0);

	// onItemDelete js Func bir referans type oludğunda her render da ayrı bir referans üretilir her bir ayrı referansda bu referansın bağlı olduğu componentler tekrar initialize edilmek zorunda kalır.
	// bunun önüne geçmek için useCallback Hook kullanırız.
	const onItemDelete = useCallback((index: number) => {
		console.log('silinecek-index', index);

		names.splice(index, 1);
		setNames([...names]);
	}, []);

	const onGenerateNumber = () => {
		setNumber(Math.random() * 100);
	};
	return (
		<div>
			<button onClick={onGenerateNumber}>Generate</button>
			<p>Number: {number}</p>
			<hr></hr>
			{/* kendi componentimize bir listener yazdık */}
			<NameList names={names} onDelete={onItemDelete} />
		</div>
	);
}

export default UseCallbackSampleDemo;
