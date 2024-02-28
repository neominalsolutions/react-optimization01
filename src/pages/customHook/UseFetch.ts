import axios from 'axios';
import { useEffect, useState } from 'react';
import { SetupInterceptors } from '../../utils/axiosSetup';

function UseFetch(endPoint: string) {
	const [response, setResponse] = useState<any[] | any>([]);
	const [err, setError] = useState<any>();
	const [isSuccess, setIsSuccess] = useState<boolean>(false);

	const axiosInstance = SetupInterceptors(
		axios.create({
			baseURL: 'https://jsonplaceholder.typicode.com/',
			timeout: 3000,
			responseType: 'json',
		})
	);

	// axiosInstance içinde interceptorler aktif halde

    // async await ile try cacth kullanımı
	const loadData = async () => {
		try {
			const response = await axiosInstance.get(endPoint);
			setResponse(response.data);
			setIsSuccess(true);
		} catch (error) {
			setIsSuccess(false);
			setError(error);
		}
	};

	// asenkron kod yazıcak isem, useEffect hook dan yaralanıyorum
	// hook içerisinde memoisation yapabiliriz.
	useEffect(() => {
		// fetch(url)
		// 	.then((response) => {
		// 		return response.json();
		// 	})
		// 	.then((data: any | any[]) => {
		// 		setResponse(data);
		// 		setIsSuccess(true);
		// 	})
		// 	.catch((err) => {
		// 		setError(err);
		// 		setIsSuccess(false);
		// 	});
		loadData();
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
