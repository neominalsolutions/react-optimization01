import axios, {
	AxiosError,
	AxiosInstance,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from 'axios';

function OnRequest(config: InternalAxiosRequestConfig) {
	console.log('OnRequest', config);

	const token = localStorage.getItem('token');

	if (token) {
		config.headers['Authorization'] = `Bearer ${token}`
	}

	return config;
}

function OnRequestError(error: AxiosError) {
	console.log('OnRequestError', error);

   

	return Promise.reject(error);
}

function OnResponse(response: AxiosResponse) {
	console.log('onResponse', response);

	// ara işlemler yapabiliriz.
	if (response.status === 200 && response.config.url === 'login') {
		localStorage.setItem('token', response.data['token']);
		window.location.href = '/';
	}

	return response;
}

function OnResponseError(error: AxiosError) {
	console.log('onResponseError', error);
	return Promise.reject(error); // catch kodu
}

// merkezi olarak axios'a interceptor özelliği kazandırdık
export function SetupInterceptors(axiosInstance: AxiosInstance) {
	axiosInstance.interceptors.request.use(OnRequest, OnRequestError);
	axiosInstance.interceptors.response.use(OnResponse, OnResponseError);

	return axiosInstance;
}

export function ClearInterceptors(axiosInstance: AxiosInstance) {
	axiosInstance.interceptors.request.clear();
	axiosInstance.interceptors.response.clear();
	return axiosInstance;
}
