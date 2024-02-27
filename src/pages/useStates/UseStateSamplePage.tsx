import { Component, ReactNode, useState } from 'react';
import { Fragment } from 'react/jsx-runtime';

export function A() {}

export function UseStateSamplePage() {
	console.log('...rendering');
	// <></> fragmantation boş kapsayı wrapper
	// sayfada html çıktı oluşturmaz, sayfa düzenini bozmak
	// <Fragment></Fragment> kısa yazımı <></>

	// random getter
	// setRandom setter veriyi manupule ederiz.
	const [random, setRandom] = useState<number>(0); // initial, return ile render component ilk doma basılırken tetikler
	const [numbers, SetNumbers] = useState<number[]>([]); // referans type state

	const generateRandomNumber = () => {
		// FC'lerde en yaygın yazım şekli, arrow
		const _random = Math.floor(Math.random() * 100);
		setRandom(_random); // 0,100 arasında rastgele bir değer ürettik aşağı yuvarladık
		// virtual dom
		// set state, state dirty
		// virtaul dom propslardan etiklenmez, sadece state değişiminde virtaul tekrar devreye.
		// state değişikliği yeniden return ile render'ı tatikler.
		// value type değişkenlerde değer dom üzerinde güncellenene kadar gereksiz render almıyor.
		// numbers?.push(random);
		// virtaul doma ref type da referans değer güncellemesine bakar
		// SetNumbers(numbers);
		// spread operator'u ref type değişkenlerde state günceller.
		
		SetNumbers([...numbers, _random]);
	};

	return (
		<>
			Random Number: {random}
			<br></br>
			Numbers: {numbers.join(',')}
			<br></br>
			<button onClick={generateRandomNumber}>Generate Random Number</button>
		</>
	);
}

export default UseStateSamplePage;

// export const module = {
// 	useStateSample: UseStateSamplePage,
// };

// export default UseStateSamplePage;

// class UseStateSamplePageClass extends Component {
//     constructor(props:any) {
//         super(props);
//     }

//     render(): ReactNode {
//         return <></>
//     }

// }
