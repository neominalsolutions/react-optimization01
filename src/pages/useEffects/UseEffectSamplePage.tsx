import React, { useEffect, useState } from 'react';

function UseEffectSamplePage() {
	// Union Type
	const [counter, setCounter] = useState<number | undefined>(); // FC içerisinde birden fazla useState ve useEffect kullanabiliriz.
	useEffect(() => {
		// asenkron çalışır, bu sebeple api call gibi asenkron işlemlerde tercih edilir.
		// first state değişimi, ComponentDidMount
		console.log('doma ilk-giriş');
		return () => {
			// second clean up function => domdan çıkışta sıfırlama yapma işlemleri
			// ComponentWillUnMount
			console.log('domdan çıkış'); // websocket terminate, timing interval,timeOut clear, subscription işlemlerinde unsubscribe olma, network request abort etme gibi operasyonlarda clean up function kullanırız.
		};
	}, []); // [third] deps state takibi yapacağımız kısım // ComponentDidUpdate, [] varsa sadece doma girişte çalışır. sayfa açılışında apidan veri çekme durumları burada işlenir.

	useEffect(() => {
		if (counter !== undefined) {
			console.log('domda state güncellendiğinde');
		}
	}, [counter]); // sadece counter state güncellemesinde çalışır

	return (
		<div>
			Sayac: {counter}
			<button
				onClick={() => {
					if (counter !== undefined) 
                        setCounter(counter + 1);
					else 
                        setCounter(0);
				}}
			>
				(+)
			</button>
		</div>
	);
}

export default UseEffectSamplePage;
