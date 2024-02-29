import React, {
	ForwardedRef,
	forwardRef,
	useImperativeHandle,
	useRef,
	useState,
} from 'react';

export type CountDownHandle = {
	increase: () => void;
	decrease: () => void;
	setBgColor: () => void;
};

// intersect yöntemi, kalıtıma benzer bir yöntem.
export type AHandle = { a: () => void } & CountDownHandle;

export type CountDownProps = {
	onIncrease: () => void;
	text?: string;
};

// CountDown componentinin increase action dışıardan ref olarak çağırdığımızda component kendi state güncelleyecek.

function CountDown(
	props: CountDownProps,
	forwardedRef: ForwardedRef<CountDownHandle> // component için tanımlanan ref props değerine erişmemizi sağlayan referans değer.
) {
	// actionlar çalışıtırılınca component iç state de değişimler meydana gelir.
	const [counter, setCounter] = useState<number>(0);
	const divRef = useRef<HTMLDivElement>(null);

	useImperativeHandle(forwardedRef, () => ({
		// dışarı componetten burayı tetikleyeceğiz. eylemi yap
		increase() {
			setCounter(counter + 1);
			props.onIncrease(); // Artma oldu demek, dışardaki component listener olarak açtık. olay gerçekleşince.
		},
		decrease() {
			setCounter(counter - 1);
		},
		setBgColor() {
			if (divRef.current) {
				divRef.current.style.backgroundColor = 'red';
			}
		},
	}));

	return (
		<div ref={divRef}>
			Sayac: {counter} {props.text}
		</div>
	);
}

export default forwardRef(CountDown);
