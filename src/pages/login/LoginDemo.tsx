import axios from 'axios';
import React from 'react';
import { SetupInterceptors } from '../../utils/axiosSetup';

function LoginDemo() {
	const client = SetupInterceptors(
		axios.create({ timeout: 5000, baseURL: 'https://reqres.in/api/' })
	);

	const login = async () => {
		const data = {
			email: 'eve.holt@reqres.in',
			password: 'cityslicka',
		};

		await client.post('login', data);
	};

	return (
		<div>
			<button onClick={login}>Oturum Aç</button>
		</div>
	);
}

export default LoginDemo;
