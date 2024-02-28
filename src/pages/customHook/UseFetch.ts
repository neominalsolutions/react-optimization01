import { useEffect, useState } from 'react';

function UseFetch(url: string) {
	const [response, setResponse] = useState<any[] | any>([]);
	const [err, setError] = useState<any>();
	const [isSuccess, setIsSuccess] = useState<boolean>(false);

	// asenkron kod yazıcak isem, useEffect hook dan yaralanıyorum
	// hook içerisinde memoisation yapabiliriz.
	useEffect(() => {
		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((data: any | any[]) => {
				setResponse(data);
				setIsSuccess(true);
			})
			.catch((err) => {
				setError(err);
				setIsSuccess(false);
			});
	}, []);

	return {
		// async olarak dışarı çıkarılan stateler.
		// kendi hook'umuzdaki veri takibi buradaki isimlerde meydana geliyor.
		data: response,
		error: err,
		isSucceeded: isSuccess,
	};
}

export default UseFetch;
