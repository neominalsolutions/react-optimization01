import React, { useEffect, useState } from 'react';
import UseFetch from './UseFetch';

function UseFetchDemo() {
	// const [todos, setTodos] = useState<any[]>([]);

	// useEffect(() => {
	// 	fetch('https://jsonplaceholder.typicode.com/todos')
	// 		.then((response) => {
	// 			return response.json();
	// 		})
	// 		.then((data) => setTodos(data))
	// 		.catch((err) => {
	// 			alert('Hata');
	// 		});
	// }, []);

	const { isSucceeded, data, error } = UseFetch(
		'https://jsonplaceholder.typicode.com/todos'
	);

	if (error) return <>Veri çekilirken hata oluştu</>;

	if (isSucceeded) return <>Veri adeti : {data?.length}</>;

	return <>Loading...</>;
}

export default UseFetchDemo;
